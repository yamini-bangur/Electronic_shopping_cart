(function(e){function t(t){for(var n,o,a=t[0],u=t[1],s=t[2],l=0,p=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==c[u]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0668":function(e,t,r){},"06ce":function(e,t,r){"use strict";r("9deb")},1129:function(e,t,r){e.exports=r.p+"img/default-product-image.c38d615b.png"},"13cf":function(e,t,r){"use strict";r("9a19")},"249d":function(e,t,r){"use strict";r("70f2")},"250a":function(e,t,r){"use strict";r("8851")},"2aba":function(e,t,r){},"471f":function(e,t,r){},"483b":function(e,t,r){},4960:function(e,t,r){"use strict";r("9732")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(e,t,r,c,i,o){var a=Object(n["B"])("the-header"),u=Object(n["B"])("router-view");return Object(n["t"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(a),Object(n["j"])(u)],64)}var i={},o=(r("f4b0"),r("6b0d")),a=r.n(o);const u=a()(i,[["render",c]]);var s=u,d=r("6c02"),l=function(e){return Object(n["w"])("data-v-143cfce7"),e=e(),Object(n["u"])(),e},p={id:"mainContainer"},b=Object(n["i"])("Electronic Appliances "),f={class:"addProduct"},j=l((function(){return Object(n["h"])("i",{class:"fa fa-plus","aria-hidden":"true"},null,-1)})),h={key:0},O={id:"containerClothing"};function g(e,t,r,c,i,o){var a=Object(n["B"])("base-dialog"),u=Object(n["B"])("base-button"),s=Object(n["B"])("base-spinner"),d=Object(n["B"])("product-items"),l=Object(n["B"])("BasePagination");return Object(n["t"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(a,{show:!!i.error,title:"An error occurred!",onClose:o.handleError},{default:Object(n["H"])((function(){return[Object(n["h"])("p",null,Object(n["D"])(i.error),1)]})),_:1},8,["show","onClose"]),Object(n["j"])(a,{show:i.deleteSuccess,title:"Success",onClose:o.handleError},{default:Object(n["H"])((function(){return[Object(n["h"])("p",null,Object(n["D"])(i.deleteSuccessMsg),1)]})),_:1},8,["show","onClose"]),Object(n["h"])("div",p,[Object(n["h"])("h1",null,[b,Object(n["h"])("span",f,[Object(n["j"])(u,{onClick:o.addProductLink,title:"Add Product",mode:"flat"},{default:Object(n["H"])((function(){return[j]})),_:1},8,["onClick"])])]),i.isLoading?(Object(n["t"])(),Object(n["g"])("div",h,[Object(n["j"])(s)])):Object(n["f"])("",!0),Object(n["h"])("div",O,[(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["z"])(o.products,(function(e,t){return Object(n["t"])(),Object(n["e"])(d,{key:e.id,id:e.id,images:e.images,productName:e.productName,brand:e.brand,price:e.price,onDeleteProduct:function(e){return o.deleteProduct(t)}},null,8,["id","images","productName","brand","price","onDeleteProduct"])})),128))]),Object(n["j"])(l,{"current-page":i.currentPage,"page-count":i.pageCount,class:"product_list",onNextPage:t[0]||(t[0]=function(e){return o.pageChangeHandle("next")}),onPreviousPage:t[1]||(t[1]=function(e){return o.pageChangeHandle("previous")}),onLoadPage:o.pageChangeHandle},null,8,["current-page","page-count","onLoadPage"])])],64)}var m=r("1da1"),v=(r("4795"),r("96cf"),function(e){return Object(n["w"])("data-v-aaf67e14"),e=e(),Object(n["u"])(),e}),P={id:"box"},w=["src"],y={id:"details"},k=Object(n["i"])("Add to cart"),x=v((function(){return Object(n["h"])("i",{class:"fas fa-edit editProduct"},null,-1)})),_=v((function(){return Object(n["h"])("i",{class:"fas fa-trash-alt"},null,-1)}));function B(e,t,r,c,i,o){var a=Object(n["B"])("base-button");return Object(n["t"])(),Object(n["g"])("div",P,[Object(n["j"])(a,{link:"",to:o.productDetail()},{default:Object(n["H"])((function(){return[Object(n["h"])("img",{src:i.src,onError:t[0]||(t[0]=function(){return o.defaultImage&&o.defaultImage.apply(o,arguments)})},null,40,w)]})),_:1},8,["to"]),Object(n["h"])("div",y,[Object(n["h"])("h3",null,[Object(n["j"])(a,{link:"",to:o.productDetail()},{default:Object(n["H"])((function(){return[Object(n["i"])(Object(n["D"])(r.productName),1)]})),_:1},8,["to"])]),Object(n["h"])("h4",null,Object(n["D"])(r.brand),1),Object(n["h"])("h2",null,"$ "+Object(n["D"])(r.price),1)]),Object(n["j"])(a,null,{default:Object(n["H"])((function(){return[k]})),_:1}),Object(n["j"])(a,{to:o.editProduct(),mode:"flat",link:""},{default:Object(n["H"])((function(){return[x]})),_:1},8,["to"]),Object(n["j"])(a,{mode:"flat",onClick:o.deleteProduct},{default:Object(n["H"])((function(){return[_]})),_:1},8,["onClick"])])}r("9911");var C=["title"];function S(e,t,r,c,i,o){var a=Object(n["B"])("router-link");return r.link?(Object(n["t"])(),Object(n["e"])(a,{key:1,to:r.to,class:Object(n["p"])(r.mode)},{default:Object(n["H"])((function(){return[Object(n["A"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["to","class"])):(Object(n["t"])(),Object(n["g"])("button",{key:0,class:Object(n["p"])(r.mode),title:r.title},[Object(n["A"])(e.$slots,"default",{},void 0,!0)],10,C))}var D={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"},title:{type:String,required:!1,default:""}}};r("e733");const I=a()(D,[["render",S],["__scopeId","data-v-943e7e2c"]]);var R=I,N={emits:["delete-Product"],components:{BaseButton:R},props:["id","images","productName","brand","price"],data:function(){return{link:!0,isLoading:!1,src:"",error:null}},watch:{image:function(e){this.src=e}},created:function(){this.getSrc()},methods:{getSrc:function(){this.images.length>0?this.src="https://electronics-shopping.herokuapp.com/uploads/".concat(this.images[0].img):this.defaultImage()},editProduct:function(){return"/editProduct/"+this.id},productDetail:function(){return"/products/"+this.id},defaultImage:function(){this.src=r("1129")},deleteProduct:function(){this.$emit("delete-Product")}}};r("4960");const $=a()(N,[["render",B],["__scopeId","data-v-aaf67e14"]]);var H=$,L=(r("c7cd"),{key:1,open:""}),q={key:0},E=Object(n["i"])("Close");function U(e,t,r,c,i,o){var a=Object(n["B"])("base-button");return Object(n["t"])(),Object(n["e"])(n["b"],{to:"body"},[r.show?(Object(n["t"])(),Object(n["g"])("div",{key:0,onClick:t[0]||(t[0]=function(){return o.tryClose&&o.tryClose.apply(o,arguments)}),class:"backdrop"})):Object(n["f"])("",!0),r.show?(Object(n["t"])(),Object(n["g"])("dialog",L,[Object(n["h"])("header",null,[Object(n["A"])(e.$slots,"header",{},(function(){return[Object(n["h"])("h2",null,Object(n["D"])(r.title),1)]}),!0)]),Object(n["h"])("section",null,[Object(n["A"])(e.$slots,"default",{},void 0,!0)]),r.fixed?Object(n["f"])("",!0):(Object(n["t"])(),Object(n["g"])("menu",q,[Object(n["A"])(e.$slots,"actions",{},(function(){return[Object(n["j"])(a,{onClick:o.tryClose},{default:Object(n["H"])((function(){return[E]})),_:1},8,["onClick"])]}),!0)]))])):Object(n["f"])("",!0)])}var A={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1}},emits:["close"],methods:{tryClose:function(){this.fixed||this.$emit("close")}}};r("f51e");const F=a()(A,[["render",U],["__scopeId","data-v-455776bb"]]);var T=F,V=function(e){return Object(n["w"])("data-v-2be0b7d1"),e=e(),Object(n["u"])(),e},M={class:"spinner"},J=V((function(){return Object(n["h"])("div",{class:"lds-roller"},[Object(n["h"])("div"),Object(n["h"])("div"),Object(n["h"])("div"),Object(n["h"])("div"),Object(n["h"])("div"),Object(n["h"])("div"),Object(n["h"])("div"),Object(n["h"])("div")],-1)})),z=[J];function G(e,t){return Object(n["t"])(),Object(n["g"])("div",M,z)}r("a6ee");const K={},Q=a()(K,[["render",G],["__scopeId","data-v-2be0b7d1"]]);var W=Q,X={class:"base-pagination"},Y=Object(n["i"])(" Previous "),Z=Object(n["i"])(" Next ");function ee(e,t,r,c,i,o){var a=Object(n["B"])("base-button"),u=Object(n["B"])("BasePaginationTrigger");return Object(n["t"])(),Object(n["g"])("div",X,[Object(n["j"])(a,{disabled:o.isPreviousButtonDisabled,onClick:o.previousPage},{default:Object(n["H"])((function(){return[Y]})),_:1},8,["disabled","onClick"]),(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["z"])(o.paginationTriggers,(function(e){return Object(n["t"])(),Object(n["e"])(u,{class:Object(n["p"])([{outline:e===r.currentPage},"base-pagination__description"]),key:e,pageNumber:e,onLoadPage:o.onLoadPage},null,8,["class","pageNumber","onLoadPage"])})),128)),Object(n["j"])(a,{disabled:o.isNextButtonDisabled,onClick:o.nextPage},{default:Object(n["H"])((function(){return[Z]})),_:1},8,["disabled","onClick"])])}r("a9e3"),r("cb29"),r("d81d"),r("26e9");function te(e,t,r,c,i,o){var a=Object(n["B"])("base-button");return Object(n["t"])(),Object(n["e"])(a,{class:"base-pagination-trigger",mode:"flat",onClick:o.onClick},{default:Object(n["H"])((function(){return[Object(n["i"])(Object(n["D"])(r.pageNumber),1)]})),_:1},8,["onClick"])}var re={components:{BaseButton:R},props:{pageNumber:{type:Number,required:!0}},methods:{onClick:function(){this.$emit("loadPage",this.pageNumber)}}};const ne=a()(re,[["render",te]]);var ce=ne,ie={components:{BasePaginationTrigger:ce,BaseButton:R},props:{currentPage:{type:Number,required:!0},pageCount:{type:Number,required:!0},visiblePagesCount:{type:Number,default:5}},computed:{isPreviousButtonDisabled:function(){return 1===this.currentPage},isNextButtonDisabled:function(){return this.currentPage===this.pageCount},paginationTriggers:function(){var e=this.currentPage,t=this.pageCount,r=this.visiblePagesCount,n=(r-1)/2,c=Array(this.visiblePagesCount-1).fill(0);if(e<=n+1){c[0]=1;var i=c.map((function(e,t){return c[0]+t}));return i.push(t),i}if(e>=t-n+1){var o=c.map((function(e,r){return t-r}));return o.reverse().unshift(1),o}c[0]=e-n+1;var a=c.map((function(e,t){return c[0]+t}));return a.unshift(1),a[a.length-1]=t,a}},methods:{nextPage:function(){this.$emit("nextPage")},previousPage:function(){this.$emit("previousPage")},onLoadPage:function(e){this.$emit("loadPage",e)}}};r("d4ba");const oe=a()(ie,[["render",ee],["__scopeId","data-v-45ce607a"]]);var ae=oe,ue={components:{ProductItems:H,BaseDialog:T,BaseSpinner:W,BaseButton:R,BasePagination:ae},data:function(){return{isLoading:!0,error:null,deleteSuccess:!1,deleteSuccessMsg:"",itemPerPage:3,currentPage:1,pageCount:0}},computed:{products:function(){return this.$store.getters["prods/getProducts"]}},created:function(){this.loadProducts()},methods:{loadProducts:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$store.dispatch("prods/loadProducts",{page:e.currentPage-1,limit:e.itemPerPage});case 4:e.pageCount=Math.ceil(10/e.itemPerPage),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.error=t.t0.message||"something went wrong!";case 10:e.isLoading=!1;case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()},pageChangeHandle:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=e,r.next="next"===r.t0?3:"previous"===r.t0?5:7;break;case 3:return t.currentPage+=1,r.abrupt("break",8);case 5:return t.currentPage-=1,r.abrupt("break",8);case 7:t.currentPage=e;case 8:return r.next=10,t.$store.dispatch("prods/loadProducts",{page:t.currentPage-1,limit:t.itemPerPage});case 10:case"end":return r.stop()}}),r)})))()},handleError:function(){this.error=null},addProductLink:function(){this.$router.push("/products/addProduct")},deleteProduct:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("prods/deleteProducts",{index:e});case 3:n=r.sent,n.success&&(t.deleteSuccess=!0,t.deleteSuccessMsg=n.message,setTimeout((function(){t.deleteSuccess=!1,t.deleteSuccessMsg=""}),2e3)),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),t.error=r.t0.message||"something went wrong!";case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}};r("a7bb");const se=a()(ue,[["render",g],["__scopeId","data-v-143cfce7"]]);var de=se,le=(r("a4d3"),r("e01a"),r("99af"),function(e){return Object(n["w"])("data-v-61280d01"),e=e(),Object(n["u"])(),e}),pe={id:"containerProduct"},be={key:0},fe={key:1,id:"containerD"},je={id:"imageSection"},he=["src"],Oe={id:"productDetails"},ge={id:"details"},me=le((function(){return Object(n["h"])("h3",null,"Description",-1)})),ve={id:"productPreview"},Pe=le((function(){return Object(n["h"])("h3",null,"Product Preview",-1)})),we=["id","src"],ye={id:"button"},ke=Object(n["i"])("Add to Cart"),xe=le((function(){return Object(n["h"])("i",{class:"fas fa-edit editProduct"},null,-1)}));function _e(e,t,r,c,i,o){var a=Object(n["B"])("base-dialog"),u=Object(n["B"])("base-spinner"),s=Object(n["B"])("base-button");return Object(n["t"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(a,{show:!!i.error,title:"An error occurred!",onClose:o.handleError},{default:Object(n["H"])((function(){return[Object(n["h"])("p",null,Object(n["D"])(i.error),1)]})),_:1},8,["show","onClose"]),Object(n["h"])("div",pe,[i.isLoading?(Object(n["t"])(),Object(n["g"])("div",be,[Object(n["j"])(u)])):(Object(n["t"])(),Object(n["g"])("div",fe,[Object(n["h"])("div",je,[Object(n["h"])("img",{id:"imgDetails",src:i.src,onError:t[0]||(t[0]=function(){return o.defaultImage&&o.defaultImage.apply(o,arguments)})},null,40,he)]),Object(n["h"])("div",Oe,[Object(n["h"])("h1",null,Object(n["D"])(i.selectedProduct.productName),1),Object(n["h"])("div",ge,[Object(n["h"])("h3",null,"Rs "+Object(n["D"])(i.selectedProduct.price),1),me,Object(n["h"])("p",null,Object(n["D"])(i.selectedProduct.description),1)]),Object(n["h"])("div",ve,[Pe,(Object(n["t"])(!0),Object(n["g"])(n["a"],null,Object(n["z"])(i.selectedProduct.images,(function(e){return Object(n["t"])(),Object(n["g"])("img",{key:e.id,id:e.id,src:"".concat(i.siteUrl,"/uploads/").concat(e.img),onError:t[1]||(t[1]=function(){return o.defaultImage&&o.defaultImage.apply(o,arguments)})},null,40,we)})),128))]),Object(n["h"])("div",ye,[Object(n["j"])(s,null,{default:Object(n["H"])((function(){return[ke]})),_:1}),Object(n["j"])(s,{to:o.editProduct(),mode:"flat",link:""},{default:Object(n["H"])((function(){return[xe]})),_:1},8,["to"])])])]))])],64)}r("7db0"),r("d3b7");var Be={props:["id"],components:{BaseDialog:T,BaseSpinner:W,BaseButton:R},data:function(){return{selectedProduct:null,isLoading:!1,error:null,siteUrl:"",src:""}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.siteUrl=e.$store.getters["prods/siteUrl"],t.next=3,e.$store.getters["prods/getProducts"].find((function(t){return t.id===e.id}));case 3:e.selectedProduct=t.sent,void 0===e.selectedProduct?e.loadProduct():e.getSrc();case 5:case"end":return t.stop()}}),t)})))()},methods:{getSrc:function(){this.selectedProduct.images.length>0?this.src="".concat(this.siteUrl,"/uploads/").concat(this.selectedProduct.images[0].img):this.src=r("1129")},loadProduct:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$store.dispatch("prods/loadProduct",{id:e.id});case 4:e.selectedProduct=t.sent,e.getSrc(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.error=t.t0.message||"something went wrong!";case 11:e.isLoading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},handleError:function(){this.error=null},defaultImage:function(e){e.target.src=r("1129")},editProduct:function(){return"/editProduct/"+this.id}}};r("06ce");const Ce=a()(Be,[["render",_e],["__scopeId","data-v-61280d01"]]);var Se=Ce,De=function(e){return Object(n["w"])("data-v-113e19b2"),e=e(),Object(n["u"])(),e},Ie={id:"maincontainer"},Re=De((function(){return Object(n["h"])("h1",null,"Edit Product ",-1)})),Ne={id:"containerD"};function $e(e,t,r,c,i,o){var a=Object(n["B"])("product-form");return Object(n["t"])(),Object(n["g"])("div",Ie,[Re,Object(n["h"])("div",Ne,[Object(n["j"])(a,{type:"edit",id:r.id,onSaveData:o.save},null,8,["id","onSaveData"])])])}var He=function(e){return Object(n["w"])("data-v-584c4366"),e=e(),Object(n["u"])(),e},Le={key:0},qe=He((function(){return Object(n["h"])("label",{for:"productname"},"Product Name",-1)})),Ee={key:0},Ue=He((function(){return Object(n["h"])("label",{for:"price"},"price",-1)})),Ae={key:0},Fe={class:"form-control"},Te=He((function(){return Object(n["h"])("label",{for:"description"},"Description",-1)})),Ve=Object(n["i"])("Save");function Me(e,t,r,c,i,o){var a=Object(n["B"])("base-dialog"),u=Object(n["B"])("base-spinner"),s=Object(n["B"])("base-button");return Object(n["t"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(a,{show:!!e.error,title:"An error occurred!",onClose:o.handleError},{default:Object(n["H"])((function(){return[Object(n["h"])("p",null,Object(n["D"])(e.error),1)]})),_:1},8,["show","onClose"]),i.isLoading?(Object(n["t"])(),Object(n["g"])("div",Le,[Object(n["j"])(u)])):Object(n["f"])("",!0),Object(n["h"])("form",{onSubmit:t[5]||(t[5]=Object(n["J"])((function(){return o.submitForm&&o.submitForm.apply(o,arguments)}),["prevent"]))},[Object(n["h"])("div",{class:Object(n["p"])(["form-control",{invalid:!i.productname.isRequired}])},[qe,Object(n["I"])(Object(n["h"])("input",{type:"text",id:"productname","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.productname.val=e}),onBlur:t[1]||(t[1]=function(e){return o.clearValidity("productname")})},null,544),[[n["F"],i.productname.val,void 0,{trim:!0}]]),i.productname.isRequired?Object(n["f"])("",!0):(Object(n["t"])(),Object(n["g"])("p",Ee,"Product name must not be empty."))],2),Object(n["h"])("div",{class:Object(n["p"])(["form-control",{invalid:!i.price.isRequired}])},[Ue,Object(n["I"])(Object(n["h"])("input",{type:"number",id:"price","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.price.val=e}),onBlur:t[3]||(t[3]=function(e){return o.clearValidity("price")})},null,544),[[n["F"],i.price.val,void 0,{trim:!0}]]),i.price.isRequired?Object(n["f"])("",!0):(Object(n["t"])(),Object(n["g"])("p",Ae,"Price must be greater than 0."))],2),Object(n["h"])("div",Fe,[Te,Object(n["I"])(Object(n["h"])("textarea",{id:"description",rows:"5","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.description.val=e})},null,512),[[n["F"],i.description.val,void 0,{trim:!0}]])]),Object(n["j"])(s,null,{default:Object(n["H"])((function(){return[Ve]})),_:1})],32)],64)}var Je={props:["id","type"],emits:["save-data"],components:{BaseButton:R,BaseDialog:T,BaseSpinner:W},data:function(){return{selectedProduct:null,isLoading:!1,formIsValid:!1,productname:{isRequired:!0,val:""},price:{isRequired:!0,val:""},description:{isRequired:!1,val:""}}},created:function(){this.getProduct()},methods:{getProduct:function(){var e=this;"edit"===this.type&&(this.siteUrl=this.$store.getters["prods/siteUrl"],this.selectedProduct=this.$store.getters["prods/getProducts"].find((function(t){return t.id===e.id})),void 0===this.selectedProduct?this.loadProduct():(this.productname.val=this.selectedProduct.productName,this.price.val=this.selectedProduct.price,this.description.val=this.selectedProduct.description))},loadProduct:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$store.dispatch("prods/loadProduct",{id:e.id});case 4:e.selectedProduct=t.sent,e.selectedProduct&&(e.productname.val=e.selectedProduct.productName,e.price.val=e.selectedProduct.price,e.description.val=e.selectedProduct.description),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.error=t.t0.message||"something went wrong!";case 11:e.isLoading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},handleError:function(){this.error=null},clearValidity:function(e){this[e].isRequired=!0},validateForm:function(){this.formIsValid=!0,""===this.productname.val&&(this.productname.isRequired=!1,this.formIsValid=!1),(!this.price.val||this.price.val<0)&&(this.price.isRequired=!1,this.formIsValid=!1)},submitForm:function(){if(this.validateForm(),this.formIsValid){var e={name:this.productname.val,price:this.price.val,description:this.description.val,type:this.type};"edit"===this.type&&(e.id=this.id),this.$emit("save-data",e)}}}};r("13cf");const ze=a()(Je,[["render",Me],["__scopeId","data-v-584c4366"]]);var Ge=ze,Ke={props:["id"],components:{ProductForm:Ge},methods:{save:function(e){this.$store.dispatch("prods/saveProduct",e),this.$router.back()}}};r("249d");const Qe=a()(Ke,[["render",$e],["__scopeId","data-v-113e19b2"]]);var We=Qe,Xe=function(e){return Object(n["w"])("data-v-231cd0c0"),e=e(),Object(n["u"])(),e},Ye={id:"maincontainer"},Ze=Xe((function(){return Object(n["h"])("h1",null,"Add Product ",-1)})),et={id:"containerD"};function tt(e,t,r,c,i,o){var a=Object(n["B"])("product-form");return Object(n["t"])(),Object(n["g"])("div",Ye,[Ze,Object(n["h"])("div",et,[Object(n["j"])(a,{type:"add",onSaveData:o.save},null,8,["onSaveData"])])])}var rt={props:["id"],components:{ProductForm:Ge},methods:{save:function(e){this.$store.dispatch("prods/saveProduct",e),this.$router.back()}}};r("250a");const nt=a()(rt,[["render",tt],["__scopeId","data-v-231cd0c0"]]);var ct=nt,it=[{path:"/",component:de},{path:"/products/",component:de},{path:"/products/addProduct",name:"products",component:ct},{path:"/products/:id",props:!0,component:Se},{path:"/editProduct/:id",props:!0,component:We}],ot=Object(d["a"])({history:Object(d["b"])("/"),routes:it}),at=ot,ut=r("5502"),st={setProducts:function(e,t){e.products=t},setSelectedProduct:function(e,t){e.selectedProduct=t}},dt={getProducts:function(e){return e.products},siteUrl:function(e,t,r,n){return r.siteUrl}},lt=(r("e9c4"),r("d9e2"),r("d401"),r("b0c0"),r("c975"),r("a434"),{loadProducts:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function r(){var n,c,i,o,a,u,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.getters.siteUrl,r.next=3,fetch("".concat(n,"/products/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return c=r.sent,r.next=6,c.json();case 6:if(i=r.sent,c.ok){r.next=10;break}throw o=new Error(i.message||"Failed to load!"),o;case 10:for(u in a=[],i.data)s={id:""!==i.data[u]._id?i.data[u]._id:"",productName:""!==i.data[u].name?i.data[u].name:"",price:""!==i.data[u].price?i.data[u].price:"0",images:i.data[u].productPictures.length>0?i.data[u].productPictures:[],description:""!==i.data[u].description?i.data[u].description:""},a.push(s);e.commit("setProducts",a);case 13:case"end":return r.stop()}}),r)})))()},loadProduct:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function r(){var n,c,i,o,a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.getters.siteUrl,c=t.id,r.next=4,fetch("".concat(n,"/products/").concat(c),{method:"Get"});case 4:return i=r.sent,r.next=7,i.json();case 7:if(o=r.sent,i.ok){r.next=11;break}throw a=new Error(o.message||"Failed to load!"),a;case 11:return u={id:""!==o.data._id?o.data._id:"",productName:""!==o.data.name?o.data.name:"",price:""!==o.data.price?o.data.price:"0",images:o.data.productPictures.length>0?o.data.productPictures:[],description:""!==o.data.description?o.data.description:""},r.abrupt("return",u);case 13:case"end":return r.stop()}}),r)})))()},saveProduct:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function r(){var n,c,i,o,a,u,s,d,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.getters.siteUrl,c="","edit"===t.type?(i=t.id,c="".concat(n,"/products/update/").concat(i)):c="".concat(n,"/products/create"),r.next=5,fetch("".concat(c),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return o=r.sent,r.next=8,o.json();case 8:if(a=r.sent,o.ok){r.next=14;break}throw u=new Error(a.message||"Failed to load!"),u;case 14:s=e.state.products,d={id:""!==a.data._id?a.data._id:"",productName:""!==a.data.name?a.data.name:"",price:""!==a.data.price?a.data.price:"0",images:a.data.productPictures.length>0?a.data.productPictures:[],description:""!==a.data.description?a.data.description:""},"edit"===t.type&&(l=s.map((function(e){return e.id})).indexOf(d.id),s.splice(l,1)),s.push(d),e.commit("setProducts",s);case 19:case"end":return r.stop()}}),r)})))()},deleteProducts:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function r(){var n,c,i,o,a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.getters.siteUrl,c=e.state.products,i=c[t.index].id,r.next=5,fetch("".concat(n,"/products/delete/").concat(i),{method:"DELETE"});case 5:return o=r.sent,r.next=8,o.json();case 8:if(a=r.sent,o.ok){r.next=12;break}throw u=new Error(a.message||"Failed to load!"),u;case 12:return c.splice(t.index,1),r.abrupt("return",a);case 14:case"end":return r.stop()}}),r)})))()}}),pt={namespaced:!0,mutations:st,getters:dt,actions:lt,state:function(){return{products:[]}}},bt=Object(ut["a"])({state:function(){return{siteUrl:"https://electronics-shopping.herokuapp.com"}},mutations:{},actions:{},modules:{prods:pt}}),ft=function(e){return Object(n["w"])("data-v-796de5c4"),e=e(),Object(n["u"])(),e},jt={id:"container"},ht={id:"shopName"},Ot={id:"collection"},gt={id:"clothing"},mt=Object(n["i"])("Products"),vt=ft((function(){return Object(n["h"])("div",{id:"search"},[Object(n["h"])("i",{class:"fas fa-search search"}),Object(n["h"])("input",{type:"text",id:"input",name:"searchBox",placeholder:"Search for product"})],-1)})),Pt={id:"user"},wt={class:"fas fa-shopping-cart addedToCart"},yt={id:"badge"};function kt(e,t,r,c,i,o){var a=Object(n["B"])("router-link");return Object(n["t"])(),Object(n["g"])("section",null,[Object(n["h"])("div",jt,[Object(n["h"])("div",ht,[Object(n["j"])(a,{to:"/"},{default:Object(n["H"])((function(){return[Object(n["i"])(Object(n["D"])(i.title),1)]})),_:1})]),Object(n["h"])("div",Ot,[Object(n["h"])("div",gt,[Object(n["j"])(a,{to:"/products"},{default:Object(n["H"])((function(){return[mt]})),_:1})])]),vt,Object(n["h"])("div",Pt,[Object(n["j"])(a,{to:"/cart"},{default:Object(n["H"])((function(){return[Object(n["h"])("i",wt,[Object(n["h"])("div",yt,Object(n["D"])(i.itemInCart),1)])]})),_:1})])])])}var xt={data:function(){return{title:"E-Store",itemInCart:0}}};r("95c6");const _t=a()(xt,[["render",kt],["__scopeId","data-v-796de5c4"]]);var Bt=_t,Ct=Object(n["d"])(s);Ct.use(bt),Ct.use(at),Ct.component("the-header",Bt),Ct.mount("#app")},5753:function(e,t,r){},"70f2":function(e,t,r){},"76e9":function(e,t,r){},8851:function(e,t,r){},"95c6":function(e,t,r){"use strict";r("76e9")},9732:function(e,t,r){},"9a19":function(e,t,r){},"9deb":function(e,t,r){},a6ee:function(e,t,r){"use strict";r("483b")},a7bb:function(e,t,r){"use strict";r("bced")},bced:function(e,t,r){},d4ba:function(e,t,r){"use strict";r("5753")},e733:function(e,t,r){"use strict";r("471f")},f4b0:function(e,t,r){"use strict";r("0668")},f51e:function(e,t,r){"use strict";r("2aba")}});
//# sourceMappingURL=app.6cfc03d7.js.map