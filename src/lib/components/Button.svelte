<!-- <script lang="ts">
  export let href: string | undefined = undefined;
  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  export let size: 'sm' | 'md' = 'md';
  export let type: 'button' | 'submit' = 'button';
  export let disabled = false;
  export let onclick: ((event: MouseEvent) => void) | undefined = undefined;
  export let className = '';

  const base = 'focus-ring inline-flex items-center justify-center gap-2 rounded-lg border font-semibold tracking-wide transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50';
  $: sizeClass = size === 'sm' ? 'px-4 py-2.5 text-xs' : 'px-5 py-3 text-sm';
  $: variantClass = variant === 'primary'
    ? 'border-[var(--brand)] bg-[var(--brand)] text-[var(--on-brand)] hover:brightness-110'
    : variant === 'secondary'
      ? 'border-[var(--brand)]/70 bg-transparent text-[var(--text)] hover:bg-[var(--brand)]/10'
      : 'border-transparent bg-transparent text-[var(--text)] hover:bg-[var(--surface-2)]';
</script>

{#if href}
  <a {href} class={`${base} ${sizeClass} ${variantClass} ${className}`}>
    <slot />
  </a>
{:else}
  <button {type} {disabled} {onclick} class={`${base} ${sizeClass} ${variantClass} ${className}`}>
    <slot />
  </button>
{/if} -->

<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    href,
    variant = 'primary',
    size = 'md',
    type = 'button',
    disabled = false,
    onclick,
    children
  }: {
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md';
    type?: 'button' | 'submit';
    disabled?: boolean;
    onclick?: (event: MouseEvent) => void;
    children: Snippet;
  } = $props();

  const base = `
    focus-ring
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    font-semibold
    transition-all
    duration-200
    disabled:pointer-events-none
    disabled:opacity-50
  `;

  const variants = {
    primary: `
      bg-[var(--brand)]
      text-[var(--on-brand)]
      hover:bg-[var(--brand-bright)]
      active:scale-[0.98]
    `,

    secondary: `
      border
      border-[var(--button-secondary-border)]
      bg-[var(--button-secondary-bg)]
      text-[var(--button-secondary-text)]
      shadow-[var(--button-secondary-shadow)]

      hover:border-[var(--button-secondary-border-hover)]
      hover:bg-[var(--button-secondary-bg-hover)]

      active:scale-[0.98]
    `,

    ghost: `
      bg-transparent
      text-[var(--text)]
      hover:bg-[var(--surface-elevated)]
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-3 text-sm'
  };

  const classes = $derived(
    `${base} ${variants[variant]} ${sizes[size]}`
  );
</script>

{#if href}
  <a
    {href}
    class={classes}
    aria-disabled={disabled}
  >
    {@render children()}
  </a>
{:else}
  <button
    {type}
    {disabled}
    {onclick}
    class={classes}
  >
    {@render children()}
  </button>
{/if}