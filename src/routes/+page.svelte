<script lang="ts">
  import { asset } from '$app/paths';
  import { onMount } from 'svelte';
  import {
    ArrowRight,
    Play,
    Trophy,
    Users,
    Zap
  } from '@lucide/svelte';

  // Components
  import Button from '$lib/components/Button.svelte';
  import CTA from '$lib/components/CTA.svelte';
  import ClassCard from '$lib/components/ClassCard.svelte';
  import FeatureStrip from '$lib/components/FeatureStrip.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';
  import Testimonial from '$lib/components/Testimonial.svelte';
  import AnnouncementSlot from '$lib/components/announcements/AnnouncementSlot.svelte';

  // Data
  import { classes } from '$lib/data/classes';
  import { announcements } from '$lib/data/announcements';

  // Announcement utilities
  import { getActiveAnnouncements } from '$lib/announcements/utils';

  let now = $state(Date.now());
  let clientOpenAt = $state(Date.now());

  onMount(() => {
    clientOpenAt = Date.now();
    now = clientOpenAt;

    const timer = window.setInterval(() => {
      now = Date.now();
    }, 1000);

    return () => window.clearInterval(timer);
  });

  const activeHeroAnnouncement = $derived(
    getActiveAnnouncements(
      announcements,
      'hero',
      now,
      clientOpenAt
    )[0]
  );

  const testimonials = [
    {
      quote:
        'The coaching is personal, the atmosphere is serious, and the community keeps me accountable.',
      name: 'Priya S.',
      meta: 'Member since 2022',
      avatar: 'https://i.pravatar.cc/120?img=47'
    },
    {
      quote:
        'Best gym experience I have had. Great trainers, professional environment, real progress.',
      name: 'Rahul M.',
      meta: 'Member since 2023',
      avatar: 'https://i.pravatar.cc/120?img=12'
    },
    {
      quote:
        'More than a gym — it feels like a family. I finally found a routine I enjoy.',
      name: 'Ananya K.',
      meta: 'Member since 2024',
      avatar: 'https://i.pravatar.cc/120?img=32'
    }
  ];
</script>

<svelte:head>
  <title>Leo Fitness & Gym | A stronger you</title>
</svelte:head>


<!-- =========================================================
     HERO
========================================================= -->

