<script lang="ts">
  import { ArrowUpRight, Clock3, Signal } from '@lucide/svelte';
  import type { GymClass } from '$lib/types/models';
  import Button from './Button.svelte';
  export let item: GymClass;
</script>

<article class="card-lift group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
  <div class="relative aspect-[16/10] overflow-hidden">
    <img src={item.image} alt={item.name} loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>
    <span class="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">{item.category}</span>
    <span class="absolute bottom-4 left-4 text-sm font-semibold text-white">{item.level}</span>
  </div>
  <div class="p-5">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="display-font text-2xl tracking-[-0.02em]">{item.name}</h3>
        <p class="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
      </div>
      <span class="shrink-0 rounded-full border border-[var(--brand)]/40 p-2 text-[var(--brand)]"><ArrowUpRight size={16} /></span>
    </div>
    <div class="mt-5 grid grid-cols-3 border-y border-[var(--line)] py-3 text-xs text-[var(--text-muted)]">
      <span class="flex items-center gap-1.5"><Clock3 size={13} />{item.time}</span>
      <span class="flex items-center gap-1.5"><Signal size={13} />{item.duration}</span>
      <span class="truncate text-right">{item.coach}</span>
    </div>
    <div class="mt-4 flex justify-end">
      <Button href="/contact?intent=class" size="sm" variant="secondary">Book Class</Button>
    </div>
  </div>
</article>
