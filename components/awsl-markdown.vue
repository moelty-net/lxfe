<template>
  <section>
      <h2 v-if="title !== ''">{{title}}</h2>
      <div v-html="content"></div>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {
    title: String,
    path: String
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
