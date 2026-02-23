<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <h2 class="hero-title">
          We design & build products that grow your business
        </h2>
        <p class="hero-sub">
          Websites, email campaigns and backend solutions — built with love and
          engineering rigor.
        </p>

        <div class="hero-actions">
          <NuxtLink to="/website-building" class="btn btn-primary"
            >Build my website</NuxtLink
          >
          <NuxtLink to="/email-campaigning" class="btn btn-outline"
            >Start email campaign</NuxtLink
          >
        </div>
      </div>

      <div class="hero-media">
        <img
          src="/assets/images/hero-illustration.svg"
          alt="Webphin Illustration"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
