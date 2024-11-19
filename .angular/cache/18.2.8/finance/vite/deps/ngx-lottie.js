import {
  NgClass,
  NgStyle,
  isPlatformBrowser
} from "./chunk-7EMRARE5.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  NgZone,
  Output,
  PLATFORM_ID,
  TransferState,
  ViewChild,
  assertInInjectionContext,
  inject,
  input,
  isPromise,
  makeStateKey,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-EB3H2QMK.js";
import {
  BehaviorSubject,
  Observable,
  Subject,
  defer,
  filter,
  from,
  map,
  mergeMap,
  of,
  shareReplay,
  switchMap,
  takeUntil,
  tap
} from "./chunk-GM2YTKEO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-H2SRQSE4.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/ngx-lottie/fesm2022/ngx-lottie.mjs
var _c0 = ["container"];
var LOTTIE_OPTIONS = new InjectionToken("LottieOptions");
function convertPlayerOrLoaderToObservable() {
  const ngZone = inject(NgZone);
  const {
    player,
    useWebWorker
  } = inject(LOTTIE_OPTIONS);
  const playerOrLoader = ngZone.runOutsideAngular(() => player());
  const player$ = isPromise(playerOrLoader) ? from(playerOrLoader).pipe(map((module) => module.default || module)) : of(playerOrLoader);
  return player$.pipe(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tap((player2) => player2.useWebWorker?.(useWebWorker)),
    shareReplay({
      bufferSize: 1,
      refCount: true
    })
  );
}
var _AnimationLoader = class _AnimationLoader {
  constructor() {
    this.player$ = convertPlayerOrLoaderToObservable().pipe(mergeMap((player) => raf$(this.ngZone).pipe(map(() => player))));
    this.ngZone = inject(NgZone);
  }
  loadAnimation(options) {
    return this.player$.pipe(map((player) => this.createAnimationItem(player, options)));
  }
  resolveOptions(options, container) {
    return Object.assign({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true
    }, options);
  }
  createAnimationItem(player, options) {
    return this.ngZone.runOutsideAngular(() => player.loadAnimation(options));
  }
};
_AnimationLoader.ɵfac = function AnimationLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimationLoader)();
};
_AnimationLoader.ɵprov = ɵɵdefineInjectable({
  token: _AnimationLoader,
  factory: _AnimationLoader.ɵfac,
  providedIn: "root"
});
var AnimationLoader = _AnimationLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function raf$(ngZone) {
  return new Observable((subscriber) => {
    const requestId = ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
      subscriber.next();
      subscriber.complete();
    }));
    return () => cancelAnimationFrame(requestId);
  });
}
var _CacheableAnimationLoader = class _CacheableAnimationLoader extends AnimationLoader {
  constructor() {
    super(...arguments);
    this.cache = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.cache.clear();
  }
  loadAnimation(options) {
    return this.player$.pipe(map((player) => {
      const animationItem = this.createAnimationItem(player, this.transformOptions(options));
      this.awaitConfigAndCache(options, animationItem);
      return animationItem;
    }));
  }
  awaitConfigAndCache(options, animationItem) {
    if (this.isAnimationConfigWithPath(options)) {
      if (this.cache.has(options.path)) {
        return;
      }
      animationItem.addEventListener("config_ready", () => {
        this.cache.set(options.path, JSON.stringify(animationItem["animationData"]));
      });
    }
  }
  transformOptions(options) {
    if (this.isAnimationConfigWithPath(options) && this.cache.has(options.path)) {
      return __spreadProps(__spreadValues({}, options), {
        path: void 0,
        // Caretaker note: `lottie-web` cannot re-use the `animationData` object between animations, and we
        // have to retrieve a new object each time an animation is created.
        // https://github.com/airbnb/lottie-web#html
        // See comments for the `animationData` property.
        animationData: JSON.parse(this.cache.get(options.path))
      });
    } else {
      return options;
    }
  }
  isAnimationConfigWithPath(options) {
    return typeof options.path === "string";
  }
};
_CacheableAnimationLoader.ɵfac = /* @__PURE__ */ (() => {
  let ɵCacheableAnimationLoader_BaseFactory;
  return function CacheableAnimationLoader_Factory(__ngFactoryType__) {
    return (ɵCacheableAnimationLoader_BaseFactory || (ɵCacheableAnimationLoader_BaseFactory = ɵɵgetInheritedFactory(_CacheableAnimationLoader)))(__ngFactoryType__ || _CacheableAnimationLoader);
  };
})();
_CacheableAnimationLoader.ɵprov = ɵɵdefineInjectable({
  token: _CacheableAnimationLoader,
  factory: _CacheableAnimationLoader.ɵfac,
  providedIn: "root"
});
var CacheableAnimationLoader = _CacheableAnimationLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CacheableAnimationLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function provideCacheableAnimationLoader() {
  return [{
    provide: AnimationLoader,
    useExisting: CacheableAnimationLoader
  }];
}
function provideLottieOptions(options) {
  return [{
    provide: LOTTIE_OPTIONS,
    useValue: options
  }];
}
var _BaseDirective = class _BaseDirective {
  constructor() {
    this.options = input(null);
    this.containerClass = input(null);
    this.styles = input(null);
    this.animationCreated = this.getAnimationItem();
    this.complete = this.awaitAnimationItemAndStartListening("complete");
    this.loopComplete = this.awaitAnimationItemAndStartListening("loopComplete");
    this.enterFrame = this.awaitAnimationItemAndStartListening("enterFrame");
    this.segmentStart = this.awaitAnimationItemAndStartListening("segmentStart");
    this.configReady = this.awaitAnimationItemAndStartListening("config_ready");
    this.dataReady = this.awaitAnimationItemAndStartListening("data_ready");
    this.domLoaded = this.awaitAnimationItemAndStartListening("DOMLoaded");
    this.destroy = this.awaitAnimationItemAndStartListening("destroy");
    this.error = this.awaitAnimationItemAndStartListening("error");
    this.ngZone = inject(NgZone);
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.animationLoader = inject(AnimationLoader);
    this.loadAnimation$ = new Subject();
    this.animationItem$ = new BehaviorSubject(null);
    this.setupLoadAnimationListener();
  }
  ngOnDestroy() {
    this.destroyAnimation();
  }
  loadAnimation(changes, container) {
    this.ngZone.runOutsideAngular(() => this.loadAnimation$.next([changes, container]));
  }
  getAnimationItem() {
    return defer(() => this.animationItem$).pipe(filter((animationItem) => animationItem !== null));
  }
  awaitAnimationItemAndStartListening(name) {
    return this.getAnimationItem().pipe(switchMap((animationItem) => (
      // `fromEvent` will try to call `removeEventListener` when `unsubscribe()` is invoked.
      // The problem is that `ngOnDestroy()` is called before Angular unsubscribes from
      // `@Output()` properties, thus `animationItem` will be `null` already, also `lottie-web`
      // removes event listeners when calling `destroy()`.
      new Observable((observer) => {
        this.ngZone.runOutsideAngular(() => {
          animationItem.addEventListener(name, (event) => {
            this.ngZone.runOutsideAngular(() => {
              observer.next(event);
            });
          });
        });
      })
    )));
  }
  setupLoadAnimationListener() {
    const loadAnimation$ = this.loadAnimation$.pipe(filter(([changes]) => this.isBrowser && changes.options !== void 0));
    loadAnimation$.pipe(switchMap(([changes, container]) => {
      this.destroyAnimation();
      return this.animationLoader.loadAnimation(this.animationLoader.resolveOptions(changes.options.currentValue, container));
    }), takeUntilDestroyed()).subscribe((animationItem) => {
      this.ngZone.run(() => this.animationItem$.next(animationItem));
    });
  }
  destroyAnimation() {
    const animationItem = this.animationItem$.getValue();
    if (animationItem === null) {
      return;
    }
    animationItem.destroy();
    this.animationItem$.next(null);
  }
};
_BaseDirective.ɵfac = function BaseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseDirective)();
};
_BaseDirective.ɵdir = ɵɵdefineDirective({
  type: _BaseDirective,
  selectors: [["", "lottie", ""]],
  inputs: {
    options: [1, "options"],
    containerClass: [1, "containerClass"],
    styles: [1, "styles"]
  },
  outputs: {
    animationCreated: "animationCreated",
    complete: "complete",
    loopComplete: "loopComplete",
    enterFrame: "enterFrame",
    segmentStart: "segmentStart",
    configReady: "configReady",
    dataReady: "dataReady",
    domLoaded: "domLoaded",
    destroy: "destroy",
    error: "error"
  }
});
var BaseDirective = _BaseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseDirective, [{
    type: Directive,
    args: [{
      selector: "[lottie]"
    }]
  }], () => [], {
    animationCreated: [{
      type: Output
    }],
    complete: [{
      type: Output
    }],
    loopComplete: [{
      type: Output
    }],
    enterFrame: [{
      type: Output
    }],
    segmentStart: [{
      type: Output
    }],
    configReady: [{
      type: Output
    }],
    dataReady: [{
      type: Output
    }],
    domLoaded: [{
      type: Output
    }],
    destroy: [{
      type: Output
    }],
    error: [{
      type: Output
    }]
  });
})();
var _LottieDirective = class _LottieDirective extends BaseDirective {
  constructor() {
    super(...arguments);
    this.host = inject(ElementRef);
  }
  ngOnChanges(changes) {
    super.loadAnimation(changes, this.host.nativeElement);
  }
};
_LottieDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵLottieDirective_BaseFactory;
  return function LottieDirective_Factory(__ngFactoryType__) {
    return (ɵLottieDirective_BaseFactory || (ɵLottieDirective_BaseFactory = ɵɵgetInheritedFactory(_LottieDirective)))(__ngFactoryType__ || _LottieDirective);
  };
})();
_LottieDirective.ɵdir = ɵɵdefineDirective({
  type: _LottieDirective,
  selectors: [["", "lottie", ""]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var LottieDirective = _LottieDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieDirective, [{
    type: Directive,
    args: [{
      selector: "[lottie]",
      standalone: true
    }]
  }], null, null);
})();
var _LottieComponent = class _LottieComponent extends BaseDirective {
  constructor() {
    super(...arguments);
    this.width = input(null);
    this.height = input(null);
    this.container = null;
  }
  ngOnChanges(changes) {
    super.loadAnimation(changes, this.container.nativeElement);
  }
};
_LottieComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵLottieComponent_BaseFactory;
  return function LottieComponent_Factory(__ngFactoryType__) {
    return (ɵLottieComponent_BaseFactory || (ɵLottieComponent_BaseFactory = ɵɵgetInheritedFactory(_LottieComponent)))(__ngFactoryType__ || _LottieComponent);
  };
})();
_LottieComponent.ɵcmp = ɵɵdefineComponent({
  type: _LottieComponent,
  selectors: [["ng-lottie"]],
  viewQuery: function LottieComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    width: [1, "width"],
    height: [1, "height"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["container", ""], [3, "ngStyle", "ngClass"]],
  template: function LottieComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 1, 0);
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width() || "100%")("height", ctx.height() || "100%");
      ɵɵproperty("ngStyle", ctx.styles())("ngClass", ctx.containerClass());
    }
  },
  dependencies: [NgStyle, NgClass],
  encapsulation: 2,
  changeDetection: 0
});
var LottieComponent = _LottieComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieComponent, [{
    type: Component,
    args: [{
      selector: "ng-lottie",
      template: `
    <div
      #container
      [style.width]="width() || '100%'"
      [style.height]="height() || '100%'"
      [ngStyle]="styles()"
      [ngClass]="containerClass()"
    ></div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgStyle, NgClass]
    }]
  }], null, {
    container: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }]
  });
})();
function transformAnimationFilenameToKey(animation) {
  const [animationName] = animation.split(".json");
  return `animation-${animationName}`;
}
var _LottieTransferState = class _LottieTransferState {
  constructor(transferState) {
    this.transferState = transferState;
  }
  get(animation) {
    const animationKey = transformAnimationFilenameToKey(animation);
    const stateKey = makeStateKey(animationKey);
    return this.transferState.get(stateKey, null);
  }
};
_LottieTransferState.ɵfac = function LottieTransferState_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LottieTransferState)(ɵɵinject(TransferState));
};
_LottieTransferState.ɵprov = ɵɵdefineInjectable({
  token: _LottieTransferState,
  factory: _LottieTransferState.ɵfac,
  providedIn: "root"
});
var LottieTransferState = _LottieTransferState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieTransferState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TransferState
  }], null);
})();
export {
  AnimationLoader,
  BaseDirective,
  LottieComponent,
  LottieDirective,
  LottieTransferState,
  provideCacheableAnimationLoader,
  provideLottieOptions,
  transformAnimationFilenameToKey,
  CacheableAnimationLoader as ɵCacheableAnimationLoader,
  LOTTIE_OPTIONS as ɵLOTTIE_OPTIONS
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.8
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=ngx-lottie.js.map
