const readFileList = require("../../../scripts/build")

module.exports = {
  "/zh/study/git/": [
    {
      title: 'Git 目录',   // 必要的
      //path: '/zh/study/git/',  // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "/zh/study/git/1-1.常用Git命令清单",
        "/zh/study/git/1-2.Git变基合并",
        "/zh/study/git/1-3.Git命令思维导图",
        "/zh/study/git/2-1.Git基础与命令",
        "/zh/study/git/2-2.Git分支-分支原理",
        "/zh/study/git/2-3.Git分支的新建与合并-分支操作",
        "/zh/study/git/2-4.Git分支管理-查看分支",
        "/zh/study/git/2-5.Git分支开发工作流",
        "/zh/study/git/2-6.Git分支-远程分支",
        "/zh/study/git/2-7.Git分支-变基",
        "/zh/study/git/2-8.Git工具-查看修订版本",
        "/zh/study/git/2-9.Git工具-交互式暂存",
        "/zh/study/git/2-10.Git工具-重写历史",
        "/zh/study/git/2-11.Git工具-重置揭密"	
      ]
    }
  ],
  "/zh/study/ssh/": [
    {
      title: 'SSH 目录',
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "/zh/study/ssh/basic",
        "/zh/study/ssh/client",
        "/zh/study/ssh/key",
        "/zh/study/ssh/server",
        "/zh/study/ssh/port-forwarding",
        "/zh/study/ssh/ca",
        "/zh/study/ssh/scp",
        "/zh/study/ssh/rsync",
        "/zh/study/ssh/sftp"
      ]
    }
  ],
  "/zh/study/js/": ["/zh/study/js/"],
  "/zh/study/react/": [
    {
      title: '安装',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip1/getting-started",
        "/zh/study/react/tip1/add-react-to-a-website",
        "/zh/study/react/tip1/create-a-new-react-app",
        "/zh/study/react/tip1/cdn-links",
        "/zh/study/react/tip1/release-channels"
      ]
    },
    {
      title: '核心概念',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip2/hello-world",
        "/zh/study/react/tip2/introducing-jsx",
        "/zh/study/react/tip2/rendering-elements",
        "/zh/study/react/tip2/components-and-props",
        "/zh/study/react/tip2/state-and-lifecycle",
        "/zh/study/react/tip2/handling-events",
        "/zh/study/react/tip2/conditional-rendering",
        "/zh/study/react/tip2/lists-and-keys",
        "/zh/study/react/tip2/forms",
        "/zh/study/react/tip2/lifting-state-up",
        "/zh/study/react/tip2/composition-vs-inheritance",
        "/zh/study/react/tip2/thinking-in-react",
      ]
    },
    {
      title: '高级指引',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip3/accessibility",
      ]
    },
    {
      title: 'API REFERENCE',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip4/react-api",
      ]
    },
    {
      title: 'HOOK',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip5/hooks-intro",
      ]
    },
    {
      title: '测试',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip6/testing",
      ]
    },
    {
      title: 'CONCURRENT 模式',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip7/concurrent-mode-intro",
      ]
    },
    {
      title: '贡献',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip8/how-to-contribute",
      ]
    },
    {
      title: 'FAQ',
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/zh/study/react/tip9/faq-ajax",
      ]
    },
  ],
  "/zh/daily/": [
    ["/zh/daily/", "✅每日一剂"],
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
    ["/zh/more/about", "关于我"],
    ["/zh/more/website", "常用网站"]
  ]
}
