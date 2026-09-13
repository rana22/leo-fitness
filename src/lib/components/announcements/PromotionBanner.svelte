<script lang="ts">
  import { ArrowRight, Gift } from '@lucide/svelte';
  import type { Announcement } from '$lib/announcements/types';

  let { announcement }: { announcement: Announcement } = $props();
</script>

<section class="section-space py-8 sm:py-10">
  <div class="container-shell">
    <div class="relative overflow-hidden rounded-[22px] border border-[var(--brand)]/70 bg-[#0c0c0c] p-6 text-white shadow-[var(--shadow)] sm:p-8 lg:p-10">
      <div class="absolute inset-y-0 left-0 w-1 bg-[var(--brand)]"></div>
      <div class="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[var(--brand)]/12 blur-3xl"></div>

      <div class="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="eyebrow text-[var(--brand-bright)]">Limited time offer</p>
          <div class="mt-2 flex items-start gap-4">
            <Gift size={30} class="mt-1 shrink-0 text-[var(--brand-bright)]" aria-hidden="true" />
            <div>
              <h2 class="text-3xl font-black tracking-tight sm:text-5xl">{announcement.title}</h2>
              {#if announcement.message}
                <p class="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">{announcement.message}</p>
              {/if}
            </div>
          </div>
        </div>

        {#if announcement.action}
          <a
            href={announcement.action.href}
            class="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-6 py-3.5 text-sm font-bold text-[var(--on-brand)] transition hover:brightness-110"
          >
            {announcement.action.label}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>
