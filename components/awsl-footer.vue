<template>
  <footer class="aw-footer">
    <nav class="aw-g-w-1-2 aw-g-w-s-s-1 aw-g-ie-1">
      <ul>
        <li>&copy; 2022 {{ manifest.title }} 保留所有权利</li>
        <li>由 <a href="https://lxfe.ltycs.xyz/" target="_blank">LXFE</a> 强力驱动</li>
        <li><a href="https://ltycs.me" target="_blank">天依网络 <fa-icon icon="fa-solid fa-infinity" class="brand-icon" /> 天依云</a> 提供技术支持</li>
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
