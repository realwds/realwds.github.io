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
    ],
  }    
]