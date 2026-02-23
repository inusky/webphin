// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss", "~/assets/css/tailwind.css"],
  app: {
    head: {
      title: "Webphin - Build, Grow, Automate.",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/assets/images/favicon.png",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      senderEmail: process.env.SENDER_EMAIL || "no-reply@webphin.com",
      receiverEmail:
        process.env.RECEIVER_EMAIL || "info.thembamentor@gmail.com",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
