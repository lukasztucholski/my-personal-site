module.exports = {
  title: 'Łukasz Tucholski - Personal Site',
  description: 'My personal site with resume, portfolio and hobbies',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Extended Resume', link: '/resume/' },
      { text: 'DJ Papa Luc', link: '/papaluc/' },
      { text: 'Google', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'English', link: '/' },
          { text: 'Polski', link: '/' }
        ]
      }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/resume/', 'Resume Home'],
      {
        title: 'Basics',
        collapsable: false,
        children: [
          '/resume/basics/',
          '/resume/work/'
        ],
      },
    ]
  }
}