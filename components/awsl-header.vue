<template>
  <header class="aw-header">
    <h1>
      <NuxtLink to="/">
        {{ manifest.title }}
      </NuxtLink>
    </h1>
    <nav>
      <!-- 此处 label 和 input 不可删除 -->
      <label for="aw-header-nav-expend-doc-demo" class="aw-header-nav-expend" />
      <input id="aw-header-nav-expend-doc-demo" type="checkbox" class="aw-header-nav-expend">
      <ul>
        <li v-for="page in pagesShownInNav" :key="page.url">
          <NuxtLink :to="`/${page.url}`">
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    manifest: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    pagesShownInNav () {
      return this.manifest.pages.filter(page => page.nav)
    }
  }
}
</script>

<style scoped>
header.aw-header {
  margin-bottom: 15px;
}
</style>
