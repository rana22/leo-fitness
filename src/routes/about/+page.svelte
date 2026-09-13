<script lang="ts">
  import { HeartPulse, Star, Target, Users } from '@lucide/svelte';
  import CTA from '$components/CTA.svelte';
  import PageHero from '$components/PageHero.svelte';
  import SectionHeading from '$components/SectionHeading.svelte';

  const values = [
    { title: 'Health first', body: 'Your well-being comes first.', icon: HeartPulse },
    { title: 'Inclusivity', body: 'A gym for everyone.', icon: Users },
    { title: 'Progress', body: 'Small steps. Big results.', icon: Target },
    { title: 'Excellence', body: 'Higher standards every day.', icon: Star }
  ];
</script>

<svelte:head><title>About | Leo Fitness & Gym</title></svelte:head>

<PageHero eyebrow="More than a gym. A community." title="Built for people who choose progress." body="Leo Fitness exists to make training feel purposeful, welcoming and sustainable — not intimidating or disposable." image="https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&w=1800&q=84" />

<section class="section-space">
  <div class="container-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
    <div>
      <p class="eyebrow text-[var(--brand)]">Our story</p>
      <h2 class="display-font mt-3 text-4xl leading-none sm:text-6xl">Train hard. Stay human.</h2>
      <div class="mt-6 space-y-5 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
        <p>Our approach is intentionally simple: great coaching, a clean environment, flexible programming and a culture that rewards consistency.</p>
        <p>The brand can grow beyond fitness. This design system is structured around reusable content blocks, semantic color tokens, responsive layout primitives and route-level composition so the same foundation can support other service businesses later.</p>
      </div>
    </div>
    <div class="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[#0b0b0b]">
      <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=84" alt="Athlete lifting a dumbbell" class="aspect-[4/5] h-full w-full object-cover opacity-85" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div class="absolute bottom-7 left-7 right-7 text-white"><p class="eyebrow text-[var(--brand-bright)]">The promise</p><p class="display-font mt-2 text-3xl">A stronger you, a brighter tomorrow.</p></div>
    </div>
  </div>
</section>

<section class="section-space border-y border-[var(--line)] bg-[var(--surface)]">
  <div class="container-shell">
    <SectionHeading eyebrow="Our values" title="What we refuse to compromise." body="The visual brand is bold. The operating principles underneath it are clear." align="center" />
    <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each values as value}
        <div class="card-lift rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6 text-center">
          <svelte:component this={value.icon} size={24} class="mx-auto text-[var(--brand)]" />
          <h3 class="mt-4 font-semibold">{value.title}</h3>
          <p class="mt-2 text-xs leading-5 text-[var(--text-muted)]">{value.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- <section class="section-space"> -->
  <!-- <div class="container-shell grid gap-5 md:grid-cols-3">
    <div class="rounded-2xl border border-[var(--line)] p-6"><p class="text-4xl font-black text-[var(--brand)]">5K+</p><p class="mt-2 text-sm text-[var(--text-muted)]">Members served</p></div>
    <div class="rounded-2xl border border-[var(--line)] p-6"><p class="text-4xl font-black text-[var(--brand)]">10+</p><p class="mt-2 text-sm text-[var(--text-muted)]">Expert trainers</p></div>
    <div class="rounded-2xl border border-[var(--line)] p-6"><p class="text-4xl font-black text-[var(--brand)]">100%</p><p class="mt-2 text-sm text-[var(--text-muted)]">Results focused</p></div>
  </div> -->
<!-- </section> -->

<CTA title="Come for the workout. Stay for the people." />
