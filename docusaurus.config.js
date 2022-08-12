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
      content:
        "v4的文档翻译中(<span style='font-weight:bold;'>\"准备开始\"部分已经翻译完毕!</span>)，现在稳定的是v3版本的文档",
      backgroundColor: "#f1563a",
      textColor: "#000000",
      isCloseable: false,
    },
    navbar: {
      title: "TanStack Query 中文文档",
      logo: {
        alt: "logo",
        src: "img/logo-v4.png",
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
              href: "https://tanstack.com/query/v4/docs/examples/react/basic",
              label: "示例",
            },
            {
              href: "https://learn.tanstack.com/p/react-query-essentials",
              label: "学习",
            },
            {
              href: "https://github.com/TanStack/query",
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
