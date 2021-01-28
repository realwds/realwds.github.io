# About Me

::: tip Introduce
2014 Anhui University of science and technology graduate, <br />
major in information and computing science, is a kicker of mathematics department.<br />
Now living in Hangzhou, Zhejiang Province, front-end typist, <br />
The most commonly used buttons ```CTRL+C``` ```CTRL+V```。
:::

<!-- <img src='https://cdn.jsdelivr.net/gh/realwds/realwds/display.jpg' alt='本人照片'> -->

### My Footpoint：

<iframe src="https://realwds.gitee.io/footprint/" style="border:0;width:100%;height:380px;"></iframe>  

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
