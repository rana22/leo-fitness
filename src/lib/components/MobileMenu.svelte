<script lang="ts">
  import { Menu, X } from '@lucide/svelte';
  import Button from './Button.svelte';

  let open = $state(false);
  const links = [
    ['Home', '/'],
    ['Classes', '/classes'],
    ['Membership', '/membership'],
    ['About', '/about'],
    ['Contact', '/contact']
  ];
</script>

<div class="md:hidden">
  <button class="focus-ring rounded-lg border border-[var(--line)] p-2" aria-label={open ? 'Close menu' : 'Open menu'} onclick={() => open = !open}>
    {#if open}<X size={21} />{:else}<Menu size={21} />{/if}
  </button>

  {#if open}
    <div class="absolute inset-x-4 top-[82px] z-50 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-2xl">
      <div class="grid gap-1">
        {#each links as [label, href]}
          <a class="rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]" href={href} onclick={() => open = false}>{label}</a>
        {/each}
      </div>
      <div class="mt-3 border-t border-[var(--line)] pt-3">
        <div class="w-full"><Button href="/membership" size="sm">Join Now</Button></div>
      </div>
    </div>
  {/if}
</div>
