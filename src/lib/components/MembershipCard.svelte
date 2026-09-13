<script lang="ts">
  import { Check, Lock } from '@lucide/svelte';

  import type { MembershipPlan } from '$lib/data/memberships';

  let {
    plan,
    selected = false,
    onclick
  }: {
    plan: MembershipPlan;
    selected?: boolean;
    onclick?: () => void;
  } = $props();
</script>

<article
  class="
    relative flex h-full flex-col
    rounded-2xl border
    p-6
    transition-all duration-200
    {selected
      ? 'border-[var(--brand)] bg-[var(--surface-elevated)] shadow-lg'
      : 'border-[var(--line)] bg-[var(--surface)]'}
    {!plan.enabled
      ? 'opacity-60'
      : 'hover:-translate-y-1 hover:border-[var(--brand)]/50'}
  "
>
  {#if plan.popular}
    <div
      class="
        absolute -top-3 left-1/2
        -translate-x-1/2
        rounded-full
        bg-[var(--brand)]
        px-4 py-1
        text-[10px] font-black
        uppercase tracking-[0.15em]
        text-black
      "
    >
      Most Popular
    </div>
  {/if}

  <div class="flex items-start justify-between gap-4">
    <div>
      <p
        class="
          text-xs font-bold
          uppercase tracking-[0.15em]
          text-[var(--text-muted)]
        "
      >
        {plan.name}
      </p>

      <div class="mt-3 flex items-baseline gap-2">
        <span
          class="text-4xl font-black tracking-tight"
        >
          NPR {plan.price.toLocaleString('en-NP')}
        </span>

        <span
          class="
            text-xs
            text-[var(--text-muted)]
          "
        >
          / month
        </span>
      </div>
    </div>

    {#if !plan.enabled}
      <div
        class="
          rounded-full
          border border-[var(--line)]
          p-2
          text-[var(--text-muted)]
        "
        title="Coming soon"
      >
        <Lock size={15} />
      </div>
    {/if}
  </div>

  <p
    class="
      mt-4 text-sm leading-6
      text-[var(--text-muted)]
    "
  >
    {plan.description}
  </p>

  <div class="mt-6 space-y-3">
    {#each plan.features as feature}
      <div class="flex gap-3 text-sm">
        <Check
          size={16}
          class="mt-0.5 shrink-0 text-[var(--brand)]"
        />

        <span>{feature}</span>
      </div>
    {/each}
  </div>

  <div class="mt-auto pt-8">
    {#if plan.enabled}
      <button
        type="button"
        on:click={onclick}
        class="
          focus-ring
          w-full rounded-xl
          border
          px-5 py-3
          text-sm font-bold
          transition
          {selected
            ? 'border-[var(--brand)] bg-[var(--brand)] text-black'
            : 'border-[var(--line)] hover:border-[var(--brand)]'}
        "
      >
        {selected ? 'Selected' : 'Choose Basic'}
      </button>
    {:else}
      <button
        type="button"
        disabled
        class="
          w-full rounded-xl
          border border-[var(--line)]
          px-5 py-3
          text-sm font-bold
          text-[var(--text-muted)]
        "
      >
        Coming Soon
      </button>
    {/if}
  </div>
</article>