<script lang="ts">
  import { ArrowRight, CalendarDays, Clock3 } from '@lucide/svelte';
  import Button from '$components/Button.svelte';
  import ClassCard from '$components/ClassCard.svelte';
  import PageHero from '$components/PageHero.svelte';
  import SectionHeading from '$components/SectionHeading.svelte';
  import { classes } from '$data/classes';
  import type { ClassCategory } from '$types/models';

  type Filter = 'All' | ClassCategory;
  const filters: Filter[] = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'Functional'];
  let activeFilter = $state<Filter>('All');
  const filteredClasses = $derived(activeFilter === 'All' ? classes : classes.filter((item) => item.category === activeFilter));
  const days = [
    ['MON', '06:00 AM', 'Strength Training', 'Alex'],
    ['TUE', '07:00 AM', 'HIIT Blast', 'Sarah'],
    ['WED', '09:00 AM', 'Yoga & Mobility', 'Priya'],
    ['THU', '05:00 PM', 'Functional Fitness', 'Mark'],
    ['FRI', '06:00 PM', 'Strength Training', 'Alex'],
    ['SAT', '08:30 AM', 'Cardio Burn', 'Sarah'],
    ['SUN', '09:00 AM', 'Yoga & Recovery', 'Priya']
  ];
</script>

<svelte:head><title>Classes | Leo Fitness & Gym</title></svelte:head>

<PageHero eyebrow="Diverse workouts • real results" title="Classes built for progress." body="Choose a session that fits your goal, schedule and energy. Every class is coach-led and designed to scale." image="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1800&q=84" />

<section class="section-space">
  <div class="container-shell">
    <SectionHeading eyebrow="Browse sessions" title="Find your fit." body="Filter the catalog, then book a session or talk with the team about the best starting point." />
    <div class="mt-8 flex gap-2 overflow-x-auto pb-2">
      {#each filters as filter}
        <button class="focus-ring shrink-0 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition {activeFilter === filter ? 'border-[var(--brand)] bg-[var(--brand)] text-[var(--on-brand)]' : 'border-[var(--line)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)]'}" onclick={() => activeFilter = filter}>{filter}</button>
      {/each}
    </div>
    <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each filteredClasses as item}<ClassCard {item} />{/each}
    </div>
  </div>
</section>

<section class="section-space border-y border-[var(--line)] bg-[var(--surface)]">
  <div class="container-shell">
    <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionHeading eyebrow="Weekly schedule" title="Make training automatic." body="A quick reference for the weekly rhythm. The real product can later source this from a scheduling API." />
      <Button href="/contact?intent=schedule" variant="secondary">Ask about a class <ArrowRight size={15} /></Button>
    </div>
    <div class="mt-10 overflow-hidden rounded-2xl border border-[var(--line)]">
      <div class="grid grid-cols-[76px_1fr_86px] bg-[var(--surface-2)] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)] sm:grid-cols-[90px_1fr_120px]">
        <span>Day</span><span>Session</span><span class="text-right">Coach</span>
      </div>
      {#each days as day, i}
        <div class="grid grid-cols-[76px_1fr_86px] items-center gap-3 border-t border-[var(--line)] px-4 py-4 text-sm sm:grid-cols-[90px_1fr_120px]">
          <div class="font-black tracking-[0.1em] text-[var(--brand)]">{day[0]}</div>
          <div><p class="font-semibold">{day[2]}</p><p class="mt-1 flex items-center gap-2 text-xs text-[var(--text-muted)]"><Clock3 size={13} />{day[1]} · 45–60 min</p></div>
          <span class="text-right text-xs text-[var(--text-muted)]">Coach {day[3]}</span>
        </div>
      {/each}
    </div>
    <div class="mt-6 grid gap-4 sm:grid-cols-3">
      <div class="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5"><CalendarDays size={20} class="text-[var(--brand)]" /><p class="mt-3 font-semibold">Book ahead</p><p class="mt-1 text-xs leading-5 text-[var(--text-muted)]">Reserve popular classes before peak hours.</p></div>
      <div class="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5"><Clock3 size={20} class="text-[var(--brand)]" /><p class="mt-3 font-semibold">Flexible options</p><p class="mt-1 text-xs leading-5 text-[var(--text-muted)]">Morning, midday and evening sessions.</p></div>
      <div class="rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-5"><CalendarDays size={20} class="text-[var(--brand)]" /><p class="mt-3 font-semibold">Built to evolve</p><p class="mt-1 text-xs leading-5 text-[var(--text-muted)]">Ready for live scheduling and waitlists later.</p></div>
    </div>
  </div>
</section>

<section class="section-space">
  <div class="container-shell rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10 lg:p-14">
    <p class="eyebrow text-[var(--brand)]">Need a plan?</p>
    <div class="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <h2 class="display-font max-w-2xl text-4xl leading-none sm:text-6xl">Not sure where to start? We'll build the first week with you.</h2>
      <Button href="/contact">Talk to a coach <ArrowRight size={15} /></Button>
    </div>
  </div>
</section>
