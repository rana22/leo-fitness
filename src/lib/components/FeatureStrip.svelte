<script lang="ts">
  import { Dumbbell, HeartPulse, ShieldCheck, Trophy, Users } from '@lucide/svelte';
  const features = [
    { label: 'Premium Equipment', icon: Dumbbell },
    { label: 'Expert Trainers', icon: Users },
    { label: 'Personalized Programs', icon: HeartPulse },
    { label: 'Real Results', icon: Trophy },
    { label: 'Supportive Community', icon: ShieldCheck }
  ];
</script>

<div class="grid grid-cols-2 divide-y divide-x divide-[var(--line)] border-y border-[var(--line)] bg-[var(--surface)] md:grid-cols-5 md:divide-y-0">
  {#each features as feature}
    <div class="flex items-center gap-3 px-4 py-5 md:flex-col md:justify-center md:gap-2 md:px-3 md:text-center">
      <svelte:component this={feature.icon} size={21} class="shrink-0 text-[var(--brand)]" />
      <span class="text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-[var(--text-muted)]">{feature.label}</span>
    </div>
  {/each}
</div>
