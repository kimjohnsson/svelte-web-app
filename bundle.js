var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $(t,n){t.value=null==n?"":n}let m;function g(t){m=t}const b=[],y=[],x=[],v=[],_=Promise.resolve();let k=!1;function w(t){x.push(t)}const E=new Set;let M=0;function A(){const t=m;do{for(;M<b.length;){const t=b[M];M++,g(t),j(t.$$)}for(g(null),b.length=0,M=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];E.has(n)||(E.add(n),n())}x.length=0}while(b.length);for(;v.length;)v.pop()();k=!1,E.clear(),g(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const C=new Set;function L(t,n){t&&t.i&&(C.delete(t),t.i(n))}function N(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),undefined.c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function O(t){t&&t.c()}function T(t,e,u,c){const{fragment:l,on_mount:i,on_destroy:s,after_update:a}=t.$$;l&&l.m(e,u),c||w((()=>{const e=i.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(w)}function P(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function R(t,n){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(n,r,u,c,l,s,a,f=[-1]){const d=m;g(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(h.root);let p=!1;if(h.ctx=u?u(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&l(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&R(n,t)),e})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();r.intro&&L(n.$$.fragment),T(n,r.target,r.anchor,r.customElement),A()}g(d)}class W{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(t,n,e){const o=t.slice();return o[7]=n[e],o}function B(t){let n,e,o,r,u,d,h,$,m,g=Math.round(t[3](t[7]))+"",b=Math.round(t[2](t[7]))+"";return{c(){n=s("tr"),e=s("td"),o=a(g),r=a("%"),u=f(),d=s("td"),h=a(b),$=a(" kg"),m=f()},m(t,i){l(t,n,i),c(n,e),c(e,o),c(e,r),c(n,u),c(n,d),c(d,h),c(d,$),c(n,m)},p(t,n){8&n&&g!==(g=Math.round(t[3](t[7]))+"")&&p(o,g),4&n&&b!==(b=Math.round(t[2](t[7]))+"")&&p(h,b)},d(t){t&&i(n)}}}function G(n){let e,r,u,a,p,m,g,b,y,x,v,_,k=n[4],w=[];for(let t=0;t<k.length;t+=1)w[t]=B(q(n,k,t));return{c(){e=s("div"),r=s("h1"),r.textContent="1 Rep Max!",u=f(),a=s("input"),p=f(),m=s("input"),g=f(),b=s("table"),y=s("tr"),y.innerHTML="<th>Percent</th> \n      <th>Weight</th>",x=f();for(let t=0;t<w.length;t+=1)w[t].c();h(a,"id","lift"),h(a,"placeholder","Weight in KG"),h(a,"class","svelte-131mtap"),h(m,"id","repititions"),h(m,"placeholder","Max Repetitions"),h(m,"class","svelte-131mtap"),h(b,"class","results svelte-131mtap"),h(e,"class","calculator svelte-131mtap")},m(t,o){l(t,e,o),c(e,r),c(e,u),c(e,a),$(a,n[0]),c(e,p),c(e,m),$(m,n[1]),c(e,g),c(e,b),c(b,y),c(b,x);for(let t=0;t<w.length;t+=1)w[t].m(b,null);v||(_=[d(a,"input",n[5]),d(m,"input",n[6])],v=!0)},p(t,[n]){if(1&n&&a.value!==t[0]&&$(a,t[0]),2&n&&m.value!==t[1]&&$(m,t[1]),28&n){let e;for(k=t[4],e=0;e<k.length;e+=1){const o=q(t,k,e);w[e]?w[e].p(o,n):(w[e]=B(o),w[e].c(),w[e].m(b,null))}for(;e<w.length;e+=1)w[e].d(1);w.length=k.length}},i:t,o:t,d(t){t&&i(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(w,t),v=!1,o(_)}}}function H(t,n,e){let o,r,u=null,c=null;return t.$$.update=()=>{3&t.$$.dirty&&e(2,r=t=>{if(!u||!c)return 0;return u/((100-2.5*c)/t)}),7&t.$$.dirty&&e(3,o=t=>u&&c?r(t)/r(100)*100:0)},[u,c,r,o,[100,95,90,85,80,75,70,65,60,55,50],function(){u=this.value,e(0,u)},function(){c=this.value,e(1,c)}]}class K extends W{constructor(t){super(),S(this,t,H,G,u,{})}}function z(n){let e,o,r;return o=new K({}),{c(){e=s("div"),O(o.$$.fragment)},m(t,n){l(t,e,n),T(o,e,null),r=!0},p:t,i(t){r||(L(o.$$.fragment,t),r=!0)},o(t){N(o.$$.fragment,t),r=!1},d(t){t&&i(e),P(o)}}}class D extends W{constructor(t){super(),S(this,t,null,z,u,{})}}function F(n){let e,o,r;return o=new D({}),{c(){e=s("main"),O(o.$$.fragment)},m(t,n){l(t,e,n),T(o,e,null),r=!0},p:t,i(t){r||(L(o.$$.fragment,t),r=!0)},o(t){N(o.$$.fragment,t),r=!1},d(t){t&&i(e),P(o)}}}return new class extends W{constructor(t){super(),S(this,t,null,F,u,{})}}({target:document.body,props:{name:"world"}})}();
