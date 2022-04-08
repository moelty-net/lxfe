<script>
import Vue from 'vue'
import VueWithCompiler from 'vue/dist/vue.esm'

export default Vue.extend({
  templateRender: null,
  props: { content: { type: String, required: true } },
  created () {
    const compiled = VueWithCompiler.compile(`<div>${this.content}</div>`)
    this.templateRender = compiled.render
    this.$options.staticRenderFns = []
    for (const staticRenderFunction of compiled.staticRenderFns) {
      this.$options.staticRenderFns.push(staticRenderFunction)
    }
  },
  render (createElement) {
    if (this.templateRender) {
      return this.templateRender()
    } else {
      return createElement('div', '<center>加载中...</center>')
    }
  }
})
</script>
