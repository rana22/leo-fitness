<!-- <script lang="ts">
  import {
    Camera,
    Clock3,
    Mail,
    MapPin,
    Phone,
    Play,
    Send,
  } from "@lucide/svelte";
  import Button from "$components/Button.svelte";
  import PageHero from "$components/PageHero.svelte";
  import SectionHeading from "$components/SectionHeading.svelte";

  let name = $state("");
  let email = $state("");
  let inquiry = $state("Membership");
  let message = $state("");
  let sent = $state(false);

  function submitForm() {
    sent = true;
  }
</script>

<svelte:head><title>Contact | Leo Fitness & Gym</title></svelte:head>

<PageHero
  eyebrow="We're here to help"
  title="Get in touch."
  body="Have questions about membership, classes or a tour? Send a message and the team can take it from there."
  image="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1800&q=84"
/>

<section class="section-space">
  <div
    class="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"
  >
    <div>
      <SectionHeading
        eyebrow="Contact"
        title="Let's make the first step easy."
        body="Use the form for a demo flow now. A future backend can wire this to email, CRM, booking or support systems without changing the component API."
      />
      <div class="mt-9 grid gap-4">
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <MapPin size={20} class="mt-0.5 shrink-0 text-[var(--brand)]" />
          <div>
            <p class="font-semibold">Address</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=27.649633,85.317507"
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-1 inline-flex flex-col text-sm leading-6
                    text-[var(--text-muted)] transition-colors
                    hover:text-[var(--brand)]"
            >
              <span>Nakhipot Marg, Nakhipot</span>
              <span class="mt-1 text-xs font-semibold text-[var(--brand)]">
                Open in Google Maps ↗
              </span>
            </a>
          </div>
        </div>
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <Phone size={20} class="mt-0.5 shrink-0 text-[var(--brand)]" />
          <div>
            <p class="font-semibold">Call</p>
            <p class="mt-1 text-sm text-[var(--text-muted)]">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <Mail size={20} class="mt-0.5 shrink-0 text-[var(--brand)]" />
          <div>
            <p class="font-semibold">Email</p>
            <p class="mt-1 text-sm text-[var(--text-muted)]">
              loefitness2010@gmail.com
            </p>
          </div>
        </div>
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <Clock3 size={20} class="mt-0.5 shrink-0 text-[var(--brand)]" />
          <div>
            <p class="font-semibold">Hours</p>
            <p class="mt-1 text-sm leading-6 text-[var(--text-muted)]">
              Mon–Fri: 6:00 AM–10:00 PM<br />Sat–Sun: 7:00 AM–8:00 PM
            </p>
          </div>
        </div>
      </div>
      <div class="mt-6 flex gap-2">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          class="focus-ring rounded-full border border-[var(--line)] p-3 text-[var(--text-muted)] hover:text-[var(--text)]"
          ><Camera size={17} /></a
        ><a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          class="focus-ring rounded-full border border-[var(--line)] p-3 text-[var(--text-muted)] hover:text-[var(--text)]"
          ><Play size={17} /></a
        >
      </div>
    </div>

    <div
      class="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"
    >
      {#if sent}
        <div
          class="flex min-h-[470px] flex-col items-center justify-center text-center"
        >
          <div
            class="rounded-full bg-[var(--brand)]/15 p-4 text-[var(--brand)]"
          >
            <Send size={24} />
          </div>
          <h2 class="display-font mt-5 text-4xl">Message received.</h2>
          <p class="mt-3 max-w-sm text-sm leading-6 text-[var(--text-muted)]">
            This demo keeps the submission client-side. A real project can
            replace this handler with a SvelteKit form action or external
            service.
          </p>
          <div class="mt-6">
            <Button
              type="button"
              variant="secondary"
              onclick={() => (sent = false)}>Send another</Button
            >
          </div>
        </div>
      {:else}
        <p class="eyebrow text-[var(--brand)]">Send us a message</p>
        <h2 class="display-font mt-3 text-4xl leading-none">
          Tell us what you need.
        </h2>
        <form
          class="mt-8 grid gap-5"
          on:submit={(event) => {
            event.preventDefault();
            submitForm();
          }}
        >
          <label class="grid gap-2 text-sm font-medium"
            >Your name<input
              class="focus-ring rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)]"
              placeholder="Jane Doe"
              bind:value={name}
              required
            /></label
          >
          <label class="grid gap-2 text-sm font-medium"
            >Your email<input
              class="focus-ring rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)]"
              type="email"
              placeholder="you@example.com"
              bind:value={email}
              required
            /></label
          >
          <label class="grid gap-2 text-sm font-medium"
            >Select an inquiry<select
              class="focus-ring rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none"
              bind:value={inquiry}
              ><option>Membership</option><option>Classes</option><option
                >Personal training</option
              ><option>Tour</option><option>Other</option></select
            ></label
          >
          <label class="grid gap-2 text-sm font-medium"
            >Your message<textarea
              class="focus-ring min-h-32 resize-y rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)]"
              placeholder="How can we help?"
              bind:value={message}
              required
            ></textarea></label
          >
          <Button type="submit">Send Message <Send size={15} /></Button>
        </form>
      {/if}
    </div>
  </div>
</section>

<section class="pb-16">
  <div class="container-shell">
    <div
      class="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)]"
    >
      <div class="relative aspect-[16/7] min-h-[300px] bg-[#0f0f0f]">
        <div
          class="hero-image absolute inset-0 opacity-80"
          style="background-image:url('https://images.unsplash.com/photo-1524666041070-9e7bbd2eaf3c?auto=format&fit=crop&w=1800&q=82')"
        ></div>
        <div
          class="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,.8),rgba(7,7,7,.22))]"
        ></div>
        <div
          class="absolute left-6 top-6 rounded-2xl border border-white/15 bg-black/55 px-4 py-3 text-white backdrop-blur sm:left-8 sm:top-8"
        >
          <p class="eyebrow text-[var(--brand-bright)]">Leo Fitness & Gym</p>
          <p class="mt-1 text-sm">123 Fitness Avenue</p>
        </div>
      </div>
    </div>
  </div>
</section> -->

<script lang="ts">
  import {
    Camera,
    Clock3,
    ExternalLink,
    Mail,
    MapPin,
    Phone,
    Play,
    Send
  } from '@lucide/svelte';

  import Button from '$lib/components/Button.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeading from '$lib/components/SectionHeading.svelte';

  const location = {
    landmark: 'Nakhiport Marg (Near Nakhipot Basketball Court)',
    area: 'Nakhipot, Lalitpur, Nepal',
    latitude: 27.649633,
    longitude: 85.317507,
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=27.649633,85.317507',
    image: '/images/leo-fitness-location.png'
  };

  let name = $state('');
  let email = $state('');
  let inquiry = $state('Membership');
  let message = $state('');
  let sent = $state(false);

  function submitForm() {
    sent = true;
  }
</script>

<svelte:head>
  <title>Contact | Leo Fitness & Gym</title>
  <meta
    name="description"
    content="Get in touch with Leo Fitness & Gym near Nakhipot Basketball Court in Lalitpur, Nepal."
  />
</svelte:head>

<PageHero
  eyebrow="We're here to help"
  title="Get in touch."
  body="Have questions about membership, classes or a tour? Send a message and the team can take it from there."
  image="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1800&q=84"
/>

<section class="section-space">
  <div
    class="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"
  >
    <!-- Contact information -->
    <div>
      <SectionHeading
        eyebrow="Contact"
        title="Let's make the first step easy."
        body="Use the form for a demo flow now. A future backend can wire this to email, CRM, booking or support systems without changing the component API."
      />

      <div class="mt-9 grid gap-4">
        <!-- Location -->
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <MapPin
            size={20}
            class="mt-0.5 shrink-0 text-[var(--brand)]"
            aria-hidden="true"
          />

          <div class="min-w-0">
            <p class="font-semibold">Location</p>

            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-1 inline-flex flex-col text-sm leading-6 text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]"
            >
              <span class="font-medium text-[var(--text)]">
                {location.landmark}
              </span>

              <span>
                {location.area}
              </span>

              <span class="mt-1 text-xs font-semibold text-[var(--brand)]">
                Open in Google Maps ↗
              </span>
            </a>
          </div>
        </div>

        <!-- Phone -->
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <Phone
            size={20}
            class="mt-0.5 shrink-0 text-[var(--brand)]"
            aria-hidden="true"
          />

          <div>
            <p class="font-semibold">Call</p>

            <a
              href="tel:+15551234567"
              class="mt-1 block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        <!-- Email -->
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <Mail
            size={20}
            class="mt-0.5 shrink-0 text-[var(--brand)]"
            aria-hidden="true"
          />

          <div>
            <p class="font-semibold">Email</p>

            <a
              href="mailto:loefitness2010@gmail.com"
              class="mt-1 block text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--brand)]"
            >
              loefitness2010@gmail.com
            </a>
          </div>
        </div>

        <!-- Hours -->
        <div
          class="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5"
        >
          <Clock3
            size={20}
            class="mt-0.5 shrink-0 text-[var(--brand)]"
            aria-hidden="true"
          />

          <div>
            <p class="font-semibold">Hours</p>

            <p class="mt-1 text-sm leading-6 text-[var(--text-muted)]">
              Mon–Fri: 6:00 AM–10:00 PM<br />
              Sat–Sun: 7:00 AM–8:00 PM
            </p>
          </div>
        </div>
      </div>

      <!-- Social links -->
      <div class="mt-6 flex gap-2">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="focus-ring rounded-full border border-[var(--line)] p-3 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
        >
          <Camera size={17} aria-hidden="true" />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          class="focus-ring rounded-full border border-[var(--line)] p-3 text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
        >
          <Play size={17} aria-hidden="true" />
        </a>
      </div>
    </div>

    <!-- Contact form -->
    <div
      class="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"
    >
      {#if sent}
        <div
          class="flex min-h-[470px] flex-col items-center justify-center text-center"
        >
          <div
            class="rounded-full bg-[var(--brand)]/15 p-4 text-[var(--brand)]"
          >
            <Send size={24} aria-hidden="true" />
          </div>

          <h2 class="display-font mt-5 text-4xl">
            Message received.
          </h2>

          <p
            class="mt-3 max-w-sm text-sm leading-6 text-[var(--text-muted)]"
          >
            This demo keeps the submission client-side. A real project can
            replace this handler with a SvelteKit form action or external
            service.
          </p>

          <div class="mt-6">
            <Button
              type="button"
              variant="secondary"
              onclick={() => (sent = false)}
            >
              Send another
            </Button>
          </div>
        </div>
      {:else}
        <p class="eyebrow text-[var(--brand)]">
          Send us a message
        </p>

        <h2 class="display-font mt-3 text-4xl leading-none">
          Tell us what you need.
        </h2>

        <form
          class="mt-8 grid gap-5"
          on:submit={(event) => {
            event.preventDefault();
            submitForm();
          }}
        >
          <label class="grid gap-2 text-sm font-medium">
            Your name

            <input
              class="focus-ring rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)]"
              placeholder="Jane Doe"
              bind:value={name}
              required
            />
          </label>

          <label class="grid gap-2 text-sm font-medium">
            Your email

            <input
              class="focus-ring rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)]"
              type="email"
              placeholder="you@example.com"
              bind:value={email}
              required
            />
          </label>

          <label class="grid gap-2 text-sm font-medium">
            Select an inquiry

            <select
              class="focus-ring rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none"
              bind:value={inquiry}
            >
              <option>Membership</option>
              <option>Classes</option>
              <option>Personal training</option>
              <option>Tour</option>
              <option>Other</option>
            </select>
          </label>

          <label class="grid gap-2 text-sm font-medium">
            Your message

            <textarea
              class="focus-ring min-h-32 resize-y rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)]"
              placeholder="How can we help?"
              bind:value={message}
              required
            ></textarea>
          </label>

          <Button type="submit">
            Send Message
            <Send size={15} aria-hidden="true" />
          </Button>
        </form>
      {/if}
    </div>
  </div>
</section>

<!-- Location -->
<section class="pb-16">
  <div class="container-shell">
    <div
      class="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)]"
    >
      <!-- Clickable location image -->
      <a
        href={location.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Leo Fitness & Gym location in Google Maps"
        class="group relative block overflow-hidden"
      >
        <img
          src={location.image}
          alt="Map showing Leo Fitness & Gym near Nakhipot Basketball Court in Lalitpur, Nepal"
          class="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
          loading="lazy"
        />

        <!-- Subtle hover treatment -->
        <div
          class="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5"
        ></div>

        <!-- Small map action -->
        <div
          class="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/80 px-4 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur"
        >
          Open in Google Maps
          <ExternalLink size={15} aria-hidden="true" />
        </div>
      </a>

      <!-- Location information below image -->
      <div
        class="flex flex-col gap-5 border-t border-[var(--line)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
      >
        <div>
          <p class="eyebrow text-[var(--brand)]">
            Find us here
          </p>

          <h2 class="display-font mt-2 text-3xl sm:text-4xl">
            Near Nakhipot Basketball Court
          </h2>

          <p class="mt-2 text-sm text-[var(--text-muted)]">
            {location.area}
          </p>

          <p class="mt-2 font-mono text-xs text-[var(--text-muted)]">
            {location.latitude}, {location.longitude}
          </p>
        </div>

        <a
          href={location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
        >
          Open in Google Maps
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</section>