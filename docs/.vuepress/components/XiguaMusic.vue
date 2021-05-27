<template>
  <div>
    <div id="mse-music"></div>
  </div>
</template>

<script>

export default {
  name: 'XiguaMusic',
  data() {
    return {
       Music: ""
    }
  },
  mounted() {
    import("xgplayer-music").then(res => {
      this.Music = res.default
      this.initMusic()
    })
  },
  methods: {
    initMusic() {
      new this.Music({
        id: 'mse-music',
        url: [{
          src: 'https://cdn.jsdelivr.net/gh/realwds/cdn@master/music/爱的可能 - 叶倩文.mp3', 
          name: '叶倩文·爱的可能', 
          poster: 'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2464604322,652270656&fm=179&app=42&f=JPEG?w=150&h=150&s=ACB15994D2A646BCE09CA897030090E2'
        }],
        volume: 0.8,
        width: '100%',
        height: 50
      })
    }
  },
}
</script>

<style scoped>
  
</style>