<template>
  <div>
    <div v-for="memberGroup in members" :key="memberGroup.title">
      <h3 class="member-list-title">
        {{ memberGroup.title }}
      </h3>
      <div class="aw-g member-introduction-group">
        <div v-for="member in memberGroup.members" :key="member.id" class="aw-g-w-s-s-1 aw-g-w-1-2">
          <div class="aw-p member-introduction">
            <div>
              <img :src="imageUrl(member.id)" class="member-avatar">
            </div>
            <div class="member-detail">
              <b>{{ member.name }}</b><br>
              <span class="member-introduction-title">{{ member.title.join(" / ") }}</span><br>
              <span class="work-links">
                <a target="_blank" :href="`https://space.bilibili.com/${member.id}`">
                  <fa-icon icon="fa-brands fa-bilibili" />
                  BiliBili
                </a>
                <a v-for="link in member.links" :key="link.icon" target="_blank" :href="link.link">
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
      members: []
    }
  },
  async mounted () {
    this.members = await this.$axios.$get(`${this.$saas.endpoint}/members/members.json`)
  },
  methods: {
    imageUrl (id) {
      return `${this.$saas?.endpoint}/members/avatar/${id}.jpg`
    }
  }
}
</script>

<style scoped>
.member-list-title:first-child {
  margin-top: 1em;
}

.member-list-title {
  margin-top: 3em;
  margin-bottom: 0;
}

.member-introduction-group {
  margin: 0 -1em 1em -1em;
}

.member-introduction {
  margin: 1em;
  height: 80px;
  display: grid;
  grid-template-columns: 100px auto;
  line-height: 1.6;
}

.member-introduction-title, a {
  color: #9c9c9c;
  margin-right: .5em;
}

a:hover {
  border-bottom-color: #9c9c9c;
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

svg {
  width: 1em;
  position: relative;
  top: .125em;
}
</style>
