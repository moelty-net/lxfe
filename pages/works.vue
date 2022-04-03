<template>
  <main>
    <awsl-header />
    <awsl-banner title="作品展示" />
    <awsl-main>
      <awsl-article>
        <section>
          <h2>我们的作品</h2>
          <works-list :works="works" />
        </section>
      </awsl-article>
    </awsl-main>
    <awsl-footer />
  </main>
</template>

<script>
export default {
  name: 'PageWorks',
  data () {
    return {
      works: []
    }
  },
  head: {
    title: '作品展示 | 冬尘月艺术司'
  },
  async mounted () {
    this.works = await this.$axios.$get('/data/works/works.json')
  }
}
</script>
