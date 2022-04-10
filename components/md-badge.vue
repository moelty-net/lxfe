<template>
  <span class="aw-badge" :style="badgeStyle">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    background: { type: String, default: '#66ccff' },
    color: { type: String, default: 'white' },
    text: { type: String, default: '' }
  },
  computed: {
    badgeStyle () {
      return {
        background: this.background,
        color: this.color
      }
    }
  }
}
</script>

<style>
.aw-badge {
  display: inline-block;
  font-size: .75em;
  padding: 0.25em 0.5em;
  border-radius: 0.25rem;
  font-size: 0.8em;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  margin-left: .25em;
  margin-right: .25em;
}
</style>
