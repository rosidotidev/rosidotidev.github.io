import{$n as re,$t as bu,A as Gs,An as ko,C as Fo,Cn as iI,Cr as yg,D as Gn,Dr as zt,En as jd,Fn as m,Ft as Ys,Gt as _t,It as Yw,Jn as pg,K as Jv,Kn as ov,Mt as XS,N as H,Nn as lg,On as kb,P as HI,Pn as lv,Qn as qs,Qt as bg,Rn as mt,Rt as Za,S as Fd,Sr as ye,T as Ge,Tt as Vr,U as JS,Un as np,Ut as _a,Vt as Zo,Wn as nt,Wt as _g,X as Kb,Xn as qg,Xt as b$,Yn as qI,Yt as b,Z as Kr,Zn as qr,_ as Dt$1,_n as he,_t as Se,b as Eg,bn as ht,bt as U,cn as et,d as Ca,dn as fg,er as rt,et as Lb,fr as v$,ft as Qr,gn as gp,gt as S,hn as gg,hr as wa,ht as R2,i as BI,ir as se,it as Mn,jt as X,k as Gr,lr as tp,mn as ge$1,mt as R,nn as ce,nt as M,on as ee,ot as No,p as Ct,pn as fu,qt as av,rn as cg,rt as Mg,s as Bd,st as OI,t as A,tn as cI,tt as Ls,un as fI,ur as tt,ut as Pe,v as EC,vn as hg,vr as wt,vt as St$1,w as Fr,wr as yv,wt as Vd,x as Et,xn as hu,xr as y$,yn as hp}from"./chunk-Bm0vVwaL.js";import{C as p,E as Nt,O as dr,a as Bf,k as le,t as O$1,w as a,y as $}from"./main-32AHN6CK.js";import{a as v,i as k}from"./chunk-DiuoXavX.js";import{t as c}from"./chunk-Bs0WYub4.js";import{t as z}from"./chunk-gkSGWsqO.js";var ge=new b(`MAT_MENU_PANEL`);var Y=(()=>{class i{_isAnchor;_elementRef=m(X);_document=m(M);_focusMonitor=m(fu);_parentMenu=m(ge,{optional:!0});_changeDetectorRef=m(qg);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new S;_focused=new S;_highlighted=!1;_triggersSubmenu=!1;constructor(){m(nt).load(lv),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function n(a,o){a&1&&(hp(),Ls(0,`svg`,2),pg(1,`polygon`,3),Fd())}return ye({type:i,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,l){o&1&&yg(`click`,function(v){return l._checkDisabled(v)})(`mouseenter`,function(){return l._handleMouseEnter()}),o&2&&(Fr(`role`,l.role)(`tabindex`,l._getTabIndex())(`aria-disabled`,l._getAriaDisabled())(`disabled`,l._getDisabled()),tt(`mat-mdc-menu-item-highlighted`,l._highlighted)(`mat-mdc-menu-item-submenu-trigger`,l._triggersSubmenu)(`mat-mdc-menu-item-disabled`,l.disabled)(`mat-mdc-menu-item-disabled-interactive`,l.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,Pe],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,Pe],disableRipple:[2,`disableRipple`,`disableRipple`,Pe]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,l){o&1&&(ko(e),St$1(0),Ls(1,`span`,0),St$1(2,1),Fd(),pg(3,`div`,1),Gs(4,n,2,0,`svg`,2)),o&2&&(No(3),fg(`matRippleDisabled`,l.disableRipple||l.disabled)(`matRippleTrigger`,l._getHostElement()),No(),qs(l._triggersSubmenu?4:-1))},dependencies:[R2],encapsulation:2})})()}return i})();var St=new b(`MatMenuContent`);var kt=(()=>{class i{_template=m(mt);_appRef=m(Ge);_injector=m(U);_viewContainerRef=m(_t);_document=m(M);_changeDetectorRef=m(qg);_portal;_outlet;_attached=new S;attach(e={}){this._portal||(this._portal=new _a(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new wa(this._document.createElement(`div`),this._appRef,this._injector));let t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}detach(){this._portal?.isAttached&&this._portal.detach()}ngOnDestroy(){this.detach(),this._outlet?.dispose()}static ɵfac=function(t){return new(t||i)};static ɵdir=ce({type:i,selectors:[[`ng-template`,`matMenuContent`,``]],features:[Vr([{provide:St,useExisting:i}])]})}return i})();var Vt=new b(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var _e=`_mat-menu-enter`;var q=`_mat-menu-exit`;var O=(()=>{class i{_elementRef=m(X);_changeDetectorRef=m(qg);_injector=m(U);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Fo();_allItems;_directDescendantItems=new Mn;_classList={};_panelAnimationState=`void`;_animationDone=new S;_isAnimating=ge$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,n=A({},this._classList);t&&t.length&&t.split(` `).forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new he;close=this.closed;panelId=m(Kr).getId(`mat-menu-panel-`);constructor(){let e=m(Vt);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new hu(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Gn(this._directDescendantItems),Za(e=>Jv(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Gn(this._directDescendantItems),Za(t=>Jv(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:kb(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=zt(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ee(A({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===q;(t||e===_e)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===_e||e===q)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(q),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?_e:q)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Gn(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||i)};static ɵcmp=(function(){let e=[`*`];function t(n,a){if(n&1){let o=iI();Et(0,`div`,0),_g(`click`,function(){tp(o);let p=cI();return np(p.closed.emit(`click`))})(`animationstart`,function(p){tp(o);let v=cI();return np(v._onAnimationStart(p.animationName))})(`animationend`,function(p){tp(o);let v=cI();return np(v._onAnimationDone(p.animationName))})(`animationcancel`,function(p){tp(o);let v=cI();return np(v._onAnimationDone(p.animationName))}),Et(1,`div`,1),St$1(2),wt()()}if(n&2){let o=cI();Bd(o._classList),tt(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),bg(`id`,o.panelId),Fr(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return ye({type:i,selectors:[[`mat-menu`]],contentQueries:function(a,o,l){if(a&1&&Eg(l,St,5)(l,Y,5)(l,Y,4),a&2){let p;jd(p=Vd())&&(o.lazyContent=p.first),jd(p=Vd())&&(o._allItems=p),jd(p=Vd())&&(o.items=p)}},viewQuery:function(a,o){if(a&1&&Ys(mt,5),a&2){let l;jd(l=Vd())&&(o.templateRef=l.first)}},hostVars:3,hostBindings:function(a,o){a&2&&Fr(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,Pe],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:Pe(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[Vr([{provide:ge,useExisting:i}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(a,o){a&1&&(ko(),lg(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return i})();var Lt=new b(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=m(U);return()=>Kb(i)}});var P=new WeakMap;var Bt=(()=>{class i{_canHaveBackdrop;_element=m(X);_viewContainerRef=m(_t);_menuItemInstance=m(Y,{optional:!0,self:!0});_dir=m(Qr,{optional:!0});_focusMonitor=m(fu);_ngZone=m(R);_injector=m(U);_scrollStrategy=m(Lt);_changeDetectorRef=m(qg);_animationsDisabled=Fo();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=H.EMPTY;_menuCloseSubscription=H.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=m(ge,{optional:!0});this._parentMaterialMenu=t instanceof O?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&P.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=P.get(t);P.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),o=a.getConfig(),l=o.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?o.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:o.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof O&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(rt(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof O&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(Zo(1)).subscribe(()=>{t.detach(),P.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&P.delete(n),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=av(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof O&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new Ca({positionStrategy:ov(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(a,o)})})}_setPosition(e,t){let[n,a]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,l]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[p,v]=[o,l],[J,ee]=[n,a],E=0;if(this._triggersSubmenu()){if(ee=n=e.xPosition===`before`?`start`:`end`,a=J=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let he=this._parentMaterialMenu.items.first;this._parentInnerPadding=he?he._getHostElement().offsetTop:0}E=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(p=o===`top`?`bottom`:`top`,v=l===`top`?`bottom`:`top`);t.withPositions([{originX:n,originY:p,overlayX:J,overlayY:o,offsetY:E},{originX:a,originY:p,overlayX:ee,overlayY:o,offsetY:E},{originX:n,originY:v,overlayX:J,overlayY:l,offsetY:-E},{originX:a,originY:v,overlayX:ee,overlayY:l,offsetY:-E}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ct(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Se(o=>this._menuOpen&&o!==this._menuItemInstance)):Ct();return Jv(e,n,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new _a(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return P.get(e)===this}_triggerIsAriaDisabled(){return Pe(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){Yw()};static ɵdir=ce({type:i})}return i})();var It=(()=>{class i extends Bt{_cleanupTouchstart;_hoverSubscription=H.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new he;onMenuOpen=this.menuOpened;menuClosed=new he;onMenuClose=this.menuClosed;constructor(){super(!0);let e=m(ht);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{qr(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){Gr(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||i)};static ɵdir=ce({type:i,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,n){t&1&&yg(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),t&2&&Fr(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[et]})}return i})();var Tt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=se({type:i});static ɵinj=re({imports:[yv,EC,Dt$1,Lb]})}return i})();var Ot=i=>[`/history`,i];var jt=(i,r)=>({date:i,value:r});var Yt=i=>({day:i});var Z=i=>({date:i});var Xt=(i,r)=>r.key;function $t(i,r){if(i&1){let e=iI();Ls(0,`div`,1)(1,`p`,7),OI(2),Fd(),Ls(3,`button`,8),yg(`click`,function(){tp(e);let n=cI();return np(n.store.retry())}),OI(4),Fd()()}if(i&2){let e=cI();No(2),Mg(e.t().historyLoadError),No(2),Mg(e.t().historyRetry)}}function Ut(i,r){if(i&1&&(Ls(0,`span`,20),pg(1,`w4a-mood-face`,23),OI(2),Fd()),i&2){let e=cI().$implicit;No(),fg(`level`,e.face),No(),Mg(e.text)}}function Wt(i,r){if(i&1&&(Ls(0,`span`,21),OI(1),Fd()),i&2){let e=cI().$implicit;No(),Mg(e.text)}}function Qt(i,r){if(i&1&&(Ls(0,`span`,22),OI(1),Fd()),i&2){let e=cI(5);No(),Mg(e.t().historyDash)}}function Gt(i,r){if(i&1&&Gs(0,Ut,3,2,`span`,20)(1,Wt,2,1,`span`,21)(2,Qt,2,1,`span`,22),i&2){let e=r.$implicit;qs(e.face!==null?0:e.text!==null?1:2)}}function Kt(i,r){if(i&1){let e=iI();Ls(0,`div`,12)(1,`div`,14),yg(`pointerdown`,function(n){tp(e);let a=cI().$implicit,o=cI(2);return np(o.swipeStart(n,a.day))})(`pointermove`,function(n){tp(e);let a=cI(3);return np(a.swipeMove(n))})(`pointerup`,function(){tp(e);let n=cI(3);return np(n.swipeEnd())})(`pointercancel`,function(){tp(e);let n=cI(3);return np(n.swipeEnd())}),Ls(2,`a`,15),yg(`click`,function(n){tp(e);let a=cI(3);return np(a.remember(n))}),Ls(3,`span`,16),OI(4),Fd(),XS(5,Gt,3,1,null,null,Xt),Fd(),Ls(7,`button`,17),yg(`click`,function(n){tp(e);let a=cI(3);return np(a.remember(n))}),hp(),Ls(8,`svg`,18),pg(9,`path`),Fd()()(),gp(),Ls(10,`button`,19),yg(`click`,function(n){tp(e);let a=cI().$implicit,o=cI(2);return np(o.open(a.day,n))}),hp(),Ls(11,`svg`,18),pg(12,`path`),Fd(),gp(),Ls(13,`span`),OI(14),Fd()()()}if(i&2){let e=cI().$implicit,t=cI(2),n=fI(5);No(),tt(`revealed`,t.revealed()===e.day),No(),fg(`routerLink`,BI(12,Ot,e.day)),Fr(`aria-label`,t.t().historyOpenEntry(HI(14,jt,t.dateOf(e),t.summary(e.entry)))),No(2),Mg(t.dateOf(e)),No(),JS(t.cells(e.entry)),No(2),fg(`matMenuTriggerFor`,n)(`matMenuTriggerData`,BI(17,Yt,e.day)),Fr(`aria-label`,t.t().historyRowMenu(BI(19,Z,t.dateOf(e)))),No(2),Fr(`d`,t.dots),No(),Fr(`aria-label`,t.t().historyEditFor(BI(21,Z,t.dateOf(e)))),No(2),Fr(`d`,t.pencil),No(2),Mg(t.t().historyEdit)}}function qt(i,r){if(i&1){let e=iI();Ls(0,`div`,13)(1,`span`),OI(2),Fd(),Ls(3,`a`,24),yg(`click`,function(n){tp(e);let a=cI(3);return np(a.remember(n))}),OI(4),Fd()()}if(i&2){let e=cI().$implicit,t=cI(2);No(2),Mg(t.t().historyMissing(BI(4,Z,t.dateOf(e)))),No(),fg(`routerLink`,BI(6,Ot,e.day)),Fr(`aria-label`,t.t().historyAddFor(BI(8,Z,t.dateOf(e)))),No(),Mg(t.t().historyAdd)}}function Zt(i,r){if(i&1&&(hg(0),Gs(1,Kt,15,23,`div`,12)(2,qt,5,10,`div`,13),gg()),i&2){let e=r.$implicit;No(),qs(e.kind===`entry`?1:2)}}function Jt(i,r){if(i&1&&(Ls(0,`h2`,9),OI(1),Fd(),Ls(2,`cdk-virtual-scroll-viewport`,10),cg(3,Zt,3,1,`ng-container`,11),Fd()),i&2){let e=cI();No(),Mg(e.t().historyHeading),No(),fg(`itemSize`,70),No(),fg(`cdkVirtualForOf`,e.rows())(`cdkVirtualForTrackBy`,e.trackRow)}}function en(i,r){if(i&1&&(Ls(0,`div`,2)(1,`div`,25),pg(2,`div`,26),Fd(),Ls(3,`div`,25),pg(4,`div`,26),Fd(),Ls(5,`div`,25),pg(6,`div`,26),Fd(),Ls(7,`p`,27),OI(8),Fd()()),i&2){let e=cI();No(8),Mg(e.t().historyLoading)}}function tn(i,r){if(i&1&&(Ls(0,`p`,3),OI(1),Fd()),i&2){let e=cI();No(),Mg(e.t().historyEmpty)}}function nn(i,r){if(i&1){let e=iI();Ls(0,`button`,28),yg(`click`,function(){let n=tp(e).day,a=cI();return np(a.open(n))}),OI(1),Fd(),Ls(2,`button`,29),yg(`click`,function(){let n=tp(e).day,a=cI();return np(a.askDelete(n))}),OI(3),Fd()}if(i&2){let e=cI();No(),Mg(e.t().historyEdit),No(2),Mg(e.t().historyDelete)}}function an(i,r){if(i&1){let e=iI();Ls(0,`w4a-delete-entry-dialog`,30),yg(`cancelled`,function(){tp(e);let n=cI();return np(n.closeDelete())})(`deleted`,function(){tp(e);let n=cI();return np(n.onDeleted())}),Fd()}i&2&&fg(`day`,r)}var on=`M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z`;var rn=`M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z`;var Dt=48;var Pt=class i{i18n=m(Bf);t=this.i18n.t;store=m(O$1);clock=m(p);router=m(le);document=m(M);injector=m(U);host=m(X);announcer=m(a);pencil=on;dots=rn;revealed=ge$1(null);deleting=ge$1(null);opener=null;swipe=null;rows=qI(()=>k(this.store.entries(),this.clock.today()));trackRow=(r,e)=>e.day;dateOf(r){return $(r.day,this.i18n.locale())}cells(r){return c(r,this.i18n.locale())}summary(r){return this.cells(r).map(e=>e.text??this.t().historyAbsentValue).join(`, `)}remember(r){let e=r.currentTarget;e instanceof HTMLElement&&(this.opener=e),this.revealed.set(null)}open(r,e){e&&this.remember(e),this.revealed.set(null),this.router.navigate([`/history`,r])}askDelete(r){this.revealed.set(null),this.deleting.set(r)}onDeleted(){this.announcer.say(this.t().announceDeleted),this.closeDelete()}closeDelete(){let r=this.deleting();this.deleting.set(null);let e=this.opener;this.opener=null,zt(()=>{e?.isConnected&&r&&this.store.entries()[r]?e.focus():this.host.nativeElement.focus()},{injector:this.injector})}restoreFocus(){let r=this.opener;this.opener=null;let e=this.document.activeElement;r?.isConnected&&(!e||e===this.document.body)&&r.focus()}swipeStart(r,e){r.pointerType===`touch`&&(this.revealed()!==null&&this.revealed()!==e&&this.revealed.set(null),this.swipe={x:r.clientX,y:r.clientY,day:e,done:!1})}swipeMove(r){let e=this.swipe;if(!e||e.done)return;let t=r.clientX-e.x;Math.abs(t)<=Math.abs(r.clientY-e.y)||(t<-Dt?(this.revealed.set(e.day),e.done=!0):t>Dt&&this.revealed()===e.day&&(this.revealed.set(null),e.done=!0))}swipeEnd(){this.swipe=null}static ɵfac=function(e){return new(e||i)};static ɵcmp=ye({type:i,selectors:[[`w4a-history`]],hostAttrs:[`tabindex`,`-1`],decls:9,vars:3,consts:[[`menu`,`matMenu`],[1,`message`,`load-error`],[1,`skeleton`],[1,`message`,`empty`],[`matMenuContent`,``],[3,`day`],[3,`deactivate`],[`role`,`alert`],[`type`,`button`,3,`click`],[1,`heading`],[1,`viewport`,3,`itemSize`],[4,`cdkVirtualFor`,`cdkVirtualForOf`,`cdkVirtualForTrackBy`],[1,`item`],[1,`row`,`missing`],[1,`slide`,3,`pointerdown`,`pointermove`,`pointerup`,`pointercancel`],[1,`row`,`entry`,3,`click`,`routerLink`],[1,`date`],[`type`,`button`,1,`more`,3,`click`,`matMenuTriggerFor`,`matMenuTriggerData`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,`focusable`,`false`],[`type`,`button`,1,`edit-action`,3,`click`],[1,`value`,`mood`],[1,`value`],[1,`value`,`absent`],[3,`level`],[1,`add`,3,`click`,`routerLink`],[`aria-hidden`,`true`,1,`row`],[1,`bar`],[`role`,`status`,`aria-live`,`polite`,1,`visually-hidden`],[`mat-menu-item`,``,`type`,`button`,3,`click`],[`mat-menu-item`,``,`type`,`button`,1,`delete-item`,2,`color`,`var(--mat-sys-error)`,3,`click`],[3,`cancelled`,`deleted`,`day`]],template:function(e,t){if(e&1&&(Gs(0,$t,5,2,`div`,1),Gs(1,Jt,4,4)(2,en,9,1,`div`,2)(3,tn,2,1,`p`,3),Ls(4,`mat-menu`,null,0),cg(6,nn,4,2,`ng-template`,4),Fd(),Gs(7,an,1,1,`w4a-delete-entry-dialog`,5),Ls(8,`router-outlet`,6),yg(`deactivate`,function(){return t.restoreFocus()}),Fd()),e&2){let n;qs(t.store.status()===`error`?0:-1),No(),qs(t.rows().length>0?1:t.store.status()===`loading`?2:t.store.status()===`ready`?3:-1),No(6),qs((n=t.deleting())?7:-1,n)}},dependencies:[bu,b$,y$,v$,Nt,dr,Tt,O,Y,kt,It,z,v],styles:[`[_nghost-%COMP%]{outline:none;display:flex;flex-direction:column;height:100%;box-sizing:border-box;padding:0 var(--%NS%w4a-margin-compact);font-family:var(--%NS%w4a-font-family);color:var(--%NS%w4a-on-surface)}.heading[_ngcontent-%COMP%]{flex:none;margin:var(--%NS%w4a-space-2) var(--%NS%w4a-space-2) var(--%NS%w4a-space-3);font-size:13px;font-weight:500;color:var(--%NS%w4a-on-surface-variant)}.viewport[_ngcontent-%COMP%]{flex:1 1 auto;min-height:0}.row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--%NS%w4a-space-4);box-sizing:border-box;height:62px;margin-bottom:8px;padding:0 var(--%NS%w4a-space-4);color:inherit;text-decoration:none;background:var(--%NS%w4a-surface-container);border-radius:var(--%NS%w4a-rounded-md)}.item[_ngcontent-%COMP%]{position:relative;height:62px;margin-bottom:8px;overflow:hidden;border-radius:var(--%NS%w4a-rounded-md)}.slide[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;height:62px;touch-action:pan-y;background:var(--%NS%w4a-surface-container);border-radius:var(--%NS%w4a-rounded-md);transition:transform .2s ease}.slide.revealed[_ngcontent-%COMP%]{transform:translate(-84px)}.slide[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{flex:1 1 auto;min-width:0;margin:0;background:transparent}.more[_ngcontent-%COMP%]{display:inline-flex;flex:none;align-items:center;justify-content:center;width:44px;height:44px;margin-inline-end:var(--%NS%w4a-space-1);padding:0;color:var(--%NS%w4a-on-surface-variant);background:transparent;border:0;border-radius:var(--%NS%w4a-rounded-full);cursor:pointer}.more[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .edit-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:24px;fill:currentColor}.edit-action[_ngcontent-%COMP%]{position:absolute;inset-block:0;inset-inline-end:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:84px;padding:0;font:inherit;font-size:13px;font-weight:500;color:var(--%NS%w4a-on-primary);cursor:pointer;visibility:hidden;background:var(--%NS%w4a-primary);border:0;border-radius:var(--%NS%w4a-rounded-md)}.slide.revealed[_ngcontent-%COMP%] + .edit-action[_ngcontent-%COMP%]{visibility:visible}.row[_ngcontent-%COMP%]:focus-visible, .add[_ngcontent-%COMP%]:focus-visible, .more[_ngcontent-%COMP%]:focus-visible, .edit-action[_ngcontent-%COMP%]:focus-visible, button[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%w4a-primary);outline-offset:2px}.date[_ngcontent-%COMP%]{flex:none;width:80px;font-size:14.5px;font-weight:500}.value[_ngcontent-%COMP%]{font-size:var(--%NS%w4a-type-row-value-size);font-weight:var(--%NS%w4a-type-row-value-weight)}.value.absent[_ngcontent-%COMP%]{font-weight:400;color:var(--%NS%w4a-outline)}.row.missing[_ngcontent-%COMP%]{justify-content:space-between;background:transparent;border:1.5px dashed var(--%NS%w4a-outline);color:var(--%NS%w4a-on-surface-variant);font-size:14px}.add[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;flex:none;min-height:44px;padding:0 var(--%NS%w4a-space-4);font-size:13px;font-weight:500;color:var(--%NS%w4a-on-primary-container);text-decoration:none;background:var(--%NS%w4a-primary-container);border-radius:var(--%NS%w4a-rounded-full)}.message[_ngcontent-%COMP%]{flex:none;margin:var(--%NS%w4a-space-4) var(--%NS%w4a-space-2)}.skeleton[_ngcontent-%COMP%]{display:grid;gap:8px}.skeleton[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0}.bar[_ngcontent-%COMP%]{height:16px;width:40%;background:var(--%NS%w4a-surface);border-radius:var(--%NS%w4a-rounded-full)}.visually-hidden[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}.load-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:44px;padding:0 24px;font:inherit;font-weight:500;color:var(--%NS%w4a-on-primary);background:var(--%NS%w4a-primary);border:0;border-radius:var(--%NS%w4a-rounded-full);cursor:pointer}.value.mood[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--%NS%w4a-space-2)}`]})};export{Pt as HistoryComponent};