<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';
  import { getCountdownParts, getRemainingMilliseconds } from '$lib/announcements/utils';
  import type { Announcement } from '$lib/announcements/types';
  import Button from '$lib/components/Button.svelte';

  let { announcement, now }: { announcement: Announcement; now: number } = $props();

  const countdown = $derived(getCountdownParts(getRemainingMilliseconds(announcement, now)));
  const pad = (value: number) => value.toString().padStart(2, '0');
</script>

<div class="max-w-[720px]">
  <p class="eyebrow text-[var(--brand-bright)]">Train • Push • Grow • Repeat</p>

  <h1 class="mt-5 uppercase leading-[0.86] tracking-[-0.055em]">
    <span class="block text-[clamp(3.75rem,7vw,6.5rem)] font-black text-white">Opening</span>
    <span class="gold-gradient display-font block text-[clamp(4rem,7.5vw,7rem)] lowercase tracking-[-0.035em]">soon</span>
  </h1>

  <p class="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
    {announcement.message}
  </p>

  <div class="mt-8 grid max-w-[560px] grid-cols-4 gap-2 sm:gap-3" aria-label="Opening countdown">
    {#each [
      ['days', countdown.days],
      ['hours', countdown.hours],
      ['minutes', countdown.minutes],
      ['seconds', countdown.seconds]
    ] as [label, value]}
      <div class="rounded-xl border border-white/12 bg-black/35 px-2 py-4 text-center backdrop-blur-sm sm:px-4">
        <p class="text-2xl font-black text-[var(--brand-bright)] sm:text-3xl">{pad(value as number)}</p>
        <p class="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:text-[10px]">{label}</p>
      </div>
    {/each}
  </div>

  <div class="mt-8 flex flex-wrap gap-3">
    {#if announcement.action}
      <Button href={announcement.action.href} size="md">
        {announcement.action.label} <ArrowRight size={16} />
      </Button>
    {/if}
    <Button href="/about" variant="secondary" size="md">Learn More</Button>
  </div>
</div>
