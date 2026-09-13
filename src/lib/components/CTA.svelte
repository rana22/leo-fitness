<script lang="ts">
  import { ArrowUpRight } from '@lucide/svelte';
  import Button from './Button.svelte';
  export let title = 'A stronger tomorrow starts today.';
  export let body = 'Train with purpose. Build strength. Join a community that keeps you moving.';
</script>

<section class="section-space">
  <div class="container-shell">
    <div class="noise relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[#0b0b0b] p-7 text-white sm:p-10 lg:p-14">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,164,55,0.22),transparent_33%),linear-gradient(120deg,rgba(0,0,0,.92),rgba(0,0,0,.56))]"></div>
      <div class="hero-image absolute inset-0 opacity-30" style="background-image:url('https://images.unsplash.com/photo-1599058917212-d750089bc07d?auto=format&fit=crop&w=1800&q=84')"></div>
      <div class="relative z-10 max-w-2xl">
        <p class="eyebrow text-[var(--brand-bright)]">Start your journey</p>
        <h2 class="display-font mt-3 text-4xl leading-none sm:text-6xl">{title}</h2>
        <p class="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">{body}</p>
        <div class="mt-8"><Button href="/membership">Join Leo Fitness <ArrowUpRight size={16} /></Button></div>
      </div>
    </div>
  </div>
</section>
