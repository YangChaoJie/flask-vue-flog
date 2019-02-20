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
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'mac_配置终端颜色和主题',
        'iOS如何获取崩溃日志',
        'ios_项目开发规范',
        'autoTest',
        'swift_里面的函数',
        'ios_集成支付宝swift',
        'ios_微信支付_---swift版'
      ]
    }
  ]
}

