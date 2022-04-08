<template>
  <div class="aw-alert banner" :class="{'banner-index': index}" :style="{background: bannerLinerGradient}">
    <div class="banner-inner">
      <h1>{{ title || manifest.title }}</h1>
      <h2 v-if="index" class="subtitle">
        {{ manifest.subtitle }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    manifest: { type: Object, required: true },
    index: { type: Boolean, default: false }
  },
  computed: {
    bannerLinerGradient () {
      return `linear-gradient(135deg, ${this.manifest.theme_color} 0%, ${this.manifest.accent_color} 100%)`
    }
  }
}
</script>

<style scoped>
.banner {
  height: 500px;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 100px;
}

.banner-inner {
  margin-top: 200px;
  margin-left: 100px;
}

@media (max-width: 1279px) {
  .banner-inner {
    margin-left: 0 !important;
    text-align: center;
  }
}

@media (max-width: 539px) {
  .banner {
    height: 300px;
  }

  .banner-inner {
    margin-top: 120px !important;
  }
}

/* index banner - different */

.banner.banner-index {
  height: 100vh;
  margin: 0;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 100px;
}

.banner.banner-index h1 {
  font-size: 92px;
  font-weight: 400;
  letter-spacing: .25em;
  text-align: center;
}

.banner.banner-index h2 {
  font-size: 48px;
  font-weight: 400;
  text-align: center;
}

.banner.banner-index .banner-inner {
  margin-top: 33vh;
}

@media (min-width: 539px) and (max-width: 1279px) {
  .index-banner {
    height: 600px;
  }

  .banner.banner-index .banner-inner {
    margin-top: 200px;
  }

  .banner.banner-index h1 {
    font-size: 48px;
  }

  .banner.banner-index h2 {
    font-size: 32px;
  }
}

@media (max-width: 539px) {
  .banner.banner-index {
    height: 300px;
  }

  .banner.banner-index .banner-inner {
    margin-top: 100px;
  }

  .banner.banner-index h1 {
    font-size: 32px;
  }

  .banner.banner-index h2 {
    font-size: 16px;
  }
}
</style>
