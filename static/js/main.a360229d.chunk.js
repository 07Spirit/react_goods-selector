(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),s=n(5),r=n(6),l=n(8),o=n(7),i=n(1),d=n.n(i),u=(n(13),n(14),n(3)),m=n.n(u),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"Jam",selectedItem:!0},e.controlEvent=function(t){var n="+"===t.currentTarget.innerText;if(e.clearAll(),n){var c,a,s=t.currentTarget.parentElement;t.currentTarget.classList.add("is-info"),t.currentTarget.setAttribute("data-cy","RemoveButton"),null===s||void 0===s||null===(c=s.parentElement)||void 0===c||c.classList.add("has-background-success-light"),t.currentTarget.innerText="-",e.setState({name:(null===s||void 0===s||null===(a=s.nextSibling)||void 0===a?void 0:a.textContent)||""}),e.setState({selectedItem:!0})}},e.clearAll=function(){var t=document.querySelectorAll(".button"),n=document.querySelectorAll("tr");t.forEach((function(e){e.classList.remove("is-info"),e.textContent="+",e.setAttribute("data-cy","AddButton")})),n.forEach((function(e){return e.classList.remove("has-background-success-light")})),e.setState({selectedItem:!1})},e.createMassiveElements=function(){return h.map((function(t){return Object(b.jsxs)("tr",{"data-cy":"Good",className:m()({"has-background-success-light":"Jam"===t}),children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":"Jam"===t?"RemoveButton":"AddButton",type:"button",className:m()("button",{"is-info":"Jam"===t}),onClick:e.controlEvent,children:"Jam"===t?"-":"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("main",{className:"section container",children:[this.state.selectedItem?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(this.state.name," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){e.setState({selectedItem:!1}),e.clearAll()}})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:this.createMassiveElements()})})]})}}]),n}(d.a.Component);a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a360229d.chunk.js.map