<template>
  <div class="container page">
    <SectionTitle
      kicker="Web"
      title="Website Building"
      subtitle="CRO focused websites — fast, accessible, SEO friendly."
    />

    <div class="page-grid">
      <div class="page-nav-style">
        <p>
          We build Nuxt/Vue static or server-rendered websites with CMS or headless options. From
          landing pages to full product sites — performance is priority.
        </p>

        <h4>Packages</h4>
        <ul>
          <li>Landing (1–3 pages) — fast launch</li>
          <li>Basic (5–10 pages) — CMS + forms</li>
          <li>Pro (custom) — integrations, funnels, analytics</li>
        </ul>

        <NuxtLink to="/" class="btn btn-primary">Start now</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Webphin - Website Building',
})
</script>
