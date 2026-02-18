<template>
  <div class="section-title">
    <small class="kicker">{{ kicker }}</small>
    <h3 class="title">{{ title }}</h3>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ kicker?: string; title: string; subtitle?: string }>()
</script>
