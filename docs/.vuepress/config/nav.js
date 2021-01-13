module.exports = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about/' },
  {
    text: 'Study',
    link: '/study/',
    items: [
      {
        text: 'SSH',
        link: '/study/ssh/',
        items: [
          { text: 'SSH 基本知识', link: '/study/ssh/basic' },
          { text: 'SSH 客户端', link: '/study/ssh/client' },
          { text: 'SSH 密钥登录', link: '/study/ssh/key' },
          { text: 'SSH 服务器', link: '/study/ssh/server' },
          { text: '端口转发', link: '/study/ssh/port-forwarding' },
          { text: 'SSH 证书登录', link: '/study/ssh/ca' },
          { text: 'scp 命令', link: '/study/ssh/scp' },
          { text: 'rsync 命令', link: '/study/ssh/rsync' },
          { text: 'sftp 命令', link: '/study/ssh/sftp' },
        ]
      }
    ]
    
  },
  { 
    text: 'More', 
    link: '/more/',
    items: [
      { text: '奇技淫巧', link: '/more/one' },
      { text: 'two', link: '/more/two' },
      { text: 'three', link: '/more/three' }
    ]
  },
  { 
    text: 'GitResources', 
    items: [
      { 
        text: 'GitPage', 
        items: [
          { text: 'Gitee Page', link: 'https://realwds.gitee.io/' },
          { text: 'GitHub Page', link: 'https://realwds.github.io/' },
          { text: 'GitLab Page', link: 'https://realwds.gitlab.io/' }
        ]
      },
      { 
        text: 'GitStore', 
        items: [
          { text: 'Gitee Store', link: 'https://gitee.com/realwds/' },
          { text: 'GitHub Store', link: 'https://github.com/realwds/' },
          { text: 'GitLab Store', link: 'https://gitlab.com/realwds/' }
        ]
      },
      
    ]
  }
]