const readFileList = require("../../../scripts/readFileList")

module.exports = {
  "/daily/": [
    ["/daily/", "《 每日一剂 》"],
    {
      title: '2021年05月',
      collapsable: true,
      sidebarDepth: 0,
      children: readFileList("2021", "05")
    },
    {
      title: '2021年04月',
      collapsable: true,
      sidebarDepth: 0,
      children: readFileList("2021", "04")
    },
    {
      title: '2021年03月',
      collapsable: true,
      sidebarDepth: 0,
      children: readFileList("2021", "03")
    },
    {
      title: '2021年02月',
      collapsable: true,
      sidebarDepth: 0,
      children: readFileList("2021", "02")
    },
  ],
  "/post/": ["/post/"],
  "/about/": [
    ["/about/", "《 关于我 》"],
    ["/about/sponsor", "《 赞助我 》"],
    ["/about/contact", "《 联系我 》"],
    ["/about/comment", "《 留个言 》"]
  ],
  "/more/": [
    ["/more/links", "《 网站 》"],
    ["/more/video", "《 视频 》"],
    ["/more/music", "《 音乐 》"],
    ["/more/photo", "《 图片 》"],
  ]
}
