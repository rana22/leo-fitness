<script lang="ts">
  export let eyebrow = "";
  export let title = "";
  export let body = "";
  export let image = "";
</script>

<section
  class="noise relative overflow-hidden border-b border-[var(--line)] bg-[#0a0a0a] text-white"
>
  <div
    class="hero-image absolute inset-0 opacity-35"
    style={`background-image:url('${image}')`}
  ></div>
  <div
    class="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.96)_5%,rgba(5,5,5,.72)_55%,rgba(5,5,5,.2)_100%)]"
  ></div>
  <div
    class="container-shell relative z-10 flex min-h-[390px] items-end py-16 sm:min-h-[480px] sm:py-20"
  >
    <div class="max-w-3xl">
      <p class="eyebrow text-[var(--brand-bright)]">{eyebrow}</p>
      <h1
        class="display-font mt-3 text-5xl leading-[0.92] tracking-[-0.04em] sm:text-7xl"
      >
        {title}
      </h1>
      <p class="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
        {body}
      </p>
    </div>
  </div>
</section>
