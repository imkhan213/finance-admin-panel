import {
  TimesIcon
} from "./chunk-GA7KSHWI.js";
import {
  Ripple,
  RippleModule
} from "./chunk-7JW2LUDQ.js";
import "./chunk-EC7G6WTI.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-BUGEQH7Q.js";
import {
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  zindexutils
} from "./chunk-BU2VRPG6.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-H53FQIZ6.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-7EMRARE5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-EB3H2QMK.js";
import "./chunk-GM2YTKEO.js";
import "./chunk-H2SRQSE4.js";

// node_modules/primeng/fesm2022/primeng-overlaypanel.mjs
var _c0 = ["*"];
var _c1 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c2 = (a0, a1) => ({
  value: a0,
  params: a1
});
function OverlayPanel_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OverlayPanel_div_0_button_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 8);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-overlaypanel-close-icon");
  }
}
function OverlayPanel_div_0_button_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function OverlayPanel_div_0_button_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OverlayPanel_div_0_button_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OverlayPanel_div_0_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, OverlayPanel_div_0_button_4_span_2_1_Template, 1, 0, null, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate);
  }
}
function OverlayPanel_div_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function OverlayPanel_div_0_button_4_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onCloseClick($event));
    })("keydown.enter", function OverlayPanel_div_0_button_4_Template_button_keydown_enter_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.hide());
    });
    ɵɵtemplate(1, OverlayPanel_div_0_button_4_TimesIcon_1_Template, 1, 1, "TimesIcon", 6)(2, OverlayPanel_div_0_button_4_span_2_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r1.ariaCloseLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.closeIconTemplate);
  }
}
function OverlayPanel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function OverlayPanel_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    })("@animation.start", function OverlayPanel_div_0_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function OverlayPanel_div_0_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("click", function OverlayPanel_div_0_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onContentClick($event));
    })("mousedown", function OverlayPanel_div_0_Template_div_mousedown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onContentClick($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, OverlayPanel_div_0_ng_container_3_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵtemplate(4, OverlayPanel_div_0_button_4_Template, 3, 3, "button", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", "p-overlaypanel p-component")("ngStyle", ctx_r1.style)("@animation", ɵɵpureFunction2(13, _c2, ctx_r1.overlayVisible ? "open" : "close", ɵɵpureFunction2(10, _c1, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)));
    ɵɵattribute("aria-modal", ctx_r1.overlayVisible)("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showCloseIcon);
  }
}
var OverlayPanel = class _OverlayPanel {
  document;
  platformId;
  el;
  renderer;
  cd;
  zone;
  config;
  overlayService;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Enables to hide the overlay when outside is clicked.
   * @group Props
   */
  dismissable = true;
  /**
   * When enabled, displays a close icon at top right corner.
   * @group Props
   */
  showCloseIcon;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   *  Target element to attach the panel, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo = "body";
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Aria label of the close icon.
   * @group Props
   */
  ariaCloseLabel;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * When enabled, first button receives focus on show.
   * @group Props
   */
  focusOnShow = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Callback to invoke when an overlay becomes visible.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when an overlay gets hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  templates;
  container;
  overlayVisible = false;
  render = false;
  isOverlayAnimationInProgress = false;
  selfClick = false;
  documentClickListener;
  target;
  willHide;
  scrollHandler;
  documentResizeListener;
  contentTemplate;
  closeIconTemplate;
  destroyCallback;
  overlayEventListener;
  overlaySubscription;
  constructor(document, platformId, el, renderer, cd, zone, config, overlayService) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.config = config;
    this.overlayService = overlayService;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
      this.cd.markForCheck();
    });
  }
  bindDocumentClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener && this.dismissable) {
        let documentEvent = DomHandler.isIOS() ? "touchstart" : "click";
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, (event) => {
          if (!this.container?.contains(event.target) && this.target !== event.target && !this.target.contains(event.target) && !this.selfClick) {
            this.hide();
          }
          this.selfClick = false;
          this.cd.markForCheck();
        });
      }
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  /**
   * Toggles the visibility of the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  toggle(event, target) {
    if (this.isOverlayAnimationInProgress) {
      return;
    }
    if (this.overlayVisible) {
      if (this.hasTargetChanged(event, target)) {
        this.destroyCallback = () => {
          this.show(null, target || event.currentTarget || event.target);
        };
      }
      this.hide();
    } else {
      this.show(event, target);
    }
  }
  /**
   * Displays the panel.
   * @param {Event} event - Browser event
   * @param {Target} target - Target element.
   * @group Method
   */
  show(event, target) {
    target && event && event.stopPropagation();
    if (this.isOverlayAnimationInProgress) {
      return;
    }
    this.target = target || event.currentTarget || event.target;
    this.overlayVisible = true;
    this.render = true;
    this.cd.markForCheck();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
    this.selfClick = true;
  }
  onContentClick(event) {
    const targetElement = event.target;
    this.selfClick = event.offsetX < targetElement.clientWidth && event.offsetY < targetElement.clientHeight;
  }
  hasTargetChanged(event, target) {
    return this.target != null && this.target !== (target || event.currentTarget || event.target);
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body") this.renderer.appendChild(this.document.body, this.container);
      else DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  restoreAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  align() {
    if (this.autoZIndex) {
      zindexutils.set("overlay", this.container, this.baseZIndex + this.config.zIndex.overlay);
    }
    DomHandler.absolutePosition(this.container, this.target, false);
    const containerOffset = DomHandler.getOffset(this.container);
    const targetOffset = DomHandler.getOffset(this.target);
    const borderRadius = this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius");
    let arrowLeft = 0;
    if (containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left - parseFloat(borderRadius) * 2;
    }
    this.container?.style.setProperty("--overlayArrowLeft", `${arrowLeft}px`);
    if (containerOffset.top < targetOffset.top) {
      DomHandler.addClass(this.container, "p-overlaypanel-flipped");
      if (this.showCloseIcon) {
        this.renderer.setStyle(this.container, "margin-top", "-30px");
      }
    }
  }
  onAnimationStart(event) {
    if (event.toState === "open") {
      this.container = event.element;
      this.appendContainer();
      this.align();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
      if (this.focusOnShow) {
        this.focus();
      }
      this.overlayEventListener = (e) => {
        if (this.container && this.container.contains(e.target)) {
          this.selfClick = true;
        }
      };
      this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
      this.onShow.emit(null);
    }
    this.isOverlayAnimationInProgress = true;
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.destroyCallback) {
          this.destroyCallback();
          this.destroyCallback = null;
        }
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
      case "close":
        if (this.autoZIndex) {
          zindexutils.clear(this.container);
        }
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        this.onContainerDestroy();
        this.onHide.emit({});
        this.render = false;
        break;
    }
    this.isOverlayAnimationInProgress = false;
  }
  focus() {
    let focusable = DomHandler.findSingle(this.container, "[autofocus]");
    if (focusable) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => focusable.focus(), 5);
      });
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onCloseClick(event) {
    this.hide();
    event.preventDefault();
  }
  onEscapeKeydown(event) {
    this.hide();
  }
  onWindowResize() {
    if (this.overlayVisible && !DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
      }
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
          if (this.overlayVisible) {
            this.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    }
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onContainerDestroy() {
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  ngOnDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    if (!this.cd.destroyed) {
      this.target = null;
    }
    this.destroyCallback = null;
    if (this.container) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
  }
  static ɵfac = function OverlayPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayPanel)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OverlayPanel,
    selectors: [["p-overlayPanel"]],
    contentQueries: function OverlayPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    hostBindings: function OverlayPanel_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function OverlayPanel_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeydown($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      dismissable: [2, "dismissable", "dismissable", booleanAttribute],
      showCloseIcon: [2, "showCloseIcon", "showCloseIcon", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      ariaCloseLabel: "ariaCloseLabel",
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      focusOnShow: [2, "focusOnShow", "focusOnShow", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [ɵɵInputTransformsFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [["role", "dialog", 3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], ["role", "dialog", 3, "click", "ngClass", "ngStyle"], [1, "p-overlaypanel-content", 3, "click", "mousedown"], [4, "ngTemplateOutlet"], ["type", "button", "class", "p-overlaypanel-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-overlaypanel-close", "p-link", 3, "click", "keydown.enter"], [3, "styleClass", 4, "ngIf"], ["class", "p-overlaypanel-close-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-overlaypanel-close-icon"]],
    template: function OverlayPanel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, OverlayPanel_div_0_Template, 5, 16, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.render);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, TimesIcon],
    styles: ['@layer primeng{.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}}\n'],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("close", style({
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => close", animate("{{hideTransitionParams}}"))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayPanel, [{
    type: Component,
    args: [{
      selector: "p-overlayPanel",
      template: `
        <div
            *ngIf="render"
            [ngClass]="'p-overlaypanel p-component'"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="onOverlayClick($event)"
            [@animation]="{ value: overlayVisible ? 'open' : 'close', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
            role="dialog"
            [attr.aria-modal]="overlayVisible"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
        >
            <div class="p-overlaypanel-content" (click)="onContentClick($event)" (mousedown)="onContentClick($event)">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </div>
            <button *ngIf="showCloseIcon" type="button" class="p-overlaypanel-close p-link" (click)="onCloseClick($event)" (keydown.enter)="hide()" [attr.aria-label]="ariaCloseLabel" pRipple>
                <TimesIcon *ngIf="!closeIconTemplate" [styleClass]="'p-overlaypanel-close-icon'" />
                <span class="p-overlaypanel-close-icon" *ngIf="closeIconTemplate">
                    <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                </span>
            </button>
        </div>
    `,
      animations: [trigger("animation", [state("void", style({
        transform: "scaleY(0.8)",
        opacity: 0
      })), state("close", style({
        opacity: 0
      })), state("open", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => open", animate("{{showTransitionParams}}")), transition("open => close", animate("{{hideTransitionParams}}"))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-overlaypanel{position:absolute;margin-top:10px;top:0;left:0}.p-overlaypanel-flipped{margin-top:0;margin-bottom:10px}.p-overlaypanel-close{display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-overlaypanel:after,.p-overlaypanel:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:" ";height:0;width:0;position:absolute;pointer-events:none}.p-overlaypanel:after{border-width:8px;margin-left:-8px}.p-overlaypanel:before{border-width:10px;margin-left:-10px}.p-overlaypanel-shifted:after,.p-overlaypanel-shifted:before{left:auto;right:1.25em;margin-left:auto}.p-overlaypanel-flipped:after,.p-overlaypanel-flipped:before{bottom:auto;top:100%}.p-overlaypanel.p-overlaypanel-flipped:after{border-bottom-color:transparent}.p-overlaypanel.p-overlaypanel-flipped:before{border-bottom-color:transparent}}\n']
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }], {
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dismissable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCloseIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onEscapeKeydown: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var OverlayPanelModule = class _OverlayPanelModule {
  static ɵfac = function OverlayPanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayPanelModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OverlayPanelModule,
    declarations: [OverlayPanel],
    imports: [CommonModule, RippleModule, SharedModule, TimesIcon],
    exports: [OverlayPanel, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RippleModule, SharedModule, TimesIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayPanelModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, SharedModule, TimesIcon],
      exports: [OverlayPanel, SharedModule],
      declarations: [OverlayPanel]
    }]
  }], null, null);
})();
export {
  OverlayPanel,
  OverlayPanelModule
};
//# sourceMappingURL=primeng_overlaypanel.js.map
