# Alejandro's Website [![](https://github.com/realwds/realwds.github.io/workflows/TEST CI/badge.svg)](https://github.com/realwds/realwds.github.io/actions) [![](https://github.com/realwds/realwds.github.io/workflows/DEPLOY CI/badge.svg)](https://github.com/realwds/realwds.github.io/actions)

## 📚 Description
这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。 ( •̀ ω •́ )✧

## 🐼 About Me
数学系的挨踢者

<img src='https://cdn.jsdelivr.net/gh/realwds/realwds/display.jpg' alt='本人照片'>


## :email: Contact Me

- **WeChat or QQ**: <a :href="qqUrl" class='qq'>1483166698</a>
- **Email**:  <a href="mailto:1483166698@qq.com">1483166698@qq.com</a>
- **GitHub**: <https://github.com/realwds>

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
