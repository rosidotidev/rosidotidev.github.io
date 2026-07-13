# Space Invaders — Contesto di Sessione

## File
- **`griffin_v1/game/index.html`** — tutto il gioco in un singolo file HTML, zero dipendenze, zero backend. Apribile direttamente nel browser.

---

## Cosa è stato costruito

Space Invaders classico fortemente personalizzato con:

- **5 nemici** (non griglia) che si muovono **come mosche** — ogni nemico è indipendente, ha velocità/direzione propria, cambia direzione ogni 150–550ms, a volte si lancia verso il giocatore (22% di probabilità), rimbalza sui bordi. Ogni nemico ruota visivamente nella direzione del moto.
- **Navicella protagonista moderna** disegnata via canvas 2D (fusoliera blu metallica, ali swept-back, cockpit con glow, 3 motori con fiamma animata, pod armi). Non pixel art.
- **Proiettile a sputo** — forma di blob giallastro organico irregolare con highlight bagnato e gocciolina trailing. Suono "pfft" in due fasi: pop labiale (oscillatore 200→55 Hz) + soffio nasale (rumore bianco highpass 3500 Hz).
- **UFO con muso di cane cartoon** — cupola di vetro con testa di cane (pelo ambrato, orecchie floppy, occhi grandi, naso nero, linguaccia rosa). Dimensioni 82×52px.
- **Sfondo bucolico** disegnato via canvas 2D: cielo con gradiente, sole con raggi, 4 nuvole, arcobaleno pastello, colline in due piani, campo verde con texture, sentiero di terra, alberi ai lati, ~35 fiori colorati.
- **Scudi rimossi**.
- **HUD** con barre semi-trasparenti nere sopra e sotto per leggibilità su qualsiasi sfondo.

---

## Sistema di customizzazione sprite

Pannello 🎨 CUSTOMIZE accessibile dal menu, pausa, o game over.

| Chiave localStorage | Sprite |
|---|---|
| `si3_bg` | Sfondo (immagine intera) |
| `si3_player` | Navicella giocatore |
| `si3_enemy1` | Nemico tipo A (30 pt) |
| `si3_enemy2` | Nemico tipo B (20 pt) |
| `si3_enemy3` | Nemico tipo C (10 pt) |
| `si3_ufo` | UFO bonus |
| `si3_hi` | Hi-score |

- Upload PNG/JPG → base64 → localStorage → persiste tra sessioni
- Reset ripristina il default disegnato via canvas
- Limite pratico: ~5 MB per immagine (limite localStorage browser)

**Priorità rendering sprite:**
1. Immagine custom (localStorage)
2. Canvas disegnato (player → `playerShipCanvas`, ufo → `dogUfoCanvas`, bg → `bgCanvas`)
3. Pixel art fallback (enemy1/2/3)

---

## Costanti principali

```javascript
var CW = 800, CH = 600;       // dimensioni canvas
var NUM_ENEMIES = 5;
var EW = 50, EH = 40;         // dimensioni nemico
var PW = 56, PH = 60;         // dimensioni player
var PY = CH - 55;             // posizione Y player
var MAX_PB = 2;               // max proiettili player contemporanei
```

---

## Struttura JS (sezioni in ordine nel file)

1. **Constants** — dimensioni, costanti gioco
2. **Pixel Art Sprites** (`PIX`, `PIX_COLOR`, `PIX_FRAME2`) — fallback pixel art 8×8
3. **Custom Sprite System** — `custImg{}`, load/save localStorage
4. **Customize UI** — `buildCustRows`, `refreshPrev`, `openCust/closeCust`
5. **Audio Engine** — Web Audio API: `sfxShoot` (spit), `sfxEShoot`, `sfxBoom`, `sfxDie`, `sfxLevelClear`
6. **Star Field** — `stars[]`, `drawStars()` (non più usato nel loop, rimasto come dead code)
7. **Game State** — variabili globali (`gameState`, `score`, `lives`, `level`, ecc.)
8. **Entity Factories** — `makePlayer()`, `makeEnemies()`, `makeShields()` (shields sempre `[]`)
9. **Game Init** — `initGame()`, `initLevel()`
10. **Input** — `keys{}`, keyboard listeners, `touchKey()`, `touchFireStart/Stop()`
11. **Collision** — `aabb()`, `shieldHit()`, `erodeShield()` (shields vuoti, mai chiamate)
12. **Particles** — `burst()`, `floatText()`
13. **Update** — `update(t, dt)` — logica principale gioco
14. **Draw** — `drawHUD()`, `drawScene()`, `drawSpit()`, `drawLevelUp()`
15. **Background** — `drawBackground()`, `createBucoliBg()`
16. **Dog UFO** — `createDogUfo()`
17. **Modern Ship** — `createModernShip()`, `drawEngineFlames()`
18. **Game Loop** — `loop(t)` via `requestAnimationFrame`
19. **Overlay UI** — `showOverlay()`, `hideOverlay()`, `doStart/Resume/Menu()`
20. **Bootstrap** — crea canvas, carica sprite, avvia loop

---

## Movimento nemici (fly behavior)

Ogni nemico ha:
```javascript
{ x, y, w, h, type, pts, alive, frame,
  vx, vy,          // velocità corrente
  speed,           // velocità base (2.4 + random*1.8 + level*0.5)
  changeTimer }    // ms al prossimo cambio direzione
```

Logica per frame:
- Rumore casuale `±0.4` su `vx/vy` ogni frame (il "buzz")
- Ogni `changeTimer` ms: 22% prob. scatto verso player, altrimenti direzione random
- Clamp velocità a `speed * 2.4`
- Rimbalzo ai bordi (margine 12px, bottom = `PY - 50`)
- Contatto con player → `hitPlayer()` (perde vita, non game over diretto)
- Disegnati con rotazione `Math.atan2(vx, -vy) * 0.32` (±37°)

---

## Stati di gioco

`MENU` → `PLAYING` → `PAUSED` / `LEVELUP` / `GAME_OVER`

- `LEVELUP`: timeout 2200ms poi `initLevel()` + back to `PLAYING`
- Ogni livello: nemici più veloci (`speed += level * 0.5`), sparo nemici più frequente

---

## Mobile

- Canvas: 800×600 interno, CSS `width: 100%` → scala automaticamente
- Bottoni touch visibili solo su `pointer: coarse` (touch device)
- Layout: `◀` | `▶` | `💦 SPUTA` (il tasto fuoco è `flex: 1.8`, più largo)
- Tieni premuto SPUTA → spara automatico ogni 220ms (`setInterval`)
- In portrait + touch: overlay "RUOTA IL TELEFONO" (`@media orientation: portrait`)
- Consigliato: landscape su mobile

---

## Possibili sviluppi futuri

- [ ] Effetto schermo CRT (scanlines overlay)
- [ ] Livelli con pattern di movimento diversi (non solo mosca)
- [ ] Power-up (multishot, scudo temporaneo)
- [ ] Boss finale
- [ ] Salvataggio punteggi multipli (top 5)
- [ ] Musica di sottofondo (Web Audio oscillatori)
- [ ] Animazione sfondo (nuvole che si muovono)
- [ ] Versione PWA (installabile su mobile)
