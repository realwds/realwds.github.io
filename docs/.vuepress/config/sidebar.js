const readFileList = require("../../../scripts/build")

module.exports = {
  "/zh/daily/": [
    ["/zh/daily/", "《 每日一剂 》"],
    {
      title: '2021年04月',
      collapsable: false,
      children: readFileList("2021", "04")
    },
    {
      title: '2021年03月',
      collapsable: true,
      children: readFileList("2021", "03")
    },
  ],
  "/zh/more/": [
    ["/zh/more/about", "《 关于我 》"],
    ["/zh/more/sponsor", "《 赞助我 》"],
    ["/zh/more/contact", "《 联系我 》"]
  ]
}
