(function(t){function e(e){for(var i,s,a=e[0],c=e[1],u=e[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c81":function(t,e,n){"use strict";n("8b3d")},2329:function(t,e,n){"use strict";n("e460")},4063:function(t,e,n){},4728:function(t,e,n){},"51f7":function(t,e,n){"use strict";n("704b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("Controls"),n("Teeter"),n("transition",{attrs:{name:"modal"}},[n("Modal")],1)],1)])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"teeterContainer",staticClass:"tt-teeter"},[n("div",{staticClass:"tt-base"}),n("div",{ref:"plank",staticClass:"tt-plank",style:t.rotation}),n("div",{staticClass:"tt-figure-container",style:t.rotation},[n("div",{staticClass:"tt-figure-side tt-figure-side__left"},t._l(t.figures,(function(t,e){return n("Figure",{key:e,attrs:{id:t.id,type:t.type,weight:t.weight,color:t.color,positionX:t.positionX}})})),1),n("div",{staticClass:"tt-figure-side tt-figure-side__right"},t._l(t.staticFigures,(function(t,e){return n("StaticFigure",{key:e,attrs:{id:t.id,type:t.type,weight:t.weight,color:t.color,positionX:t.positionX}})})),1)])])},a=[],c=n("5530"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:t.getId,staticClass:"tt-figure tt-text",class:["tt-figure__"+t.type],style:t.styles},[t._v(t._s(t.weight)+"Kg")])},l=[],d=(n("99af"),n("2f62")),f={name:"Figure",data:function(){return{shiftY:200-window.innerHeight,shiftX:0,stepX:25,stepY:10}},props:["id","type","weight","color","positionX"],computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(d["d"])("figures",["figures","isOnPause","isEnded"])),Object(d["d"])("teeter",["balance"])),{},{styles:function(){return"\n        transform: ".concat(this.figurePositionY,";\n        left: ").concat(this.shiftX,"%;\n        background-color: #").concat(this.color,";\n        border-color: ").concat(this.borderColorForTriangle,";\n      ")},figurePositionY:function(){return"translate(".concat(this.compensateRotation,"px, ").concat(this.shiftY,"px) scale(").concat(this.scaleByWeight,")")},compensateRotation:function(){return this.shiftY*(this.balance/100)},scaleByWeight:function(){return 1+this.weight/10},borderColorForTriangle:function(){return"triangle"==this.type?"transparent transparent #".concat(this.color," transparent"):"none"},getId:function(){return"figure_".concat(this.id)},containerWidth:function(){return this.$parent.$refs.teeterContainer.clientHeight},placed:function(){return this.shiftY>=0}}),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(d["b"])("figures",["addFigure","figuresInStack"])),Object(d["b"])("teeter",["calculateBalance"])),Object(d["c"])("figures",["setFigureWeight"])),{},{updatePosition:function(){var t=this;this.shiftX=this.positionX*this.stepX;var e=setInterval((function(){if(!t.isOnPause){var n=t.shiftY+t.stepY;t.shiftY=n>0?0:n}t.placed&&(t.calculateBalance(),setTimeout((function(){t.isEnded||t.addFigure()}),1e3),clearInterval(e))}),100)},handleArrows:function(t){this.placed||("39"==t.keyCode&&this.moveFigureRight(),"37"==t.keyCode&&this.moveFigureLeft())},moveFigureRight:function(){var t=this.shiftX+this.stepX;this.shiftX=t>=100?100:t,this.setFigureWeight({id:this.id,newPositionX:this.shiftX/this.stepX})},moveFigureLeft:function(){var t=this.shiftX-this.stepX;this.shiftX=t<=0?0:t,this.setFigureWeight({id:this.id,newPositionX:this.shiftX/this.stepX})},increaseGameSpeed:function(){this.stepY+=2*this.figures.length}}),mounted:function(){this.updatePosition(),this.increaseGameSpeed()},created:function(){window.addEventListener("keydown",this.handleArrows)},destroyed:function(){window.removeEventListener("keydown",this.handleArrows)}},g=f,h=(n("0c81"),n("2877")),p=Object(h["a"])(g,u,l,!1,null,null,null),b=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:t.getId,staticClass:"tt-figure tt-text",class:["tt-figure__"+t.type],style:t.styles},[t._v(t._s(t.weight)+"Kg")])},m=[],O={name:"StaticFigure",props:["id","type","weight","color","positionX"],computed:{getId:function(){return"static_figure_".concat(this.id)},styles:function(){return"\n        left: ".concat(25*this.positionX,"%;\n        background-color: #").concat(this.color,";\n        border-color: ").concat("triangle"==this.type?"transparent transparent #".concat(this.color," transparent"):"none",";\n        transform: scale(").concat(1+this.weight/10,");\n      ")}}},j=O,y=Object(h["a"])(j,v,m,!1,null,null,null),w=y.exports,_={name:"Teeter",data:function(){return{}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(d["d"])("figures",["figures","staticFigures"])),Object(d["d"])("teeter",["balance"])),{},{rotation:function(){return"\n        transform: rotate(".concat(this.balance,"deg);\n      ")}}),components:{Figure:b,StaticFigure:w}},F=_,P=(n("2329"),Object(h["a"])(F,s,a,!1,null,null,null)),S=P.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tt-controls"},[n("button",{attrs:{disabled:t.isInProgress||t.isEnded},on:{click:function(e){return e.preventDefault(),t.addFigure(e)}}},[t._v("Start")]),n("button",{attrs:{disabled:t.isEnded||!t.isInProgress},on:{click:function(e){return e.preventDefault(),t.pauseSimulation(e)}}},[t._v(t._s(t.isOnPause?"Resume":"Pause"))]),n("button",{on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v("Reset")])])},k=[],C={name:"Controls",computed:Object(c["a"])({},Object(d["d"])("figures",["isOnPause","isInProgress","isEnded"])),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(d["b"])("figures",["addFigure","resetFigures","pauseSimulation"])),Object(d["b"])("teeter",["resetBalance"])),{},{reset:function(){this.resetFigures(),this.resetBalance()}})},E=C,x=(n("6142"),Object(h["a"])(E,X,k,!1,null,"419ec5f5",null)),B=x.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isEnded?n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[t._t("header",[t._v(" Game Over ")])],2),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:t.reset}},[t._v(" Try Again ")])])],2)])])]):t._e()},I=[],T={name:"Modal",computed:Object(c["a"])({},Object(d["d"])("figures",["isEnded"])),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(d["b"])("figures",["resetFigures"])),Object(d["b"])("teeter",["resetBalance"])),{},{reset:function(){this.resetFigures(),this.resetBalance()}})},Y=T,$=(n("c085"),Object(h["a"])(Y,M,I,!1,null,null,null)),A=$.exports,W={name:"App",components:{Teeter:S,Controls:B,Modal:A}},R=W,D=(n("51f7"),Object(h["a"])(R,r,o,!1,null,null,null)),L=D.exports,N=n("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d81d"),n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0");var G=n("ade3"),H=n("3835");i["a"].use(d["a"]);var J=n("6c17"),K=J.keys().map((function(t){return[t.replace(/(^.\/)|(\.js$)/g,""),J(t)]})).reduce((function(t,e){var n=Object(H["a"])(e,2),i=n[0],r=n[1];return void 0===r.namespaced&&(r.namespaced=!0),Object(c["a"])(Object(c["a"])({},t),{},Object(G["a"])({},i,r))}),{}),U=new d["a"].Store({modules:K});i["a"].config.productionTip=!1,new i["a"]({store:U,render:function(t){return t(L)}}).$mount("#app")},6142:function(t,e,n){"use strict";n("4728")},"6c17":function(t,e,n){var i={"./figures.js":"bea9","./teeter.js":"8e30"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="6c17"},"704b":function(t,e,n){},"8b3d":function(t,e,n){},"8e30":function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return i})),n.d(e,"mutations",(function(){return r})),n.d(e,"actions",(function(){return o}));n("13d5");var i={balance:0,maxBalance:30},r={setBalance:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.balance=e}},o={calculateBalance:function(t){var e=t.commit,n=t.rootState,r=t.dispatch,o=n["figures"].figures.reduce((function(t,e){return t+e.weight*(4-e.positionX+1)}),0),s=n["figures"].staticFigures.reduce((function(t,e){return t+e.weight*(e.positionX+1)}),0),a=o>s?(o-s)/o*-100/2:(s-o)/s*100/2;return a>=i.maxBalance?(e("setBalance",i.maxBalance),void r("figures/stopSimulation",null,{root:!0})):a<=-i.maxBalance?(e("setBalance",-i.maxBalance),void r("figures/stopSimulation",null,{root:!0})):void e("setBalance",a)},resetBalance:function(t){var e=t.commit;e("setBalance")}}},bea9:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return a})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return u}));n("99af"),n("d81d"),n("d3b7"),n("25f0");var i=n("5530"),r=n("2909"),o=n("ec26"),s=function(){var t=["rect","triangle","circle"],e=1,n=10,i=1,r=4;return{id:Object(o["a"])(),type:t[Math.floor(Math.random()*t.length)],weight:Math.floor(Math.random()*(n-e+1))+e,color:Math.floor(16777215*Math.random()).toString(16),positionX:Math.floor(Math.random()*(r-i+1))+i}},a={figures:[],staticFigures:[],isOnPause:!1,isInProgress:!1,isEnded:!1},c={updateFigures:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.figures=e},updateStaticFigures:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.staticFigures=e},togglePause:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!t.isOnPause;t.isOnPause=e},setProgress:function(t,e){t.isInProgress=e},setFigureWeight:function(t,e){t.figures=t.figures.map((function(t){return t.id===e.id&&(t.positionX=e.newPositionX),t}))},toggleEndState:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!t.isEnded;t.isEnded=e}},u={addFigure:function(t){var e=t.commit,n=t.state,o=t.dispatch;e("togglePause",!1),e("setProgress",!0),e("updateFigures",[].concat(Object(r["a"])(n.figures),[Object(i["a"])({},s())])),o("addStaticFigure")},addStaticFigure:function(t){var e=t.commit,n=t.state;e("updateStaticFigures",[].concat(Object(r["a"])(n.staticFigures),[Object(i["a"])({},s())]))},resetFigures:function(t){var e=t.commit;e("updateFigures"),e("updateStaticFigures"),e("setProgress",!1),e("toggleEndState",!1)},pauseSimulation:function(t){var e=t.commit;e("togglePause")},stopSimulation:function(t){var e=t.commit;e("togglePause"),e("toggleEndState")}}},c085:function(t,e,n){"use strict";n("4063")},e460:function(t,e,n){}});
//# sourceMappingURL=app.da03f8e6.js.map