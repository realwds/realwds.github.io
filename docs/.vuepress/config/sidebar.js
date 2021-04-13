module.exports = {
  "/zh/website/": ["../../zh/website/"],
  "/zh/study/git/": [
    {
      title: 'Git 目录',   // 必要的
      //path: '/zh/study/git/',  // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/git/1-1.常用Git命令清单",
        "../../study/git/1-2.Git变基合并",
        "../../study/git/1-3.Git命令思维导图",
        "../../study/git/2-1.Git基础与命令",
        "../../study/git/2-2.Git分支-分支原理",
        "../../study/git/2-3.Git分支的新建与合并-分支操作",
        "../../study/git/2-4.Git分支管理-查看分支",
        "../../study/git/2-5.Git分支开发工作流",
        "../../study/git/2-6.Git分支-远程分支",
        "../../study/git/2-7.Git分支-变基",
        "../../study/git/2-8.Git工具-查看修订版本",
        "../../study/git/2-9.Git工具-交互式暂存",
        "../../study/git/2-10.Git工具-重写历史",
        "../../study/git/2-11.Git工具-重置揭密"	
      ]
    }
  ],
  "/zh/study/ssh/": [
    {
      title: 'SSH 目录',   // 必要的
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/ssh/basic",
        "../../study/ssh/client",
        "../../study/ssh/key",
        "../../study/ssh/server",
        "../../study/ssh/port-forwarding",
        "../../study/ssh/ca",
        "../../study/ssh/scp",
        "../../study/ssh/rsync",
        "../../study/ssh/sftp"
      ]
    }
  ],
  "/zh/study/js/": ["../../study/js/"],
  "/zh/study/react/": [
    {
      title: '安装',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip1/getting-started",
        "../../study/react/tip1/add-react-to-a-website",
        "../../study/react/tip1/create-a-new-react-app",
        "../../study/react/tip1/cdn-links",
        "../../study/react/tip1/release-channels"
      ]
    },
    {
      title: '核心概念',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip2/hello-world",
        "../../study/react/tip2/introducing-jsx",
        "../../study/react/tip2/rendering-elements",
        "../../study/react/tip2/components-and-props",
        "../../study/react/tip2/state-and-lifecycle",
        "../../study/react/tip2/handling-events",
        "../../study/react/tip2/conditional-rendering",
        "../../study/react/tip2/lists-and-keys",
        "../../study/react/tip2/forms",
        "../../study/react/tip2/lifting-state-up",
        "../../study/react/tip2/composition-vs-inheritance",
        "../../study/react/tip2/thinking-in-react",
      ]
    },
    {
      title: '高级指引',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip3/accessibility",
      ]
    },
    {
      title: 'API REFERENCE',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip4/react-api",
      ]
    },
    {
      title: 'HOOK',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip5/hooks-intro",
      ]
    },
    {
      title: '测试',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip6/testing",
      ]
    },
    {
      title: 'CONCURRENT 模式',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip7/concurrent-mode-intro",
      ]
    },
    {
      title: '贡献',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip8/how-to-contribute",
      ]
    },
    {
      title: 'FAQ',   // 必要的
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 0,    // 可选的, 默认值是 1
      children: [
        "../../study/react/tip9/faq-ajax",
      ]
    },
  ]
}
