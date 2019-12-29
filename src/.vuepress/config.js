module.exports = {
  title: 'Łukasz Tucholski - Personal Site',
  description: 'My personal site with resume, portfolio and hobbies',
  plugins: [['@vuepress/google-analytics', { ga: 'UA-155124141-1' }]],
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
          // { text: 'Polski', link: '/' },
        ],
      },
    ],
    sidebar: [
      ['/resume/', 'Home Resume'],
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
        collapsable: false,
        children: [
          ['/resume/skills/javascript/', 'JavaScript Ecosystem'],
          ['/resume/skills/tools/', 'Development Tools'],
          ['/resume/skills/markups/', 'Markups Languages, CSS'],
          ['/resume/skills/other/', 'Other'],
        ],
      },
      {
        title: 'Work',
        collapsable: false,
        children: [
          ['/resume/work/it/', 'IT Sector'],
          ['/resume/work/other/', 'Other'],
        ],
      },
      ['/resume/education/', 'Education'],
      ['/resume/interests/', 'Interests'],
    ],
  },
};
