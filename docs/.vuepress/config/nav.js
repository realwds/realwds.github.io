module.exports = [
  { text: 'Home', link: '/' },
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
      { text: 'GitHub 国内加速', link: '/more/one' },
      { text: 'GitPage 三合一部署', link: '/more/two' },
    ]
  },
  { text: 'About', link: '/about/' }
]