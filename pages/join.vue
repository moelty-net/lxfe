<template>
  <main>
    <awsl-header />
    <awsl-banner title="加入我们" />
    <awsl-main>
      <awsl-article>
        <section>
          <div class="join-progress">
            <div class="join-progress-bar">
              <div class="join-progress-bar-1" />
              <div class="join-progress-bar-2" />
              <div class="join-progress-bar-3" />
            </div>
            <div class="join-progress-circle">
              <div class="join-progress-circle-1">
                1
              </div>
              <div class="join-progress-circle-2">
                2
              </div>
              <div class="join-progress-circle-3">
                3
              </div>
            </div>
            <div class="join-progress-text">
              <div>提交申请</div>
              <div>审核</div>
              <div>加入冬尘月</div>
            </div>
          </div>
          <awsl-markdown title="" path="/join/welcome" class="welcome" />
          <a :href="qq.link" target="_blank" class="join-us-btn aw-btn">点击进入审核 QQ 群</a>
          <p>{{ qq.text }} {{ qq.id }}</p>
        </section>
        <awsl-markdown title="审核条件" path="/join/qualification" />
      </awsl-article>
    </awsl-main>
    <awsl-footer />
  </main>
</template>

<script>
export default {
  name: 'PageJoin',
  data () {
    return {
      qq: { link: '', text: '', id: null }
    }
  },
  head: {
    title: '加入我们 | 冬尘月艺术司'
  },
  async mounted () {
    this.qq = await this.$axios.$get('/data/join/qq.json')
  }
}
</script>

<style scoped>
.join-progress-bar {
  width: 100%;
  height: 3px;
  display: grid;
  background: #f0f0f0;
  grid-template-columns: 16.666% 33.333% 33.333% 16.666%;
}

.join-progress-bar-1 {
  height: 100%;
  width: 100%;
  background: #0e753c;
  animation: join-progress-bar-1-animation 4.12s;
  animation-iteration-count: infinite;
}

@keyframes join-progress-bar-1-animation {
  0% {
    background: linear-gradient(to right, #1db633, #0e753c);
  }
  100% {
    background: linear-gradient(to right, #0e753c, #1db633);
  }
}

.join-progress-bar-2 {
  height: 100%;
  width: 100%;
  background: #1537a7;
  grid-column: 2;
}

.join-progress-circle {
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.join-progress-circle div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  top: -20px;
  font-size: 24px;
  font-weight: 600;
  margin: auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1537a7;
}

.join-progress-text {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.join-progress-text div {
  font-size: 18px;
  font-weight: 600;
  color: #9c9c9c;
  text-align: center;
}

.join-progress {
  margin-bottom: 5em;
}

.join-us-btn {
  display: block;
  margin: 3.5em auto;
  width: 10em;
  background: #1537a7;
  color: white;
}

.join-us-btn:hover {
  background: #57aff0;
}
</style>
