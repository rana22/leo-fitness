<script lang="ts">
  import { asset, resolve } from '$app/paths';
  import { page } from "$app/state";
  import { ArrowUpRight } from "@lucide/svelte";
  import Button from "./Button.svelte";
  import MobileMenu from "./MobileMenu.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { theme } from "$lib/state/theme.svelte";

  const links = [
    ["Home", "/"],
    ["Classes", "/classes"],
    ["Membership", "/membership"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  const isActive = (href: string) =>
    href === "/"
      ? page.url.pathname === "/"
      : page.url.pathname.startsWith(href);

  function getNavLinkClass(href: string) {
    const active = isActive(href);

    const base = `
      focus-ring
      rounded-full
      px-4 py-2.5
      text-[13px]
      font-semibold
      uppercase
      tracking-[0.14em]
      transition-colors
    `;

    const state = active
      ? 'text-[var(--brand-bright)]'
      : 'text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]';

    return `${base} ${state}`;
  }
</script>

<header
  class:header-light={theme.mode === "light"}
  class="sticky top-0 z-40 border-b border-white/10 transition-colors duration-300 {theme.mode ===
  'light'
    ? 'border-black/5 bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] backdrop-blur-xl'
    : 'bg-black/8 backdrop-blur-[6px]'}"
>
  <div
    class="container-shell flex h-[88px] items-center justify-between gap-5 lg:h-[96px]"
  >
    <a
      href={resolve('/')}
      aria-label="Leo Fitness and Gym home"
      class="focus-ring flex shrink-0 items-center"
    >
      <picture>
        <img
          src={theme.mode === "light"
            ? asset('/brand/logo-light.png')
            : asset('/brand/logo-dark.png')}
          class="h-[66px] w-auto object-contain sm:h-[72px] lg:h-[78px]"
          alt="Leo Fitness & Gym"
        />
      </picture>
    </a>

    <nav
      class="hidden items-center gap-2 lg:flex"
      aria-label="Primary navigation"
    >
      {#each links as [label, href]}
        <a
          {href}
          aria-current={isActive(href) ? 'page' : undefined}
          class={getNavLinkClass(href)}
        >
          {label}
        </a>
      {/each}
    </nav>

    <div class="hidden items-center gap-3 lg:flex">
      <ThemeToggle />
      <Button href="/membership" size="sm"
        >Join Now <ArrowUpRight size={15} /></Button
      >
    </div>

    <div class="flex items-center gap-2 lg:hidden">
      <ThemeToggle />
      <MobileMenu />
    </div>
  </div>
</header>
