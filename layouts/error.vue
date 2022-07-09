<template>
  <div class="main">
    <div class="aw-vh-container aw-vh-container-align-header">
      <div class="log-container aw-g">
        <div class="aw-g-w-1-4 aw-g-ie-1">
          <img :src="errorImageSource" alt="错误图片" style="width: 150px">
        </div>
        <div class="aw-g-w-3-4 aw-g-ie-2">
          <h1>HTTP {{ errorCode || 500 }} 错误</h1>
          <p>{{ error.message }}</p>
          <a href="/">前往首页</a>
        </div>
      </div>
    </div>
    <footer class="aw-footer" style="margin-top: 100px;">
      <div class="aw-footer-copyright aw-footer-copyright-s">
        <ul>
          <li>&copy; <a href="https://moelty.net" target="_blank">萌洛网络</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PageError',
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },
  head () {
    return {
      title: `HTTP ${this.errorCode} 错误`
    }
  },
  computed: {
    errorCode () {
      return this.error.statusCode || 500
    },
    errorImageSource () {
      const images = [400, 401, 402, 403, 404, 405, 409, 410]
      if (images.includes(this.errorCode)) {
        return `/error/${this.errorCode}.png`
      }
      return '/error/500.gif'
    }
  }
}
</script>

<style scoped>
html .main {
    min-width: 1024px;
}

.log-container {
    max-width: 1400px;
    width: 80%;
    margin: 20% auto 0;
    background-color: #f0f0f0;
    padding: 2% 5%;
    border-radius: 10px;
}
</style>
