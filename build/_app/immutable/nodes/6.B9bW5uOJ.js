import{B as e,C as t,E as n,F as r,G as i,K as a,N as o,O as s,S as c,T as l,U as u,W as d,X as f,Y as p,Z as m,a as h,at as g,g as _,i as v,nt as y,o as b,ot as x,q as S,tt as C,v as w,w as T,z as E}from"../chunks/BJRLEpaq.js";import"../chunks/xihTtKlq.js";import{n as D}from"../chunks/C6zSfxA-.js";import{t as O}from"../chunks/ikMYm6Od.js";import{n as k,t as A}from"../chunks/Bl1rYKR4.js";import{t as j}from"../chunks/DZclCYZR.js";import{t as M}from"../chunks/DxnxvPAy.js";var N=new Set([`$$slots`,`$$events`,`$$legacy`]);function P(e,t){let n=h(t,N),r={name:`check`,size:24,node:[[`path`,{d:`M20 6 9 17l-5-5`}]]};D(e,b(()=>n,{get icon(){return r}}))}var F=new Set([`$$slots`,`$$events`,`$$legacy`]);function I(e,t){let n=h(t,F),r={name:`lock`,size:24,node:[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`}]]};D(e,b(()=>n,{get icon(){return r}}))}var L=new Set([`$$slots`,`$$events`,`$$legacy`]);function R(e,t){let n=h(t,L),r={name:`shield`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`}]]};D(e,b(()=>n,{get icon(){return r}}))}var z=s(`<div class="
        absolute -top-3 left-1/2
        -translate-x-1/2
        rounded-full
        bg-[var(--brand)]
        px-4 py-1
        text-[10px] font-black
        uppercase tracking-[0.15em]
        text-black
      ">Most Popular</div>`),B=s(`<div class="
          rounded-full
          border border-[var(--line)]
          p-2
          text-[var(--text-muted)]
        " title="Coming soon"><!></div>`),V=s(`<div class="flex gap-3 text-sm"><!> <span> </span></div>`),H=s(`<button type="button"> </button>`),U=s(`<button type="button" disabled="" class="
          w-full rounded-xl
          border border-[var(--line)]
          px-5 py-3
          text-sm font-bold
          text-[var(--text-muted)]
        ">Coming Soon</button>`),W=s(`<article><!> <div class="flex items-start justify-between gap-4"><div><p class="
          text-xs font-bold
          uppercase tracking-[0.15em]
          text-[var(--text-muted)]
        "> </p> <div class="mt-3 flex items-baseline gap-2"><span class="text-4xl font-black tracking-tight"> </span> <span class="
            text-xs
            text-[var(--text-muted)]
          ">/ month</span></div></div> <!></div> <p class="
      mt-4 text-sm leading-6
      text-[var(--text-muted)]
    "> </p> <div class="mt-6 space-y-3"></div> <div class="mt-auto pt-8"><!></div></article>`);function G(i,s){y(s,!0);let u=v(s,`selected`,3,!1);var f=W(),p=d(f),m=e=>{var t=z();n(e,t)};T(p,e=>{s.plan.popular&&e(m)});var h=S(p,2),b=d(h),w=d(b),E=a(w,!0),D=S(w,2),O=d(D),k=a(O);g(2),x(D),x(b);var A=S(b,2),j=e=>{var t=B();I(d(t),{size:15}),x(t),n(e,t)};T(A,e=>{s.plan.enabled||e(j)}),x(h);var M=S(h,2),N=a(M,!0),F=S(M,2);c(F,21,()=>s.plan.features,t,(t,i)=>{var o=V(),s=d(o);P(s,{size:16,class:`mt-0.5 shrink-0 text-[var(--brand)]`});var c=S(s,2),u=a(c,!0);x(o),e(()=>l(u,r(i))),n(t,o)}),x(F);var L=S(F,2),R=d(L),G=t=>{var r=H(),i=a(r,!0);e(()=>{_(r,1,`
          focus-ring
          w-full rounded-xl
          border
          px-5 py-3
          text-sm font-bold
          transition
          ${u()?`border-[var(--brand)] bg-[var(--brand)] text-black`:`border-[var(--line)] hover:border-[var(--brand)]`}
        `),l(i,u()?`Selected`:`Choose Basic`)}),o(`click`,r,function(...e){s.onclick?.apply(this,e)}),n(t,r)},K=e=>{var t=U();n(e,t)};T(R,e=>{s.plan.enabled?e(G):e(K,-1)}),x(L),x(f),e(e=>{_(f,1,`
    relative flex h-full flex-col
    rounded-2xl border
    p-6
    transition-all duration-200
    ${u()?`border-[var(--brand)] bg-[var(--surface-elevated)] shadow-lg`:`border-[var(--line)] bg-[var(--surface)]`}
    ${s.plan.enabled?`hover:-translate-y-1 hover:border-[var(--brand)]/50`:`opacity-60`}
  `),l(E,s.plan.name),l(k,`NPR ${e??``}`),l(N,s.plan.description)},[()=>s.plan.price.toLocaleString(`en-NP`)]),n(i,f),C()}var K=[{id:`basic`,name:`Basic`,price:2499,currency:`NPR`,period:`month`,description:`Everything you need to build a consistent training routine.`,features:[`Full gym access`,`Locker room access`,`Free Wi-Fi`,`Community events`],enabled:!0},{id:`premium`,name:`Premium`,price:4999,currency:`NPR`,period:`month`,description:`More guidance, more flexibility, and more support.`,features:[`Everything in Basic`,`All group classes`,`Personal training session`,`Nutrition guidance`,`Guest passes`],popular:!0,enabled:!1,comingSoon:!0},{id:`elite`,name:`Elite`,price:7999,currency:`NPR`,period:`month`,description:`A premium coaching experience built around your goals.`,features:[`Everything in Premium`,`Unlimited personal training`,`Custom workout plan`,`Priority support`,`Nutrition planning`,`Exclusive events`],enabled:!1,comingSoon:!0}],q=s(`<meta name="description" content="Choose your Leo Fitness membership and start building a stronger, healthier you."/>`),J=s(`<div class="
          mt-8
          rounded-2xl
          border border-[var(--brand)]/30
          bg-[var(--surface)]
          p-5
          sm:p-6
        "><div class="
            flex flex-col gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "><div><p class="
                text-xs font-bold uppercase
                tracking-[0.15em]
                text-[var(--brand)]
              ">Selected membership</p> <div class="mt-2 flex items-baseline gap-2"><h3 class="text-xl font-bold"> </h3> <span class="
                  text-sm
                  text-[var(--text-muted)]
                "> </span></div></div> <a href="/contact?intent=membership" class="
              focus-ring
              inline-flex
              items-center justify-center
              rounded-xl
              bg-[var(--brand)]
              px-6 py-3
              text-sm font-bold
              text-black
              transition
              hover:brightness-110
            "> </a></div></div>`),Y=s(`<!> <section class="section-space"><div class="container-shell"><!> <div class="
        mt-12 grid gap-5
        lg:grid-cols-3
      "></div> <!> <div class="
        mt-8 grid gap-4
        md:grid-cols-2
        lg:grid-cols-4
      "><div class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "><!> <p class="mt-3 text-sm font-semibold">No long-term contracts</p></div> <div class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "><!> <p class="mt-3 text-sm font-semibold">Flexible payment options</p></div> <div class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "><!> <p class="mt-3 text-sm font-semibold">Community events</p></div> <div class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "><!> <p class="mt-3 text-sm font-semibold">Cancel anytime</p></div></div></div></section> <section class="
    section-space
    border-y border-[var(--line)]
    bg-[var(--surface)]
  "><div class="
      container-shell grid gap-12
      lg:grid-cols-[.9fr_1.1fr]
      lg:items-center
    "><div><p class="eyebrow text-[var(--brand)]">What happens next</p> <h2 class="
          display-font mt-3
          text-4xl leading-none
          sm:text-6xl
        ">Simple start. Serious support.</h2> <p class="
          mt-5
          text-sm leading-7
          text-[var(--text-muted)]
        ">We keep the onboarding process human. A future version can
        plug these steps into checkout, e-signature, payments and CRM
        flows without changing the visual system.</p></div> <div class="
        grid gap-4
        sm:grid-cols-3
      "><div class="
          rounded-2xl
          border border-[var(--line)]
          p-5
        "><span class="
            text-3xl font-black
            text-[var(--brand)]
          ">01</span> <p class="mt-5 font-semibold">Choose a plan</p> <p class="
            mt-1
            text-xs leading-5
            text-[var(--text-muted)]
          ">Pick the support level that fits.</p></div> <div class="
          rounded-2xl
          border border-[var(--line)]
          p-5
        "><span class="
            text-3xl font-black
            text-[var(--brand)]
          ">02</span> <p class="mt-5 font-semibold">Meet the team</p> <p class="
            mt-1
            text-xs leading-5
            text-[var(--text-muted)]
          ">Set goals and learn the floor.</p></div> <div class="
          rounded-2xl
          border border-[var(--line)]
          p-5
        "><span class="
            text-3xl font-black
            text-[var(--brand)]
          ">03</span> <p class="mt-5 font-semibold">Start training</p> <p class="
            mt-1
            text-xs leading-5
            text-[var(--text-muted)]
          ">Build a routine you can keep.</p></div></div></div></section> <!>`,1);function X(t,o){y(o,!0);let s=f(`basic`),h=m(()=>K.find(e=>e.id===r(s)));function _(e){e.enabled&&p(s,e.id,!0)}var v=Y();w(`wza8g5`,e=>{var t=q();E(()=>{u.title=`Membership | Leo Fitness & Gym`}),n(e,t)});var b=i(v);M(b,{eyebrow:`Simple. Flexible. Local.`,title:`Start your strongest chapter.`,body:`Get everything you need to train consistently, build strength and become part of the Leo Fitness community.`,image:`https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=84`});var D=S(b,2),N=d(D),F=d(N);j(F,{eyebrow:`Membership plans`,title:`Start with the basics.`,body:`Our Basic membership gives you everything you need to build a consistent training routine. Premium and Elite experiences are coming soon.`,align:`center`});var I=S(F,2);c(I,21,()=>K,e=>e.id,(e,t)=>{{let n=m(()=>r(s)===r(t).id);G(e,{get plan(){return r(t)},get selected(){return r(n)},onclick:()=>_(r(t))})}}),x(I);var L=S(I,2),z=t=>{var i=J(),o=d(i),s=d(o),c=S(d(s),2),u=d(c),f=a(u,!0),p=S(u,2),m=a(p);x(c),x(s);var g=S(s,2),_=a(g);x(o),x(i),e(e=>{l(f,r(h).name),l(m,`NPR ${e??``} / month`),l(_,`Continue with ${r(h).name??``}`)},[()=>r(h).price.toLocaleString(`en-NP`)]),n(t,i)};T(L,e=>{r(h)&&e(z)});var B=S(L,2),V=d(B);R(d(V),{size:21,class:`mx-auto text-[var(--brand)]`,"aria-hidden":`true`}),g(2),x(V);var H=S(V,2),U=d(H);O(U,{size:21,class:`mx-auto text-[var(--brand)]`,"aria-hidden":`true`}),g(2),x(H);var W=S(H,2),X=d(W);k(X,{size:21,class:`mx-auto text-[var(--brand)]`,"aria-hidden":`true`}),g(2),x(W);var Z=S(W,2);P(d(Z),{size:21,class:`mx-auto text-[var(--brand)]`,"aria-hidden":`true`}),g(2),x(Z),x(B),x(N),x(D);var Q=S(D,4);A(Q,{title:`Your strongest chapter can start now.`,body:`Pick a plan, meet the team, and put a little more discipline behind the goals that matter to you.`}),n(t,v),C()}export{X as component};