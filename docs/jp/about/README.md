# 私について

::: tip 紹介する
2014回安徽科学技術学院の卒業生で、情報と計算科学科に所属し、数学系の蹴られる者である。<br />
今は浙江省杭州に住んでいます，フロントタイピスト，最も一般的なキー ```CTRL+C``` ```CTRL+V```。
:::

<!-- <img src='https://cdn.jsdelivr.net/gh/realwds/realwds/display.jpg' alt='本人照片'> -->

### 私のプロジェクト

- [**Sina ニュース**](https://realwds.github.io/sina-news/)
- [**Sina GIF**](https://realwds.github.io/sina-gif/)
- [**vuepress テーマブログ**](https://realwds.github.io/vuepress-blog/)
- [**hexo テーマブログ**](https://realwds.github.io/hexo-blog/)
- [**gulp 粒子紹介ページ**](https://realwds.github.io/gulp-person-website/)

### 連絡先：

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
