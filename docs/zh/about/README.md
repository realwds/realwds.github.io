# 关于我

::: tip 介绍
2014届安徽科技学院毕业生，信息与计算科学专业，数学系的挨踢者。<br />
现居浙江杭州，前端打字员，最常用的按键 ```CTRL+C``` ```CTRL+V```。
:::

### 我的项目

<a href="https://github.com/realwds" target="_blank">
  <img class="githubCard" src="https://ghchart.rshah.org/realwds" alt="github" />
</a> 

- [**新浪全球实时新闻**](https://realwds.github.io/sina-news/)
- [**新浪每日搞笑动图**](https://realwds.github.io/sina-gif/)
- [**vuepress 主题博客**](https://realwds.github.io/vuepress-blog/)
- [**hexo 主题博客**](https://realwds.github.io/hexo-blog/)
- [**gulp 粒子个人介绍页**](https://realwds.github.io/gulp-person-website/)

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

<style>
.githubCard {
  padding: 10px;
  margin-top: 20px;
  border: 4px dotted #929d99;
  box-sizing: border-box;
}
</style>
