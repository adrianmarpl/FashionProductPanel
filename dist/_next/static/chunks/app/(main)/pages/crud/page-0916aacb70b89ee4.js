(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3238],{7136:function(e,t,n){Promise.resolve().then(n.bind(n,9740))},9740:function(e,t,n){"use strict";n.r(t);var r=n(9268),l=n(3702),a=n(8298),o=n(8176),i=n(4390),s=n(1196),c=n(439),u=n(315),d=n(4631),p=n(8152),m=n(4046),f=n(8711),h=n(5942),g=n(6006),y=n(5504);t.default=()=>{let e={id:"",name:"",image:"",description:"",category:"",price:0,selected:!1,accept:!1},[t,n]=(0,g.useState)(null),[b,v]=(0,g.useState)(!1),[x,j]=(0,g.useState)(!1),[N,P]=(0,g.useState)(!1),[k,C]=(0,g.useState)(e),[S,w]=(0,g.useState)(null),[E,O]=(0,g.useState)(!1),[F,R]=(0,g.useState)(""),I=(0,g.useRef)(null),D=(0,g.useRef)(null);(0,g.useEffect)(()=>{y.M.getProducts().then(e=>n(e))},[]);let z=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),A=()=>{C(e),O(!1),v(!0)},K=()=>{O(!1),v(!1)},M=()=>{j(!1)},T=()=>{P(!1)},B=e=>{C({...e}),v(!0)},H=e=>{C(e),j(!0)},V=e=>{let n=-1;for(let r=0;r<(null==t?void 0:t.length);r++)if(t[r].id===e){n=r;break}return n},_=()=>{let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<5;n++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},q=()=>{var e;null===(e=D.current)||void 0===e||e.exportCSV()},G=()=>{P(!0)},L=e=>{let t={...k};t.category=e.value,C(t)},U=(e,t)=>{let n=e.target&&e.target.value||"",r={...k};r["".concat(t)]=n,C(r)},W=(e,t)=>{let n=e.value||0,r={...k};r["".concat(t)]=n,C(r)},Y=(0,r.jsxs)("div",{className:"flex flex-column md:flex-row md:justify-content-between md:align-items-center",children:[(0,r.jsx)("h5",{className:"m-0",children:"Manage Products"}),(0,r.jsxs)("span",{className:"block mt-2 md:mt-0 p-input-icon-left",children:[(0,r.jsx)("i",{className:"pi pi-search"}),(0,r.jsx)(u.o,{type:"search",onInput:e=>R(e.currentTarget.value),placeholder:"Search..."})]})]}),J=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.z,{label:"Cancel",icon:"pi pi-times",text:!0,onClick:K}),(0,r.jsx)(l.z,{label:"Save",icon:"pi pi-check",text:!0,onClick:()=>{if(O(!0),k.name.trim()){var r,l;let a=[...t],o={...k};if(k.id){let e=V(k.id);a[e]=o,null===(r=I.current)||void 0===r||r.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})}else o.id=_(),o.image="product-placeholder.svg",a.push(o),null===(l=I.current)||void 0===l||l.show({severity:"success",summary:"Successful",detail:"Product Created",life:3e3});n(a),v(!1),C(e)}}})]}),X=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.z,{label:"No",icon:"pi pi-times",text:!0,onClick:M}),(0,r.jsx)(l.z,{label:"Yes",icon:"pi pi-check",text:!0,onClick:()=>{var r;n(null==t?void 0:t.filter(e=>e.id!==k.id)),j(!1),C(e),null===(r=I.current)||void 0===r||r.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}})]}),Q=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.z,{label:"No",icon:"pi pi-times",text:!0,onClick:T}),(0,r.jsx)(l.z,{label:"Yes",icon:"pi pi-check",text:!0,onClick:()=>{var e;n(null==t?void 0:t.filter(e=>!(null==S?void 0:S.includes(e)))),P(!1),w(null),null===(e=I.current)||void 0===e||e.show({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})]});return(0,r.jsx)("div",{className:"grid crud-demo",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)(m.F,{ref:I}),(0,r.jsx)(f.o,{className:"mb-4",left:()=>(0,r.jsx)(g.Fragment,{children:(0,r.jsxs)("div",{className:"my-2",children:[(0,r.jsx)(l.z,{label:"New",icon:"pi pi-plus",severity:"success",className:" mr-2",onClick:A}),(0,r.jsx)(l.z,{label:"Delete",icon:"pi pi-trash",severity:"danger",onClick:G,disabled:!S||!S.length})]})}),right:()=>(0,r.jsxs)(g.Fragment,{children:[(0,r.jsx)(s.p,{mode:"basic",accept:"image/*",maxFileSize:1e6,chooseLabel:"Import",className:"mr-2 inline-block"}),(0,r.jsx)(l.z,{label:"Export",icon:"pi pi-upload",severity:"help",onClick:q})]})}),(0,r.jsxs)(o.w,{ref:D,value:t,selection:S,onSelectionChange:e=>w(e.value),dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],className:"datatable-responsive",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:F,emptyMessage:"No products found.",header:Y,responsiveLayout:"scroll",children:[(0,r.jsx)(a.s,{selectionMode:"multiple",headerStyle:{width:"4rem"}}),(0,r.jsx)(a.s,{field:"code",header:"Code",sortable:!0,body:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"p-column-title",children:"Code"}),e.code]}),headerStyle:{minWidth:"15rem"}}),(0,r.jsx)(a.s,{field:"name",header:"Name",sortable:!0,body:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"p-column-title",children:"Name"}),e.name]}),headerStyle:{minWidth:"15rem"}}),(0,r.jsx)(a.s,{header:"Image",body:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"p-column-title",children:"Image"}),(0,r.jsx)("img",{src:"/demo/images/product/".concat(e.image),alt:e.image,className:"shadow-2",width:"100"})]})}),(0,r.jsx)(a.s,{field:"price",header:"Price",body:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"p-column-title",children:"Price"}),z(e.price)]}),sortable:!0}),(0,r.jsx)(a.s,{field:"category",header:"Category",sortable:!0,body:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"p-column-title",children:"Category"}),e.category]}),headerStyle:{minWidth:"10rem"}}),(0,r.jsx)(a.s,{field:"rating",header:"Reviews",body:e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"p-column-title",children:"Reviews"})}),sortable:!0}),(0,r.jsx)(a.s,{field:"inventoryStatus",header:"Status",body:e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{className:"p-column-title",children:"Status"})}),sortable:!0,headerStyle:{minWidth:"10rem"}}),(0,r.jsx)(a.s,{body:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.z,{icon:"pi pi-pencil",rounded:!0,severity:"success",className:"mr-2",onClick:()=>B(e)}),(0,r.jsx)(l.z,{icon:"pi pi-trash",rounded:!0,severity:"warning",onClick:()=>H(e)})]}),headerStyle:{minWidth:"10rem"}})]}),(0,r.jsxs)(i.V,{visible:b,style:{width:"450px"},header:"Product Details",modal:!0,className:"p-fluid",footer:J,onHide:K,children:[k.image&&(0,r.jsx)("img",{src:"/demo/images/product/".concat(k.image),alt:k.image,width:"150",className:"mt-0 mx-auto mb-5 block shadow-2"}),(0,r.jsxs)("div",{className:"field",children:[(0,r.jsx)("label",{htmlFor:"name",children:"Name"}),(0,r.jsx)(u.o,{id:"name",value:k.name,onChange:e=>U(e,"name"),required:!0,autoFocus:!0,className:(0,h.AK)({"p-invalid":E&&!k.name})}),E&&!k.name&&(0,r.jsx)("small",{className:"p-invalid",children:"Name is required."})]}),(0,r.jsxs)("div",{className:"field",children:[(0,r.jsx)("label",{htmlFor:"description",children:"Description"}),(0,r.jsx)(d.g,{id:"description",value:k.description,onChange:e=>U(e,"description"),required:!0,rows:3,cols:20})]}),(0,r.jsxs)("div",{className:"field",children:[(0,r.jsx)("label",{className:"mb-3",children:"Category"}),(0,r.jsxs)("div",{className:"formgrid grid",children:[(0,r.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,r.jsx)(p.E,{inputId:"category1",name:"category",value:"Accessories",onChange:L,checked:"Accessories"===k.category}),(0,r.jsx)("label",{htmlFor:"category1",children:"Accessories"})]}),(0,r.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,r.jsx)(p.E,{inputId:"category2",name:"category",value:"Clothing",onChange:L,checked:"Clothing"===k.category}),(0,r.jsx)("label",{htmlFor:"category2",children:"Clothing"})]}),(0,r.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,r.jsx)(p.E,{inputId:"category3",name:"category",value:"Electronics",onChange:L,checked:"Electronics"===k.category}),(0,r.jsx)("label",{htmlFor:"category3",children:"Electronics"})]}),(0,r.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,r.jsx)(p.E,{inputId:"category4",name:"category",value:"Fitness",onChange:L,checked:"Fitness"===k.category}),(0,r.jsx)("label",{htmlFor:"category4",children:"Fitness"})]})]})]}),(0,r.jsxs)("div",{className:"formgrid grid",children:[(0,r.jsxs)("div",{className:"field col",children:[(0,r.jsx)("label",{htmlFor:"price",children:"Price"}),(0,r.jsx)(c.R,{id:"price",value:k.price,onValueChange:e=>W(e,"price"),mode:"currency",currency:"USD",locale:"en-US"})]}),(0,r.jsxs)("div",{className:"field col",children:[(0,r.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),(0,r.jsx)(c.R,{id:"quantity",value:k.quantity,onValueChange:e=>W(e,"quantity")})]})]})]}),(0,r.jsx)(i.V,{visible:x,style:{width:"450px"},header:"Confirm",modal:!0,footer:X,onHide:M,children:(0,r.jsxs)("div",{className:"flex align-items-center justify-content-center",children:[(0,r.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),k&&(0,r.jsxs)("span",{children:["Are you sure you want to delete ",(0,r.jsx)("b",{children:k.name}),"?"]})]})}),(0,r.jsx)(i.V,{visible:N,style:{width:"450px"},header:"Confirm",modal:!0,footer:Q,onHide:T,children:(0,r.jsxs)("div",{className:"flex align-items-center justify-content-center",children:[(0,r.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),k&&(0,r.jsx)("span",{children:"Are you sure you want to delete the selected products?"})]})})]})})})}},5504:function(e,t,n){"use strict";n.d(t,{M:function(){return r}});let r={getProductsSmall:()=>fetch("/demo/data/products-small.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data),getProducts:()=>fetch("/demo/data/products.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data),getProductsWithOrdersSmall:()=>fetch("/demo/data/products-orders-small.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>e.data)}},4631:function(e,t,n){"use strict";n.d(t,{g:function(){return d}});var r=n(6006),l=n(5497),a=n(9424),o=n(5942),i=n(6878),s=n(3142);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=i.V.extend({defaultProps:{__TYPE:"InputTextarea",autoResize:!1,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0}}),d=r.memo(r.forwardRef(function(e,t){var n=r.useContext(s.Ou),i=u.getProps(e,n),d=r.useRef(t),p=r.useRef(0),m=u.setMetaData({props:i}).ptm,f=function(e){var t=d.current;t&&o.p7.isVisible(t)&&(p.current||(p.current=t.scrollHeight,t.style.overflow="hidden"),(p.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",p.current=t.scrollHeight))};r.useEffect(function(){o.gb.combinedRefs(d,t)},[d,t]),r.useEffect(function(){i.autoResize&&f(!0)},[i.autoResize]);var h=r.useMemo(function(){return o.gb.isNotEmpty(i.value)||o.gb.isNotEmpty(i.defaultValue)},[i.value,i.defaultValue]),g=o.gb.isNotEmpty(i.tooltip),y=(0,o.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":i.disabled,"p-filled":h,"p-inputtextarea-resizable":i.autoResize},i.className),b=(0,o.dG)({ref:d,className:y,onFocus:function(e){i.autoResize&&f(),i.onFocus&&i.onFocus(e)},onBlur:function(e){i.autoResize&&f(),i.onBlur&&i.onBlur(e)},onKeyUp:function(e){i.autoResize&&f(),i.onKeyUp&&i.onKeyUp(e)},onKeyDown:function(e){i.onKeyDown&&i.onKeyDown(e),i.keyfilter&&l.F.onKeyPress(e,i.keyfilter,i.validateOnly)},onBeforeInput:function(e){i.onBeforeInput&&i.onBeforeInput(e),i.keyfilter&&l.F.onBeforeInput(e,i.keyfilter,i.validateOnly)},onInput:function(e){var t=e.target;i.autoResize&&f(o.gb.isEmpty(t.value)),i.onInput&&i.onInput(e),o.gb.isNotEmpty(t.value)?o.p7.addClass(t,"p-filled"):o.p7.removeClass(t,"p-filled")},onPaste:function(e){i.onPaste&&i.onPaste(e),i.keyfilter&&l.F.onPaste(e,i.keyfilter,i.validateOnly)}},u.getOtherProps(i),m("root"));return r.createElement(r.Fragment,null,r.createElement("textarea",b),g&&r.createElement(a.u,c({target:d,content:i.tooltip},i.tooltipOptions,{pt:m("tooltip")})))}));d.displayName="InputTextarea"},8152:function(e,t,n){"use strict";n.d(t,{E:function(){return f}});var r=n(6006),l=n(465),a=n(9424),o=n(5942),i=n(6878),s=n(3142);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p=i.V.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0}});function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var f=r.memo(r.forwardRef(function(e,t){var n,i=r.useContext(s.Ou),f=p.getProps(e,i),h=function(e){if(Array.isArray(e))return e}(n=r.useState(!1))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);s=!0);}catch(e){c=!0,l=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw l}}return i}}(n,2)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),g=h[0],y=h[1],b=r.useRef(null),v=r.useRef(f.inputRef),x=p.setMetaData({props:f,state:{focused:g}}).ptm,j=function(e){N(e)},N=function(e){if(!f.disabled&&(f.onChange||f.onClick)){var t=f.checked,n=e.target instanceof HTMLDivElement,r=e.target===v.current&&e.target.checked!==t,l=n&&o.p7.hasClass(b.current,"p-radiobutton-checked")===t&&!t;if(r||l){var a=!t,i={originalEvent:e,value:f.value,checked:a,stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},target:{type:"radio",name:f.name,id:f.id,value:f.value,checked:a}};if(f.onClick&&f.onClick(i),e.defaultPrevented)return;f.onChange&&f.onChange(i),l&&(v.current.checked=a)}o.p7.focus(v.current),e.preventDefault()}};r.useEffect(function(){v.current&&(v.current.checked=f.checked)},[f.checked]),r.useEffect(function(){o.gb.combinedRefs(v,f.inputRef)},[v,f.inputRef]),(0,l.nw)(function(){f.autoFocus&&o.p7.focus(v.current,f.autoFocus)}),r.useImperativeHandle(t,function(){return{props:f,select:j,focus:function(){return o.p7.focus(v.current)},getElement:function(){return b.current},getInput:function(){return v.current}}});var P=o.gb.isNotEmpty(f.tooltip),k=p.getOtherProps(f),C=o.gb.reduceKeys(k,o.p7.ARIA_PROPS),S=(0,o.AK)("p-radiobutton p-component",{"p-radiobutton-checked":f.checked,"p-radiobutton-disabled":f.disabled,"p-radiobutton-focused":g},f.className),w=(0,o.AK)("p-radiobutton-box",{"p-highlight":f.checked,"p-disabled":f.disabled,"p-focus":g}),E=(0,o.dG)({ref:b,id:f.id,className:S,style:f.style,onClick:N},p.getOtherProps(f),x("root")),O=(0,o.dG)({className:"p-hidden-accessible"},x("hiddenInputWrapper")),F=(0,o.dG)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){!function(e,t,n){var r;r=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==u(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===u(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({ref:v,id:f.inputId,type:"radio",name:f.name,defaultChecked:f.checked,onFocus:function(){y(!0)},onBlur:function(){y(!1)},onKeyDown:function(e){("Space"===e.code||" "===e.key)&&N(e)},disabled:f.disabled,required:f.required,tabIndex:f.tabIndex},C),x("hiddenInput")),R=(0,o.dG)({className:w},x("input")),I=(0,o.dG)({className:"p-radiobutton-icon"},x("icon"));return r.createElement(r.Fragment,null,r.createElement("div",E,r.createElement("div",O,r.createElement("input",F)),r.createElement("div",R,r.createElement("div",I))),P&&r.createElement(a.u,c({target:b,content:f.tooltip},f.tooltipOptions,{pt:x("tooltip")})))}));f.displayName="RadioButton"},8711:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var r=n(6006),l=n(5942),a=n(6878),o=n(3142),i=a.V.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0}}),s=r.memo(r.forwardRef(function(e,t){var n=r.useContext(o.Ou),a=i.getProps(e,n),s=r.useRef(null),c=l.gb.getJSXElement(a.left||a.start,a),u=l.gb.getJSXElement(a.center,a),d=l.gb.getJSXElement(a.right||a.end,a),p=i.setMetaData({props:a}).ptm;r.useImperativeHandle(t,function(){return{props:a,getElement:function(){return s.current}}});var m=(0,l.dG)({className:"p-toolbar-group-start p-toolbar-group-left"},p("start")),f=(0,l.dG)({className:"p-toolbar-group-center"},p("center")),h=(0,l.dG)({className:"p-toolbar-group-end p-toolbar-group-right"},p("end")),g=(0,l.dG)({id:a.id,ref:s,style:a.style,className:(0,l.AK)("p-toolbar p-component",a.className),role:"toolbar"},i.getOtherProps(a),p("root"));return r.createElement("div",g,r.createElement("div",m,c),r.createElement("div",f,u),r.createElement("div",h,d))}));s.displayName="Toolbar"}},function(e){e.O(0,[8123,434,2713,9424,543,2951,9683,3081,439,556,8523,2698,4046,1196,1192,9253,5769,1744],function(){return e(e.s=7136)}),_N_E=e.O()}]);