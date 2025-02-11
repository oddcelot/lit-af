import{f as w,u as y,r as x,x as f}from"./lit-element-ZC8NawXW.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=t=>(n,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,n)}):customElements.define(t,n)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},P=(t=M,n,e)=>{const{kind:s,metadata:o}=e;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(e.name,t),s==="accessor"){const{name:r}=e;return{set(l){const d=n.get.call(this);n.set.call(this,l),this.requestUpdate(r,d,t)},init(l){return l!==void 0&&this.P(r,void 0,t),l}}}if(s==="setter"){const{name:r}=e;return function(l){const d=this[r];n.call(this,l),this.requestUpdate(r,d,t)}}throw Error("Unsupported decorator location: "+s)};function g(t){return(n,e)=>typeof e=="object"?P(t,n,e):((s,o,a)=>{const r=o.hasOwnProperty(a);return o.constructor.createProperty(a,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(o,a):void 0})(t,n,e)}const k="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='25.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20320'%3e%3cpath%20fill='%2300E8FF'%20d='m64%20192l25.926-44.727l38.233-19.114l63.974%2063.974l10.833%2061.754L192%20320l-64-64l-38.074-25.615z'%3e%3c/path%3e%3cpath%20fill='%23283198'%20d='M128%20256V128l64-64v128l-64%2064ZM0%20256l64%2064l9.202-60.602L64%20192l-37.542%2023.71L0%20256Z'%3e%3c/path%3e%3cpath%20fill='%23324FFF'%20d='M64%20192V64l64-64v128l-64%2064Zm128%20128V192l64-64v128l-64%2064ZM0%20256V128l64%2064l-64%2064Z'%3e%3c/path%3e%3cpath%20fill='%230FF'%20d='M64%20320V192l64%2064z'%3e%3c/path%3e%3c/svg%3e",L=""+new URL("../vite.svg",import.meta.url).href,v=`:host {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #1a1a1a;
  display: inline-block;
}

::slotted(h1) {
  font-size: 3.2em;
  line-height: 1.1;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.lit:hover {
  filter: drop-shadow(0 0 2em #325cffaa);
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`;var O=Object.defineProperty,S=Object.getOwnPropertyDescriptor,p=(t,n,e,s)=>{for(var o=s>1?void 0:s?S(n,e):n,a=t.length-1,r;a>=0;a--)(r=t[a])&&(o=(s?r(n,e,o):r(o))||o);return s&&o&&O(n,e,o),o};const b=new CSSStyleSheet;b.replaceSync(v);let i=class extends x{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return f`
      <!-- <style>
        ${v}
      </style> -->
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src=${L} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${k} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}};i.styles=b;p([g({attribute:"docs-hint"})],i.prototype,"docsHint",2);p([g({type:Number})],i.prototype,"count",2);i=p([_("my-element")],i);const D={title:"Element",parameters:{layout:"centered"},argTypes:{count:{control:"number"}},render:t=>f`<my-element count=${t.count}><h1>welcome</h1></my-element>`},c={name:"Default",args:{count:0}};var h,u,m;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Default",
  args: {
    count: 0
  }
}`,...(m=(u=c.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const E=["Default"];export{c as Default,E as __namedExportsOrder,D as default};
