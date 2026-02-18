<template>
  <div class="container page">
    <SectionTitle
      kicker="Backend"
      title="Backend & SaaS"
      subtitle="APIs, auth, billing and admin dashboards."
    />

    <div class="page-grid">
      <div class="page-nav-style">
        <p>
          We build secure APIs, user management, billing flows, and dashboards. We help you go from
          MVP to scalable product with best practices and CI/CD.
        </p>

        <h4>Highlights</h4>
        <ul>
          <li>REST / GraphQL APIs</li>
          <li>Auth: JWT, OAuth, social logins</li>
          <li>Billing: Stripe integration and invoicing</li>
        </ul>

        <NuxtLink to="/" class="btn btn-primary">Talk to us</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Webphin - Backend & SaaS',
})
</script>
