<script lang="ts">
  export let eyebrow = '';
  export let title = '';
  export let body = '';
  export let align: 'left' | 'center' = 'left';
</script>

<div class={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
  {#if eyebrow}<p class="eyebrow text-[var(--brand)]">{eyebrow}</p>{/if}
  <h2 class="display-font mt-3 text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl">{title}</h2>
  {#if body}<p class="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{body}</p>{/if}
</div>
