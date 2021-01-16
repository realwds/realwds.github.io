const nav = require('./config/nav.js')
const head = require('./config/head.js')

module.exports = {
  base: '/',
  dest: 'public',
  title: 'Alejandro\'s Website',
  description: 'How are you? i\'am fine, thanks. and you? Hello,3Q',
  head,
  themeConfig: {
    logo: '/img/home.png',
    nav,
    sidebar: 'auto',
    sidebarDepth: 3, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    // repo: 'realwds/realwds.github.io', // 导航栏右侧生成Github链接
    // repoLabel: 'GitHub',
    // editLinks: true, // 启用编辑
    // docsDir: 'docs', // 编辑的文件夹
    // editLinkText: '在 GitHub 上编辑此页！',
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    smoothScroll: true, //页面滚动
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  markdown: {
    lineNumbers: true, // 代码行号
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
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
    // 代码块复制
    ['one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功 >>>', // default is 'Copy successfully and then paste it for use.'
      duration: 1200, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }]
  ]
}
