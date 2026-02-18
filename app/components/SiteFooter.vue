<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="container col about max-width">
        <h3 class="site-title">Webphin</h3>
        <p class="muted">
          We build high-converting websites, automated email campaigns and reliable backend SaaS
          products.
        </p>
      </div>

      <div class="container col links max-width">
        <h3>Services</h3>
        <NuxtLink to="/email-campaigning">Email Campaigning</NuxtLink>
        <NuxtLink to="/website-building">Website Building</NuxtLink>
        <NuxtLink to="/backend-saas">Backend & SaaS</NuxtLink>
      </div>

      <div class="container col contact max-width">
        <h3>Contact</h3>
        <p>
          Email:
          <a :href="'mailto:' + $config.public.receiverEmail">{{ $config.public.receiverEmail }}</a>
        </p>
        <p>Phone: +91 95075 97051</p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">© {{ new Date().getFullYear() }} Webphin. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
