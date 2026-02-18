<template>
  <article class="svc-card">
    <div class="icon-c">
      <img :src="img" alt="" class="svc-icon" />
    </div>
    <h4 class="svc-title">{{ title }}</h4>
    <p class="svc-desc">{{ desc }}</p>
    <NuxtLink :to="link" class="svc-cta">Learn more →</NuxtLink>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; desc: string; img: string; link: string }>()
</script>
