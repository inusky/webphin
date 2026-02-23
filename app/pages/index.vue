<template>
  <div>
    <Hero />

    <section class="container feature-section">
      <SectionTitle
        kicker="Services"
        title="What we do"
        subtitle="Made for small businesses and startups"
      />

      <div class="svc-grid">
        <ServiceCard
          title="Email Campaigning"
          desc="High-converting sequences, automation & analytics."
          img="/assets/images/svc-email.svg"
          link="/email-campaigning"
        />
        <ServiceCard
          title="Website Building"
          desc="Fast, SEO-friendly, responsive websites with clean UX."
          img="/assets/images/svc-web.svg"
          link="/website-building"
        />
        <ServiceCard
          title="Backend & SaaS"
          desc="Scalable APIs, auth, billing, and admin dashboards."
          img="/assets/images/svc-backend.svg"
          link="/backend-saas"
        />
      </div>
    </section>

    <div class="container about-bg">
      <section class="container about-section">
        <div class="about-inner about-text">
          <div class="about-copy">
            <SectionTitle
              kicker="About"
              title="Why Webphin"
              subtitle="We mix design and engineering to deliver impact."
            />
            <div class="about-text">
              <p>
                We focus on measurable outcomes: faster launches, steady growth
                and reliable systems. We ship quickly and polish later — so you
                can start seeing results.
              </p>
              <NuxtLink to="/website-building" class="btn btn-outline"
                >See our process</NuxtLink
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
