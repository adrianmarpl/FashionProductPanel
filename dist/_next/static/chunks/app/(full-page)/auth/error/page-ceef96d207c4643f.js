(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2427],{6984:function(e,t,n){Promise.resolve().then(n.bind(n,2919))},2919:function(e,t,n){"use strict";n.r(t);var r=n(9268),o=n(6008);n(6006);var l=n(3702);t.default=()=>{let e=(0,o.useRouter)();return(0,r.jsx)("div",{className:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",children:(0,r.jsxs)("div",{className:"flex flex-column align-items-center justify-content-center",children:[(0,r.jsx)("img",{src:"/demo/images/error/logo-error.svg",alt:"Sakai logo",className:"mb-5 w-6rem flex-shrink-0"}),(0,r.jsx)("div",{style:{borderRadius:"56px",padding:"0.3rem",background:"linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)"},children:(0,r.jsxs)("div",{className:"w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center",style:{borderRadius:"53px"},children:[(0,r.jsx)("div",{className:"flex justify-content-center align-items-center bg-pink-500 border-circle",style:{height:"3.2rem",width:"3.2rem"},children:(0,r.jsx)("i",{className:"pi pi-fw pi-exclamation-circle text-2xl text-white"})}),(0,r.jsx)("h1",{className:"text-900 font-bold text-5xl mb-2",children:"Error Occured"}),(0,r.jsx)("div",{className:"text-600 mb-5",children:"Something went wrong."}),(0,r.jsx)("img",{src:"/demo/images/error/asset-error.svg",alt:"Error",className:"mb-5",width:"80%"}),(0,r.jsx)(l.z,{icon:"pi pi-arrow-left",label:"Go to Dashboard",text:!0,onClick:()=>e.push("/")})]})})]})})}},6008:function(e,t,n){e.exports=n(794)},3702:function(e,t,n){"use strict";n.d(t,{z:function(){return f}});var r=n(6006),o=n(2124),l=n(9347),i=n(9424),a=n(5942),s=n(6878),c=n(3142);function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n){var r;return r=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==b(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===b(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=s.V.extend({defaultProps:{__TYPE:"Button",badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0}});function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=r.memo(r.forwardRef(function(e,t){var n,s,b,f,g=r.useContext(c.Ou),y=p.getProps(e,g),v=p.setMetaData({props:y}).ptm,h=r.useRef(t);if(r.useEffect(function(){a.gb.combinedRefs(h,t)},[h,t]),!1===y.visible)return null;var x=y.disabled||y.loading,O=!x||y.tooltipOptions&&y.tooltipOptions.showOnDisabled,j=a.gb.isNotEmpty(y.tooltip)&&O,N={large:"lg",small:"sm"}[y.size],w=(0,a.AK)("p-button p-component",y.className,d(d(d({"p-button-icon-only":(y.icon||y.loading)&&!y.label&&!y.children,"p-button-vertical":("top"===y.iconPos||"bottom"===y.iconPos)&&y.label,"p-disabled":x,"p-button-loading":y.loading,"p-button-outlined":y.outlined,"p-button-raised":y.raised,"p-button-link":y.link,"p-button-text":y.text,"p-button-rounded":y.rounded,"p-button-loading-label-only":y.loading&&!y.icon&&y.label},"p-button-loading-".concat(y.iconPos),y.loading&&y.label),"p-button-".concat(N),N),"p-button-".concat(y.severity),y.severity)),P=(n=(0,a.AK)("p-button-icon p-c",d({},"p-button-icon-".concat(y.iconPos),y.label)),s=(0,a.dG)({className:n},v("icon")),n=(0,a.AK)(n,{"p-button-loading-icon":y.loading}),b=(0,a.dG)({className:n},v("loadingIcon")),f=y.loading?y.loadingIcon||r.createElement(o.L,u({},b,{spin:!0})):y.icon,a.Cz.getJSXIcon(f,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},s),{props:y})),E=function(){if(y.label){var e=(0,a.dG)({className:"p-button-label p-c"},v("label"));return r.createElement("span",e,y.label)}return!y.children&&!y.label&&r.createElement("span",{className:"p-button-label p-c",dangerouslySetInnerHTML:{__html:"&nbsp;"}})}(),S=function(){if(y.badge){var e=(0,a.AK)("p-badge",y.badgeClassName),t=(0,a.dG)({className:e},v("badge"));return r.createElement("span",t,y.badge)}return null}(),k=y.label?y.label+(y.badge?" "+y.badge:""):y["aria-label"],_=(0,a.dG)({ref:h,"aria-label":k,className:w,disabled:x},p.getOtherProps(y),v("root"));return r.createElement(r.Fragment,null,r.createElement("button",_,P,E,y.children,S,r.createElement(l.H,null)),j&&r.createElement(i.u,u({target:h,content:y.tooltip},y.tooltipOptions,{pt:v("tooltip")})))}));f.displayName="Button"}},function(e){e.O(0,[434,2713,9424,543,9253,5769,1744],function(){return e(e.s=6984)}),_N_E=e.O()}]);