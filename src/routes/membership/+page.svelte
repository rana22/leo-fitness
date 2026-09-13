<!-- <script lang="ts">
  import { Check, Shield, Sparkles, Users } from "@lucide/svelte";
  import CTA from "$components/CTA.svelte";
  import MembershipCard from "$components/MembershipCard.svelte";
  import PageHero from "$components/PageHero.svelte";
  import SectionHeading from "$components/SectionHeading.svelte";
  import { membershipPlans } from "$data/memberships";
</script>

<svelte:head><title>Membership | Leo Fitness & Gym</title></svelte:head>

<PageHero
  eyebrow="Flexible options for every journey"
  title="Invest in a stronger you."
  body="Choose the level of access and support that matches how you want to train. Upgrade as your goals evolve."
  image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=84"
/>

<section class="section-space">
  <div class="container-shell">
    <SectionHeading
      eyebrow="Membership plans"
      title="Choose your path."
      body="Every plan starts with the same standard: a welcoming space, quality equipment and people who care about progress."
      align="center"
    />
    <div class="mt-12 grid gap-5 lg:grid-cols-3">
      {#each membershipPlans as plan}<MembershipCard {plan} />{/each}
    </div>
    <div class="mt-8 grid gap-4 md:grid-cols-4">
      <div
        class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-center"
      >
        <Shield size={21} class="mx-auto text-[var(--brand)]" />
        <p class="mt-3 text-sm font-semibold">No long-term contracts</p>
      </div>
      <div
        class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-center"
      >
        <Sparkles size={21} class="mx-auto text-[var(--brand)]" />
        <p class="mt-3 text-sm font-semibold">Flexible payment options</p>
      </div>
      <div
        class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-center"
      >
        <Users size={21} class="mx-auto text-[var(--brand)]" />
        <p class="mt-3 text-sm font-semibold">Community events</p>
      </div>
      <div
        class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-center"
      >
        <Check size={21} class="mx-auto text-[var(--brand)]" />
        <p class="mt-3 text-sm font-semibold">Cancel anytime</p>
      </div>
    </div>
  </div>
</section>

<section
  class="section-space border-y border-[var(--line)] bg-[var(--surface)]"
>
  <div
    class="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"
  >
    <div>
      <p class="eyebrow text-[var(--brand)]">What happens next</p>
      <h2 class="display-font mt-3 text-4xl leading-none sm:text-6xl">
        Simple start. Serious support.
      </h2>
      <p class="mt-5 text-sm leading-7 text-[var(--text-muted)]">
        We keep the onboarding process human. A future version can plug these
        steps into checkout, e-signature, payments and CRM flows without
        changing the visual system.
      </p>
    </div>
    <div class="grid gap-4 sm:grid-cols-3">
      <div class="rounded-2xl border border-[var(--line)] p-5">
        <span class="text-3xl font-black text-[var(--brand)]">01</span>
        <p class="mt-5 font-semibold">Choose a plan</p>
        <p class="mt-1 text-xs leading-5 text-[var(--text-muted)]">
          Pick the support level that fits.
        </p>
      </div>
      <div class="rounded-2xl border border-[var(--line)] p-5">
        <span class="text-3xl font-black text-[var(--brand)]">02</span>
        <p class="mt-5 font-semibold">Meet the team</p>
        <p class="mt-1 text-xs leading-5 text-[var(--text-muted)]">
          Set goals and learn the floor.
        </p>
      </div>
      <div class="rounded-2xl border border-[var(--line)] p-5">
        <span class="text-3xl font-black text-[var(--brand)]">03</span>
        <p class="mt-5 font-semibold">Start training</p>
        <p class="mt-1 text-xs leading-5 text-[var(--text-muted)]">
          Build a routine you can keep.
        </p>
      </div>
    </div>
  </div>
</section>

<CTA
  title="Your strongest chapter can start now."
  body="Pick a plan, meet the team, and put a little more discipline behind the goals that matter to you."
/> -->
<script lang="ts">
  import {
    Check,
    Shield,
    Sparkles,
    Users
  } from '@lucide/svelte';

  import CTA from '$lib/components/CTA.svelte';
  import MembershipCard from '$lib/components/MembershipCard.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';

  import {
    membershipPlans,
    type MembershipPlan
  } from '$lib/data/memberships';

  let selectedPlanId = $state('basic');

  const selectedPlan = $derived(
    membershipPlans.find(
      (plan) => plan.id === selectedPlanId
    )
  );

  function selectPlan(plan: MembershipPlan) {
    if (!plan.enabled) {
      return;
    }

    selectedPlanId = plan.id;
  }
</script>

<svelte:head>
  <title>Membership | Leo Fitness & Gym</title>

  <meta
    name="description"
    content="Choose your Leo Fitness membership and start building a stronger, healthier you."
  />
</svelte:head>


<!-- =========================================================
     HERO
========================================================= -->

<PageHero
  eyebrow="Simple. Flexible. Local."
  title="Start your strongest chapter."
  body="Get everything you need to train consistently, build strength and become part of the Leo Fitness community."
  image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=84"
/>


<!-- =========================================================
     MEMBERSHIP PLANS
========================================================= -->

<section class="section-space">
  <div class="container-shell">

    <SectionHeading
      eyebrow="Membership plans"
      title="Start with the basics."
      body="Our Basic membership gives you everything you need to build a consistent training routine. Premium and Elite experiences are coming soon."
      align="center"
    />

    <!-- Plan cards -->
    <div
      class="
        mt-12 grid gap-5
        lg:grid-cols-3
      "
    >
      {#each membershipPlans as plan (plan.id)}
        <MembershipCard
          {plan}
          selected={selectedPlanId === plan.id}
          onclick={() => selectPlan(plan)}
        />
      {/each}
    </div>


    <!-- Selected plan summary -->
    {#if selectedPlan}
      <div
        class="
          mt-8
          rounded-2xl
          border border-[var(--brand)]/30
          bg-[var(--surface)]
          p-5
          sm:p-6
        "
      >
        <div
          class="
            flex flex-col gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              class="
                text-xs font-bold uppercase
                tracking-[0.15em]
                text-[var(--brand)]
              "
            >
              Selected membership
            </p>

            <div class="mt-2 flex items-baseline gap-2">
              <h3 class="text-xl font-bold">
                {selectedPlan.name}
              </h3>

              <span
                class="
                  text-sm
                  text-[var(--text-muted)]
                "
              >
                NPR {selectedPlan.price.toLocaleString('en-NP')} / month
              </span>
            </div>
          </div>

          <a
            href="/contact?intent=membership"
            class="
              focus-ring
              inline-flex
              items-center justify-center
              rounded-xl
              bg-[var(--brand)]
              px-6 py-3
              text-sm font-bold
              text-black
              transition
              hover:brightness-110
            "
          >
            Continue with {selectedPlan.name}
          </a>
        </div>
      </div>
    {/if}


    <!-- Membership benefits -->
    <div
      class="
        mt-8 grid gap-4
        md:grid-cols-2
        lg:grid-cols-4
      "
    >
      <div
        class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "
      >
        <Shield
          size={21}
          class="mx-auto text-[var(--brand)]"
          aria-hidden="true"
        />

        <p class="mt-3 text-sm font-semibold">
          No long-term contracts
        </p>
      </div>

      <div
        class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "
      >
        <Sparkles
          size={21}
          class="mx-auto text-[var(--brand)]"
          aria-hidden="true"
        />

        <p class="mt-3 text-sm font-semibold">
          Flexible payment options
        </p>
      </div>

      <div
        class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "
      >
        <Users
          size={21}
          class="mx-auto text-[var(--brand)]"
          aria-hidden="true"
        />

        <p class="mt-3 text-sm font-semibold">
          Community events
        </p>
      </div>

      <div
        class="
          rounded-2xl
          border border-[var(--line)]
          bg-[var(--surface)]
          p-5 text-center
        "
      >
        <Check
          size={21}
          class="mx-auto text-[var(--brand)]"
          aria-hidden="true"
        />

        <p class="mt-3 text-sm font-semibold">
          Cancel anytime
        </p>
      </div>
    </div>
  </div>
</section>


<!-- =========================================================
     WHAT HAPPENS NEXT
========================================================= -->

<section
  class="
    section-space
    border-y border-[var(--line)]
    bg-[var(--surface)]
  "
>
  <div
    class="
      container-shell grid gap-12
      lg:grid-cols-[.9fr_1.1fr]
      lg:items-center
    "
  >
    <div>
      <p class="eyebrow text-[var(--brand)]">
        What happens next
      </p>

      <h2
        class="
          display-font mt-3
          text-4xl leading-none
          sm:text-6xl
        "
      >
        Simple start. Serious support.
      </h2>

      <p
        class="
          mt-5
          text-sm leading-7
          text-[var(--text-muted)]
        "
      >
        We keep the onboarding process human. A future version can
        plug these steps into checkout, e-signature, payments and CRM
        flows without changing the visual system.
      </p>
    </div>

    <div
      class="
        grid gap-4
        sm:grid-cols-3
      "
    >
      <!-- Step 1 -->
      <div
        class="
          rounded-2xl
          border border-[var(--line)]
          p-5
        "
      >
        <span
          class="
            text-3xl font-black
            text-[var(--brand)]
          "
        >
          01
        </span>

        <p class="mt-5 font-semibold">
          Choose a plan
        </p>

        <p
          class="
            mt-1
            text-xs leading-5
            text-[var(--text-muted)]
          "
        >
          Pick the support level that fits.
        </p>
      </div>

      <!-- Step 2 -->
      <div
        class="
          rounded-2xl
          border border-[var(--line)]
          p-5
        "
      >
        <span
          class="
            text-3xl font-black
            text-[var(--brand)]
          "
        >
          02
        </span>

        <p class="mt-5 font-semibold">
          Meet the team
        </p>

        <p
          class="
            mt-1
            text-xs leading-5
            text-[var(--text-muted)]
          "
        >
          Set goals and learn the floor.
        </p>
      </div>

      <!-- Step 3 -->
      <div
        class="
          rounded-2xl
          border border-[var(--line)]
          p-5
        "
      >
        <span
          class="
            text-3xl font-black
            text-[var(--brand)]
          "
        >
          03
        </span>

        <p class="mt-5 font-semibold">
          Start training
        </p>

        <p
          class="
            mt-1
            text-xs leading-5
            text-[var(--text-muted)]
          "
        >
          Build a routine you can keep.
        </p>
      </div>
    </div>
  </div>
</section>


<!-- =========================================================
     FINAL CTA
========================================================= -->

<CTA
  title="Your strongest chapter can start now."
  body="Pick a plan, meet the team, and put a little more discipline behind the goals that matter to you."
/>