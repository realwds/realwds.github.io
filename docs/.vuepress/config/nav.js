module.exports = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about/' },  
  { 
    text: 'More', 
    link: '/more/',
    items: [
      { text: 'one', link: '/more/one' },
      { text: 'two', link: '/more/two' },
      { text: 'three', link: '/more/three' },
      { text: 'four', link: '/more/four' },
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
  { 
    text: 'GitPage', 
    items: [
      { text: 'Gitee Page', link: 'https://realwds.gitee.io/' },
      { text: 'GitHub Page', link: 'https://realwds.github.io/' },
      { text: 'GitLab Page', link: 'https://realwds.gitlab.io/' }
    ]
  } 
]