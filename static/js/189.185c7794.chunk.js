"use strict";(self.webpackChunkget_your_rick_app=self.webpackChunkget_your_rick_app||[]).push([[189],{687:function(n,t,e){e.d(t,{Ru:function(){return l},YJ:function(){return c},cK:function(){return s}});var r=e(165),i=e(861),a=e(243),o="https://rickandmortyapi.com/api/character/";a.Z.defaults.params={};var c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get(o);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(o+t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get(o+"?page=".concat(t,"&name=").concat(e));case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},189:function(n,t,e){e.r(t),e.d(t,{default:function(){return V}});var r,i=e(165),a=e(861),o=e(439),c=e(689),s=e(791),l=e(687),u=e(168),p=e(444),f=e(87),d=["title","titleId"];function h(){return h=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},h.apply(this,arguments)}function x(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function g(n,t){var e=n.title,i=n.titleId,a=x(n,d);return s.createElement("svg",h({width:24,height:24,viewBox:"0 0 24 24",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},a),e?s.createElement("title",{id:i},e):null,r||(r=s.createElement("path",{d:"M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",fill:"current"})))}var Z,b,m,j,v,w,y,k,O,P,L,R,_=s.forwardRef(g),z=(e.p,p.ZP.div(Z||(Z=(0,u.Z)(["\n  width: 1440px;\n  margin: 0 auto;\n  padding: 0 50px 142px;\n"])))),E=p.ZP.div(b||(b=(0,u.Z)(["\n  width: 413px;\n  margin: 0 auto;\n"]))),S=p.ZP.span(m||(m=(0,u.Z)(["\n  padding-left: 8px;\n"]))),I=(0,p.ZP)(_)(j||(j=(0,u.Z)(["\n  fill: current;\n"]))),H=(0,p.ZP)(f.OL)(v||(v=(0,u.Z)(["\n  display: flex;\n  width: 120px;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.17;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: black;\n\n  margin-bottom: 32px;\n\n  &:hover {\n    fill: rgba(142, 142, 147, 1);\n    color: rgba(142, 142, 147, 1);\n  }\n"]))),C=p.ZP.div(w||(w=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n"]))),G=p.ZP.img(y||(y=(0,u.Z)(["\n  width: 300px;\n  height: 300px;\n  background: rgb(253, 247, 242);\n  object-fit: cover;\n  border: 5px solid #f2f2f7;\n  border-radius: 50%;\n"]))),K=p.ZP.h2(k||(k=(0,u.Z)(["\n  font-family: 'Roboto';\n  font-size: 48px;\n  line-height: 1.17;\n  text-align: center;\n  margin-bottom: 48px;\n"]))),T=p.ZP.h3(O||(O=(0,u.Z)(["\n  font-family: 'Roboto';\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.2;\n  letter-spacing: 0.15px;\n  color: rgba(142, 142, 147, 1);\n  text-align: center;\n  margin-bottom: 48px;\n"]))),U=p.ZP.li(P||(P=(0,u.Z)(["\n  border-bottom: 1px solid rgba(33, 33, 33, 0.08);\n  padding: 9px 0 12px;\n"]))),B=p.ZP.span(L||(L=(0,u.Z)(["\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.15px;\n  color: rgba(8, 31, 50, 1);\n"]))),J=p.ZP.p(R||(R=(0,u.Z)(["\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.4;\n  letter-spacing: 0.25px;\n  color: rgba(110, 121, 140, 1);\n"]))),M=e(184),V=function(){var n,t,e=(0,c.UO)().id,r=(0,s.useState)({}),u=(0,o.Z)(r,2),p=u[0],f=u[1],d=null!==(n=null===(t=(0,c.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=f,n.next=3,(0,l.cK)(t);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();n(e).catch(console.error)}),[e]),(0,M.jsxs)(z,{children:[(0,M.jsxs)(H,{to:d,children:[(0,M.jsx)(I,{}),(0,M.jsx)(S,{children:"Go back"})]}),p.id&&(0,M.jsx)(E,{children:(0,M.jsxs)("div",{children:[(0,M.jsx)(C,{children:(0,M.jsx)(G,{src:p.image,alt:p.name})}),(0,M.jsxs)("div",{children:[(0,M.jsx)(K,{children:p.name}),(0,M.jsx)(T,{children:"Information"}),(0,M.jsxs)("ul",{children:[(0,M.jsxs)(U,{children:[(0,M.jsx)(B,{children:"Gender"}),(0,M.jsx)(J,{children:p.gender})]}),(0,M.jsxs)(U,{children:[(0,M.jsx)(B,{children:"Status"}),(0,M.jsx)(J,{children:p.status})]}),(0,M.jsxs)(U,{children:[(0,M.jsx)(B,{children:"Species"}),(0,M.jsx)(J,{children:p.species})]}),(0,M.jsxs)(U,{children:[(0,M.jsx)(B,{children:"Origin"}),(0,M.jsx)(J,{children:p.origin.name})]}),(0,M.jsxs)(U,{children:[(0,M.jsx)(B,{children:"Type"}),""===p.type&&(0,M.jsx)(J,{children:"Unknown"}),(0,M.jsx)(J,{children:p.type})]})]})]})]})})]})}}}]);
//# sourceMappingURL=189.185c7794.chunk.js.map