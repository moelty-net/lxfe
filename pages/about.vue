<template>
  <main>
    <awsl-header />
    <awsl-banner title="关于我们" />
    <awsl-main>
      <awsl-article>
        <awsl-markdown title="社团简介" path="/about/introduction" />
        <NuxtLink to="/join" class="join-us-btn aw-btn">
          加入我们
        </NuxtLink>
        <section>
          <h2>我们的团队</h2>
          <members-list title="管理团队" :members="members.management" />
          <members-list title="创作团队" :members="members.producers" />
          <members-list title="技术支持团队" :members="members.it" />
        </section>
        <awsl-markdown title="大事记" path="/about/milestones" />
      </awsl-article>
    </awsl-main>
    <awsl-footer />
  </main>
</template>

<script>
export default {
  name: 'PageAbout',
  data () {
    return {
      members: { management: [], producers: [], it: [] }
    }
  },
  head: {
    title: '关于我们 | 冬尘月艺术司'
  },
  async mounted () {
    this.members = await this.$axios.$get('/data/about/members.json')
  }
}
</script>

<style scoped>
.join-us-btn {
  display: block;
  margin: auto;
  margin-top: 3.5em;
  width: 10em;
  background: #1537a7;
  color: white;
}

.join-us-btn:hover {
  background: #57aff0;
}
</style>
