<template>
  <div id="mse-video"></div>
</template>

<script>

export default {
  name: 'XiguaVideo',
  data() {
    return {
       Player: "" 
    }
  },
  mounted() {
    import("xgplayer").then(res => {
      this.Player = res.default
      this.initPlayer()
    })
  },
  methods: {
    initPlayer() {
      new this.Player({
        id: 'mse-video',
        autoplay: false,
        volume: 0.3, //初始音量
        url:'https://cdn.jsdelivr.net/gh/realwds/cdn@master/video/geu.mp4',
        poster: "https://cdn.jsdelivr.net/gh/realwds/cdn@master/img/20201216165804.jpg",
        playsinline: true,
        fluid: true, //流式布局
        danmu: {
          comments: [
            {
              duration: 12000,
              id: '1',
              start: 200,
              txt: '勇敢去做你认为正确的事',
              style: {  //弹幕自定义样式
                color: '#fff',
                fontSize: '20px',
              }
            },
            {
              duration: 12000,
              id: '2',
              start: 300,
              txt: '不要被世俗的流言蜚语所困扰',
              style: {  //弹幕自定义样式
                color: '#fff',
                fontSize: '20px',
              }
            },
            {
              duration: 15000,
              id: '3',
              start: 1500,
              txt: 'realwds',
              style: {  //弹幕自定义样式
                color: '#fff',
                fontSize: '20px',
              }
            },
            {
              duration: 15000,
              id: '4',
              start: 2000,
              txt: '出污泥而不染',
              style: {  //弹幕自定义样式
                color: '#fff',
                fontSize: '20px',
              }
            },
            {
              duration: 12000,
              id: '5',
              start: 2800,
              txt: '前面的大佬等等我',
              style: {  //弹幕自定义样式
                color: '#fff',
                fontSize: '20px',
              }
            }
          ],
          area: {
            start: 0,
            end: 1
          }
        }
      })
    }
  },
}
</script>

<style scoped>
  #mse-video {
    z-index:1
  }
</style>
