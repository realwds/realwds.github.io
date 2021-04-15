const readFileList = require("../../../scripts/build")

module.exports = {
  "/daily/": [
    ["/daily/", "《 每日一剂 》"],
    {
      title: '2021年04月',
      collapsable: false,
      sidebarDepth: 0,
      children: readFileList("2021", "04")
    },
    {
      title: '2021年03月',
      collapsable: false,
      sidebarDepth: 0,
      children: readFileList("2021", "03")
    },
  ],
  "/more/": [
    ["/more/about", "《 关于我 》"],
    ["/more/sponsor", "《 赞助我 》"],
    ["/more/contact", "《 联系我 》"],
    ["/more/comment", "《 留个言 》"]
  ]
}
