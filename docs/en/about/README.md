# About Me

::: tip Introduce
2014 Anhui University of science and technology graduate, <br />
major in information and computing science, is a kicker of mathematics department.<br />
Now living in Hangzhou, Zhejiang Province, front-end typist, <br />
The most commonly used buttons ```CTRL+C``` ```CTRL+V```。
:::

### My Project

<a href="https://github.com/realwds" target="_blank">
  <img class="githubCard" src="https://ghchart.rshah.org/realwds" alt="github" />
</a> 

- [**sina news**](https://realwds.github.io/sina-news/)
- [**sina gif**](https://realwds.github.io/sina-gif/)
- [**vuepress theme blog**](https://realwds.github.io/vuepress-blog/)
- [**hexo theme blog**](https://realwds.github.io/hexo-blog/)
- [**gulp person website**](https://realwds.github.io/gulp-person-website/)

### My Contact：

- **WeChat or QQ**: <a :href="qqUrl" class='qq'>1483166698</a>
- **Email**:  <a href="mailto:disnot@qq.com">disnot@qq.com</a>
- **GitHub**: <https://git.io/JtUkt>

<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=1483166698&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=1483166698&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>

<style>
.githubCard {
  padding: 10px;
  margin-top: 20px;
  border: 4px dotted #929d99;
  box-sizing: border-box;
}
</style>
