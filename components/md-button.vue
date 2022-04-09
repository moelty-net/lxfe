<template>
  <a :href="link" :target="target" class="aw-btn" :style="{ background: background, color: color }">{{ text }}</a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    },
    background: {
      type: String,
      default: '#66ccff'
    },
    text: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    }
  },
  computed: {
    target () {
      if (this.link.startsWith('http') || this.link.startsWith('https') || this.link.startsWith('//')) {
        return '_blank'
      }
      return ''
    }
  }
}
</script>

<style>
.aw-btn {
  min-width: 5em;
  background: #66ccff;
  color: #ffffff;
}

.aw-btn:hover {
  filter: brightness(85%);
}
</style>
