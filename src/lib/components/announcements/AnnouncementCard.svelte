<script lang="ts">
  import {
    ArrowRight,
    CalendarDays,
    Dumbbell,
    Star,
    UsersRound
  } from '@lucide/svelte';

  import type { Announcement } from '$lib/announcements/types';

  let {
    announcement
  }: {
    announcement: Announcement;
  } = $props();

  const Icon = $derived(
    announcement.kind === 'event'
      ? CalendarDays
      : announcement.kind === 'operational'
        ? Dumbbell
        : announcement.kind === 'promotion'
          ? Star
          : UsersRound
  );
</script>

<article
  class="
    card-lift
    rounded-2xl
    border border-[var(--line)]
    bg-[var(--surface)]
    p-5
  "
>
  <Icon
    size={20}
    class="text-[var(--brand)]"
    aria-hidden="true"
  />

  <h3 class="mt-4 font-semibold">
    {announcement.title}
  </h3>

  {#if announcement.message}
    <p class="mt-2 text-sm leading-6 text-[var(--text-muted)]">
      {announcement.message}
    </p>
  {/if}

  {#if announcement.action}
    <a
      href={announcement.action.href}
      class="
        focus-ring
        mt-5 inline-flex items-center gap-1.5
        text-xs font-bold uppercase
        tracking-[0.08em]
        text-[var(--brand)]
        hover:text-[var(--text)]
      "
    >
      {announcement.action.label}

      <ArrowRight
        size={14}
        aria-hidden="true"
      />
    </a>
  {/if}
</article>