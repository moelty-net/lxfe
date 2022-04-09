<template>
  <section>
    <no-ssr>
      <awsl-mdrender-bootstrapper v-if="content" :content="content" />
    </no-ssr>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {
    path: { type: String, required: true }
  },
  data () {
    return {
      content: null
    }
  },
  async mounted () {
    const markdownContent = await this.$axios.$get(`${this.path}.md`)
    const markdownIt = new MarkdownIt({ html: true })
    this.content = markdownIt.render(markdownContent)
    this.$forceUpdate()
  }
}
</script>
