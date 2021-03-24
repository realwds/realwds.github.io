# 나 에 대해 서

::: tip 소개 하 다
2014 학 번 안휘 과학기술 대학 졸업생, 정보 와 계산 과학 과 는 수학 과 의 발길질 이다.<br />
현 재 는 절강 항주 에 살 고 있 으 며 전단 타자 수 들 이 가장 많이 사용 하 는 버튼 이다 ```CTRL+C``` ```CTRL+V```。
:::

<!-- <img src='https://cdn.jsdelivr.net/gh/realwds/realwds/display.jpg' alt='本人照片'> -->

### 내 프로젝트

- [**Sina 뉴스**](https://realwds.github.io/sina-news/)
- [**Sina 영화**](https://realwds.github.io/sina-gif/)
- [**vuepress 테마 블로그**](https://realwds.github.io/vuepress-blog/)
- [**hexo 테마 블로그**](https://realwds.github.io/hexo-blog/)
- [**gulp 입자 소개 페이지**](https://realwds.github.io/gulp-person-website/)

### 연락처：

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
