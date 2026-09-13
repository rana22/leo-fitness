
<script lang="ts">
  import {
    ArrowRight,
    CalendarDays,
    CircleAlert,
    ClockAlert,
    Gift,
    Info,
    Sparkles,
    X
  } from '@lucide/svelte';

  import type { Announcement } from '$lib/announcements/types';
  import { getAnnouncementStyle } from './Styles';

  let {
    announcement
  }: {
    announcement: Announcement;
  } = $props();

  let dismissed = $state(false);

  const style = $derived(
    getAnnouncementStyle(announcement.kind)
  );

  const Icon = $derived(
    announcement.kind === 'critical'
      ? CircleAlert
      : announcement.kind === 'operational'
        ? ClockAlert
        : announcement.kind === 'promotion'
          ? Gift
          : announcement.kind === 'event'
            ? CalendarDays
            : announcement.kind === 'opening'
              ? Sparkles
              : Info
  );
</script>

{#if !dismissed}
  <aside
    class="
      relative z-50
      w-full border-b
      {style.background}
      {style.border}
    "
    aria-label="Website announcement"
  >
    <div
      class="
        container-shell
        flex min-h-12
        items-center justify-center
        gap-3
        px-4 py-2
        sm:min-h-14
      "
    >
      <!-- Icon -->
      <Icon
        size={19}
        strokeWidth={2.25}
        class="shrink-0 {style.icon}"
        aria-hidden="true"
      />

      <!-- Content -->
      <div
        class="
          flex min-w-0
          flex-1 flex-wrap
          items-center justify-center
          gap-x-3 gap-y-1
        "
      >
        <span
          class="
            text-xs font-black
            uppercase tracking-[0.12em]
            sm:text-sm
            {style.title}
          "
        >
          {announcement.title}
        </span>

        {#if announcement.message}
          <span
            class="
              hidden text-sm
              md:inline
              {style.message}
            "
          >
            {announcement.message}
          </span>
        {/if}

        {#if announcement.action}
          <a
            href={announcement.action.href}
            class="
              focus-ring
              inline-flex items-center gap-1
              text-xs font-bold
              uppercase tracking-[0.1em]
              {style.action}
            "
          >
            {announcement.action.label}

            <ArrowRight
              size={14}
              aria-hidden="true"
            />
          </a>
        {/if}
      </div>

      <!-- Dismiss -->
      {#if announcement.dismissible}
        <button
          type="button"
          aria-label="Dismiss announcement"
          class="
            focus-ring
            shrink-0 rounded-full
            p-1.5 transition
            hover:bg-white/10
            {style.close}
          "
          on:click={() => (dismissed = true)}
        >
          <X
            size={17}
            aria-hidden="true"
          />
        </button>
      {/if}
    </div>
  </aside>
{/if}