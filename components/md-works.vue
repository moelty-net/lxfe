<template>
  <div>
    <div v-for="workGroup in works" :key="workGroup.title">
      <h3 class="work-list-title">
        {{ workGroup.title }}
      </h3>
      <div class="aw-g work-introduction-group">
        <div v-for="(work, workIndex) in workGroup.items" :key="workIndex" class="aw-g-w-s-s-1 aw-g-w-1-2">
          <div class="aw-p work-introduction">
            <div>
              <img :src="imageUrl(work.id)" alt="作品封面">
            </div>
            <div class="work-detail">
              <b>{{ work.name }}</b>
              <span v-if="work.badges">
                <md-badge v-for="(badge, badgeIndex) in work.badges" :key="badgeIndex" :background="badge.background" :color="badge.color" :text="badge.text" />
              </span>
              <br>
              <span class="work-desc">{{ work.desc }}</span>
              <br>
              <span class="work-links">
                <a target="_blank" :href="`https://b23.tv/av${work.id}`">
                  <fa-icon icon="fa-brands fa-bilibili" />
                  播放
                </a>
                <a v-for="(link, linkIndex) in work.links" :key="linkIndex" target="_blank" :href="link.link">
                  <fa-icon :icon="link.icon" />
                  {{ link.text }}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      works: []
    }
  },
  async mounted () {
    this.works = await this.$axios.$get(`${this.$saas.endpoint}/works/works.json`)
  },
  methods: {
    imageUrl (id) {
      return `${this.$saas?.endpoint}/works/cover/${id}.jpg`
    }
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

.work-desc {
  font-weight: 600;
}

.work-desc, .work-detail a {
  color: #9c9c9c;
}

.work-detail a {
  margin-right: .5em;
}

a:hover {
  border-bottom-color: #9c9c9c;
}

img {
  height: 80px;
}

svg {
  width: 1em;
  position: relative;
  top: .125em;
}

svg.fa-v {
  width: .75em;
}
</style>
