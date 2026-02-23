<template>
  <div class="container page">
    <SectionTitle
      kicker="Email"
      title="Email Campaigning"
      subtitle="Create email flows that convert and retain customers."
    />

    <div class="page-grid">
      <div class="page-nav-style">
        <p>
          We design welcome sequences, re-engagement campaigns, and
          transactional emails with deliverability best practices. Our stack
          integrates with SES, Postmark, or your preferred provider.
        </p>

        <h4>What you get</h4>
        <ul>
          <li>Strategy + copy for 3–6 sequence emails</li>
          <li>Template design (responsive HTML)</li>
          <li>Setup of sending domain, SPF/DKIM & analytics</li>
        </ul>

        <NuxtLink to="/" class="btn btn-primary">Get a quote</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Webphin - Email Campaigning",
});
</script>
