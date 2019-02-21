module.exports = {
  title: "灵犀工坊",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "Projects", link: "/projects/" },
      { text: "Guide", link: "/guide/" },
      { text: "About", link: "/" },
      { text: "GitHub", link: "https://github.com/YangChaoJie" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('iOS')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'mac',
        'autoTest',
        'iOS_1',
        'iOS_2',
        'iOS_3',
        'iOS_4',
        'iOS_5',
        'iOS_6',
        'iOS_7',
      ]
    }
  ]
}

