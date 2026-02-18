<template>
  <header class="site-header">
    <div class="container header-inner">
      <div>
        <NuxtLink to="/" class="brand-link brand-logo-flex">
          <img src="/assets/images/logo.png" alt="Logo" width="60" height="60" />
          <div>
            <h1 class="brand-title header-style">
              <span>web</span>
              <span class="phin">phin</span>
            </h1>
            <span class="brand-tag">Build • Grow • Automate</span>
          </div>
        </NuxtLink>
      </div>

      <nav class="nav">
        <NuxtLink to="/email-campaigning" class="nav-link">Email Campaigning</NuxtLink>
        <NuxtLink to="/website-building" class="nav-link">Website Building</NuxtLink>
        <NuxtLink to="/backend-saas" class="nav-link">Backend & SaaS</NuxtLink>
      </nav>

      <div class="cta">
        <NuxtLink to="/" class="btn btn-primary">Get Quote</NuxtLink>
      </div>

      <button class="burger" @click="open = !open" aria-label="Toggle navigation">
        <span :class="['bar', { open }]"></span>
        <span :class="['bar', { open }]"></span>
        <span :class="['bar', { open }]"></span>
      </button>
    </div>

    <div v-if="open" class="mobile-nav">
      <NuxtLink to="/email-campaigning" class="mobile-link" @click="open = false">
        Email Campaigning
      </NuxtLink>
      <NuxtLink to="/website-building" class="mobile-link" @click="open = false">
        Website Building
      </NuxtLink>
      <NuxtLink to="/backend-saas" class="mobile-link" @click="open = false">
        Backend & SaaS
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>
