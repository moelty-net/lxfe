<template>
  <header class="aw-header">
    <h1>
      <NuxtLink to="/">
        冬尘月艺术司
      </NuxtLink>
    </h1>
    <nav>
      <!-- 此处 label 和 input 不可删除 -->
      <label for="aw-header-nav-expend-doc-demo" class="aw-header-nav-expend" />
      <input id="aw-header-nav-expend-doc-demo" type="checkbox" class="aw-header-nav-expend">
      <ul>
        <li>
          <NuxtLink to="/works">
            作品展示
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/join">
            加入我们
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            关于我们
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header.aw-header {
  margin-bottom: 15px;
}
</style>
