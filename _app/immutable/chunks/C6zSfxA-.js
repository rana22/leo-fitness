import{B as e,C as t,D as n,E as r,F as i,G as a,M as o,O as s,S as c,W as l,Z as u,_ as d,a as f,ct as p,et as m,f as h,g,i as _,it as v,j as y,k as b,lt as x,nt as S,ot as C,q as w,st as T,tt as E,u as D,w as O,x as k,y as A}from"./BJRLEpaq.js";import"./xihTtKlq.js";v();var j={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`},M=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim();function N(e){return e!=null}function P(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??j.width,a=e.size??e.height??j.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?M(...c):M(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??j[`stroke-width`])*Number(e.size??e.width??j.width)/Number(t.size??t.width??j.width):t.strokeWidth??j[`stroke-width`];return[`svg`,{...Object.entries(j).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&N(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&N(t.width)&&{[r(`width`)]:t.width},...`height`in t&&N(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}var F=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},I=Symbol(`lucide-context`),L=()=>m(I),R=new Set([`$$slots`,`$$events`,`$$legacy`,`color`,`size`,`width`,`height`,`strokeWidth`,`absoluteStrokeWidth`,`nonScalingStroke`,`iconNode`,`icon`,`class`,`children`]),z=b(`<svg><!><!></svg>`);function B(e,o){S(o,!0);let s=L()??{},d=_(o,`color`,19,()=>s.color??`currentColor`),m=_(o,`size`,19,()=>s.size??24),h=_(o,`width`,19,m),g=_(o,`height`,19,m),v=_(o,`strokeWidth`,19,()=>s.strokeWidth??2),y=_(o,`absoluteStrokeWidth`,19,()=>s.absoluteStrokeWidth??!1),b=_(o,`nonScalingStroke`,19,()=>s.nonScalingStroke??!1),O=_(o,`iconNode`,19,()=>[]),j=_(o,`icon`,19,()=>({node:O(),aliases:[],size:24})),N=f(o,R),I=u(()=>!!o.children||F(N)),B=u(()=>P(j(),{color:d(),width:h(),height:g(),strokeWidth:v(),absoluteStrokeWidth:y(),nonScalingStroke:b(),className:M(`lucide-icon`,s.class),hasA11yProp:i(I),attributes:N})),V=u(()=>x(i(B),3)),H=u(()=>i(V)[1]),U=u(()=>T(i(V)[2],()=>[],!0)),W=u(()=>({...i(H),class:[...i(H).class.split(` `),o.class]}));var G=z();D(G,()=>({...i(W)}));var K=l(G);c(K,17,()=>i(U),t,(e,t)=>{var o=u(()=>x(i(t),2));let s=()=>i(o)[0],c=()=>i(o)[1];var l=n(),d=a(l);A(d,s,!0,(e,t)=>{D(e,()=>({...c()}))}),r(e,l)});var q=w(K);k(q,()=>o.children??p),C(G),r(e,G),E()}var V=s(`<a><!></a>`),H=s(`<button><!></button>`);function U(t,s){let c=_(s,`variant`,3,`primary`),f=_(s,`size`,3,`md`),p=_(s,`type`,3,`button`),m=_(s,`disabled`,3,!1),v={primary:`
      bg-[var(--brand)]
      text-[var(--on-brand)]
      hover:bg-[var(--brand-bright)]
      active:scale-[0.98]
    `,secondary:`
      border
      border-[var(--button-secondary-border)]
      bg-[var(--button-secondary-bg)]
      text-[var(--button-secondary-text)]
      shadow-[var(--button-secondary-shadow)]

      hover:border-[var(--button-secondary-border-hover)]
      hover:bg-[var(--button-secondary-bg-hover)]

      active:scale-[0.98]
    `,ghost:`
      bg-transparent
      text-[var(--text)]
      hover:bg-[var(--surface-elevated)]
    `},y={sm:`px-4 py-2 text-xs`,md:`px-5 py-3 text-sm`},b=u(()=>`
    focus-ring
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    font-semibold
    transition-all
    duration-200
    disabled:pointer-events-none
    disabled:opacity-50
   ${v[c()]} ${y[f()]}`);var x=n(),S=a(x),w=t=>{var n=V(),a=l(n);k(a,()=>s.children),C(n),e(()=>{h(n,`href`,s.href),g(n,1,d(i(b))),h(n,`aria-disabled`,m())}),r(t,n)},T=t=>{var n=H(),a=l(n);k(a,()=>s.children),C(n),e(()=>{h(n,`type`,p()),n.disabled=m(),g(n,1,d(i(b)))}),o(`click`,n,function(...e){s.onclick?.apply(this,e)}),r(t,n)};O(S,e=>{s.href?e(w):e(T,-1)}),r(t,x)}y([`click`]);export{B as n,U as t};