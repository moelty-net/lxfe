<template>
  <footer class="aw-footer">
    <nav class="aw-g-w-1-2 aw-g-w-s-s-1 aw-g-ie-1">
      <ul>
        <li>&copy; 2022 {{ manifest.title }} 保留所有权利</li>
        <li><a href="https://lty.name" target="_blank">天依网络 <fa-icon icon="fa-solid fa-infinity" class="brand-icon" /></a> 提供技术支持</li>
        <li>构建版本号 {{ commit }}</li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  props: {
    manifest: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      commit: process.env.COMMIT_REF + (
        (process.env.NODE_ENV === 'production') ? '' : ' (dev)'
      )
    }
  }
}
</script>

<style scoped>
footer.aw-footer {
  margin-top: 300px;
}

.brand-icon {
  width: 1em;
  margin-right: .5em;
}
</style>
