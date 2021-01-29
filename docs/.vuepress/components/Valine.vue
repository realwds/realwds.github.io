<template>
  <div class="page">
    <div style="opacity:0">
      <span class="leancloud-visitors" data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量： </em>
        <i class="leancloud-visitors-count"></i>
      </span>
    </div>
    <h3>
      <a href="javascript:;"></a>
      评 论：
    </h3>
    <div id="vcomments"></div>
  </div>
</template>


<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
    this.valine = new Valine()
    this.initValine()
  },
  watch: {
    $route (to, from) {
      if (from.path != to.path) {
        this.initValine()
      }
    }
  },
  methods: {
    initValine () {
      let path = location.origin + location.pathname
      document.getElementsByClassName('leancloud-visitors')[0].id = path
      this.valine.init({
        el: '#vcomments',
        appId: '3mItP4xxGtjMsUonPhGo5Iun-gzGzoHsz',
        appKey: 'H7mMQAUSqgOJbKuljh6P2TJb',
        notify: false,
        verify: false,
        path: path,
        visitor: true, //文章访问量统计,
        avatar: 'mm',
        placeholder: 'write here'
      });
    }
  }
}
</script>
