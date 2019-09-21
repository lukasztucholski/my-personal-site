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
      ['/resume/', "Home Resume"],
      {
        title: 'Basics Info',
        collapsable: false,
        children: [
          ['/resume/summary/', 'Summary'],
          ['/resume/personal/', 'Personal Information'],
          ['/resume/contact/', 'Contact'],
          ['/resume/networks/', 'Networks'],
        ],
      },
      ['/resume/portfolio/', 'Portfolio'],
      {
        title: 'Skills',
        path: '/resume/skills',
        collapsable: false,
        children: [
          ['/resume/skills/javascript/', 'JavaScript Ecosystem'],
          ['/resume/skills/tools/', 'Development Tools'],
          ['/resume/skills/markups/', 'Markups Languages, CSS'],
          ['/resume/skills/other/', 'Other']
        ],
      },
      {
        title: 'Work',
        path: '/resume/work/',
        collapsable: false,
        children: [
          ['/resume/work/it/', 'IT Sector'],
          ['/resume/work/other/', 'Other']
        ],
      },
      {
        title: 'Education',
        collapsable: false,
        children: [
          '/resume/education/',
        ],
      },
      ['/resume/interests/', 'Interests']
    ]
  }
}