<script lang="ts">
  import { Moon, Sun } from "@lucide/svelte";
  import { setTheme, theme } from "$lib/state/theme.svelte";
</script>

<div
  class="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-2)] p-1"
  aria-label="Theme selection"
>
  <button
    class="focus-ring rounded-full p-2 {theme.mode === 'light'
      ? 'bg-[var(--brand)] text-[var(--on-brand)]'
      : 'text-[var(--text-muted)]'}"
    aria-label="Light theme"
    onclick={() => setTheme("light")}
  >
    <Sun size={15} strokeWidth={2.1} />
  </button>
  <button
    class="focus-ring rounded-full p-2 {theme.mode === 'dark'
      ? 'bg-[var(--brand)] text-[var(--on-brand)]'
      : 'text-[var(--text-muted)]'}"
    aria-label="Dark theme"
    onclick={() => setTheme("dark")}
  >
    <Moon size={15} strokeWidth={2.1} />
  </button>
</div>
