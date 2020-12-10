const nav = require('./config/nav.js')

module.exports = {
  base: '/',
  dest: 'public',
  title: 'Alejandro\'s Website',
  description: 'How are you? i\'am fine, thanks. and you? Hello,3Q',
  head: [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ],
  themeConfig: {
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    repo: 'realwds/realwds.github.io', // 导航栏右侧生成Github链接
    repoLabel: 'GitHub',
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true, //页面滚动
    sidebar: 'auto',
  },
  plugins: [
    // nprogress顶部进度条
    '@vuepress/nprogress',
    // 回到顶部
    '@vuepress/back-to-top',
    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '在Baidu中搜索',
            frontUrl: 'https://www.baidu.com/s?ie=UTF-8&wd=',
          },
          {
            title: '在GitHub中搜索',
            frontUrl: 'https://github.com/search?q=',
          }
        ]
      }
    ],
    // "上次更新"时间格式
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          return moment(timestamp).format('YYYY/MM/DD, hh:mm:ss')
        },
      },
    ],
  ]
}
