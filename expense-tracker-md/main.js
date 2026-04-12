import {
  DomRendererFactory2,
  FirebaseService,
  Router,
  RouterOutlet,
  bootstrapApplication,
  environment,
  provideRouter
} from "./chunk-YUZIZWBS.js";
import {
  ANIMATION_MODULE_TYPE,
  BehaviorSubject,
  ChangeDetectionScheduler,
  Component,
  DOCUMENT,
  Injectable,
  InjectionToken,
  Injector,
  NgZone,
  Observable,
  RendererFactory2,
  RuntimeError,
  filter,
  inject,
  makeEnvironmentProviders,
  map,
  performanceMarkFeature,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵinject,
  ɵɵinvalidFactory
} from "./chunk-FGBVFNZK.js";

// node_modules/@angular/platform-browser/fesm2022/animations-async.mjs
/**
 * @license Angular v21.2.8
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  ngOnDestroy() {
    this._engine?.flush();
  }
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-4P7CAW2L.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(10);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: () => {
      return new AsyncAnimationRendererFactory(inject(DOCUMENT), inject(DomRendererFactory2), inject(NgZone), type);
    }
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const fb = inject(FirebaseService);
  const router = inject(Router);
  return fb.authReady$.pipe(filter((ready) => ready), take(1), map(() => fb.currentUser ? true : router.createUrlTree(["/login"])));
};
var loginGuard = () => {
  const fb = inject(FirebaseService);
  const router = inject(Router);
  return fb.authReady$.pipe(filter((ready) => ready), take(1), map(() => fb.currentUser ? router.createUrlTree(["/"]) : true));
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    canActivate: [loginGuard],
    loadComponent: () => import("./chunk-QG5MCVRU.js").then((m) => m.LoginComponent)
  },
  {
    path: "",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-2AEIMWBV.js").then((m) => m.DashboardComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/app/services/mock-firebase.service.ts
var MockChildSnapshot = class {
  key;
  _value;
  constructor(key, _value) {
    this.key = key;
    this._value = _value;
  }
  val() {
    return this._value;
  }
};
var MockDataSnapshot = class {
  data;
  constructor(data) {
    this.data = data;
  }
  forEach(callback) {
    if (!this.data)
      return;
    for (const [key, val] of Object.entries(this.data)) {
      if (callback(new MockChildSnapshot(key, val)) === true)
        break;
    }
  }
  val() {
    return this.data;
  }
};
var MOCK_USER = {
  uid: "mock-user-001",
  email: "demo@example.com"
};
var MockFirebaseService = class _MockFirebaseService {
  ngZone;
  store = {};
  subjects = /* @__PURE__ */ new Map();
  idCounter = 0;
  userSubject = new BehaviorSubject(null);
  user$ = this.userSubject.asObservable();
  authReady = new BehaviorSubject(true);
  authReady$ = this.authReady.asObservable();
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.userSubject.next(MOCK_USER);
  }
  get currentUser() {
    return this.userSubject.value;
  }
  get uid() {
    return this.currentUser?.uid ?? null;
  }
  // ── Auth (no-ops) ─────────────────────────────────────
  login(_email, _password) {
    this.userSubject.next(MOCK_USER);
    return Promise.resolve();
  }
  signup(_email, _password) {
    this.userSubject.next(MOCK_USER);
    return Promise.resolve();
  }
  logout() {
    this.userSubject.next(null);
    return Promise.resolve();
  }
  // ── Database ──────────────────────────────────────────
  push(path, data) {
    const key = "mock-" + ++this.idCounter;
    this.setNestedValue(path + "/" + key, data);
    this.emitPath(path);
    return Promise.resolve(key);
  }
  set(path, data) {
    this.setNestedValue(path, data);
    const parent = path.substring(0, path.lastIndexOf("/"));
    if (parent)
      this.emitPath(parent);
    this.emitPath(path);
    return Promise.resolve();
  }
  remove(path) {
    this.deleteNestedValue(path);
    const parent = path.substring(0, path.lastIndexOf("/"));
    if (parent)
      this.emitPath(parent);
    return Promise.resolve();
  }
  listen(path) {
    return new Observable((subscriber) => {
      const subject = this.getOrCreateSubject(path);
      const sub = subject.subscribe((snapshot) => {
        this.ngZone.run(() => subscriber.next(snapshot));
      });
      return () => sub.unsubscribe();
    });
  }
  listenOrdered(path, _orderBy) {
    return this.listen(path);
  }
  listenRange(path, _orderBy, _start, _end) {
    return this.listen(path);
  }
  // ── Internals ─────────────────────────────────────────
  getOrCreateSubject(path) {
    if (!this.subjects.has(path)) {
      const data = this.getNestedValue(path);
      this.subjects.set(path, new BehaviorSubject(new MockDataSnapshot(data && typeof data === "object" ? data : null)));
    }
    return this.subjects.get(path);
  }
  emitPath(path) {
    if (this.subjects.has(path)) {
      const data = this.getNestedValue(path);
      this.subjects.get(path).next(new MockDataSnapshot(data && typeof data === "object" ? data : null));
    }
  }
  getNestedValue(path) {
    const parts = path.split("/").filter(Boolean);
    let current = this.store;
    for (const part of parts) {
      if (current == null || typeof current !== "object")
        return null;
      current = current[part];
    }
    return current ?? null;
  }
  setNestedValue(path, value) {
    const parts = path.split("/").filter(Boolean);
    let current = this.store;
    for (let i = 0; i < parts.length - 1; i++) {
      if (current[parts[i]] == null || typeof current[parts[i]] !== "object") {
        current[parts[i]] = {};
      }
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
  }
  deleteNestedValue(path) {
    const parts = path.split("/").filter(Boolean);
    let current = this.store;
    for (let i = 0; i < parts.length - 1; i++) {
      if (current[parts[i]] == null)
        return;
      current = current[parts[i]];
    }
    delete current[parts[parts.length - 1]];
  }
  static \u0275fac = function MockFirebaseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockFirebaseService)(\u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MockFirebaseService, factory: _MockFirebaseService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockFirebaseService, [{
    type: Injectable
  }], () => [{ type: NgZone }], null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: FirebaseService,
      useClass: environment.useMock ? MockFirebaseService : FirebaseService
    }
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: `<router-outlet />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
