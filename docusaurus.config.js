module.exports = {
  title: "React Query 中文文档",
  url: "https://cangsdarm.github.io",
  baseUrl: "/react-query-web-i18n/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "cangsdarm",
  favicon: "img/favicon.png",
  projectName: "ReactQueryCN",
  i18n: {
    defaultLocale: "cn",
    locales: ["cn"],
  },
  ssrTemplate: require("./ssr-template.js").default,
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: "upgrading",
      content: "v4的文档正在翻译中……现在的是v3版本的文档",
      backgroundColor: "#bff3e7",
      textColor: "#091E42",
      isCloseable: false,
    },
    navbar: {
      title: "React Query 中文文档",
      logo: {
        alt: "logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "文档",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
        {
          label: "官方资源（英文）",
          position: "right",
          items: [
            {
              href: "https://react-query.tanstack.com/examples/simple",
              label: "示例",
            },
            {
              href: "https://learn.tanstack.com/p/react-query-essentials",
              label: "学习",
            },
            {
              href: "https://github.com/tannerlinsley/react-query",
              label: "Github",
            },
          ],
        },
        {
          href: "https://github.com/cangSDARM/react-query-web-i18n",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Web Community.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/cangSDARM/react-query-web-i18n",
          routeBasePath: "/",
          showLastUpdateTime: true,
          sidebarCollapsible: false,
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};
