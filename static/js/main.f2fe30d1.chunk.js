(this.webpackJsonpgoodslist=this.webpackJsonpgoodslist||[]).push([[0],{104:function(e,t,a){e.exports=a(217)},114:function(e,t,a){},212:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(46),c=a.n(o),s=a(10),i=a(5),l=a(71),u=a(97),m=a(98),p=a.n(m),d=a(15),b=a(16),h=a(18),f=a(17),O=a(19),E=a(99),g=a(23),v=a(219),y=a(218),j=(a(114),function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).renderError=function(e){var t=e.error;if(e.touched&&t)return n.a.createElement("div",{className:"ui error message"},n.a.createElement("div",{className:"header"},t))},a.renderInput=function(e){var t=e.input,r=e.label,o=e.meta,c="field ".concat(o.error&&o.touched?"error":"");return n.a.createElement("div",{className:c},n.a.createElement("label",{className:"label"},n.a.createElement("span",null,r),n.a.createElement("input",Object.assign({},t,{autoComplete:"off"}))),a.renderError(o))},a.onSubmit=function(e){console.log(e),a.props.history.push("/goods")},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"Login ui form error"},n.a.createElement("form",{className:"loginForm",onSubmit:this.props.handleSubmit(this.onSubmit)},n.a.createElement(v.a,{name:"name",component:this.renderInput,label:"Please, enter your name"}),n.a.createElement("button",{className:"ui primary button"},"Submit")))}}]),t}(n.a.Component)),P=Object(y.a)({form:"LoginForm",validate:function(e){var t={};return e.name||(t.name="You must enter a name"),t}})(j),w=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={showDetails:!1},a.removeItem=function(){var e=a.props;(0,e.deleteItem)(e.index)},a.showDetails=function(){a.setState({showDetails:!a.state.showDetails})},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,r=e.description,o=e.time,c=this.state.showDetails?"block":"none";return n.a.createElement("div",{className:"ui card"},n.a.createElement("div",{onClick:this.showDetails,className:"image"},n.a.createElement("img",{src:t,alt:a})),n.a.createElement("h4",{className:"header"},a),n.a.createElement("div",{style:{display:c},className:"content"},n.a.createElement("div",{className:"description"},r)),n.a.createElement("div",{style:{display:c},className:"extra content"},n.a.createElement("i",{className:"clock outline icon"}),o),n.a.createElement("button",{onClick:this.removeItem,className:"ui red button"},"Delete"))}}]),t}(n.a.Component),N=Object(s.b)(null,{deleteItem:function(e){return{type:"DELETE",payload:e}}})(w),D=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).renderError=function(e){var t=e.error;if(e.touched&&t)return n.a.createElement("div",{className:"ui error message"},n.a.createElement("div",{className:"header"},t))},a.renderInputs=function(e){var t=e.input,r=e.label,o=e.meta,c="field ".concat(o.error&&o.touched?"error":"");return n.a.createElement("div",{className:c},n.a.createElement("label",null,r,n.a.createElement("input",Object.assign({},t,{autoComplete:"off"}))),a.renderError(o))},a.closePopup=function(){a.props.close()},a.onSubmit=function(e){console.log(e),a.props.addItem(e),a.props.close()},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.showPopup?"flex":"none";return n.a.createElement("div",{style:{display:e},className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("i",{onClick:this.closePopup,className:"red large close icon"}),n.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},n.a.createElement(v.a,{name:"alt",component:this.renderInputs,label:"Restaurant name"}),n.a.createElement(v.a,{name:"description",component:this.renderInputs,label:"Description"}),n.a.createElement(v.a,{name:"src",component:this.renderInputs,label:"Restaurant image url"}),n.a.createElement(v.a,{name:"time",component:this.renderInputs,label:"Delivery time"}),n.a.createElement("button",{className:"ui primary button"},"Add"))))}}]),t}(n.a.Component),S=Object(y.a)({form:"AddItem",validate:function(e){var t={};return e.alt||(t.alt="You must enter a name"),e.description||(t.description="You must enter a description"),e.src||(t.src="You must enter a url"),e.time||(t.time="You must enter a time"),t}})(D),k=Object(s.b)((function(e){return{showPopup:e.images.showPopup}}),{close:function(){return{type:"CLOSE_POPUP"}},addItem:function(e){return{type:"ADD",payload:e}}})(S),C=(a(212),function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).renderGoods=function(){return a.props.images.map((function(e,t){var a=e.src,r=e.alt,o=e.description,c=e.time;return n.a.createElement(N,{src:a,alt:r,description:o,time:c,key:t,index:t})}))},a.showPopup=function(){a.props.show()},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"GoodsList"},n.a.createElement("h1",null,"Choose a restaurant!"),n.a.createElement("div",{className:"ui three doubling link cards"},this.renderGoods()),n.a.createElement("button",{onClick:this.showPopup,className:"ui primary button"},"Add restaurant"),n.a.createElement(k,null))}}]),t}(n.a.Component)),I=Object(s.b)((function(e){return{images:e.images.imagesList}}),{show:function(){return{type:"SHOW_POPUP"}}})(C),L=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App ui container"},n.a.createElement(E.a,null,n.a.createElement("div",null,n.a.createElement(g.a,{path:"/",exact:!0,component:P}),n.a.createElement(g.a,{path:"/goods",exact:!0,component:I}))))}}]),t}(n.a.Component),_=a(220),A=a(103),x=a(102);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T={imagesList:[{src:"images/druzi_cafe.png",alt:"Druzi cafe",description:"american and european food",time:"30-40 min"},{src:"images/hot_dogs.png",alt:"Yizha",description:"american burgers and hot dogs, street food",time:"35-45 min"},{src:"images/mac.png",alt:"McDonalds",description:"burgers",time:"25-35 min"},{src:"images/milk_bar.png",alt:"Milk bar",description:"deserts, european food",time:"15-20 min"}],showPopup:null},z=Object(i.c)({form:_.a,images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":return U({},e,{imagesList:e.imagesList.filter((function(e,a){return t.payload!==a}))});case"CLOSE_POPUP":return U({},e,{showPopup:!1});case"SHOW_POPUP":return U({},e,{showPopup:!0});case"ADD":return U({},e,{imagesList:[].concat(Object(A.a)(e.imagesList),[t.payload])});default:return e}}}),G={key:"root",storage:p.a},M=Object(l.a)(G,z),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,F=Object(i.e)(M,R(Object(i.a)())),H=Object(l.b)(F);c.a.render(n.a.createElement(s.a,{store:F},n.a.createElement(u.a,{loading:null,persistor:H},n.a.createElement(L,null))),document.querySelector("#root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.f2fe30d1.chunk.js.map