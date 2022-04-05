<template>
  <div class="aw-alert banner">
    <div class="banner-inner">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' }
  }
}
</script>

<style scoped>
.banner {
  background: linear-gradient(135deg, #1537a7, #53adf0);
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
</style>
