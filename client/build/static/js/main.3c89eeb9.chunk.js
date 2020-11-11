(this["webpackJsonpjosh-ai-store"]=this["webpackJsonpjosh-ai-store"]||[]).push([[0],{106:function(t,e){},109:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){},113:function(t,e,n){},118:function(t,e,n){},119:function(t,e,n){},120:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n.n(r),i=n(55),o=n.n(i),s=(n(63),n(6)),u=n.n(s),l=n(10),d=n(22),j=n(2),b=n(11),h=n.n(b),O=n(56),x=n.n(O);n(109);function p(t){var e=t.button;return Object(c.jsxs)("div",{className:"headerContainer",children:[Object(c.jsx)("div",{className:"headerText",children:"Josh.AI Grocers"}),Object(c.jsx)("div",{className:"link",children:e})]})}n(110);function m(t){var e=t.onClick,n=t.children,r=t.disabled;return Object(c.jsx)("button",{className:"button",onClick:e,disabled:r,children:n})}var f=n(4),v=n(15),C={modalVisible:!1,modalContent:null,foodItems:[],cart:[]},y=Object(r.createContext)(C),k=y.Provider,g=function(t){var e=t.children,n=Object(r.useReducer)((function(t,e){switch(e.type){case"show_modal":return Object(f.a)(Object(f.a)({},t),{},{modalContent:e.payload,modalVisible:!0});case"hide_modal":return Object(f.a)(Object(f.a)({},t),{},{modalContent:null,modalVisible:!1});case"set_food_items":return Object(f.a)(Object(f.a)({},t),{},{foodItems:e.payload});case"set_cart":return Object(f.a)(Object(f.a)({},t),{},{cart:e.payload});default:throw new Error}}),C),a=Object(v.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)(k,{value:{state:i,dispatch:o},children:e})};n(53),n(111);function w(t){var e=t.children,n=t.onClick;return Object(c.jsx)("div",{className:"textButton",onClick:n,children:e})}n(112);function N(t){var e=t.items,n=t.action,r=t.onQuantityChange;return Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{className:"table",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Item"}),Object(c.jsx)("th",{children:"quantity"}),Object(c.jsx)("th",{children:"unit price"}),Object(c.jsx)("th",{children:"line total"})]}),e.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.item}),r?Object(c.jsx)("td",{children:Object(c.jsx)("input",{value:t.quantity,onChange:function(t){return r(t)},type:"number",className:"tableInput",min:"1"})}):Object(c.jsx)("td",{children:t.quantity}),Object(c.jsx)("td",{children:t.price.toFixed(2)}),Object(c.jsx)("td",{children:(t.price*t.quantity).toFixed(2)}),n?Object(c.jsx)("td",{children:Object(c.jsx)(w,{onClick:function(){return n.onClick(t)},children:n.text})}):null]},t.item)}))]})})}var _="http://localhost:3000/api/";function I(t){var e=t.item,n=Object(r.useContext)(y).dispatch,a=Object(r.useState)(e),i=Object(v.a)(a,2),o=i[0],s=i[1],d=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post("".concat(_,"food-item"),o);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("An error occured posting food item",t.t0);case 8:n({type:"hide_modal"});case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"lineItemModalContainer",children:[Object(c.jsx)("h1",{children:"Line Item"}),Object(c.jsx)(N,{items:[o],onQuantityChange:function(t){return s(Object(f.a)(Object(f.a)({},o),{},{quantity:Number(t.target.value)}))}}),Object(c.jsxs)("div",{className:"buttonContainer",children:[Object(c.jsx)(m,{onClick:function(){return d()},disabled:!o.quantity,children:"Save"}),Object(c.jsx)(m,{onClick:function(){return n({type:"hide_modal"})},children:"Cancel"})]})]})}n(113);function F(t){var e=t.items;return Object(c.jsx)("div",{className:"tableContainer",children:e.map((function(t){return Object(c.jsx)(q,{item:t},t.id)}))})}function q(t){var e=t.item,n=Object(r.useContext)(y).dispatch;return Object(c.jsxs)("div",{className:"itemContainer",children:[Object(c.jsx)("img",{src:e.image,alt:e.item}),Object(c.jsx)("p",{children:e.description}),Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{onClick:function(){var t={item:e.item,quantity:1,price:e.price};n({type:"show_modal",payload:Object(c.jsx)(I,{item:t})})},children:"Add To Cart"}),Object(c.jsx)("span",{children:"$ ".concat(e.price.toFixed(2))})]})]})}function A(){var t=Object(j.f)(),e=Object(r.useContext)(y).state;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{button:Object(c.jsx)(m,{onClick:function(){return t.push("/cart")},children:"Cart (".concat(e.cart.length,")")})}),Object(c.jsx)(F,{items:e.foodItems,onItemClick:function(t){return console.log("itemClick",t)}})]})}function S(t){var e=t.item,n=Object(r.useContext)(y).dispatch,a=Object(r.useState)(e),i=Object(v.a)(a,2),o=i[0],s=i[1],d=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.put("".concat(_,"food-item"),o);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("An error occured updating food item",t.t0);case 8:n({type:"hide_modal"});case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.delete("".concat(_,"food-item"),{data:e});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("An error occured deleting food item",t.t0);case 8:n({type:"hide_modal"});case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"lineItemModalContainer",children:[Object(c.jsx)("h1",{children:"Line Item"}),Object(c.jsx)(N,{items:[o],action:{text:"remove",onClick:function(t){return j(t)}},onQuantityChange:function(t){return s(Object(f.a)(Object(f.a)({},o),{},{quantity:Number(t.target.value)}))}}),Object(c.jsxs)("div",{className:"buttonContainer",children:[Object(c.jsx)(m,{onClick:function(){return d()},disabled:!o.quantity,children:"Save"}),Object(c.jsx)(m,{onClick:function(){return n({type:"hide_modal"})},children:"Cancel"})]})]})}n(118);function T(t){var e=t.items,n=Object(r.useContext)(y).dispatch;return Object(c.jsx)("div",{className:"cartContainer",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Cart"}),e.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N,{items:e,action:{onClick:function(t){n({type:"show_modal",payload:Object(c.jsx)(S,{item:t})})},text:"edit"}}),Object(c.jsx)("h4",{children:"Total"}),Object(c.jsx)("p",{children:e.reduce((function(t,e){return t+e.price*e.quantity}),0).toFixed(2)})]}):Object(c.jsx)("h1",{className:"emptyText",children:"Empty"})]})})}function E(){var t=Object(j.f)(),e=Object(r.useContext)(y).state;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{button:Object(c.jsx)(m,{onClick:function(){return t.push("/")},children:"Home"})}),Object(c.jsx)(T,{items:e.cart})]})}n(119);function B(t){var e=t.visible,n=t.children;return e?Object(c.jsx)("div",{className:"modalBackground",children:Object(c.jsx)("div",{className:"modal",children:n})}):null}var L=function(){var t=Object(r.useContext)(y),e=t.state,n=t.dispatch;return Object(r.useEffect)((function(){var t=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("".concat(_,"food-items"));case 3:e=t.sent,n({type:"set_food_items",payload:e.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("An error occured fetching data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("".concat(_,"cart"));case 3:e=t.sent,n({type:"set_cart",payload:e.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("An error occured fetching data",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t(),e()}),[n]),Object(r.useEffect)((function(){var t=x()("http://localhost:3000",{transports:["websocket"]});t.on("cart_update",(function(t){console.log("recieved cart update",t),n({type:"set_cart",payload:t})})),t.on("reconnect_attempt",(function(){t.io.opts.transports=["polling","websocket"]}))}),[n]),Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(B,{visible:e.modalVisible,children:e.modalContent}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/cart",children:Object(c.jsx)(E,{})}),Object(c.jsx)(j.a,{path:"/",children:Object(c.jsx)(A,{})})]})]})})},V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{children:Object(c.jsx)(L,{})})}),document.getElementById("root")),V()},53:function(t,e,n){},63:function(t,e,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.3c89eeb9.chunk.js.map