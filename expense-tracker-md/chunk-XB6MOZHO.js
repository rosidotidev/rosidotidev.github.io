import{$ as de,A as ct,Aa as so,B as pn,Ba as lo,C as Qa,Ca as Ut,D as Ze,Da as co,E as un,Ea as Kt,F as Ga,Fa as mo,G as Ft,Ga as hi,H as Fi,Ha as Cn,I as Fe,Ia as ho,J as bt,Ja as Xt,K as Wt,Ka as po,L as qa,La as uo,M as _n,Ma as Zt,N as $a,Na as _o,O as Ua,Oa as Ni,P as Ka,Pa as fo,Q as Oi,Qa as go,R as fe,Ra as bo,S as Xa,Sa as zi,T as Pi,Ta as wn,U as Oe,Ua as xn,V as Za,Va as Jt,W as fn,Wa as pt,X as Li,Y as gn,Z as Ja,_ as eo,a as La,aa as dt,b as jt,ba as to,c as Va,ca as io,d as Xe,da as bn,e as mn,ea as Vi,f as Yt,fa as Ye,g as Ba,ga as We,h as Na,ha as no,i as hn,ia as Bi,j as Rt,ja as ao,k as Ai,ka as Qt,l as za,la as Gt,m as Ha,ma as vn,n as ja,na as di,o as ci,oa as oo,p as Ya,pa as Je,q as Ri,qa as Ot,r as Wa,ra as qt,s as ke,sa as Ne,t as q,ta as Pe,u as ot,ua as mt,v as rt,va as ht,w as st,wa as yn,xa as mi,ya as $t,z as lt,za as ro}from"./chunk-YSQRGPNE.js";import{d as Ht,h as Fa,i as Oa,k as Pa,n as gt}from"./chunk-EM76MI4T.js";import{$a as ye,$b as h,A as ya,Aa as Mi,Ab as l,B as Ca,Bb as c,C as ee,Cb as k,D as It,Db as ie,E as wa,Eb as ne,F as xa,Fb as Ei,Gb as it,H as ka,Hb as nt,I as Vt,Ib as Re,Jb as J,K as Da,Kb as Ue,Lb as _,Mb as Ti,Nb as u,O as Sa,Ob as $,Pb as O,Q as Ma,Qb as _e,R as Me,Ra as Nt,Rb as K,S as Et,Sa as d,Sb as g,T as N,Tb as b,V as ki,Xa as ve,Xb as at,Y as Di,Ya as Ae,Yb as Ke,Z as ue,Zb as I,_ as V,_a as $e,_b as ce,a as tt,aa as T,ab as Ia,ac as F,b as wi,ba as Be,bb as je,bc as U,ca as s,cc as dn,dc as Ce,e as re,ec as we,f as ae,fb as x,fc as xe,gb as B,gc as W,h as Lt,ha as P,hb as S,hc as Ta,ia as L,ic as Tt,j as E,ja as ge,jb as z,jc as At,k as Ee,ka as Bt,kb as te,l as xi,la as be,lb as cn,m as ua,ma as Te,mc as Aa,n as _a,nb as Ea,o as fa,pa as w,pc as ut,qa as He,qc as Ra,r as se,ra as Si,s as ga,sb as Ii,t as ba,ta as H,tb as M,ub as v,uc as j,v as Ve,vb as y,vc as zt,w as ft,wb as le,xa as oe,xb as Q,xc as C,ya as Z,yb as G,yc as Ie,z as va,za as R,zb as f}from"./chunk-5LMRNPPZ.js";var Yr=["*",[["mat-toolbar-row"]]],Wr=["*","mat-toolbar-row"],Qr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),vo=(()=>{class n{_elementRef=s(R);_platform=s(Ze);_document=s(Te);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-toolbar"]],contentQueries:function(t,i,a){if(t&1&&_e(a,Qr,5),t&2){let o;g(o=b())&&(i._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,i){t&2&&(ce(i.color?"mat-"+i.color:""),I("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Wr,decls:2,vars:0,template:function(t,i){t&1&&($(Yr),O(0),O(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var yo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[q]})}return n})();var In=["*"];function qr(n,r){n&1&&O(0)}var $r=["tabListContainer"],Ur=["tabList"],Kr=["tabListInner"],Xr=["nextPaginator"],Zr=["previousPaginator"],Jr=["content"];function es(n,r){}var ts=["tabBodyWrapper"],is=["tabHeader"];function ns(n,r){}function as(n,r){if(n&1&&te(0,ns,0,0,"ng-template",12),n&2){let e=u().$implicit;f("cdkPortalOutlet",e.templateLabel)}}function os(n,r){if(n&1&&h(0),n&2){let e=u().$implicit;F(e.textLabel)}}function rs(n,r){if(n&1){let e=J();l(0,"div",7,2),_("click",function(){let i=P(e),a=i.$implicit,o=i.$index,m=u(),p=at(1);return L(m._handleClick(a,p,o))})("cdkFocusChange",function(i){let a=P(e).$index,o=u();return L(o._tabFocusChanged(i,a))}),k(2,"span",8)(3,"div",9),l(4,"span",10)(5,"span",11),v(6,as,1,1,null,12)(7,os,1,1),c()()()}if(n&2){let e=r.$implicit,t=r.$index,i=at(1),a=u();ce(e.labelClass),I("mdc-tab--active",a.selectedIndex===t),f("id",a._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),M("tabIndex",a._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(t))("aria-selected",a.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),d(3),f("matRippleTrigger",i)("matRippleDisabled",e.disabled||a.disableRipple),d(3),y(e.templateLabel?6:7)}}function ss(n,r){n&1&&O(0)}function ls(n,r){if(n&1){let e=J();l(0,"mat-tab-body",13),_("_onCentered",function(){P(e);let i=u();return L(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){P(e);let a=u();return L(a._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){P(e);let a=u();return L(a._bodyCentered(i))}),c()}if(n&2){let e=r.$implicit,t=r.$index,i=u();ce(e.bodyClass),f("id",i._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),M("tabindex",i.contentTabIndex!=null&&i.selectedIndex===t?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(e,t))("aria-hidden",i.selectedIndex!==t)}}var cs=new T("MatTabContent"),ds=(()=>{class n{template=s(Ae);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","matTabContent",""]],features:[W([{provide:cs,useExisting:n}])]})}return n})(),ms=new T("MatTabLabel"),ko=new T("MAT_TAB"),hs=(()=>{class n extends ho{_closestTab=s(ko,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[W([{provide:ms,useExisting:n}]),z]})}return n})(),Do=new T("MAT_TAB_GROUP"),En=(()=>{class n{_viewContainerRef=s(je);_closestTabGroup=s(Do,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new E;position=null;origin=null;isActive=!1;constructor(){s(Fe).load(Je)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Cn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab"]],contentQueries:function(t,i,a){if(t&1&&_e(a,hs,5)(a,ds,7,Ae),t&2){let o;g(o=b())&&(i.templateLabel=o.first),g(o=b())&&(i._explicitContent=o.first)}},viewQuery:function(t,i){if(t&1&&K(Ae,7),t&2){let a;g(a=b())&&(i._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,i){t&2&&M("id",null)},inputs:{disabled:[2,"disabled","disabled",C],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[W([{provide:ko,useExisting:n}]),oe],ngContentSelectors:In,decls:1,vars:0,template:function(t,i){t&1&&($(),cn(0,qr,1,0,"ng-template"))},encapsulation:2})}return n})(),kn="mdc-tab-indicator--active",Co="mdc-tab-indicator--no-transition",Dn=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let e=this._items.find(i=>i.elementRef.nativeElement===r),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},ps=(()=>{class n{_elementRef=s(R);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(kn);return}let i=t.getBoundingClientRect(),a=e.width/i.width,o=e.left-i.left;t.classList.add(Co),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(Co),t.classList.add(kn),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(kn)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C]}})}return n})();var So=(()=>{class n extends ps{elementRef=s(R);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,i){t&2&&(M("aria-disabled",!!i.disabled),I("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",C]},features:[z]})}return n})(),wo={passive:!0},us=650,_s=100,fs=(()=>{class n{_elementRef=s(R);_changeDetectorRef=s(j);_viewportRuler=s(Ut);_dir=s(ke,{optional:!0});_ngZone=s(He);_platform=s(Ze);_sharedResizeObserver=s(eo);_injector=s(be);_renderer=s($e);_animationsDisabled=de();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new E;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new E;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new w;indexFocused=new w;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),wo),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),wo))}ngAfterContentInit(){let e=this._dir?this._dir.change:se("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ka(32),N(this._destroyed)),i=this._viewportRuler.change(150).pipe(N(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Pi(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ve(a,{injector:this._injector}),ee(e,i,t,this._items.changes,this._itemsResized()).pipe(N(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?fa:this._items.changes.pipe(Me(this._items),Et(e=>new Lt(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(a=>t.next(a));return e.forEach(a=>i.observe(a.elementRef.nativeElement)),()=>{i.disconnect()}}))),Ma(1),It(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!fe(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=t.elementRef.nativeElement,m,p;this._getLayoutDirection()=="ltr"?(m=a,p=m+o):(p=this._tabListInner.nativeElement.offsetWidth-a,m=p-o);let D=this.scrollDistance,A=this.scrollDistance+i;m<D?this.scrollDistance-=D-m:p>A&&(this.scrollDistance+=Math.min(p-A,m-D))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,i=e-t>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ca(us,_s).pipe(N(ee(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:a}=this._scrollHeader(e);(a===0||a>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,inputs:{disablePagination:[2,"disablePagination","disablePagination",C],selectedIndex:[2,"selectedIndex","selectedIndex",Ie]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return n})(),gs=(()=>{class n extends fs{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Dn(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-tab-header"]],contentQueries:function(t,i,a){if(t&1&&_e(a,So,4),t&2){let o;g(o=b())&&(i._items=o)}},viewQuery:function(t,i){if(t&1&&K($r,7)(Ur,7)(Kr,7)(Xr,5)(Zr,5),t&2){let a;g(a=b())&&(i._tabListContainer=a.first),g(a=b())&&(i._tabList=a.first),g(a=b())&&(i._tabListInner=a.first),g(a=b())&&(i._nextPaginator=a.first),g(a=b())&&(i._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,i){t&2&&I("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",C]},features:[z],ngContentSelectors:In,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,i){t&1&&($(),l(0,"div",5,0),_("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(o){return i._handlePaginatorPress("before",o)})("touchend",function(){return i._stopInterval()}),k(2,"div",6),c(),l(3,"div",7,1),_("keydown",function(o){return i._handleKeydown(o)}),l(5,"div",8,2),_("cdkObserveContent",function(){return i._onContentChanges()}),l(7,"div",9,3),O(9),c()()(),l(10,"div",10,4),_("mousedown",function(o){return i._handlePaginatorPress("after",o)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),k(12,"div",6),c()),t&2&&(I("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),f("matRippleDisabled",i._disableScrollBefore||i.disableRipple),d(3),I("_mat-animation-noopable",i._animationsDisabled),d(2),M("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),d(5),I("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),f("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[di,_n],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return n})(),bs=new T("MAT_TABS_CONFIG"),xo=(()=>{class n extends Xt{_host=s(Sn);_ngZone=s(He);_centeringSub=ae.EMPTY;_leavingSub=ae.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Me(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","matTabBodyHost",""]],features:[z]})}return n})(),Sn=(()=>{class n{_elementRef=s(R);_dir=s(ke,{optional:!0});_ngZone=s(He);_injector=s(be);_renderer=s($e);_diAnimationsDisabled=de();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ae.EMPTY;_position;_previousPosition;_onCentering=new w;_beforeCentering=new w;_afterLeavingCenter=new w;_onCentered=new w(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(j);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ve(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ve(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab-body"]],viewQuery:function(t,i){if(t&1&&K(xo,5)(Jr,5),t&2){let a;g(a=b())&&(i._portalHost=a.first),g(a=b())&&(i._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,i){t&2&&M("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,i){t&1&&(l(0,"div",1,0),te(2,es,0,0,"ng-template",2),c()),t&2&&I("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[xo,lo],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return n})(),Mo=(()=>{class n{_elementRef=s(R);_changeDetectorRef=s(j);_ngZone=s(He);_tabsSubscription=ae.EMPTY;_tabLabelSubscription=ae.EMPTY;_tabBodySubscription=ae.EMPTY;_diAnimationsDisabled=de();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Mi;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new w;focusChange=new w;animationDone=new w;selectedTabChange=new w(!0);_groupId;_isServer=!s(Ze).isBrowser;constructor(){let e=s(bs,{optional:!0});this._groupId=s(Oe).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,a)=>i.isActive=a===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,i)=>{t.position=i-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),i;for(let a=0;a<t.length;a++)if(t[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,i=t[a];break}!i&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Me(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Mn;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ee(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,i){t.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,i)=>t._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-tab-group"]],contentQueries:function(t,i,a){if(t&1&&_e(a,En,5),t&2){let o;g(o=b())&&(i._allTabs=o)}},viewQuery:function(t,i){if(t&1&&K(ts,5)(is,5)(Sn,5),t&2){let a;g(a=b())&&(i._tabBodyWrapper=a.first),g(a=b())&&(i._tabHeader=a.first),g(a=b())&&(i._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,i){t&2&&(M("mat-align-tabs",i.alignTabs),ce("mat-"+(i.color||"primary")),Ke("--mat-tab-animation-duration",i.animationDuration),I("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",C],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",C],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",C],selectedIndex:[2,"selectedIndex","selectedIndex",Ie],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ie],disablePagination:[2,"disablePagination","disablePagination",C],disableRipple:[2,"disableRipple","disableRipple",C],preserveContent:[2,"preserveContent","preserveContent",C],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[W([{provide:Do,useExisting:n}])],ngContentSelectors:In,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,i){t&1&&($(),l(0,"mat-tab-header",3,0),_("indexFocused",function(o){return i._focusChanged(o)})("selectFocusedIndex",function(o){return i.selectedIndex=o}),Q(2,rs,8,17,"div",4,le),c(),v(4,ss,1,0),l(5,"div",5,1),Q(7,ls,1,10,"mat-tab-body",6,le),c()),t&2&&(f("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),Ii("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),d(2),G(i._tabs),d(2),y(i._isServer?4:-1),d(),I("_mat-animation-noopable",i._animationsDisabled()),d(2),G(i._tabs))},dependencies:[gs,So,Fi,di,Xt,Sn],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return n})(),Mn=class{index;tab};var Io=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[q]})}return n})();var pi=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new E;constructor(r=!1,e,t=!0,i){this._multiple=r,this._emitChanges=t,this.compareWith=i,e&&e.length&&(r?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...r){this._verifyValueAssignment(r),r.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...r){this._verifyValueAssignment(r),r.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...r){this._verifyValueAssignment(r);let e=this.selected,t=new Set(r.map(a=>this._getConcreteValue(a)));r.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(r){return this.isSelected(r)?this.deselect(r):this.select(r)}clear(r=!0){this._unmarkAll();let e=this._hasQueuedChanges();return r&&this._emitChangeEvent(),e}isSelected(r){return this._selection.has(this._getConcreteValue(r))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(r){this._multiple&&this.selected&&this._selected.sort(r)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(r){r=this._getConcreteValue(r),this.isSelected(r)||(this._multiple||this._unmarkAll(),this.isSelected(r)||this._selection.add(r),this._emitChanges&&this._selectedToEmit.push(r))}_unmarkSelected(r){r=this._getConcreteValue(r),this.isSelected(r)&&(this._selection.delete(r),this._emitChanges&&this._deselectedToEmit.push(r))}_unmarkAll(){this.isEmpty()||this._selection.forEach(r=>this._unmarkSelected(r))}_verifyValueAssignment(r){r.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(r,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(r,t))return t;return r}else return r}};var Hi=class{applyChanges(r,e,t,i,a){r.forEachOperation((o,m,p)=>{let D,A;if(o.previousIndex==null){let X=t(o,m,p);D=e.createEmbeddedView(X.templateRef,X.context,X.index),A=$t.INSERTED}else p==null?(e.remove(m),A=$t.REMOVED):(D=e.get(m),e.move(D,p),A=$t.MOVED);a&&a({context:D?.context,operation:A,record:o})})}detach(){}};var Eo=(()=>{class n{_animationsDisabled=de();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&I("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var ys=["text"],Cs=[[["mat-icon"]],"*"],ws=["mat-icon","*"];function xs(n,r){if(n&1&&k(0,"mat-pseudo-checkbox",1),n&2){let e=u();f("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function ks(n,r){if(n&1&&k(0,"mat-pseudo-checkbox",3),n&2){let e=u();f("disabled",e.disabled)}}function Ds(n,r){if(n&1&&(l(0,"span",4),h(1),c()),n&2){let e=u();d(),U("(",e.group.label,")")}}var An=new T("MAT_OPTION_PARENT_COMPONENT"),Rn=new T("MatOptgroup");var Tn=class{source;isUserInput;constructor(r,e=!1){this.source=r,this.isUserInput=e}},Qe=(()=>{class n{_element=s(R);_changeDetectorRef=s(j);_parent=s(An,{optional:!0});group=s(Rn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(Oe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=H(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new w;_text;_stateChanges=new E;constructor(){let e=s(Fe);e.load(Je),e.load(bt),this._signalDisableRipple=!!this._parent&&Ea(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!fe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Tn(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&K(ys,7),t&2){let a;g(a=b())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&_("click",function(){return i._selectViaInteraction()})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(Ue("id",i.id),M("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),I("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",C]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:ws,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&($(Cs),v(0,xs,1,2,"mat-pseudo-checkbox",1),O(1),l(2,"span",2,0),O(4,1),c(),v(5,ks,1,1,"mat-pseudo-checkbox",3),v(6,Ds,2,1,"span",4),k(7,"div",5)),t&2&&(y(i.multiple?0:-1),d(5),y(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),d(),y(i.group&&i.group._inert?6:-1),d(),f("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Eo,di],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function To(n,r,e){if(e.length){let t=r.toArray(),i=e.toArray(),a=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===i[a]&&a++;return a}return 0}function Ao(n,r,e,t){return n<e?n:n+r>e+t?Math.max(0,n-t+r):e}var ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[q]})}return n})();var Fn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[qt,ji,Qe,q]})}return n})();var Ms=["trigger"],Is=["panel"],Es=[[["mat-select-trigger"]],"*"],Ts=["mat-select-trigger","*"];function As(n,r){if(n&1&&(l(0,"span",4),h(1),c()),n&2){let e=u();d(),F(e.placeholder)}}function Rs(n,r){n&1&&O(0)}function Fs(n,r){if(n&1&&(l(0,"span",11),h(1),c()),n&2){let e=u(2);d(),F(e.triggerValue)}}function Os(n,r){if(n&1&&(l(0,"span",5),v(1,Rs,1,0)(2,Fs,2,1,"span",11),c()),n&2){let e=u();d(),y(e.customTrigger?1:2)}}function Ps(n,r){if(n&1){let e=J();l(0,"div",12,1),_("keydown",function(i){P(e);let a=u();return L(a._handleKeydown(i))}),O(2,1),c()}if(n&2){let e=u();ce(e.panelClass),I("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),M("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ls=new T("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(be);return()=>Zt(n)}}),Vs=new T("MAT_SELECT_CONFIG"),Bs=new T("MatSelectTrigger"),On=class{source;value;constructor(r,e){this.source=r,this.value=e}},Ct=(()=>{class n{_viewportRuler=s(Ut);_changeDetectorRef=s(j);_elementRef=s(R);_dir=s(ke,{optional:!0});_idGenerator=s(Oe);_renderer=s($e);_parentFormField=s(Vi,{optional:!0});ngControl=s(mn,{self:!0,optional:!0});_liveAnnouncer=s(Ka);_defaultOptions=s(Vs,{optional:!0});_animationsDisabled=de();_popoverLocation;_initialized=new E;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=To(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Ao(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new On(this,e)}_scrollStrategyFactory=s(Ls);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new E;_errorStateTracker;stateChanges=new E;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=H(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Xe.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=va(()=>{let e=this.options;return e?e.changes.pipe(Me(e),Et(()=>ee(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Et(()=>this.optionSelectionChanges))});openedChange=new w;_openedStream=this.openedChange.pipe(It(e=>e),Ve(()=>{}));_closedStream=this.openedChange.pipe(It(e=>!e),Ve(()=>{}));selectionChange=new w;valueChange=new w;constructor(){let e=s(Bi),t=s(hn,{optional:!0}),i=s(ci,{optional:!0}),a=s(new ut("tabindex"),{optional:!0}),o=s(bo,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new ao(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new pi(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(N(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(N(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Me(null),N(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Vt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&fn(this._trackedModal,"aria-owns",t),Za(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;fn(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!fe(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;o.onKeydown(e);let p=this.selected;p&&m!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!fe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(m?p.select():p.deselect())})}else{let m=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==m&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!fe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(a){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof wn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Xa(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ee(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(N(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ee(...this.options.map(t=>t._stateChanges)).pipe(N(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Qa(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&_e(a,Bs,5)(a,Qe,5)(a,Rn,5),t&2){let o;g(o=b())&&(i.customTrigger=o.first),g(o=b())&&(i.options=o),g(o=b())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&K(Ms,5)(Is,5)(xn,5),t&2){let a;g(a=b())&&(i.trigger=a.first),g(a=b())&&(i.panel=a.first),g(a=b())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&_("keydown",function(o){return i._handleKeydown(o)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(M("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),I("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",C],disableRipple:[2,"disableRipple","disableRipple",C],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ie(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",C],placeholder:"placeholder",required:[2,"required","required",C],multiple:[2,"multiple","multiple",C],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",C],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ie],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",C]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[W([{provide:bn,useExisting:n},{provide:An,useExisting:n}]),oe],ngContentSelectors:Ts,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&($(Es),l(0,"div",2,0),_("click",function(){return i.open()}),l(3,"div",3),v(4,As,2,1,"span",4)(5,Os,3,1,"span",5),c(),l(6,"div",6)(7,"div",7),ge(),l(8,"svg",8),k(9,"path",9),c()()()(),te(10,Ps,3,16,"ng-template",10),_("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(o){return i._handleOverlayKeydown(o)})),t&2){let a=at(1);d(3),M("id",i._valueId),d(),y(i.empty?4:5),d(6),f("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[wn,xn],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var wt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[Jt,Fn,q,Kt,We,Fn]})}return n})();var Ln=new T("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(Aa)}),ni="Method not implemented",Se=class{locale;_localeChanges=new E;localeChanges=this._localeChanges;setTime(r,e,t,i){throw new Error(ni)}getHours(r){throw new Error(ni)}getMinutes(r){throw new Error(ni)}getSeconds(r){throw new Error(ni)}parseTime(r,e){throw new Error(ni)}addSeconds(r,e){throw new Error(ni)}getValidDateOrNull(r){return this.isDateInstance(r)&&this.isValid(r)?r:null}deserialize(r){return r==null||this.isDateInstance(r)&&this.isValid(r)?r:this.invalid()}setLocale(r){this.locale=r,this._localeChanges.next()}compareDate(r,e){return this.getYear(r)-this.getYear(e)||this.getMonth(r)-this.getMonth(e)||this.getDate(r)-this.getDate(e)}compareTime(r,e){return this.getHours(r)-this.getHours(e)||this.getMinutes(r)-this.getMinutes(e)||this.getSeconds(r)-this.getSeconds(e)}sameDate(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareDate(r,e):t==i}return r==e}sameTime(r,e){if(r&&e){let t=this.isValid(r),i=this.isValid(e);return t&&i?!this.compareTime(r,e):t==i}return r==e}clampDate(r,e,t){return e&&this.compareDate(r,e)<0?e:t&&this.compareDate(r,t)>0?t:r}},xt=new T("mat-date-formats");var Ns=["tooltip"],zs=20;var Hs=new T("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(be);return()=>Zt(n,{scrollThrottle:zs})}}),js=new T("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ro="tooltip-panel",Ys={passive:!0},Ws=8,Qs=8,Gs=24,qs=200,Yi=(()=>{class n{_elementRef=s(R);_ngZone=s(He);_platform=s(Ze);_ariaDescriber=s(Li);_focusMonitor=s(Ft);_dir=s(ke);_injector=s(be);_viewContainerRef=s(je);_mediaMatcher=s(qa);_document=s(Te);_renderer=s($e);_animationsDisabled=de();_defaultOptions=s(js,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=$s;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=gn(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=gn(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=un(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=un(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new E;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Ws}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(N(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new hi(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(N(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof R)return this._overlayRef;this._detach()}let t=this._injector.get(so).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Ro}`,a=Ni(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(N(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=zi(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Hs)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(N(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(N(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(N(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(N(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(tt(tt({},i.main),a.main)),this._addOffset(tt(tt({},i.fallback),a.fallback))])}_addOffset(e){let t=Qs,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ve(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=i==="end"?"left":"right":o=i==="start"?"left":"right":o=t==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let m=this._overlayRef;if(m){let p=`${this._cssClassPrefix}-${Ro}-`;m.removePanelClass(p+this._currentPosition),m.addPanelClass(p+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Ys))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||ve({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!fe(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&I("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),$s=(()=>{class n{_changeDetectorRef=s(j);_elementRef=s(R);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=de();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new E;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Gs&&e.width>=qs}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&K(Ns,7),t&2){let a;g(a=b())&&(i._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&_("mouseleave",function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(ie(0,"div",1,0),Ti("animationend",function(o){return i._handleAnimationEnd(o)}),ie(2,"div",2),h(3),ne()()),t&2&&(ce(i.tooltipClass),I("mdc-tooltip--multiline",i._isMultiline),d(3),F(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ks=["mat-calendar-body",""];function Xs(n,r){return this._trackRow(r)}var No=(n,r)=>r.id;function Zs(n,r){if(n&1&&(ie(0,"tr",0)(1,"td",3),h(2),ne()()),n&2){let e=u();d(),Ke("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),M("colspan",e.numCols),d(),U(" ",e.label," ")}}function Js(n,r){if(n&1&&(ie(0,"td",3),h(1),ne()),n&2){let e=u(2);Ke("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),M("colspan",e._firstRowOffset),d(),U(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function el(n,r){if(n&1){let e=J();ie(0,"td",6)(1,"button",7),Ti("click",function(i){let a=P(e).$implicit,o=u(2);return L(o._cellClicked(a,i))})("focus",function(i){let a=P(e).$implicit,o=u(2);return L(o._emitActiveDateChange(a,i))}),ie(2,"span",8),h(3),ne(),Ei(4,"span",9),ne()()}if(n&2){let e=r.$implicit,t=r.$index,i=u().$index,a=u();Ke("width",a._cellWidth)("padding-top",a._cellPadding)("padding-bottom",a._cellPadding),M("data-mat-row",i)("data-mat-col",t),d(),ce(e.cssClasses),I("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",a._isActiveCell(i,t))("mat-calendar-body-range-start",a._isRangeStart(e.compareValue))("mat-calendar-body-range-end",a._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",a._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",a._isComparisonBridgeStart(e.compareValue,i,t))("mat-calendar-body-comparison-bridge-end",a._isComparisonBridgeEnd(e.compareValue,i,t))("mat-calendar-body-comparison-start",a._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",a._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",a._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",a._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",a._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",a._isInPreview(e.compareValue)),Ue("tabIndex",a._isActiveCell(i,t)?0:-1),M("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",a._isSelected(e.compareValue))("aria-current",a.todayValue===e.compareValue?"date":null)("aria-describedby",a._getDescribedby(e.compareValue)),d(),I("mat-calendar-body-selected",a._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",a._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",a.todayValue===e.compareValue),d(),U(" ",e.displayValue," ")}}function tl(n,r){if(n&1&&(ie(0,"tr",1),v(1,Js,2,6,"td",4),Q(2,el,5,49,"td",5,No),ne()),n&2){let e=r.$implicit,t=r.$index,i=u();d(),y(t===0&&i._firstRowOffset?1:-1),d(),G(e)}}function il(n,r){if(n&1&&(l(0,"th",2)(1,"span",6),h(2),c(),l(3,"span",3),h(4),c()()),n&2){let e=r.$implicit;d(2),F(e.long),d(2),F(e.narrow)}}var nl=["*"];function al(n,r){}function ol(n,r){if(n&1){let e=J();l(0,"mat-month-view",4),xe("activeDateChange",function(i){P(e);let a=u();return we(a.activeDate,i)||(a.activeDate=i),L(i)}),_("_userSelection",function(i){P(e);let a=u();return L(a._dateSelected(i))})("dragStarted",function(i){P(e);let a=u();return L(a._dragStarted(i))})("dragEnded",function(i){P(e);let a=u();return L(a._dragEnded(i))}),c()}if(n&2){let e=u();Ce("activeDate",e.activeDate),f("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function rl(n,r){if(n&1){let e=J();l(0,"mat-year-view",5),xe("activeDateChange",function(i){P(e);let a=u();return we(a.activeDate,i)||(a.activeDate=i),L(i)}),_("monthSelected",function(i){P(e);let a=u();return L(a._monthSelectedInYearView(i))})("selectedChange",function(i){P(e);let a=u();return L(a._goToDateInView(i,"month"))}),c()}if(n&2){let e=u();Ce("activeDate",e.activeDate),f("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function sl(n,r){if(n&1){let e=J();l(0,"mat-multi-year-view",6),xe("activeDateChange",function(i){P(e);let a=u();return we(a.activeDate,i)||(a.activeDate=i),L(i)}),_("yearSelected",function(i){P(e);let a=u();return L(a._yearSelectedInMultiYearView(i))})("selectedChange",function(i){P(e);let a=u();return L(a._goToDateInView(i,"year"))}),c()}if(n&2){let e=u();Ce("activeDate",e.activeDate),f("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function ll(n,r){}var cl=["button"],dl=[[["","matDatepickerToggleIcon",""]]],ml=["[matDatepickerToggleIcon]"];function hl(n,r){n&1&&(ge(),l(0,"svg",2),k(1,"path",3),c())}var ri=(()=>{class n{changes=new E;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ue({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pl=0,_i=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=pl++;cssClasses;constructor(r,e,t,i,a,o=r,m){this.value=r,this.displayValue=e,this.ariaLabel=t,this.enabled=i,this.compareValue=o,this.rawValue=m,this.cssClasses=a instanceof Set?Array.from(a):a}},ul={passive:!1,capture:!0},Wi={passive:!0,capture:!0},Fo={passive:!0},oi=(()=>{class n{_elementRef=s(R);_ngZone=s(He);_platform=s(Ze);_intl=s(ri);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new w;previewChange=new w;activeDateChange=new w;dragStarted=new w;dragEnded=new w;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(be);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s($e),t=s(Oe);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(Fe).load(Je),this._ngZone.runOutsideAngular(()=>{let i=this._elementRef.nativeElement,a=[e.listen(i,"touchmove",this._touchmoveHandler,ul),e.listen(i,"mouseenter",this._enterHandler,Wi),e.listen(i,"focus",this._enterHandler,Wi),e.listen(i,"mouseleave",this._leaveHandler,Wi),e.listen(i,"blur",this._leaveHandler,Wi),e.listen(i,"mousedown",this._mousedownHandler,Fo),e.listen(i,"touchstart",this._mousedownHandler,Fo)];this._platform.isBrowser&&a.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=a})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:i,numCols:a}=this;(e.rows||t)&&(this._firstRowOffset=i&&i.length&&i[0].length?a-i[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/a}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/a}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let i=e*this.numCols+t;return e&&(i-=this._firstRowOffset),i==this.activeCell}_focusActiveCell(e=!0){ve(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Nn(e,this.startValue,this.endValue)}_isRangeEnd(e){return zn(e,this.startValue,this.endValue)}_isInRange(e){return Hn(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Nn(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,i){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let a=this.rows[t][i-1];if(!a){let o=this.rows[t-1];a=o&&o[o.length-1]}return a&&!this._isRangeEnd(a.compareValue)}_isComparisonBridgeEnd(e,t,i){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let a=this.rows[t][i+1];if(!a){let o=this.rows[t+1];a=o&&o[0]}return a&&!this._isRangeStart(a.compareValue)}_isComparisonEnd(e){return zn(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Hn(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Nn(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return zn(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Hn(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Oo(e),i=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Bn(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:i?.enabled?i:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Bn(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let i=this._getCellFromElement(t);this.dragEnded.emit({value:i?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Oo(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Bn(e);if(t){let i=t.getAttribute("data-mat-row"),a=t.getAttribute("data-mat-col");if(i&&a)return this.rows[parseInt(i)]?.[parseInt(a)]||null}return null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[oe],attrs:Ks,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,i){t&1&&(v(0,Zs,3,6,"tr",0),Q(1,tl,4,1,"tr",1,Xs,!0),ie(3,"span",2),h(4),ne(),ie(5,"span",2),h(6),ne(),ie(7,"span",2),h(8),ne(),ie(9,"span",2),h(10),ne()),t&2&&(y(i._firstRowOffset<i.labelMinRequiredCells?0:-1),d(),G(i.rows),d(2),Ue("id",i._startDateLabelId),d(),U(" ",i.startDateAccessibleName,`
`),d(),Ue("id",i._endDateLabelId),d(),U(" ",i.endDateAccessibleName,`
`),d(),Ue("id",i._comparisonStartDateLabelId),d(),dn(" ",i.comparisonDateAccessibleName," ",i.startDateAccessibleName,`
`),d(),Ue("id",i._comparisonEndDateLabelId),d(),dn(" ",i.comparisonDateAccessibleName," ",i.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function Vn(n){return n?.nodeName==="TD"}function Bn(n){let r;return Vn(n)?r=n:Vn(n.parentNode)?r=n.parentNode:Vn(n.parentNode?.parentNode)&&(r=n.parentNode.parentNode),r?.getAttribute("data-mat-row")!=null?r:null}function Nn(n,r,e){return e!==null&&r!==e&&n<e&&n===r}function zn(n,r,e){return r!==null&&r!==e&&n>=r&&n===e}function Hn(n,r,e,t){return t&&r!==null&&e!==null&&r!==e&&n>=r&&n<=e}function Oo(n){let r=n.changedTouches[0];return document.elementFromPoint(r.clientX,r.clientY)}var Ge=class{start;end;_disableStructuralEquivalency;constructor(r,e){this.start=r,this.end=e}},fi=(()=>{class n{selection;_adapter;_selectionChanged=new E;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let i=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:i})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){Ia()};static \u0275prov=ue({token:n,factory:n.\u0275fac})}return n})(),_l=(()=>{class n extends fi{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new n(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||n)(Be(Se))};static \u0275prov=ue({token:n,factory:n.\u0275fac})}return n})();var zo={provide:fi,useFactory:()=>s(fi,{optional:!0,skipSelf:!0})||new _l(s(Se))};var Ho=new T("MAT_DATE_RANGE_SELECTION_STRATEGY");var jn=7,fl=0,Po=(()=>{class n{_changeDetectorRef=s(j);_dateFormats=s(xt,{optional:!0});_dateAdapter=s(Se,{optional:!0});_dir=s(ke,{optional:!0});_rangeStrategy=s(Ho,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new w;_userSelection=new w;dragStarted=new w;dragEnded=new w;activeDateChange=new w;_matCalendarBody;_monthLabel=H("");_weeks=H([]);_firstWeekOffset=H(0);_rangeStart=H(null);_rangeEnd=H(null);_comparisonRangeStart=H(null);_comparisonRangeEnd=H(null);_previewStart=H(null);_previewEnd=H(null);_isRange=H(!1);_todayDate=H(null);_weekdays=H([]);constructor(){s(Fe).load(bt),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Me(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,i=this._getDateFromDayOfMonth(t),a,o;this._selected instanceof Ge?(a=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):a=o=this._getDateInCurrentMonth(this._selected),(a!==t||o!==t)&&this.selectedChange.emit(i),this._userSelection.emit({value:i,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!fe(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((jn+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%jn),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let i=t?t.rawValue:null,a=this._rangeStrategy.createPreview(i,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(a.start)),this._previewEnd.set(this._getCellCompareValue(a.end)),this.activeDrag&&i){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,i,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),a=this._dateAdapter.getDayOfWeekNames("long").map((o,m)=>({long:o,narrow:t[m],id:fl++}));this._weekdays.set(a.slice(e).concat(a.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),i=[[]];for(let a=0,o=this._firstWeekOffset();a<e;a++,o++){o==jn&&(i.push([]),o=0);let m=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),a+1),p=this._shouldEnableDate(m),D=this._dateAdapter.format(m,this._dateFormats.display.dateA11yLabel),A=this.dateClass?this.dateClass(m,"month"):void 0;i[i.length-1].push(new _i(a+1,t[a],D,p,A,this._getCellCompareValue(m),m))}this._weeks.set(i)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),i=this._dateAdapter.getMonth(e),a=this._dateAdapter.getDate(e);return new Date(t,i,a).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof Ge?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-month-view"]],viewQuery:function(t,i){if(t&1&&K(oi,5),t&2){let a;g(a=b())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[oe],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,i){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),Q(3,il,5,2,"th",2,No),c(),l(5,"tr",3),k(6,"th",4),c()(),l(7,"tbody",5),_("selectedValueChange",function(o){return i._dateSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("previewChange",function(o){return i._previewChanged(o)})("dragStarted",function(o){return i.dragStarted.emit(o)})("dragEnded",function(o){return i._dragEnded(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(d(3),G(i._weekdays()),d(4),f("label",i._monthLabel())("rows",i._weeks())("todayValue",i._todayDate())("startValue",i._rangeStart())("endValue",i._rangeEnd())("comparisonStart",i._comparisonRangeStart())("comparisonEnd",i._comparisonRangeEnd())("previewStart",i._previewStart())("previewEnd",i._previewEnd())("isRange",i._isRange())("labelMinRequiredCells",3)("activeCell",i._dateAdapter.getDate(i.activeDate)-1)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName))},dependencies:[oi],encapsulation:2,changeDetection:0})}return n})(),ze=24,Yn=4,Lo=(()=>{class n{_changeDetectorRef=s(j);_dateAdapter=s(Se,{optional:!0});_dir=s(ke,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),jo(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new w;yearSelected=new w;activeDateChange=new w;_matCalendarBody;_years=H([]);_todayYear=H(0);_selectedYear=H(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Me(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-ui(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),i=[];for(let a=0,o=[];a<ze;a++)o.push(t+a),o.length==Yn&&(i.push(o.map(m=>this._createCellForYear(m))),o=[]);this._years.set(i),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,i=this._dateAdapter.createDate(t,0,1),a=this._getDateFromYear(t);this.yearSelected.emit(i),this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-Yn);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Yn);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ui(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,ze-ui(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-ze*10:-ze);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?ze*10:ze);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return ui(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),i=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),i=this._dateAdapter.getYearName(t),a=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new _i(e,i,i,this._shouldEnableYear(e),a)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let i=t;this._dateAdapter.getYear(i)==e;i=this._dateAdapter.addCalendarDays(i,1))if(this.dateFilter(i))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof Ge){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-multi-year-view"]],viewQuery:function(t,i){if(t&1&&K(oi,5),t&2){let a;g(a=b())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),k(3,"th",2),c()(),l(4,"tbody",3),_("selectedValueChange",function(o){return i._yearSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(d(4),f("rows",i._years())("todayValue",i._todayYear())("startValue",i._selectedYear())("endValue",i._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",i._getActiveCell()))},dependencies:[oi],encapsulation:2,changeDetection:0})}return n})();function jo(n,r,e,t,i){let a=n.getYear(r),o=n.getYear(e),m=Yo(n,t,i);return Math.floor((a-m)/ze)===Math.floor((o-m)/ze)}function ui(n,r,e,t){let i=n.getYear(r);return gl(i-Yo(n,e,t),ze)}function Yo(n,r,e){let t=0;return e?t=n.getYear(e)-ze+1:r&&(t=n.getYear(r)),t}function gl(n,r){return(n%r+r)%r}var Vo=(()=>{class n{_changeDetectorRef=s(j);_dateFormats=s(xt,{optional:!0});_dateAdapter=s(Se,{optional:!0});_dir=s(ke,{optional:!0});_rerenderSubscription=ae.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,i=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(i,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new w;monthSelected=new w;activeDateChange=new w;_matCalendarBody;_months=H([]);_yearLabel=H("");_todayMonth=H(null);_selectedMonth=H(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Me(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(i);let a=this._getDateFromMonth(t);this.selectedChange.emit(a)}_updateActiveDate(e){let t=e.value,i=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(i,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,i=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,i?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(i=>this._createCellForMonth(i,e[i])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),i=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),i))}_createCellForMonth(e,t){let i=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),a=this._dateAdapter.format(i,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(i,"year"):void 0;return new _i(e,t.toLocaleUpperCase(),a,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let i=this._dateAdapter.createDate(t,e,1);for(let a=i;this._dateAdapter.getMonth(a)==e;a=this._dateAdapter.addCalendarDays(a,1))if(this.dateFilter(a))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let i=this._dateAdapter.getYear(this.maxDate),a=this._dateAdapter.getMonth(this.maxDate);return e>i||e===i&&t>a}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let i=this._dateAdapter.getYear(this.minDate),a=this._dateAdapter.getMonth(this.minDate);return e<i||e===i&&t<a}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof Ge?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-year-view"]],viewQuery:function(t,i){if(t&1&&K(oi,5),t&2){let a;g(a=b())&&(i._matCalendarBody=a.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,i){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),k(3,"th",2),c()(),l(4,"tbody",3),_("selectedValueChange",function(o){return i._monthSelected(o)})("activeDateChange",function(o){return i._updateActiveDate(o)})("keyup",function(o){return i._handleCalendarBodyKeyup(o)})("keydown",function(o){return i._handleCalendarBodyKeydown(o)}),c()()),t&2&&(d(4),f("label",i._yearLabel())("rows",i._months())("todayValue",i._todayMonth())("startValue",i._selectedMonth())("endValue",i._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",i._dateAdapter.getMonth(i.activeDate)))},dependencies:[oi],encapsulation:2,changeDetection:0})}return n})(),Wo=(()=>{class n{_intl=s(ri);calendar=s(Wn);_dateAdapter=s(Se,{optional:!0});_dateFormats=s(xt,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(Fe).load(bt);let e=s(j);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-ze))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:ze))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,i=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=i.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=i.getYearName(e.activeDate),this._periodButtonDescription=i.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):jo(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-ui(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),i=t+ze-1,a=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(i,0,1));return[a,o]}_periodButtonLabelId=s(Oe).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:nl,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,i){t&1&&($(),l(0,"div",0)(1,"div",1)(2,"span",2),h(3),c(),l(4,"button",3),_("click",function(){return i.currentPeriodClicked()}),l(5,"span",4),h(6),c(),ge(),l(7,"svg",5),k(8,"polygon",6),c()(),Bt(),k(9,"div",7),O(10),l(11,"button",8),_("click",function(){return i.previousClicked()}),ge(),l(12,"svg",9),k(13,"path",10),c()(),Bt(),l(14,"button",11),_("click",function(){return i.nextClicked()}),ge(),l(15,"svg",9),k(16,"path",12),c()()()()),t&2&&(d(2),f("id",i._periodButtonLabelId),d(),F(i.periodButtonDescription),d(),M("aria-label",i.periodButtonLabel)("aria-describedby",i._periodButtonLabelId),d(2),F(i.periodButtonText),d(),I("mat-calendar-invert",i.calendar.currentView!=="month"),d(4),f("disabled",!i.previousEnabled())("matTooltip",i.prevButtonLabel),M("aria-label",i.prevButtonLabel),d(3),f("disabled",!i.nextEnabled())("matTooltip",i.nextButtonLabel),M("aria-label",i.nextButtonLabel))},dependencies:[Ne,Ot,Yi],encapsulation:2,changeDetection:0})}return n})(),Wn=(()=>{class n{_dateAdapter=s(Se,{optional:!0});_dateFormats=s(xt,{optional:!0});_changeDetectorRef=s(j);_elementRef=s(R);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof Ge?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new w;yearSelected=new w;monthSelected=new w;viewChanged=new w(!0);_userSelection=new w;_userDragDrop=new w;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new E;constructor(){this._intlChanges=s(ri).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new hi(this.headerComponent||Wo),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,i=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,a=t||i||e.dateFilter;if(a&&!a.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(pn())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof Ge||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-calendar"]],viewQuery:function(t,i){if(t&1&&K(Po,5)(Vo,5)(Lo,5),t&2){let a;g(a=b())&&(i.monthView=a.first),g(a=b())&&(i.yearView=a.first),g(a=b())&&(i.multiYearView=a.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[W([zo]),oe],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,i){if(t&1&&(te(0,al,0,0,"ng-template",0),l(1,"div",1),v(2,ol,1,11,"mat-month-view",2)(3,rl,1,6,"mat-year-view",3)(4,sl,1,6,"mat-multi-year-view",3),c()),t&2){let a;f("cdkPortalOutlet",i._calendarHeaderPortal),d(2),y((a=i.currentView)==="month"?2:a==="year"?3:a==="multi-year"?4:-1)}},dependencies:[Xt,Fi,Po,Vo,Lo],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),bl=new T("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(be);return()=>Zt(n)}}),Qo=(()=>{class n{_elementRef=s(R);_animationsDisabled=de();_changeDetectorRef=s(j);_globalModel=s(fi);_dateAdapter=s(Se);_ngZone=s(He);_rangeSelectionStrategy=s(Ho,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new E;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(Fe).load(bt),this._closeButtonText=s(ri).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s($e);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,i=e.value,a=t instanceof Ge;if(a&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(i,t,e.event);this._model.updateSelection(o,this)}else i&&(a||!this._dateAdapter.sameDate(i,t))&&this._model.add(i);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-datepicker-content"]],viewQuery:function(t,i){if(t&1&&K(Wn,5),t&2){let a;g(a=b())&&(i._calendar=a.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,i){t&2&&(ce(i.color?"mat-"+i.color:""),I("mat-datepicker-content-touch",i.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!i._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-calendar",1),_("yearSelected",function(o){return i.datepicker._selectYear(o)})("monthSelected",function(o){return i.datepicker._selectMonth(o)})("viewChanged",function(o){return i.datepicker._viewChanged(o)})("_userSelection",function(o){return i._handleUserSelection(o)})("_userDragDrop",function(o){return i._handleUserDragDrop(o)}),c(),te(2,ll,0,0,"ng-template",2),l(3,"button",3),_("focus",function(){return i._closeButtonFocused=!0})("blur",function(){return i._closeButtonFocused=!1})("click",function(){return i.datepicker.close()}),h(4),c()()),t&2&&(I("mat-datepicker-content-container-with-custom-header",i.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",i._actionsPortal),M("aria-modal",!0)("aria-labelledby",i._dialogLabelId??void 0),d(),ce(i.datepicker.panelClass),f("id",i.datepicker.id)("startAt",i.datepicker.startAt)("startView",i.datepicker.startView)("minDate",i.datepicker._getMinDate())("maxDate",i.datepicker._getMaxDate())("dateFilter",i.datepicker._getDateFilter())("headerComponent",i.datepicker.calendarHeaderComponent)("selected",i._getSelected())("dateClass",i.datepicker.dateClass)("comparisonStart",i.comparisonStart)("comparisonEnd",i.comparisonEnd)("startDateAccessibleName",i.startDateAccessibleName)("endDateAccessibleName",i.endDateAccessibleName),d(),f("cdkPortalOutlet",i._actionsPortal),d(),I("cdk-visually-hidden",!i._closeButtonFocused),f("color",i.color||"primary"),d(),F(i._closeButtonText))},dependencies:[Ua,Wn,Xt,Ne],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),Bo=(()=>{class n{_injector=s(be);_viewContainerRef=s(je);_dateAdapter=s(Se,{optional:!0});_dir=s(ke,{optional:!0});_model=s(fi);_animationsDisabled=de();_scrollStrategy=s(bl);_inputStateChanges=ae.EMPTY;_document=s(Te);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new w;monthSelected=new w;viewChanged=new w(!0);dateClass;openedStream=new w;closedStream=new w;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Ja(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(Oe).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new E;_changeDetectorRef=s(j);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let i=this._overlayRef.getConfig().positionStrategy;i instanceof fo&&(this._setConnectedPositions(i),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=pn(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:i,location:a}=this._componentRef;i._animationDone.pipe(Vt(1)).subscribe(()=>{let o=this._document.activeElement;e&&(!o||o===this._document.activeElement||a.nativeElement.contains(o))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),i._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new hi(Qo,this._viewContainerRef),i=this._overlayRef=zi(this._injector,new _o({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?uo(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(i).subscribe(a=>{a&&a.preventDefault(),this.close()}),i.keydownEvents().subscribe(a=>{let o=a.keyCode;(o===38||o===40||o===37||o===39||o===33||o===34)&&a.preventDefault()}),this._componentRef=i.attach(t),this._forwardContentValues(this._componentRef.instance),e||ve(()=>{i.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return go(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=Ni(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",i=t==="start"?"end":"start",a=this.yPosition==="above"?"bottom":"top",o=a==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:o,overlayX:t,overlayY:a},{originX:t,originY:a,overlayX:t,overlayY:o},{originX:i,originY:o,overlayX:i,overlayY:a},{originX:i,originY:a,overlayX:i,overlayY:o}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return ee(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(It(i=>i.keyCode===27&&!fe(i)||this.datepickerInput&&fe(i,"altKey")&&i.keyCode===38&&t.every(a=>!fe(i,a)))))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",C],disabled:[2,"disabled","disabled",C],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",C],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",C]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[oe]})}return n})(),Go=(()=>{class n extends Bo{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[W([zo,{provide:Bo,useExisting:n}]),z],decls:0,vars:0,template:function(t,i){},encapsulation:2,changeDetection:0})}return n})(),ai=class{target;targetElement;value=null;constructor(r,e){this.target=r,this.targetElement=e,this.value=this.target.value}},vl=(()=>{class n{_elementRef=s(R);_dateAdapter=s(Se,{optional:!0});_dateFormats=s(xt,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,i=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&i.blur&&i.blur()}_disabled;dateChange=new w;dateInput=new w;stateChanges=new E;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=ae.EMPTY;_localeSubscription=ae.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMinDate();return!i||!t||this._dateAdapter.compareDate(i,t)<=0?null:{matDatepickerMin:{min:i,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),i=this._getMaxDate();return!i||!t||this._dateAdapter.compareDate(i,t)>=0?null:{matDatepickerMax:{max:i,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let i=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(i),this._cvaOnChange(i),this._onTouched(),this._formatValue(i),this.dateInput.emit(new ai(this,this._elementRef.nativeElement)),this.dateChange.emit(new ai(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){yl(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];fe(e,"altKey")&&e.keyCode===40&&t.every(a=>!fe(e,a))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,i=this._lastValueValid,a=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(a),a=this._dateAdapter.getValidDateOrNull(a);let o=!this._dateAdapter.sameDate(a,this.value);!a||o?this._cvaOnChange(a):(t&&!this.value&&this._cvaOnChange(a),i!==this._lastValueValid&&this._validatorOnChange()),o&&(this._assignValue(a),this.dateInput.emit(new ai(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new ai(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,inputs:{value:"value",disabled:[2,"disabled","disabled",C]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[oe]})}return n})();function yl(n,r){let e=Object.keys(n);for(let t of e){let{previousValue:i,currentValue:a}=n[t];if(r.isDateInstance(i)&&r.isDateInstance(a)){if(!r.sameDate(i,a))return!0}else return!0}return!1}var Cl={provide:La,useExisting:Di(()=>qi),multi:!0},wl={provide:Va,useExisting:Di(()=>qi),multi:!0},qi=(()=>{class n extends vl{_formField=s(Vi,{optional:!0});_closedSubscription=ae.EMPTY;_openedSubscription=ae.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=H(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=Xe.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,i){t&1&&_("input",function(o){return i._onInput(o)})("change",function(){return i._onChange()})("blur",function(){return i._onBlur()})("keydown",function(o){return i._onKeydown(o)}),t&2&&(Ue("disabled",i.disabled),M("aria-haspopup",i._datepicker?"dialog":null)("aria-owns",i._ariaOwns())("min",i.min?i._dateAdapter.toIso8601(i.min):null)("max",i.max?i._dateAdapter.toIso8601(i.max):null)("data-mat-calendar",i._datepicker?i._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[W([Cl,wl,{provide:no,useExisting:n}]),z]})}return n})(),xl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","matDatepickerToggleIcon",""]]})}return n})(),qn=(()=>{class n{_intl=s(ri);_changeDetectorRef=s(j);_stateChanges=ae.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new ut("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:se(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:se(),i=this.datepicker?ee(this.datepicker.openedStream,this.datepicker.closedStream):se();this._stateChanges.unsubscribe(),this._stateChanges=ee(this._intl.changes,e,t,i).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,i,a){if(t&1&&_e(a,xl,5),t&2){let o;g(o=b())&&(i._customIcon=o.first)}},viewQuery:function(t,i){if(t&1&&K(cl,5),t&2){let a;g(a=b())&&(i._button=a.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,i){t&1&&_("click",function(o){return i._open(o)}),t&2&&(M("tabindex",null)("data-mat-calendar",i.datepicker?i.datepicker.id:null),I("mat-datepicker-toggle-active",i.datepicker&&i.datepicker.opened)("mat-accent",i.datepicker&&i.datepicker.color==="accent")("mat-warn",i.datepicker&&i.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",C],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[oe],ngContentSelectors:ml,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,i){t&1&&($(dl),l(0,"button",1,0),v(2,hl,2,0,":svg:svg",2),O(3),c()),t&2&&(f("tabIndex",i.disabled?-1:i.tabIndex)("disabled",i.disabled)("disableRipple",i.disableRipple),M("aria-haspopup",i.datepicker?"dialog":null)("aria-label",i.ariaLabel||i._intl.openCalendarLabel)("aria-expanded",i.datepicker?i.datepicker.opened:null),d(2),y(i._customIcon?-1:2))},dependencies:[Ot],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var qo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({providers:[ri],imports:[Pe,Jt,Oi,po,Qo,qn,Wo,q,Kt]})}return n})();var Dl=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,Sl=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function $n(n,r){let e=Array(n);for(let t=0;t<n;t++)e[t]=r(t);return e}var Ml=(()=>{class n extends Se{_matDateLocale=s(Ln,{optional:!0});constructor(){super();let e=s(Ln,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return $n(12,i=>this._format(t,new Date(2017,i,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return $n(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return $n(7,i=>this._format(t,new Date(2017,0,i+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,i){let a=this._createDateWithOverflow(e,t,i);return a.getMonth()!=t,a}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let i=new Intl.DateTimeFormat(this.locale,wi(tt({},t),{timeZone:"utc"}));return this._format(i,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let i=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(i)!=((this.getMonth(e)+t)%12+12)%12&&(i=this._createDateWithOverflow(this.getYear(i),this.getMonth(i),0)),i}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(Dl.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,i,a){let o=this.clone(e);return o.setHours(t,i,a,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let i=e.trim();if(i.length===0)return null;let a=this._parseTimeString(i);if(a===null){let o=i.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(a=this._parseTimeString(o))}return a||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,i){let a=new Date;return a.setFullYear(e,t,i),a.setHours(0,0,0,0),a}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let i=new Date;return i.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),i.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(i)}_parseTimeString(e){let t=e.toUpperCase().match(Sl);if(t){let i=parseInt(t[1]),a=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),m=t[4];if(i===12?i=m==="AM"?0:i:m==="PM"&&(i+=12),Un(i,0,23)&&Un(a,0,59)&&(o==null||Un(o,0,59)))return this.setTime(this.today(),i,a,o||0)}return null}static \u0275fac=function(t){return new(t||n)};static \u0275prov=ue({token:n,factory:n.\u0275fac})}return n})();function Un(n,r,e){return!isNaN(n)&&n>=r&&n<=e}var Il={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var $o=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({providers:[El()]})}return n})();function El(n=Il){return[{provide:Se,useClass:Ml},{provide:xt,useValue:n}]}function Kn(n){let r=[];return n.forEach(e=>{r.push(tt({id:e.key},e.val()))}),r.sort((e,t)=>{let i=t.date.localeCompare(e.date);return i!==0?i:t.createdAt-e.createdAt}),r}var kt=(()=>{class n{fb;expensesSubject=new Ee([]);expenses$=this.expensesSubject.asObservable();loadingSubject=new Ee(!1);loading$=this.loadingSubject.asObservable();subscription=null;constructor(e){this.fb=e}listenExpenses(){let e=this.fb.uid;e&&(this.loadingSubject.next(!0),this.subscription?.unsubscribe(),this.subscription=this.fb.listenOrdered(`users/${e}/expenses`,"date").subscribe(t=>{this.expensesSubject.next(Kn(t)),this.loadingSubject.next(!1)}))}queryExpenses(e,t){let i=this.fb.uid;if(!i)return new Lt(m=>{m.next([]),m.complete()});if(e===-1)return new Lt(m=>{let p=this.fb.listen(`users/${i}/expenses`).subscribe(D=>{m.next(Kn(D))});return()=>p.unsubscribe()});let a,o;if(t===-1)a=`${e}-01-01`,o=`${e}-12-31`;else{let m=(t+1).toString().padStart(2,"0"),p=new Date(e,t+1,0).getDate();a=`${e}-${m}-01`,o=`${e}-${m}-${p.toString().padStart(2,"0")}`}return new Lt(m=>{let p=this.fb.listenRange(`users/${i}/expenses`,"date",a,o).subscribe(D=>{m.next(Kn(D))});return()=>p.unsubscribe()})}addExpense(e){let t=this.fb.uid;return t?this.fb.push(`users/${t}/expenses`,wi(tt({},e),{uid:t,createdAt:Date.now()})):Promise.reject("Not authenticated")}deleteExpense(e){let t=this.fb.uid;return t?this.fb.remove(`users/${t}/expenses/${e}`):Promise.reject("Not authenticated")}static \u0275fac=function(t){return new(t||n)(Be(gt))};static \u0275prov=ue({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Tl=["Roberto","Alessandra","Marta","Alice"],Dt=(()=>{class n{fb;peopleSubject=new Ee([]);people$=this.peopleSubject.asObservable();keyMap=new Map;seeded=!1;constructor(e){this.fb=e}listenPeople(){let e=this.fb.uid;e&&this.fb.listen(`users/${e}/people`).subscribe(t=>{let i=[];this.keyMap.clear(),t.forEach(a=>{let o=a.val();i.push(o),this.keyMap.set(o,a.key)}),i.sort((a,o)=>a.localeCompare(o)),this.peopleSubject.next(i),i.length===0&&!this.seeded&&(this.seeded=!0,Tl.forEach(a=>this.fb.push(`users/${e}/people`,a)))})}addPerson(e){return re(this,null,function*(){let t=e.trim();if(!t)throw new Error("empty");if(this.peopleSubject.value.some(o=>o.toLowerCase()===t.toLowerCase()))throw new Error("duplicate");let a=this.fb.uid;if(!a)throw new Error("Not authenticated");yield this.fb.push(`users/${a}/people`,t)})}removePerson(e){return re(this,null,function*(){let t=this.fb.uid;if(!t)throw new Error("Not authenticated");let i=this.keyMap.get(e);i&&(yield this.fb.remove(`users/${t}/people/${i}`))})}static \u0275fac=function(t){return new(t||n)(Be(gt))};static \u0275prov=ue({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Al=["Cibo","Trasporti","Intrattenimento","Alloggio","Shopping","Altro"],St=(()=>{class n{fb;categoriesSubject=new Ee([]);categories$=this.categoriesSubject.asObservable();keyMap=new Map;seeded=!1;constructor(e){this.fb=e}listenCategories(){let e=this.fb.uid;e&&this.fb.listen(`users/${e}/categories`).subscribe(t=>{let i=[];this.keyMap.clear(),t.forEach(a=>{let o=a.val();i.push(o),this.keyMap.set(o,a.key)}),i.sort((a,o)=>a.localeCompare(o)),this.categoriesSubject.next(i),i.length===0&&!this.seeded&&(this.seeded=!0,Al.forEach(a=>{this.fb.push(`users/${e}/categories`,a)}))})}addCategory(e){return re(this,null,function*(){let t=e.trim();if(!t)throw new Error("empty");if(this.categoriesSubject.value.some(o=>o.toLowerCase()===t.toLowerCase()))throw new Error("duplicate");let a=this.fb.uid;if(!a)throw new Error("Not authenticated");yield this.fb.push(`users/${a}/categories`,t)})}removeCategory(e){return re(this,null,function*(){let t=this.fb.uid;if(!t)throw new Error("Not authenticated");let i=this.keyMap.get(e);i&&(yield this.fb.remove(`users/${t}/categories/${i}`))})}static \u0275fac=function(t){return new(t||n)(Be(gt))};static \u0275prov=ue({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Rl(n,r){n&1&&k(0,"mat-progress-bar",1)}function Fl(n,r){if(n&1&&(l(0,"mat-option",5),h(1),c()),n&2){let e=r.$implicit;f("value",e),d(),F(e)}}function Ol(n,r){n&1&&(l(0,"mat-error"),h(1,"Campo obbligatorio"),c())}function Pl(n,r){n&1&&(l(0,"mat-error"),h(1,"Campo obbligatorio"),c())}function Ll(n,r){n&1&&(l(0,"mat-error"),h(1,"Importo minimo \u20AC0.01"),c())}function Vl(n,r){if(n&1&&v(0,Pl,2,0,"mat-error")(1,Ll,2,0,"mat-error"),n&2){let e=u();y(e.form.controls.amount.hasError("required")?0:e.form.controls.amount.hasError("min")?1:-1)}}function Bl(n,r){n&1&&(l(0,"mat-error"),h(1,"Campo obbligatorio"),c())}function Nl(n,r){n&1&&(l(0,"mat-error"),h(1,"Campo obbligatorio"),c())}function zl(n,r){if(n&1&&(l(0,"mat-option",5),h(1),c()),n&2){let e=r.$implicit;f("value",e),d(),F(e)}}function Hl(n,r){n&1&&(l(0,"mat-error"),h(1,"Campo obbligatorio"),c())}var Jo=(()=>{class n{expenseService=s(kt);peopleService=s(Dt);categoryService=s(St);notify=s(pt);people$=this.peopleService.people$;categories$=this.categoryService.categories$;saving=!1;form=new Na({who:new Rt("",Xe.required),amount:new Rt(null,[Xe.required,Xe.min(.01)]),date:new Rt(this.today(),Xe.required),where:new Rt("",Xe.required),category:new Rt("",Xe.required),notes:new Rt("")});submit(){return re(this,null,function*(){if(this.form.invalid){this.notify.show("Compila tutti i campi obbligatori","error");return}this.saving=!0;try{let e=this.form.value;yield this.expenseService.addExpense({who:e.who,amount:parseFloat(Number(e.amount).toFixed(2)),date:this.formatDate(e.date),where:e.where.trim(),category:e.category,notes:(e.notes??"").trim()}),this.notify.show("Spesa aggiunta!"),this.resetForm()}catch(e){this.notify.show("Errore nel salvataggio","error")}finally{this.saving=!1}})}resetForm(){this.form.reset({date:this.today()}),this.form.markAsPristine(),this.form.markAsUntouched()}today(){return new Date}formatDate(e){return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-expense-form"]],decls:50,vars:15,consts:[["picker",""],["mode","indeterminate"],[1,"form-grid",3,"ngSubmit","formGroup"],["appearance","outline"],["formControlName","who"],[3,"value"],["matInput","","formControlName","amount","type","number","step","0.01","min","0"],["matInput","","formControlName","date",3,"matDatepicker"],["matIconSuffix","",3,"for"],["matInput","","formControlName","where","placeholder","Es. Supermercato"],["formControlName","category"],["appearance","outline",1,"full-span"],["matInput","","formControlName","notes","rows","3"],[1,"form-actions","full-span"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["mat-button","","type","button",3,"click","disabled"]],template:function(t,i){if(t&1&&(l(0,"mat-card"),v(1,Rl,1,0,"mat-progress-bar",1),l(2,"mat-card-header")(3,"mat-card-title"),h(4,"Registra spesa"),c()(),l(5,"mat-card-content")(6,"form",2),_("ngSubmit",function(){return i.submit()}),l(7,"mat-form-field",3)(8,"mat-label"),h(9,"Chi ha speso"),c(),l(10,"mat-select",4),Q(11,Fl,2,2,"mat-option",5,le),Tt(13,"async"),c(),v(14,Ol,2,0,"mat-error"),c(),l(15,"mat-form-field",3)(16,"mat-label"),h(17,"Quanto (\u20AC)"),c(),k(18,"input",6),v(19,Vl,2,1),c(),l(20,"mat-form-field",3)(21,"mat-label"),h(22,"Giorno"),c(),k(23,"input",7)(24,"mat-datepicker-toggle",8)(25,"mat-datepicker",null,0),v(27,Bl,2,0,"mat-error"),c(),l(28,"mat-form-field",3)(29,"mat-label"),h(30,"Dove"),c(),k(31,"input",9),v(32,Nl,2,0,"mat-error"),c(),l(33,"mat-form-field",3)(34,"mat-label"),h(35,"Categoria"),c(),l(36,"mat-select",10),Q(37,zl,2,2,"mat-option",5,le),Tt(39,"async"),c(),v(40,Hl,2,0,"mat-error"),c(),l(41,"mat-form-field",11)(42,"mat-label"),h(43,"Note"),c(),k(44,"textarea",12),c(),l(45,"div",13)(46,"button",14),h(47,"Aggiungi spesa"),c(),l(48,"button",15),_("click",function(){return i.resetForm()}),h(49,"Pulisci"),c()()()()()),t&2){let a=at(26);d(),y(i.saving?1:-1),d(5),f("formGroup",i.form),d(5),G(At(13,11,i.people$)),d(3),y(i.form.controls.who.invalid&&(i.form.controls.who.touched||i.form.controls.who.dirty)?14:-1),d(5),y(i.form.controls.amount.invalid&&(i.form.controls.amount.touched||i.form.controls.amount.dirty)?19:-1),d(4),f("matDatepicker",a),d(),f("for",a),d(3),y(i.form.controls.date.invalid&&(i.form.controls.date.touched||i.form.controls.date.dirty)?27:-1),d(5),y(i.form.controls.where.invalid&&(i.form.controls.where.touched||i.form.controls.where.dirty)?32:-1),d(5),G(At(39,13,i.categories$)),d(3),y(i.form.controls.category.invalid&&(i.form.controls.category.touched||i.form.controls.category.dirty)?40:-1),d(6),f("disabled",i.saving),d(2),f("disabled",i.saving)}},dependencies:[Wa,za,jt,Ha,Yt,Ba,Ya,ci,ja,ct,ot,st,lt,rt,We,Ye,dt,to,io,Gt,Qt,wt,Ct,Qe,Pe,Ne,ht,mt,qo,Go,qi,qn,$o,Ht],styles:["[_nghost-%COMP%]{display:block;padding:6px 0}mat-card[_ngcontent-%COMP%]{padding:6px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;padding-top:8px}.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{margin-bottom:0}.full-span[_ngcontent-%COMP%]{grid-column:1 / -1}.form-actions[_ngcontent-%COMP%]{display:flex;gap:8px;padding-top:8px;align-items:center}.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:112px}@media(max-width:600px){.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})}return n})();var jl=[[["caption"]],[["colgroup"],["col"]],"*"],Yl=["caption","colgroup, col","*"];function Wl(n,r){n&1&&O(0,2)}function Ql(n,r){n&1&&(l(0,"thead",0),Re(1,1),c(),l(2,"tbody",0),Re(3,2)(4,3),c(),l(5,"tfoot",0),Re(6,4),c())}function Gl(n,r){n&1&&Re(0,1)(1,2)(2,3)(3,4)}var et=new T("CDK_TABLE");var en=(()=>{class n{template=s(Ae);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),tn=(()=>{class n{template=s(Ae);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),ir=(()=>{class n{template=s(Ae);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Mt=(()=>{class n{_table=s(et,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,a){if(t&1&&_e(a,en,5)(a,tn,5)(a,ir,5),t&2){let o;g(o=b())&&(i.cell=o.first),g(o=b())&&(i.headerCell=o.first),g(o=b())&&(i.footerCell=o.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",C],stickyEnd:[2,"stickyEnd","stickyEnd",C]}})}return n})(),Ji=class{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName)}},nr=(()=>{class n extends Ji{constructor(){super(s(Mt),s(R))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[z]})}return n})();var ar=(()=>{class n extends Ji{constructor(){let e=s(Mt),t=s(R);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[z]})}return n})();var ea=(()=>{class n{template=s(Ae);_differs=s(zt);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof bi?e.headerCell.template:this instanceof ta?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,features:[oe]})}return n})(),bi=(()=>{class n extends ea{_table=s(et,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Ae),s(zt))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",C]},features:[z,oe]})}return n})(),ta=(()=>{class n extends ea{_table=s(et,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(Ae),s(zt))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",C]},features:[z,oe]})}return n})(),nn=(()=>{class n extends ea{_table=s(et,{optional:!0});when;constructor(){super(s(Ae),s(zt))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[z]})}return n})(),Pt=(()=>{class n{_viewContainer=s(je);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),ia=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Re(0,0)},dependencies:[Pt],encapsulation:2})}return n})();var na=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Re(0,0)},dependencies:[Pt],encapsulation:2})}return n})(),or=(()=>{class n{templateRef=s(Ae);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),er=["top","bottom","left","right"],Jn=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(r=>this._updateCachedSizes(r)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(r,e,t=!0,i=!0,a,o,m){this._isNativeHtmlTable=r,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=a,this._positionListener=o,this._tableInjector=m,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(r,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(r);let t=[];for(let i of r)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));ve({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(r,e,t,i=!0,a=!0){if(!r.length||!this._isBrowser||!(e.some(qe=>qe)||t.some(qe=>qe))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=r[0],m=o.children.length,p=this.direction==="rtl",D=p?"right":"left",A=p?"left":"right",X=e.lastIndexOf(!0),he=t.indexOf(!0),pe,ma,ha;a&&this._updateStickyColumnReplayQueue({rows:[...r],stickyStartStates:[...e],stickyEndStates:[...t]}),ve({earlyRead:()=>{pe=this._getCellWidths(o,i),ma=this._getStickyStartColumnPositions(pe,e),ha=this._getStickyEndColumnPositions(pe,t)},write:()=>{for(let qe of r)for(let Le=0;Le<m;Le++){let pa=qe.children[Le];e[Le]&&this._addStickyStyle(pa,D,ma[Le],Le===X),t[Le]&&this._addStickyStyle(pa,A,ha[Le],Le===he)}this._positionListener&&pe.some(qe=>!!qe)&&(this._positionListener.stickyColumnsUpdated({sizes:X===-1?[]:pe.slice(0,X+1).map((qe,Le)=>e[Le]?qe:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:he===-1?[]:pe.slice(he).map((qe,Le)=>t[Le+he]?qe:null).reverse()}))}},{injector:this._tableInjector})}stickRows(r,e,t){if(!this._isBrowser)return;let i=t==="bottom"?r.slice().reverse():r,a=t==="bottom"?e.slice().reverse():e,o=[],m=[],p=[];ve({earlyRead:()=>{for(let D=0,A=0;D<i.length;D++){if(!a[D])continue;o[D]=A;let X=i[D];p[D]=this._isNativeHtmlTable?Array.from(X.children):[X];let he=this._retrieveElementSize(X).height;A+=he,m[D]=he}},write:()=>{let D=a.lastIndexOf(!0);for(let A=0;A<i.length;A++){if(!a[A])continue;let X=o[A],he=A===D;for(let pe of p[A])this._addStickyStyle(pe,t,X,he)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:m,offsets:o,elements:p}):this._positionListener?.stickyFooterRowsUpdated({sizes:m,offsets:o,elements:p})}},{injector:this._tableInjector})}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&ve({write:()=>{let t=r.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(r,e){if(!r.classList.contains(this._stickCellCss))return;for(let i of e)r.style[i]="",r.classList.remove(this._borderCellCss[i]);er.some(i=>e.indexOf(i)===-1&&r.style[i])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex="",this._needsPositionStickyOnElement&&(r.style.position=""),r.classList.remove(this._stickCellCss))}_addStickyStyle(r,e,t,i){r.classList.add(this._stickCellCss),i&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(r){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of er)r.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(r,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=r.children;for(let a=0;a<i.length;a++){let o=i[a];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){let t=[],i=0;for(let a=0;a<r.length;a++)e[a]&&(t[a]=i,i+=r[a]);return t}_getStickyEndColumnPositions(r,e){let t=[],i=0;for(let a=r.length;a>0;a--)e[a]&&(t[a]=i,i+=r[a]);return t}_retrieveElementSize(r){let e=this._elemSizeCache.get(r);if(e)return e;let t=r.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(r,i),this._resizeObserver.observe(r,{box:"border-box"})),i}_updateStickyColumnReplayQueue(r){this._removeFromStickyColumnReplayQueue(r.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(r)}_removeFromStickyColumnReplayQueue(r){let e=new Set(r);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(r){let e=!1;for(let t of r){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&ql(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ql(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(r=>n.classList.contains(r))}var gi=new T("STICKY_POSITIONING_LISTENER");var aa=(()=>{class n{viewContainer=s(je);elementRef=s(R);constructor(){let e=s(et);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","rowOutlet",""]]})}return n})(),oa=(()=>{class n{viewContainer=s(je);elementRef=s(R);constructor(){let e=s(et);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),ra=(()=>{class n{viewContainer=s(je);elementRef=s(R);constructor(){let e=s(et);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),sa=(()=>{class n{viewContainer=s(je);elementRef=s(R);constructor(){let e=s(et);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),la=(()=>{class n{_differs=s(zt);_changeDetectorRef=s(j);_elementRef=s(R);_dir=s(ke,{optional:!0});_platform=s(Ze);_viewRepeater;_viewportRuler=s(Ut);_injector=s(be);_virtualScrollViewport=s(co,{optional:!0,host:!0});_positionListener=s(gi,{optional:!0})||s(gi,{optional:!0,skipSelf:!0});_document=s(Te);_data;_renderedRange;_onDestroy=new E;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new E;_footerRowStickyUpdates=new E;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new E;_dataStream=new E;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new w;viewChange=new Ee({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new ut("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(N(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new ro:new Hi,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),mi(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,a,o)=>this._getEmbeddedViewArgs(i.item,o),i=>i.item.data,i=>{i.operation===$t.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let a=t.get(i.currentIndex);a.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=tr(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=tr(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,o)=>{this._addStickyColumnStyles([a],this._headerRowDefs[o])}),this._rowDefs.forEach(a=>{let o=[];for(let m=0;m<t.length;m++)this._renderRows[m].rowDef===a&&o.push(t[m]);this._addStickyColumnStyles(o,a)}),i.forEach((a,o)=>{this._addStickyColumnStyles([a],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let o=this._data[a],m=this._getRenderRowsForData(o,a,i.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let p=0;p<m.length;p++){let D=m[p],A=this._cachedRenderRowsMap.get(D.data);A.has(D.rowDef)?A.get(D.rowDef).push(D):A.set(D.rowDef,[D]),e.push(D)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(o=>{let m=i&&i.has(o)?i.get(o):[];if(m.length){let p=m.shift();return p.dataIndex=t,p}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Zi(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Zi(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Zi(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Zi(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,m)=>{let p=!!m.getColumnsDiff();return o||p},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||i||a}_switchDataSource(e){this._data=[],mi(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;mi(this.dataSource)?e=this.dataSource.connect(this):ba(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=se(this.dataSource)),this._renderChangeSubscription=ft([e,this.viewChange]).pipe(N(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(m=>{let p=this._columnDefsByName.get(m);return p}),a=i.map(m=>m.sticky),o=i.map(m=>m.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let a=e.viewContainer.get(i);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;a&&i.push(a)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,a={$implicit:e.data};return{templateRef:i.template,context:a,index:t}}_renderRow(e,t,i,a={}){let o=e.viewContainer.createEmbeddedView(t.template,a,i);return this._renderCellTemplateForItem(t,a),o}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))Pt.mostRecentCellOutlet&&Pt.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let o=e.get(t).context;o.count=i,o.first=t===0,o.last=t===i-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Jn(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:se()).pipe(N(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?_a:ua;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(wa(0,t),N(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,a)=>this._measureRangeSize(i,a)}),ft([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(N(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let m=a.elements[o];if(m){let p=a.offsets[o],D=i!==0?Math.max(i-p,p):-p;for(let A of m)A.style.top=`${-D}px`}}}),ft([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(N(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let m=a.elements[o];if(m)for(let p of m)p.style.bottom=`${i+a.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let a=i.createEmbeddedView(e.templateRef),o=a.rootNodes[0];if(a.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute("role","row"),o.classList.add(...e._contentClassNames);let m=o.querySelectorAll(e._cellSelector);for(let p=0;p<m.length;p++)m[p].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let o=e.start-i.start,m=e.end-e.start,p,D;for(let he=0;he<m;he++){let pe=a.get(he+o);if(pe&&pe.rootNodes.length){p=D=pe.rootNodes[0];break}}for(let he=m-1;he>-1;he--){let pe=a.get(he+o);if(pe&&pe.rootNodes.length){D=pe.rootNodes[pe.rootNodes.length-1];break}}let A=p?.getBoundingClientRect?.(),X=D?.getBoundingClientRect?.();return A&&X?X.bottom-A.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,a){if(t&1&&_e(a,or,5)(a,Mt,5)(a,nn,5)(a,bi,5)(a,ta,5),t&2){let o;g(o=b())&&(i._noDataRow=o.first),g(o=b())&&(i._contentColumnDefs=o),g(o=b())&&(i._contentRowDefs=o),g(o=b())&&(i._contentHeaderRowDefs=o),g(o=b())&&(i._contentFooterRowDefs=o)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&I("cdk-table-fixed-layout",i.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",C],fixedLayout:[2,"fixedLayout","fixedLayout",C],recycleRows:[2,"recycleRows","recycleRows",C]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[W([{provide:et,useExisting:n},{provide:gi,useValue:null}])],ngContentSelectors:Yl,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&($(jl),O(0),O(1,1),v(2,Wl,1,0),v(3,Ql,7,0)(4,Gl,4,0)),t&2&&(d(2),y(i._isServer?2:-1),d(),y(i._isNativeHtmlTable?3:4))},dependencies:[oa,aa,sa,ra],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function Zi(n,r){return n.concat(Array.from(r))}function tr(n,r){let e=r.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode}return null}var rr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[mo]})}return n})();var $l=[[["caption"]],[["colgroup"],["col"]],"*"],Ul=["caption","colgroup, col","*"];function Kl(n,r){n&1&&O(0,2)}function Xl(n,r){n&1&&(l(0,"thead",0),Re(1,1),c(),l(2,"tbody",2),Re(3,3)(4,4),c(),l(5,"tfoot",0),Re(6,5),c())}function Zl(n,r){n&1&&Re(0,1)(1,3)(2,4)(3,5)}var sr=(()=>{class n extends la{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&I("mat-table-fixed-layout",i.fixedLayout)},exportAs:["matTable"],features:[W([{provide:la,useExisting:n},{provide:et,useExisting:n},{provide:gi,useValue:null}]),z],ngContentSelectors:Ul,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&($($l),O(0),O(1,1),v(2,Kl,1,0),v(3,Xl,7,0)(4,Zl,4,0)),t&2&&(d(2),y(i._isServer?2:-1),d(),y(i._isNativeHtmlTable?3:4))},dependencies:[oa,aa,sa,ra],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),lr=(()=>{class n extends en{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matCellDef",""]],features:[W([{provide:en,useExisting:n}]),z]})}return n})(),cr=(()=>{class n extends tn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matHeaderCellDef",""]],features:[W([{provide:tn,useExisting:n}]),z]})}return n})();var dr=(()=>{class n extends Mt{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[W([{provide:Mt,useExisting:n}]),z]})}return n})(),mr=(()=>{class n extends nr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[z]})}return n})();var hr=(()=>{class n extends ar{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[z]})}return n})();var pr=(()=>{class n extends bi{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",C]},features:[W([{provide:bi,useExisting:n}]),z]})}return n})();var ur=(()=>{class n extends nn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[W([{provide:nn,useExisting:n}]),z]})}return n})(),_r=(()=>{class n extends ia{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[W([{provide:ia,useExisting:n}]),z],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Re(0,0)},dependencies:[Pt],encapsulation:2})}return n})();var fr=(()=>{class n extends na{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275cmp=x({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[W([{provide:na,useExisting:n}]),z],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Re(0,0)},dependencies:[Pt],encapsulation:2})}return n})();var gr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[rr,q]})}return n})(),Jl=9007199254740991,an=class extends yn{_data;_renderData=new Ee([]);_filter=new Ee("");_internalPageChanges=new E;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(r){r=Array.isArray(r)?r:[],this._data.next(r),this._renderChangesSubscription||this._filterData(r)}get filter(){return this._filter.value}set filter(r){this._filter.next(r),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(r){this._sort=r,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(r){this._paginator=r,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(r,e)=>{let t=r[e];if(Ga(t)){let i=Number(t);return i<Jl?i:t}return t};sortData=(r,e)=>{let t=e.active,i=e.direction;return!t||i==""?r:r.sort((a,o)=>{let m=this.sortingDataAccessor(a,t),p=this.sortingDataAccessor(o,t),D=typeof m,A=typeof p;D!==A&&(D==="number"&&(m+=""),A==="number"&&(p+=""));let X=0;return m!=null&&p!=null?m>p?X=1:m<p&&(X=-1):m!=null?X=1:p!=null&&(X=-1),X*(i=="asc"?1:-1)})};filterPredicate=(r,e)=>{let t=e.trim().toLowerCase();return Object.values(r).some(i=>`${i}`.toLowerCase().includes(t))};constructor(r=[]){super(),this._data=new Ee(r),this._updateChangeSubscription()}_updateChangeSubscription(){let r=this._sort?ee(this._sort.sortChange,this._sort.initialized):se(null),e=this._paginator?ee(this._paginator.page,this._internalPageChanges,this._paginator.initialized):se(null),t=this._data,i=ft([t,this._filter]).pipe(Ve(([m])=>this._filterData(m))),a=ft([i,r]).pipe(Ve(([m])=>this._orderData(m))),o=ft([a,e]).pipe(Ve(([m])=>this._pageData(m)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=o.subscribe(m=>this._renderData.next(m))}_filterData(r){return this.filteredData=this.filter==null||this.filter===""?r:r.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(r){return this.sort?this.sortData(r.slice(),this.sort):r}_pageData(r){if(!this.paginator)return r;let e=this.paginator.pageIndex*this.paginator.pageSize;return r.slice(e,e+this.paginator.pageSize)}_updatePaginator(r){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=r,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var tc=["mat-sort-header",""],ic=["*",[["","matSortHeaderIcon",""]]],nc=["*","[matSortHeaderIcon]"];function ac(n,r){n&1&&(ge(),ie(0,"svg",3),Ei(1,"path",4),ne())}function oc(n,r){n&1&&(ie(0,"div",2),O(1,1,null,ac,2,0),ne())}var br=new T("MAT_SORT_DEFAULT_OPTIONS"),vi=(()=>{class n{_defaultOptions;_initializedStream=new xi(1);sortables=new Map;_stateChanges=new E;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new w;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let t=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=rc(e.start||this.start,t),a=i.indexOf(this.direction)+1;return a>=i.length&&(a=0),i[a]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(t){return new(t||n)(ye(br,8))};static \u0275dir=S({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",C],disabled:[2,"matSortDisabled","disabled",C]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[oe]})}return n})();function rc(n,r){let e=["asc","desc"];return n=="desc"&&e.reverse(),r||e.push(""),e}var vr=(()=>{class n{_sort=s(vi,{optional:!0});_columnDef=s(Mt,{optional:!0});_changeDetectorRef=s(j);_focusMonitor=s(Ft);_elementRef=s(R);_ariaDescriber=s(Li,{optional:!0});_renderChanges;_animationsDisabled=de();_recentlyCleared=H(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){s(Fe).load(Je);let e=s(br,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=ee(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),t=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?t:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,i){t&1&&_("click",function(){return i._toggleOnInteraction()})("keydown",function(o){return i._handleKeydown(o)})("mouseleave",function(){return i._recentlyCleared.set(null)}),t&2&&(M("aria-sort",i._getAriaSortAttribute()),I("mat-sort-header-disabled",i._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",C],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",C]},exportAs:["matSortHeader"],attrs:tc,ngContentSelectors:nc,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(t,i){t&1&&($(ic),ie(0,"div",0)(1,"div",1),O(2),ne(),v(3,oc,3,0,"div",2),ne()),t&2&&(I("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before",i.arrowPosition==="before")("mat-sort-header-descending",i._sort.direction==="desc")("mat-sort-header-ascending",i._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",i._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",i._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",i._animationsDisabled),M("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),d(3),y(i._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),yr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[q]})}return n})();var Cr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[Oi,Jt,q,Kt]})}return n})();function lc(n,r){if(n&1&&(l(0,"mat-option",17),h(1),c()),n&2){let e=r.$implicit;f("value",e),d(),U(" ",e," ")}}function cc(n,r){if(n&1){let e=J();l(0,"mat-form-field",14)(1,"mat-select",16,0),_("selectionChange",function(i){P(e);let a=u(2);return L(a._changePageSize(i.value))}),Q(3,lc,2,2,"mat-option",17,le),c(),l(5,"div",18),_("click",function(){P(e);let i=at(2);return L(i.open())}),c()()}if(n&2){let e=u(2);f("appearance",e._formFieldAppearance)("color",e.color),d(),f("value",e.pageSize)("disabled",e.disabled),Ii("aria-labelledby",e._pageSizeLabelId),f("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),d(2),G(e._displayedPageSizeOptions)}}function dc(n,r){if(n&1&&(l(0,"div",15),h(1),c()),n&2){let e=u(2);d(),F(e.pageSize)}}function mc(n,r){if(n&1&&(l(0,"div",3)(1,"div",13),h(2),c(),v(3,cc,6,7,"mat-form-field",14),v(4,dc,2,1,"div",15),c()),n&2){let e=u();d(),M("id",e._pageSizeLabelId),d(),U(" ",e._intl.itemsPerPageLabel," "),d(),y(e._displayedPageSizeOptions.length>1?3:-1),d(),y(e._displayedPageSizeOptions.length<=1?4:-1)}}function hc(n,r){if(n&1){let e=J();l(0,"button",19),_("click",function(){P(e);let i=u();return L(i._buttonClicked(0,i._previousButtonsDisabled()))}),ge(),l(1,"svg",8),k(2,"path",20),c()()}if(n&2){let e=u();f("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),M("aria-label",e._intl.firstPageLabel)}}function pc(n,r){if(n&1){let e=J();l(0,"button",21),_("click",function(){P(e);let i=u();return L(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),ge(),l(1,"svg",8),k(2,"path",22),c()()}if(n&2){let e=u();f("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),M("aria-label",e._intl.lastPageLabel)}}var uc=(()=>{class n{changes=new E;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let a=e*t,o=a<i?Math.min(a+t,i):a+t;return`${a+1} \u2013 ${o} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=ue({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_c=50;var fc=new T("MAT_PAGINATOR_DEFAULT_OPTIONS"),yi=(()=>{class n{_intl=s(uc);_changeDetectorRef=s(j);_formFieldAppearance;_pageSizeLabelId=s(Oe).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new xi(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ie(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new w;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(fc,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:a,hidePageSize:o,showFirstLastButtons:m}=t;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),o!=null&&(this.hidePageSize=o),m!=null&&(this.showFirstLastButtons=m)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:_c),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ie],length:[2,"length","length",Ie],pageSize:[2,"pageSize","pageSize",Ie],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",C],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",C],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",C]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(l(0,"div",1)(1,"div",2),v(2,mc,5,4,"div",3),l(3,"div",4)(4,"div",5),h(5),c(),v(6,hc,3,5,"button",6),l(7,"button",7),_("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),ge(),l(8,"svg",8),k(9,"path",9),c()(),Bt(),l(10,"button",10),_("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),ge(),l(11,"svg",8),k(12,"path",11),c()(),v(13,pc,3,5,"button",12),c()()()),t&2&&(d(2),y(i.hidePageSize?-1:2),d(3),U(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),d(),y(i.showFirstLastButtons?6:-1),d(),f("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),M("aria-label",i._intl.previousPageLabel),d(3),f("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),M("aria-label",i._intl.nextPageLabel),d(3),y(i.showFirstLastButtons?13:-1))},dependencies:[Ye,Ct,Qe,Ot,Yi],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),wr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[Pe,wt,Cr,yi]})}return n})();function xr(n){return Error(`Unable to find icon with the name "${n}"`)}function bc(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function kr(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Dr(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var _t=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},Mr=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,a){return this._addSvgIconConfig(e,t,new _t(i,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,a){let o=this._sanitizer.sanitize(Nt.HTML,i);if(!o)throw Dr(i);let m=Wt(o);return this._addSvgIconConfig(e,t,new _t("",m,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new _t(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let a=this._sanitizer.sanitize(Nt.HTML,t);if(!a)throw Dr(t);let o=Wt(a);return this._addSvgIconSetConfig(e,new _t("",o,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Nt.RESOURCE_URL,e);if(!t)throw kr(e);let i=this._cachedIconsByUrl.get(t);return i?se(on(i)):this._loadSvgIconFromConfig(new _t(e,null)).pipe(ki(a=>this._cachedIconsByUrl.set(t,a)),Ve(a=>on(a)))}getNamedSvgIcon(e,t=""){let i=Sr(t,e),a=this._svgIconConfigs.get(i);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(i,a),this._getSvgFromConfig(a);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):ga(xr(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?se(on(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Ve(t=>on(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return se(i);let a=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(xa(m=>{let D=`Loading icon set URL: ${this._sanitizer.sanitize(Nt.RESOURCE_URL,o.url)} failed: ${m.message}`;return this._errorHandler.handleError(new Error(D)),se(null)})));return ya(a).pipe(Ve(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw xr(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let a=t[i];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(a),m=this._extractSvgIconFromSet(o,e,a.options);if(m)return m}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ki(t=>e.svgText=t),Ve(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?se(null):this._fetchIcon(e).pipe(ki(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let o=a.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,i);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),i);let m=this._svgElementFromString(Wt("<svg></svg>"));return m.appendChild(o),this._setSvgAttributes(m,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(Wt("<svg></svg>")),i=e.attributes;for(let a=0;a<i.length;a++){let{name:o,value:m}=i[a];o!=="id"&&t.setAttribute(o,m)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,a=i?.withCredentials??!1;if(!this._httpClient)throw bc();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(Nt.RESOURCE_URL,t);if(!o)throw kr(t);let m=this._inProgressUrlFetches.get(o);if(m)return m;let p=this._httpClient.get(o,{responseType:"text",withCredentials:a}).pipe(Ve(D=>Wt(D)),Da(()=>this._inProgressUrlFetches.delete(o)),Sa());return this._inProgressUrlFetches.set(o,p),p}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Sr(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let a=this._resolvers[i](t,e);if(a)return vc(a)?new _t(a.url,null,a.options):new _t(a,null)}}static \u0275fac=function(t){return new(t||n)(Be(Fa,8),Be(Oa),Be(Te,8),Be(Si))};static \u0275prov=ue({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function on(n){return n.cloneNode(!0)}function Sr(n,r){return n+":"+r}function vc(n){return!!(n.url&&n.options)}var yc=["*"],Cc=new T("MAT_ICON_DEFAULT_OPTIONS"),wc=new T("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(Te),r=n?n.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Ir=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],xc=Ir.map(n=>`[${n}]`).join(", "),kc=/^url\(['"]?#(.*?)['"]?\)$/,si=(()=>{class n{_elementRef=s(R);_iconRegistry=s(Mr);_location=s(wc);_errorHandler=s(Si);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ae.EMPTY;constructor(){let e=s(new ut("aria-hidden"),{optional:!0}),t=s(Cc,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,a)=>{i.forEach(o=>{a.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(xc),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Ir.forEach(o=>{let m=t[a],p=m.getAttribute(o),D=p?p.match(kc):null;if(D){let A=i.get(m);A||(A=[],i.set(m,A)),A.push({name:o,value:D[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(Vt(1)).subscribe(a=>this._setSvgElement(a),a=>{let o=`Error retrieving icon ${t}:${i}! ${a.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(M("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),ce(i.color?"mat-"+i.color:""),I("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",C],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:yc,decls:1,vars:0,template:function(t,i){t&1&&($(),O(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),li=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[q]})}return n})();var Sc=()=>[5,10,25],Mc=(n,r)=>r.value;function Ic(n,r){n&1&&k(0,"mat-progress-bar",0)}function Ec(n,r){if(n&1&&(l(0,"mat-option",4),h(1),c()),n&2){let e=r.$implicit;f("value",e.value),d(),F(e.label)}}function Tc(n,r){if(n&1&&(l(0,"mat-option",4),h(1),c()),n&2){let e=r.$implicit;f("value",e),d(),F(e)}}function Ac(n,r){n&1&&(l(0,"p",5),h(1,"Nessuna spesa nel periodo selezionato."),c())}function Rc(n,r){n&1&&(l(0,"th",22),h(1,"Chi"),c())}function Fc(n,r){if(n&1&&(l(0,"td",23),h(1),c()),n&2){let e=r.$implicit;d(),F(e.who)}}function Oc(n,r){n&1&&(l(0,"th",22),h(1,"Importo"),c())}function Pc(n,r){if(n&1&&(l(0,"td",23),h(1),c()),n&2){let e=r.$implicit,t=u(2);d(),F(t.formatAmount(e.amount))}}function Lc(n,r){n&1&&(l(0,"th",22),h(1,"Data"),c())}function Vc(n,r){if(n&1&&(l(0,"td",23),h(1),c()),n&2){let e=r.$implicit,t=u(2);d(),F(t.formatDate(e.date))}}function Bc(n,r){n&1&&(l(0,"th",22),h(1,"Dove"),c())}function Nc(n,r){if(n&1&&(l(0,"td",23),h(1),c()),n&2){let e=r.$implicit;d(),F(e.where)}}function zc(n,r){n&1&&(l(0,"th",22),h(1,"Categoria"),c())}function Hc(n,r){if(n&1&&(l(0,"td",23),h(1),c()),n&2){let e=r.$implicit;d(),F(e.category)}}function jc(n,r){n&1&&(l(0,"th",22),h(1,"Note"),c())}function Yc(n,r){if(n&1&&(l(0,"td",23),h(1),c()),n&2){let e=r.$implicit;d(),F(e.notes)}}function Wc(n,r){n&1&&(l(0,"th",24),h(1,"Azioni"),c())}function Qc(n,r){if(n&1){let e=J();l(0,"span",25),h(1," Confermi? "),l(2,"button",27),_("click",function(){P(e);let i=u().$implicit,a=u(2);return L(a.doDelete(i.id))}),h(3,"S\xEC"),c(),l(4,"button",28),_("click",function(){P(e);let i=u(3);return L(i.cancelDelete())}),h(5,"No"),c()()}}function Gc(n,r){if(n&1){let e=J();l(0,"button",29),_("click",function(){P(e);let i=u().$implicit,a=u(2);return L(a.confirmDelete(i.id))}),l(1,"mat-icon"),h(2,"delete"),c()()}}function qc(n,r){if(n&1&&(l(0,"td",23),v(1,Qc,6,0,"span",25)(2,Gc,3,0,"button",26),c()),n&2){let e=r.$implicit,t=u(2);d(),y(t.deleteConfirmId===e.id?1:2)}}function $c(n,r){n&1&&k(0,"tr",30)}function Uc(n,r){n&1&&k(0,"tr",31)}function Kc(n,r){if(n&1&&(l(0,"p",6),h(1),c(),l(2,"div",7)(3,"table",8),it(4,9),te(5,Rc,2,0,"th",10)(6,Fc,2,1,"td",11),nt(),it(7,12),te(8,Oc,2,0,"th",10)(9,Pc,2,1,"td",11),nt(),it(10,13),te(11,Lc,2,0,"th",10)(12,Vc,2,1,"td",11),nt(),it(13,14),te(14,Bc,2,0,"th",10)(15,Nc,2,1,"td",11),nt(),it(16,15),te(17,zc,2,0,"th",10)(18,Hc,2,1,"td",11),nt(),it(19,16),te(20,jc,2,0,"th",10)(21,Yc,2,1,"td",11),nt(),it(22,17),te(23,Wc,2,0,"th",18)(24,qc,3,1,"td",11),nt(),te(25,$c,1,0,"tr",19)(26,Uc,1,0,"tr",20),c()(),k(27,"mat-paginator",21)),n&2){let e=u();d(),U("",e.dataSource.data.length," spese trovate"),d(2),f("dataSource",e.dataSource),d(22),f("matHeaderRowDef",e.displayedColumns),d(),f("matRowDefColumns",e.displayedColumns),d(),f("pageSize",10)("pageSizeOptions",Ta(6,Sc))}}var Er=(()=>{class n{expenseService;notify;displayedColumns=["who","amount","date","where","category","notes","actions"];dataSource=new an([]);loading=!1;deleteConfirmId=null;selectedMonth;selectedYear;availableYears=[];months=[{value:-1,label:"Tutti"},{value:0,label:"Gennaio"},{value:1,label:"Febbraio"},{value:2,label:"Marzo"},{value:3,label:"Aprile"},{value:4,label:"Maggio"},{value:5,label:"Giugno"},{value:6,label:"Luglio"},{value:7,label:"Agosto"},{value:8,label:"Settembre"},{value:9,label:"Ottobre"},{value:10,label:"Novembre"},{value:11,label:"Dicembre"}];sort;paginator;querySub=null;constructor(e,t){this.expenseService=e,this.notify=t;let i=new Date;this.selectedMonth=i.getMonth(),this.selectedYear=i.getFullYear()}ngOnInit(){this.expenseService.expenses$.subscribe(e=>{let t=new Set(e.map(i=>parseInt(i.date.substring(0,4),10)));this.availableYears=Array.from(t).sort((i,a)=>a-i),!this.availableYears.includes(this.selectedYear)&&this.availableYears.length>0&&(this.availableYears.push(this.selectedYear),this.availableYears.sort((i,a)=>a-i))}),this.loadData()}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}onFilterChange(){this.loadData()}loadData(){this.loading=!0,this.querySub?.unsubscribe(),this.querySub=this.expenseService.queryExpenses(this.selectedYear,this.selectedMonth).subscribe(e=>{this.dataSource.data=e,this.loading=!1,this.paginator&&this.paginator.firstPage()})}formatDate(e){let[t,i,a]=e.split("-");return`${a}/${i}/${t}`}formatAmount(e){return`\u20AC${e.toFixed(2)}`}confirmDelete(e){this.deleteConfirmId=e}cancelDelete(){this.deleteConfirmId=null}doDelete(e){return re(this,null,function*(){try{yield this.expenseService.deleteExpense(e),this.notify.show("Spesa eliminata"),this.deleteConfirmId=null}catch(t){this.notify.show("Errore nella cancellazione","error")}})}static \u0275fac=function(t){return new(t||n)(ye(kt),ye(pt))};static \u0275cmp=x({type:n,selectors:[["app-expense-list"]],viewQuery:function(t,i){if(t&1&&K(vi,5)(yi,5),t&2){let a;g(a=b())&&(i.sort=a.first),g(a=b())&&(i.paginator=a.first)}},decls:23,vars:5,consts:[["mode","indeterminate"],[1,"filters-row"],["appearance","outline"],[3,"valueChange","selectionChange","value"],[3,"value"],[1,"empty-state"],[1,"results-count"],[1,"table-container"],["mat-table","","matSort","","matSortActive","date","matSortDirection","desc",3,"dataSource"],["matColumnDef","who"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","date"],["matColumnDef","where"],["matColumnDef","category"],["matColumnDef","notes"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"confirm-row"],["mat-icon-button",""],["mat-flat-button","","color","warn",3,"click"],["mat-button","",3,"click"],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,i){t&1&&(l(0,"mat-card"),v(1,Ic,1,0,"mat-progress-bar",0),l(2,"mat-card-header")(3,"mat-card-title"),h(4,"Storico spese"),c()(),l(5,"mat-card-content")(6,"div",1)(7,"mat-form-field",2)(8,"mat-label"),h(9,"Mese"),c(),l(10,"mat-select",3),xe("valueChange",function(o){return we(i.selectedMonth,o)||(i.selectedMonth=o),o}),_("selectionChange",function(){return i.onFilterChange()}),Q(11,Ec,2,2,"mat-option",4,Mc),c()(),l(13,"mat-form-field",2)(14,"mat-label"),h(15,"Anno"),c(),l(16,"mat-select",3),xe("valueChange",function(o){return we(i.selectedYear,o)||(i.selectedYear=o),o}),_("selectionChange",function(){return i.onFilterChange()}),l(17,"mat-option",4),h(18,"Tutti"),c(),Q(19,Tc,2,2,"mat-option",4,le),c()()(),v(21,Ac,2,0,"p",5)(22,Kc,28,7),c()()),t&2&&(d(),y(i.loading?1:-1),d(9),Ce("value",i.selectedMonth),d(),G(i.months),d(5),Ce("value",i.selectedYear),d(),f("value",-1),d(2),G(i.availableYears),d(2),y(!i.loading&&i.dataSource.data.length===0?21:22))},dependencies:[ct,ot,st,lt,rt,We,Ye,dt,wt,Ct,Qe,gr,sr,cr,pr,dr,lr,ur,mr,hr,_r,fr,yr,vi,vr,wr,yi,Pe,Ne,Ot,li,si,ht,mt],styles:["[_nghost-%COMP%]{display:block;padding:8px 0}mat-card[_ngcontent-%COMP%]{padding:8px}.filters-row[_ngcontent-%COMP%]{display:flex;gap:16px;padding-top:16px;flex-wrap:wrap}.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:150px;flex:1}.table-container[_ngcontent-%COMP%]{overflow-x:auto;border-radius:12px;border:1px solid var(--mat-sys-outline-variant, #c4c6cf)}table[_ngcontent-%COMP%]{width:100%}.mat-mdc-header-row[_ngcontent-%COMP%]{background:var(--mat-sys-surface-container, #efedf2)}.mat-mdc-row[_ngcontent-%COMP%]{border-bottom:1px solid rgba(16,24,40,.06);transition:background-color .12s ease}.mat-mdc-row[_ngcontent-%COMP%]:hover{background:#10182808}.mat-mdc-cell[_ngcontent-%COMP%]{padding:8px 12px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:48px 0;color:var(--mat-sys-on-surface-variant, #44474e);font-size:16px}.results-count[_ngcontent-%COMP%]{font-size:14px;color:var(--mat-sys-on-surface-variant, #44474e);margin-bottom:12px;font-weight:500}.confirm-row[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--mat-sys-error, #ba1a1a);font-weight:500}"]})}return n})();var Tr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[q]})}return n})();var Ar=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({imports:[$a,qt,ji,q,Tr]})}return n})();var Xc=(n,r)=>r.value,Rr=(n,r)=>r.name;function Zc(n,r){n&1&&k(0,"mat-progress-bar",0)}function Jc(n,r){if(n&1&&(l(0,"mat-option",4),h(1),c()),n&2){let e=r.$implicit;f("value",e.value),d(),F(e.label)}}function ed(n,r){if(n&1&&(l(0,"mat-option",4),h(1),c()),n&2){let e=r.$implicit;f("value",e),d(),F(e)}}function td(n,r){if(n&1&&(l(0,"mat-option",4),h(1),c()),n&2){let e=r.$implicit;f("value",e),d(),F(e)}}function id(n,r){if(n&1&&(l(0,"mat-option",4),h(1),c()),n&2){let e=r.$implicit;f("value",e),d(),F(e)}}function nd(n,r){n&1&&(l(0,"p",6),h(1,"Nessuna spesa nel periodo selezionato."),c())}function ad(n,r){if(n&1&&(l(0,"mat-card",13)(1,"div",14),h(2),c(),l(3,"div",15),h(4),c()()),n&2){let e=r.$implicit,t=u(3);Ke("background",t.personColor.bg)("color",t.personColor.fg),d(2),F(e.name),d(2),U("\u20AC",e.total)}}function od(n,r){if(n&1&&(l(0,"h3"),h(1,"Totale per persona"),c(),l(2,"div",11),Q(3,ad,5,6,"mat-card",12,Rr),c()),n&2){let e=u(2);d(3),G(e.perPersonTotals)}}function rd(n,r){if(n&1&&(l(0,"mat-card",13)(1,"div",14),h(2),c(),l(3,"div",15),h(4),c()()),n&2){let e=r.$implicit,t=u(3);Ke("background",t.categoryColor.bg)("color",t.categoryColor.fg),d(2),F(e.name),d(2),U("\u20AC",e.total)}}function sd(n,r){if(n&1&&(l(0,"h3"),h(1,"Totale per categoria"),c(),l(2,"div",11),Q(3,rd,5,6,"mat-card",12,Rr),c()),n&2){let e=u(2);d(3),G(e.perCategoryTotals)}}function ld(n,r){if(n&1&&(l(0,"div",7)(1,"mat-card",8)(2,"mat-card-content")(3,"div",9),h(4,"Totale spese"),c(),l(5,"div",10),h(6),c()()(),l(7,"mat-card",8)(8,"mat-card-content")(9,"div",9),h(10,"Numero spese"),c(),l(11,"div",10),h(12),c()()(),l(13,"mat-card",8)(14,"mat-card-content")(15,"div",9),h(16,"Media per spesa"),c(),l(17,"div",10),h(18),c()()()(),v(19,od,5,0),v(20,sd,5,0)),n&2){let e=u();d(6),U("\u20AC",e.totalAmount),d(6),F(e.expenseCount),d(6),U("\u20AC",e.averageAmount),d(),y(e.perPersonTotals.length>0?19:-1),d(),y(e.perCategoryTotals.length>0?20:-1)}}var Fr=(()=>{class n{expenseService;peopleService;categoryService;selectedMonth;selectedYear;selectedPerson="";selectedCategory="";people=[];categories=[];availableYears=[];expenses=[];loading=!1;months=[{value:-1,label:"Tutti"},{value:0,label:"Gennaio"},{value:1,label:"Febbraio"},{value:2,label:"Marzo"},{value:3,label:"Aprile"},{value:4,label:"Maggio"},{value:5,label:"Giugno"},{value:6,label:"Luglio"},{value:7,label:"Agosto"},{value:8,label:"Settembre"},{value:9,label:"Ottobre"},{value:10,label:"Novembre"},{value:11,label:"Dicembre"}];querySub=null;constructor(e,t,i){this.expenseService=e,this.peopleService=t,this.categoryService=i;let a=new Date;this.selectedMonth=a.getMonth(),this.selectedYear=a.getFullYear()}ngOnInit(){this.peopleService.people$.subscribe(e=>this.people=e),this.categoryService.categories$.subscribe(e=>this.categories=e),this.expenseService.expenses$.subscribe(e=>{let t=new Set(e.map(i=>parseInt(i.date.substring(0,4),10)));this.availableYears=Array.from(t).sort((i,a)=>a-i)}),this.loadData()}onPeriodChange(){this.loadData()}onLocalFilterChange(){}loadData(){this.loading=!0,this.querySub?.unsubscribe(),this.querySub=this.expenseService.queryExpenses(this.selectedYear,this.selectedMonth).subscribe(e=>{this.expenses=e,this.loading=!1})}get filteredExpenses(){return this.expenses.filter(e=>!(this.selectedPerson&&e.who!==this.selectedPerson||this.selectedCategory&&e.category!==this.selectedCategory))}get totalAmount(){return this.filteredExpenses.reduce((e,t)=>e+t.amount,0).toFixed(2)}get expenseCount(){return this.filteredExpenses.length}get averageAmount(){let e=this.filteredExpenses.reduce((t,i)=>t+i.amount,0);return this.filteredExpenses.length>0?(e/this.filteredExpenses.length).toFixed(2):"0.00"}get perPersonTotals(){let e=new Map;return this.filteredExpenses.forEach(t=>{e.set(t.who,(e.get(t.who)??0)+t.amount)}),Array.from(e.entries()).map(([t,i])=>({name:t,total:i.toFixed(2)})).sort((t,i)=>parseFloat(i.total)-parseFloat(t.total))}get perCategoryTotals(){let e=new Map;return this.filteredExpenses.forEach(t=>{e.set(t.category,(e.get(t.category)??0)+t.amount)}),Array.from(e.entries()).filter(([,t])=>t>0).map(([t,i])=>({name:t,total:i.toFixed(2)})).sort((t,i)=>parseFloat(i.total)-parseFloat(t.total))}palette=[{bg:"#E8F5E9",fg:"#1B5E20"},{bg:"#E0F2F1",fg:"#004D40"},{bg:"#E3F2FD",fg:"#0D47A1"},{bg:"#FFF8E1",fg:"#FF6F00"},{bg:"#F3E5F5",fg:"#4A148C"},{bg:"#FCE4EC",fg:"#880E4F"},{bg:"#F9FBE7",fg:"#827717"},{bg:"#E0F7FA",fg:"#006064"}];personColor={bg:"#FFF8E1",fg:"#FF6F00"};categoryColor={bg:"#FCE4EC",fg:"#880E4F"};getColor(e){if(!e)return{bg:"#f5f5f5",fg:"#111"};let t=Array.from(e).reduce((i,a)=>i+a.charCodeAt(0),0);return this.palette[t%this.palette.length]}static \u0275fac=function(t){return new(t||n)(ye(kt),ye(Dt),ye(St))};static \u0275cmp=x({type:n,selectors:[["app-overview"]],decls:39,vars:7,consts:[["mode","indeterminate"],[1,"filters-row"],["appearance","outline"],[3,"valueChange","selectionChange","value"],[3,"value"],["value",""],[1,"empty-state"],[1,"metrics-row"],[1,"metric-card"],[1,"metric-label"],[1,"metric-value"],[1,"breakdown-grid"],[1,"breakdown-card",3,"background","color"],[1,"breakdown-card"],[1,"breakdown-name"],[1,"breakdown-value"]],template:function(t,i){t&1&&(l(0,"mat-card"),v(1,Zc,1,0,"mat-progress-bar",0),l(2,"mat-card-header")(3,"mat-card-title"),h(4,"Riepilogo"),c()(),l(5,"mat-card-content")(6,"div",1)(7,"mat-form-field",2)(8,"mat-label"),h(9,"Mese"),c(),l(10,"mat-select",3),xe("valueChange",function(o){return we(i.selectedMonth,o)||(i.selectedMonth=o),o}),_("selectionChange",function(){return i.onPeriodChange()}),Q(11,Jc,2,2,"mat-option",4,Xc),c()(),l(13,"mat-form-field",2)(14,"mat-label"),h(15,"Anno"),c(),l(16,"mat-select",3),xe("valueChange",function(o){return we(i.selectedYear,o)||(i.selectedYear=o),o}),_("selectionChange",function(){return i.onPeriodChange()}),l(17,"mat-option",4),h(18,"Tutti"),c(),Q(19,ed,2,2,"mat-option",4,le),c()(),l(21,"mat-form-field",2)(22,"mat-label"),h(23,"Persona"),c(),l(24,"mat-select",3),xe("valueChange",function(o){return we(i.selectedPerson,o)||(i.selectedPerson=o),o}),_("selectionChange",function(){return i.onLocalFilterChange()}),l(25,"mat-option",5),h(26,"Tutte"),c(),Q(27,td,2,2,"mat-option",4,le),c()(),l(29,"mat-form-field",2)(30,"mat-label"),h(31,"Categoria"),c(),l(32,"mat-select",3),xe("valueChange",function(o){return we(i.selectedCategory,o)||(i.selectedCategory=o),o}),_("selectionChange",function(){return i.onLocalFilterChange()}),l(33,"mat-option",5),h(34,"Tutte"),c(),Q(35,id,2,2,"mat-option",4,le),c()()(),v(37,nd,2,0,"p",6)(38,ld,21,5),c()()),t&2&&(d(),y(i.loading?1:-1),d(9),Ce("value",i.selectedMonth),d(),G(i.months),d(5),Ce("value",i.selectedYear),d(),f("value",-1),d(2),G(i.availableYears),d(5),Ce("value",i.selectedPerson),d(3),G(i.people),d(5),Ce("value",i.selectedCategory),d(3),G(i.categories),d(2),y(!i.loading&&i.filteredExpenses.length===0?37:38))},dependencies:[ct,ot,st,lt,rt,We,Ye,dt,wt,Ct,Qe,Ar,ht,mt],styles:["[_nghost-%COMP%]{display:block;padding:8px 0}mat-card[_ngcontent-%COMP%]{padding:8px}.filters-row[_ngcontent-%COMP%]{display:flex;gap:16px;padding-top:16px;flex-wrap:wrap}.filters-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:140px;flex:1}.metrics-row[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0;flex-wrap:wrap}.metric-card[_ngcontent-%COMP%]{flex:1;min-width:160px;text-align:center;background:var(--mat-sys-primary-container, #d6e3ff)!important;color:var(--mat-sys-on-primary-container, #001b3f)!important;border-radius:16px!important;padding:6px 0}.metric-label[_ngcontent-%COMP%]{font-size:13px;font-weight:500;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.metric-value[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-top:4px}h3[_ngcontent-%COMP%]{margin-top:18px;margin-bottom:6px;font-weight:400;font-size:18px;color:var(--mat-sys-on-surface-variant, #44474e)}.breakdown-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}.breakdown-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:8px 12px;border-radius:12px;background:transparent;box-shadow:0 1px 2px #1018280a;border:1px solid rgba(16,24,40,.04)}.breakdown-name[_ngcontent-%COMP%]{font-size:13px;color:var(--mat-sys-on-surface-variant, #44474e);font-weight:500}.breakdown-value[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:var(--mat-sys-on-surface, #111316)}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:48px 0;color:var(--mat-sys-on-surface-variant, #44474e);font-size:16px}"]})}return n})();var cd=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],dd=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function md(n,r){n&1&&(l(0,"span",3),O(1,1),c())}function hd(n,r){n&1&&(l(0,"span",6),O(1,2),c())}var pd=["*"];var ud=new T("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Or=new T("MatChipAvatar"),Pr=new T("MatChipTrailingIcon"),Lr=new T("MatChipEdit"),da=new T("MatChipRemove"),Vr=new T("MatChip"),Br=(()=>{class n{_elementRef=s(R);_parentChip=s(Vr);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){s(Fe).load(Je),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=S({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(t,i){t&2&&(M("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),I("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",C],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ie(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),Nr=(()=>{class n extends Br{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(t,i){t&1&&_("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(M("tabindex",i._getTabindex()),I("mdc-evolution-chip__action--presentational",!1))},features:[z]})}return n})();var rn=(()=>{class n extends Nr{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Z(n)))(i||n)}})();static \u0275dir=S({type:n,selectors:[["","matChipRemove",""]],hostAttrs:["role","button",1,"mat-mdc-chip-remove","mat-mdc-chip-trailing-icon","mat-focus-indicator","mdc-evolution-chip__icon","mdc-evolution-chip__icon--trailing"],hostVars:1,hostBindings:function(t,i){t&2&&M("aria-hidden",null)},features:[W([{provide:da,useExisting:n}]),z]})}return n})(),Ci=(()=>{class n{_changeDetectorRef=s(j);_elementRef=s(R);_tagName=s(Ra);_ngZone=s(He);_focusMonitor=s(Ft);_globalRippleOptions=s(vn,{optional:!0});_document=s(Te);_onFocus=new E;_onBlur=new E;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=de();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=s(Oe).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new w;destroyed=new w;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=s(oo);_injector=s(be);constructor(){let e=s(Fe);e.load(Je),e.load(bt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=ee(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let i=t._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(t,i,a){if(t&1&&_e(a,Or,5)(a,Lr,5)(a,Pr,5)(a,da,5)(a,Or,5)(a,Pr,5)(a,Lr,5)(a,da,5),t&2){let o;g(o=b())&&(i.leadingIcon=o.first),g(o=b())&&(i.editIcon=o.first),g(o=b())&&(i.trailingIcon=o.first),g(o=b())&&(i.removeIcon=o.first),g(o=b())&&(i._allLeadingIcons=o),g(o=b())&&(i._allTrailingIcons=o),g(o=b())&&(i._allEditIcons=o),g(o=b())&&(i._allRemoveIcons=o)}},viewQuery:function(t,i){if(t&1&&K(Nr,5),t&2){let a;g(a=b())&&(i.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(t,i){t&1&&_("keydown",function(o){return i._handleKeydown(o)}),t&2&&(Ue("id",i.id),M("role",i.role)("aria-label",i.ariaLabel),ce("mat-"+(i.color||"primary")),I("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",C],highlighted:[2,"highlighted","highlighted",C],disableRipple:[2,"disableRipple","disableRipple",C],disabled:[2,"disabled","disabled",C]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[W([{provide:Vr,useExisting:n}])],ngContentSelectors:dd,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(t,i){t&1&&($(cd),k(0,"span",0),l(1,"span",1)(2,"span",2),v(3,md,2,0,"span",3),l(4,"span",4),O(5),k(6,"span",5),c()()(),v(7,hd,2,0,"span",6)),t&2&&(d(3),y(i.leadingIcon?3:-1),d(4),y(i._hasTrailingIcon()?7:-1))},dependencies:[Br],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var sn=(()=>{class n{_elementRef=s(R);_changeDetectorRef=s(j);_dir=s(ke,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new E;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Mi;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Me(null),Et(()=>ee(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains("mat-mdc-chip"))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Me(this._chips)).subscribe(e=>{let t=[];e.forEach(i=>i._getActions().forEach(a=>t.push(a))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new Pi(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(N(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(N(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Me(null),N(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(N(this._destroyed)).subscribe(e=>{let i=this._chips.toArray().indexOf(e.chip),a=e.chip._hasFocus(),o=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),m=a||o;this._isValidIndex(i)&&m&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["mat-chip-set"]],contentQueries:function(t,i,a){if(t&1&&_e(a,Ci,5),t&2){let o;g(o=b())&&(i._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(t,i){t&1&&_("keydown",function(o){return i._handleKeydown(o)}),t&2&&M("role",i.role)},inputs:{disabled:[2,"disabled","disabled",C],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ie(e)]},ngContentSelectors:pd,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(t,i){t&1&&($(),ie(0,"div",0),O(1),ne())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ln=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=B({type:n});static \u0275inj=V({providers:[Bi,{provide:ud,useValue:{separatorKeyCodes:[13]}}],imports:[qt,q]})}return n})();function _d(n,r){n&1&&k(0,"mat-progress-bar",0)}function fd(n,r){n&1&&(l(0,"p",5),h(1,"Nessuna persona aggiunta."),c())}function gd(n,r){if(n&1){let e=J();l(0,"mat-chip"),h(1),l(2,"button",6),_("click",function(){let i=P(e).$implicit,a=u(3);return L(a.remove(i))}),l(3,"mat-icon"),h(4,"cancel"),c()()()}if(n&2){let e=r.$implicit;d(),U(" ",e," ")}}function bd(n,r){if(n&1&&(l(0,"mat-chip-set"),Q(1,gd,5,1,"mat-chip",null,le),c()),n&2){let e=u();d(),G(e)}}function vd(n,r){n&1&&v(0,fd,2,0,"p",5)(1,bd,3,0,"mat-chip-set"),n&2&&y(r.length===0?0:1)}var Hr=(()=>{class n{peopleService=s(Dt);notify=s(pt);people$=this.peopleService.people$;newName="";adding=!1;add(){return re(this,null,function*(){this.adding=!0;try{yield this.peopleService.addPerson(this.newName),this.notify.show("Persona aggiunta!"),this.newName=""}catch(e){let t=e.message;t==="empty"?this.notify.show("Il nome non pu\xF2 essere vuoto","error"):t==="duplicate"&&this.notify.show("Persona gi\xE0 esistente","error")}finally{this.adding=!1}})}remove(e){return re(this,null,function*(){yield this.peopleService.removePerson(e),this.notify.show("Persona rimossa")})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-people"]],decls:15,vars:7,consts:[["mode","indeterminate"],[1,"add-row"],["appearance","outline"],["matInput","","placeholder","Nome persona",3,"ngModelChange","keydown.enter","ngModel","disabled"],["mat-flat-button","","color","primary",3,"click","disabled"],[1,"empty-state"],["matChipRemove","",3,"click"]],template:function(t,i){if(t&1&&(l(0,"mat-card"),v(1,_d,1,0,"mat-progress-bar",0),l(2,"mat-card-header")(3,"mat-card-title"),h(4,"Persone"),c()(),l(5,"mat-card-content")(6,"div",1)(7,"mat-form-field",2)(8,"mat-label"),h(9,"Nome persona"),c(),l(10,"input",3),xe("ngModelChange",function(o){return we(i.newName,o)||(i.newName=o),o}),_("keydown.enter",function(){return i.add()}),c()(),l(11,"button",4),_("click",function(){return i.add()}),h(12,"Aggiungi"),c()(),v(13,vd,2,1),Tt(14,"async"),c()()),t&2){let a;d(),y(i.adding?1:-1),d(9),Ce("ngModel",i.newName),f("disabled",i.adding),d(),f("disabled",i.adding),d(2),y((a=At(14,5,i.people$))?13:-1,a)}},dependencies:[Ri,jt,Yt,Ai,ct,ot,st,lt,rt,We,Ye,dt,Gt,Qt,Pe,Ne,ln,Ci,rn,sn,li,si,ht,mt,Ht],styles:["[_nghost-%COMP%]{display:block;padding:8px 0}mat-card[_ngcontent-%COMP%]{padding:8px}.add-row[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start;padding-top:20px}.add-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:48px 0;color:var(--mat-sys-on-surface-variant, #44474e);font-size:16px}mat-chip-set[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-wrap:wrap;gap:8px}"]})}return n})();function yd(n,r){n&1&&k(0,"mat-progress-bar",0)}function Cd(n,r){n&1&&(l(0,"p",5),h(1,"Nessuna categoria."),c())}function wd(n,r){if(n&1){let e=J();l(0,"mat-chip"),h(1),l(2,"button",6),_("click",function(){let i=P(e).$implicit,a=u(3);return L(a.remove(i))}),l(3,"mat-icon"),h(4,"cancel"),c()()()}if(n&2){let e=r.$implicit;d(),U(" ",e," ")}}function xd(n,r){if(n&1&&(l(0,"mat-chip-set"),Q(1,wd,5,1,"mat-chip",null,le),c()),n&2){let e=u();d(),G(e)}}function kd(n,r){n&1&&v(0,Cd,2,0,"p",5)(1,xd,3,0,"mat-chip-set"),n&2&&y(r.length===0?0:1)}var jr=(()=>{class n{categoryService=s(St);notify=s(pt);categories$=this.categoryService.categories$;newName="";adding=!1;add(){return re(this,null,function*(){this.adding=!0;try{yield this.categoryService.addCategory(this.newName),this.notify.show("Categoria aggiunta!"),this.newName=""}catch(e){let t=e.message;t==="empty"?this.notify.show("La categoria non pu\xF2 essere vuota","error"):t==="duplicate"&&this.notify.show("Categoria gi\xE0 esistente","error")}finally{this.adding=!1}})}remove(e){return re(this,null,function*(){yield this.categoryService.removeCategory(e),this.notify.show("Categoria rimossa")})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=x({type:n,selectors:[["app-categories"]],decls:15,vars:7,consts:[["mode","indeterminate"],[1,"add-row"],["appearance","outline"],["matInput","","placeholder","Nome categoria",3,"ngModelChange","keydown.enter","ngModel","disabled"],["mat-flat-button","","color","primary",3,"click","disabled"],[1,"empty-state"],["matChipRemove","",3,"click"]],template:function(t,i){if(t&1&&(l(0,"mat-card"),v(1,yd,1,0,"mat-progress-bar",0),l(2,"mat-card-header")(3,"mat-card-title"),h(4,"Categorie"),c()(),l(5,"mat-card-content")(6,"div",1)(7,"mat-form-field",2)(8,"mat-label"),h(9,"Nome categoria"),c(),l(10,"input",3),xe("ngModelChange",function(o){return we(i.newName,o)||(i.newName=o),o}),_("keydown.enter",function(){return i.add()}),c()(),l(11,"button",4),_("click",function(){return i.add()}),h(12,"Aggiungi"),c()(),v(13,kd,2,1),Tt(14,"async"),c()()),t&2){let a;d(),y(i.adding?1:-1),d(9),Ce("ngModel",i.newName),f("disabled",i.adding),d(),f("disabled",i.adding),d(2),y((a=At(14,5,i.categories$))?13:-1,a)}},dependencies:[Ri,jt,Yt,Ai,ct,ot,st,lt,rt,We,Ye,dt,Gt,Qt,Pe,Ne,ln,Ci,rn,sn,li,si,ht,mt,Ht],styles:["[_nghost-%COMP%]{display:block;padding:8px 0}mat-card[_ngcontent-%COMP%]{padding:8px}.add-row[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:flex-start;padding-top:20px}.add-row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:48px 0;color:var(--mat-sys-on-surface-variant, #44474e);font-size:16px}mat-chip-set[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-wrap:wrap;gap:8px}"]})}return n})();var gg=(()=>{class n{fb;expenseService;peopleService;categoryService;router;notify;constructor(e,t,i,a,o,m){this.fb=e,this.expenseService=t,this.peopleService=i,this.categoryService=a,this.router=o,this.notify=m}get userEmail(){return this.fb.currentUser?.email??""}ngOnInit(){this.expenseService.listenExpenses(),this.peopleService.listenPeople(),this.categoryService.listenCategories()}logout(){return re(this,null,function*(){try{yield this.fb.logout(),this.notify.show("Disconnesso con successo"),yield this.router.navigate(["/login"])}catch(e){console.error("Logout error",e),this.notify.show("Errore durante il logout")}})}static \u0275fac=function(t){return new(t||n)(ye(gt),ye(kt),ye(Dt),ye(St),ye(Pa),ye(pt))};static \u0275cmp=x({type:n,selectors:[["app-dashboard"]],decls:19,vars:1,consts:[[1,"toolbar"],[1,"toolbar-title"],[1,"spacer"],[1,"user-email"],["mat-button","",1,"logout-btn",3,"click"],[1,"tabs-container"],["label","Registra spesa"],["label","Storico"],["label","Riepilogo"],["label","Persone"],["label","Categorie"]],template:function(t,i){t&1&&(l(0,"mat-toolbar",0)(1,"span",1),h(2,"\u{1F4B0} Gestione Spese"),c(),k(3,"span",2),l(4,"span",3),h(5),c(),l(6,"button",4),_("click",function(){return i.logout()}),h(7,"Esci"),c()(),l(8,"mat-tab-group",5)(9,"mat-tab",6),k(10,"app-expense-form"),c(),l(11,"mat-tab",7),k(12,"app-expense-list"),c(),l(13,"mat-tab",8),k(14,"app-overview"),c(),l(15,"mat-tab",9),k(16,"app-people"),c(),l(17,"mat-tab",10),k(18,"app-categories"),c()()),t&2&&(d(5),F(i.userEmail))},dependencies:[yo,vo,Io,En,Mo,Pe,Ne,Jo,Er,Fr,Hr,jr],styles:["[_nghost-%COMP%]{display:block;min-height:100vh;background-color:var(--mat-sys-surface-container-lowest, #fdfcff)}.toolbar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1000;background:var(--mat-sys-primary, #005cbb);color:var(--mat-sys-on-primary, #fff);padding:0 24px;height:64px;box-shadow:0 2px 6px #00000026,0 1px 2px #0000001a}.toolbar-title[_ngcontent-%COMP%]{font-size:22px;font-weight:400;letter-spacing:0}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.user-email[_ngcontent-%COMP%]{margin-right:16px;font-size:14px;opacity:.85;font-weight:300}.logout-btn[_ngcontent-%COMP%]{color:var(--mat-sys-on-primary, #fff)!important;border:1px solid rgba(255,255,255,.3);border-radius:20px!important}.tabs-container[_ngcontent-%COMP%]{max-width:1024px;margin:0 auto;padding:24px 24px 48px}  .mat-mdc-tab-group{--mat-tab-header-active-label-text-color: var(--mat-sys-primary);--mat-tab-header-active-focus-label-text-color: var(--mat-sys-primary);--mat-tab-header-active-hover-label-text-color: var(--mat-sys-primary);--mdc-tab-indicator-active-indicator-color: var(--mat-sys-primary)}  .mat-mdc-tab-header{background:var(--mat-sys-surface-container, #efedf2);border-radius:12px;margin-bottom:24px;padding:4px}  .mdc-tab{border-radius:8px;min-width:90px}  .mdc-tab--active{background:var(--mat-sys-surface, #fdfcff);box-shadow:0 1px 3px #00000014}"]})}return n})();export{gg as DashboardComponent};
