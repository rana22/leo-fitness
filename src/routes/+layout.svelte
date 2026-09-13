

<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  import '../app.css';

  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AnnouncementSlot from '$lib/components/announcements/AnnouncementSlot.svelte';

  import { announcements } from '$lib/data/announcements';
  import { setTheme, theme } from '$lib/state/theme.svelte';
  let {
    children
  }: {
    children: Snippet;
  } = $props();

  let now = $state(Date.now());
  let clientOpenAt = $state(Date.now());

  onMount(() => {
    clientOpenAt = Date.now();
    now = clientOpenAt;

    const timer = window.setInterval(() => {
      now = Date.now();
    }, 1000);

    const saved = localStorage.getItem('leo-theme');

    const preferred =
      window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';

    setTheme(
      saved === 'light' || saved === 'dark'
        ? saved
        : preferred
    );

    return () => {
      window.clearInterval(timer);
    };
  });
</script>

<svelte:head>
  <meta
    name="description"
    content="Leo Fitness & Gym — a premium training and community experience."
  />
</svelte:head>

<a
  href="#main-content"
  class="
    focus-ring sr-only fixed left-3 top-3 z-[100]
    rounded bg-[var(--brand)]
    px-3 py-2
    text-xs font-bold text-[var(--on-brand)]
    focus:not-sr-only
  "
>
  Skip to content
</a>

<div
  data-theme={theme.mode}
  class="min-h-screen bg-[var(--bg)] text-[var(--text)]"
>
  <!-- Global announcement -->
  <AnnouncementSlot
    announcements={announcements}
    placement="topbar"
    allowedKinds={['critical', 'operational', 'opening']}
    {now}
    {clientOpenAt}
  />
  <!-- Global navigation -->
  <Navbar />

  <!-- Page content -->
  <main id="main-content">
    {@render children()}
  </main>

  <!-- Global footer -->
  <Footer />
</div>