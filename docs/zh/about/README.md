# 关于我

::: tip 介绍
2014届安徽科技学院毕业生，信息与计算科学专业，属于数学系的挨踢者。<br />
现居浙江杭州，前端打字员，最常用的按键 ```CTRL+C``` ```CTRL+V```。
:::

<!-- <img src='https://cdn.jsdelivr.net/gh/realwds/realwds/display.jpg' alt='本人照片'> -->

### 我的项目

- [**新浪全球实时新闻**](https://realwds.github.io/sina-news/)
- [**新浪每日搞笑动图**](https://realwds.github.io/sina-gif/)

### 我的足迹：

<iframe src="https://realwds.gitee.io/footprint/" style="border:0;width:100%;height:380px;"></iframe>  

### 联系方式：

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
