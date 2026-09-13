<script lang="ts">
  export let quote = '';
  export let name = '';
  export let meta = '';
  export let avatar = '';
</script>

<figure class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
  <blockquote class="text-sm leading-6 text-[var(--text)]">“{quote}”</blockquote>
  <figcaption class="mt-5 flex items-center gap-3">
    <img src={avatar} alt="" class="h-10 w-10 rounded-full object-cover" loading="lazy" />
    <div>
      <p class="text-sm font-semibold">{name}</p>
      <p class="text-xs text-[var(--text-muted)]">{meta}</p>
    </div>
  </figcaption>
</figure>
