const nav = require('./config/nav.js')

module.exports = {
  base: '/',
  title: 'Alejandro\'s Website',
  description: 'How are you? i\'am fine, thanks. and you? Hello,3Q',
  themeConfig: {
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    repo: 'realwds/realwds.github.io', // 导航栏右侧生成Github链接
    repoLabel: '查看源码',
    search: true,
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true, //页面滚动
    sidebar: 'auto',
  }
}