<section
  class="
    hero-home noise relative isolate
    min-h-[760px] overflow-hidden
    bg-[#080808] text-white
    sm:min-h-[820px]
    lg:min-h-[920px]
  "
>
  <!-- Hero image -->
  <img
    src={asset("/images/hero-athlete-clean.png")}
    alt="Athlete training with dumbbells in a premium gym"
    class="
      absolute inset-y-0 right-0
      h-full w-full
      object-cover object-[66%_center]
      sm:w-[78%]
      lg:w-[69%] lg:object-center
    "
  />

  <!-- Hero overlays -->
  <div
    class="
      absolute inset-0
      bg-[linear-gradient(
        90deg,
        #050505_0%,
        rgba(5,5,5,.96)_26%,
        rgba(5,5,5,.75)_42%,
        rgba(5,5,5,.22)_68%,
        rgba(5,5,5,.1)_100%
      )]
    "
  ></div>

  <div
    class="
      absolute inset-y-0 right-0
      w-[72%]
      bg-[radial-gradient(
        circle_at_68%_48%,
        rgba(212,164,55,.16),
        transparent_35%
      )]
    "
  ></div>

  <div
    class="
      absolute inset-0
      bg-[linear-gradient(
        0deg,
        rgba(0,0,0,.58)_0%,
        transparent_33%,
        rgba(0,0,0,.18)_100%
      )]
    "
  ></div>

  <!-- Hero content -->
  <div
    class="
      container-shell relative z-10
      flex min-h-[760px] items-center
      pb-14 pt-32
      sm:min-h-[820px]
      lg:min-h-[920px] lg:pb-20 lg:pt-36
    "
  >
    <div class="max-w-[710px]">
      {#if activeHeroAnnouncement}
        <AnnouncementSlot
          announcements={announcements}
          placement="hero"
          allowedKinds={['opening']}
          {now}
          {clientOpenAt}
        />
      {:else}
        <p class="eyebrow text-[var(--brand-bright)]">
          Train • Push • Grow • Repeat
        </p>

        <h1
          class="
            mt-5
            text-[clamp(4rem,7.5vw,7rem)]
            font-black uppercase
            leading-[0.82]
            tracking-[-0.055em]
            sm:max-w-[670px]
          "
        >
          <span class="block">
            Discipline
          </span>

          <span class="block">
            Builds
          </span>

          <span
            class="
              display-font gold-gradient
              block lowercase
              tracking-[-0.035em]
            "
          >
            freedom
          </span>
        </h1>

        <p
          class="
            mt-8 max-w-xl
            text-base leading-7
            text-white/72
            sm:text-lg sm:leading-8
          "
        >
          More than a gym. A stronger you. Train with purpose,
          expert guidance, and a community that expects you to grow.
        </p>

        <!-- Hero actions -->
        <div class="mt-9 flex flex-wrap gap-3">
          <Button
            href="/membership"
            size="md"
          >
            Join Now
            <ArrowRight size={16} />
          </Button>

          <Button
            href="/classes"
            variant="secondary"
            size="md"
          >
            <Play
              size={15}
              fill="currentColor"
            />

            Watch Classes
          </Button>
        </div>

        <!-- Hero statistics -->
        <div
          class="
            mt-10 grid max-w-[690px]
            grid-cols-3
            border-y border-white/12
            py-5
            sm:mt-14 sm:py-6
          "
        >
          <div class="pr-4 sm:pr-8">
            <p
              class="
                text-3xl font-black
                text-[var(--brand-bright)]
                sm:text-4xl
              "
            >
              5K+
            </p>

            <p
              class="
                mt-1 text-[10px]
                uppercase tracking-[0.18em]
                text-white/50
                sm:text-[11px]
              "
            >
              Members
            </p>
          </div>

          <div
            class="
              border-l border-white/12
              px-4
              sm:px-8
            "
          >
            <p
              class="
                text-3xl font-black
                text-[var(--brand-bright)]
                sm:text-4xl
              "
            >
              10+
            </p>

            <p
              class="
                mt-1 text-[10px]
                uppercase tracking-[0.18em]
                text-white/50
                sm:text-[11px]
              "
            >
              Expert trainers
            </p>
          </div>

          <div
            class="
              border-l border-white/12
              pl-4
              sm:pl-8
            "
          >
            <p
              class="
                text-3xl font-black
                text-[var(--brand-bright)]
                sm:text-4xl
              "
            >
              100%
            </p>

            <p
              class="
                mt-1 text-[10px]
                uppercase tracking-[0.18em]
                text-white/50
                sm:text-[11px]
              "
            >
              Results focused
            </p>
          </div>
        </div>
      {/if}
    </div>

    <!-- Vertical hero text -->
    <div
      class="
        absolute right-5 top-1/2
        hidden -translate-y-1/2
        flex-col items-center gap-4
        lg:flex
        xl:right-8
      "
    >
      {#each ['Train', 'Push', 'Grow', 'Repeat'] as word, i}
        <span
          class="
            text-[15px] font-semibold
            uppercase tracking-[0.15em]
            text-white/80
          "
        >
          {word}
        </span>

        {#if i === 3}
          <span
            class="
              mt-1 h-1 w-10
              rounded-full
              bg-[var(--brand-bright)]
            "
          ></span>
        {/if}
      {/each}
    </div>
  </div>
</section>


<!-- =========================================================
     PROMOTIONAL ANNOUNCEMENT
========================================================= -->

<AnnouncementSlot
  announcements={announcements}
  placement="banner"
  allowedKinds={['promotion', 'event']}
  {now}
  {clientOpenAt}
/>


<!-- =========================================================
     FEATURE STRIP
========================================================= -->

<FeatureStrip />


<!-- =========================================================
     POPULAR CLASSES
========================================================= -->

<section class="section-space">
  <div class="container-shell">
    <SectionHeading
      eyebrow="Popular sessions"
      title="Classes for every goal."
      body="Strength, HIIT, mobility and conditioning — a flexible schedule built around real life."
    />

    <div
      class="
        mt-10 grid gap-5
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {#each classes.slice(0, 3) as item}
        <ClassCard {item} />
      {/each}
    </div>

    <div class="mt-8 flex justify-end">
      <Button
        href="/classes"
        variant="secondary"
      >
        View all classes
        <ArrowRight size={15} />
      </Button>
    </div>
  </div>
</section>


<!-- =========================================================
     WHY LEO FITNESS
========================================================= -->

<section class="section-space pt-0">
  <div
    class="
      container-shell grid
      overflow-hidden
      rounded-[28px]
      border border-[var(--line)]
      bg-[var(--surface)]
      lg:grid-cols-[1fr_1.1fr]
    "
  >
    <!-- Community image -->
    <div
      class="
        relative min-h-[360px]
        overflow-hidden bg-black
      "
    >
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=84"
        alt="People training together"
        class="
          absolute inset-0
          h-full w-full
          object-cover opacity-80
        "
        loading="lazy"
      />

      <div
        class="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          to-transparent
        "
      ></div>

      <div class="absolute bottom-7 left-7">
        <p class="eyebrow text-[var(--brand-bright)]">
          Good things happen here
        </p>

        <p
          class="
            display-font mt-2
            max-w-sm
            text-4xl leading-none
            text-white
          "
        >
          A community that lifts you higher.
        </p>
      </div>
    </div>

    <!-- Community content -->
    <div
      class="
        flex flex-col justify-center
        p-7
        sm:p-10
        lg:p-14
      "
    >
      <p class="eyebrow text-[var(--brand)]">
        Why Leo Fitness
      </p>

      <h2
        class="
          display-font mt-3
          text-4xl leading-tight
          sm:text-5xl
        "
      >
        A gym built around people, not machines.
      </h2>

      <p
        class="
          mt-5
          text-sm leading-7
          text-[var(--text-muted)]
        "
      >
        We believe better training starts with the right environment.
        Expert coaching, honest accountability, thoughtful programming
        and a community that celebrates steady progress.
      </p>

      <!-- Values -->
      <div
        class="
          mt-8 grid gap-5
          sm:grid-cols-3
        "
      >
        <div>
          <Trophy
            size={20}
            class="text-[var(--brand)]"
          />

          <p class="mt-3 font-semibold">
            Progress
          </p>

          <p
            class="
              mt-1 text-xs leading-5
              text-[var(--text-muted)]
            "
          >
            Small steps. Big results.
          </p>
        </div>

        <div>
          <Users
            size={20}
            class="text-[var(--brand)]"
          />

          <p class="mt-3 font-semibold">
            Community
          </p>

          <p
            class="
              mt-1 text-xs leading-5
              text-[var(--text-muted)]
            "
          >
            Stronger together.
          </p>
        </div>

        <div>
          <Zap
            size={20}
            class="text-[var(--brand)]"
          />

          <p class="mt-3 font-semibold">
            Energy
          </p>

          <p
            class="
              mt-1 text-xs leading-5
              text-[var(--text-muted)]
            "
          >
            Bring intent every day.
          </p>
        </div>
      </div>

      <div class="mt-8">
        <Button
          href="/about"
          variant="secondary"
        >
          Our story
          <ArrowRight size={15} />
        </Button>
      </div>
    </div>
  </div>
</section>


<!-- =========================================================
     LIFESTYLE CTA
========================================================= -->

<section
  class="
    relative overflow-hidden
    bg-[#0b0b0b]
    py-20
    text-white
  "
>
  <div
    class="
      hero-image
      absolute inset-0
      opacity-30
    "
    style="
      background-image:
        url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1800&q=84');
    "
  ></div>

  <div
    class="
      absolute inset-0
      bg-[linear-gradient(
        90deg,
        rgba(5,5,5,.94),
        rgba(5,5,5,.42),
        rgba(5,5,5,.86)
      )]
    "
  ></div>

  <div
    class="
      container-shell relative z-10
      flex flex-col gap-8
      md:flex-row
      md:items-end
      md:justify-between
    "
  >
    <div class="max-w-2xl">
      <p class="eyebrow text-[var(--brand-bright)]">
        Fitness is a lifestyle
      </p>

      <h2
        class="
          display-font mt-3
          text-5xl leading-none
          sm:text-6xl
        "
      >
        Train for the life you want.
      </h2>

      <p
        class="
          mt-5 max-w-xl
          text-sm leading-7
          text-white/70
          sm:text-base
        "
      >
        Build strength that shows up outside the gym — in your energy,
        confidence and everyday movement.
      </p>
    </div>

    <Button href="/membership">
      Start your journey
      <ArrowRight size={15} />
    </Button>
  </div>
</section>


<!-- =========================================================
     TESTIMONIALS
========================================================= -->

<!-- <section class="section-space">
  <div class="container-shell">
    <SectionHeading
      eyebrow="Member stories"
      title="Real people. Real progress."
      body="The best proof is how members feel after the work."
    />

    <div
      class="
        mt-10 grid gap-5
        lg:grid-cols-3
      "
    >
      {#each testimonials as item}
        <Testimonial
          quote={item.quote}
          name={item.name}
          meta={item.meta}
          avatar={item.avatar}
        />
      {/each}
    </div>
  </div>
</section> -->


<!-- =========================================================
     ANNOUNCEMENT CARDS
========================================================= -->

<AnnouncementSlot
  announcements={announcements}
  placement="card"
  {now}
  {clientOpenAt}
/>


<!-- =========================================================
     FINAL CTA
========================================================= -->

<CTA />