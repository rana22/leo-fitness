<script lang="ts">
  import type {
    Announcement,
    AnnouncementKind,
    AnnouncementPlacement
  } from '$lib/announcements/types';

  import { getActiveAnnouncements } from '$lib/announcements/utils';

  import AnnouncementBar from './AnnouncementBar.svelte';
  import AnnouncementCard from './AnnouncementCard.svelte';
  import OpeningSoonHero from './OpeningSoonHero.svelte';
  import PromotionBanner from './PromotionBanner.svelte';

  let {
    announcements,
    placement,
    allowedKinds = [],
    now,
    clientOpenAt
  }: {
    announcements: Announcement[];
    placement: AnnouncementPlacement;
    allowedKinds?: AnnouncementKind[];
    now: number;
    clientOpenAt: number;
  } = $props();

  const active = $derived(
    getActiveAnnouncements(
      announcements,
      placement,
      now,
      clientOpenAt,
      allowedKinds
    )
  );

  const primary = $derived(active[0]);
</script>

{#if placement === 'topbar'}
  {#if primary}
    <AnnouncementBar announcement={primary} />
  {/if}

{:else if placement === 'hero'}
  {#if primary?.kind === 'opening'}
    <OpeningSoonHero
      announcement={primary}
      {now}
    />
  {/if}

{:else if placement === 'banner'}
  {#if primary}
    <PromotionBanner
      announcement={primary}
    />
  {/if}

{:else if placement === 'card'}
  {#if active.length > 0}
    <section class="section-space py-12 sm:py-16">
      <div
        class="
          container-shell
          grid gap-4
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {#each active as announcement (announcement.id)}
          <AnnouncementCard {announcement} />
        {/each}
      </div>
    </section>
  {/if}
{/if}