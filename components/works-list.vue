<template>
  <div>
    <h3 class="work-list-title">
      {{ title }}
    </h3>
    <div class="aw-g work-introduction-group">
      <div v-for="work in works" :key="work.aid" class="aw-g-w-s-s-1 aw-g-w-1-2">
        <div class="aw-p work-introduction">
          <div>
            <img :src="`/data/works/cover/${work.aid}.jpg`" alt="作品封面">
          </div>
          <div class="work-detail">
            <b>{{ work.name }}</b><br>
            <span class="work-desc">{{ work.description }}</span><br>
            <a target="_blank" :href="`https://b23.tv/av${work.aid}`">av{{ work.aid }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    works: Array
  }
}
</script>

<style scoped>
.work-list-title {
  margin-top: 3em;
  margin-bottom: 0;
}

.work-introduction-group {
  margin: 0 -1em 1em -1em;
}

.work-introduction {
  margin: 1em;
  height: 80px;
  display: grid;
  grid-template-columns: 150px auto;
  line-height: 1.6;
}

.work-desc, a {
  color: #9c9c9c;
}

a:hover {
  border-bottom-color: #9c9c9c;
}

img {
  height: 80px;
}
</style>
