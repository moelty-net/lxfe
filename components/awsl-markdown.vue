<template>
  <section>
    <h2 v-if="title !== ''">
      {{ title }}
    </h2>
    <!-- eslint-disable vue/no-v-html -->
    <div v-html="content" />
    <!--eslint-enable-->
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {
    title: { type: String, default: '' },
    path: { type: String, required: true }
  },
  data () {
    return {
      content: ''
    }
  },
  async mounted () {
    const md = new MarkdownIt()
    this.content = md.render(await this.$axios.$get(`/data/${this.path}.md`))
  }
}
</script>
