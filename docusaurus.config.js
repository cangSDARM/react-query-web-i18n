const docConfig = (docId, cfg = {}) => {
  return [
    "@docusaurus/plugin-content-docs",
    {
      id: docId,
      path: docId,
      routeBasePath: docId,
      editUrl: "https://github.com/cangSDARM/react-query-web-i18n/blob/master",
      sidebarPath: require.resolve(`./${docId}-sidebars.js`),
      showLastUpdateTime: true,
      sidebarCollapsible: true,
      sidebarCollapsed: false,
      onlyIncludeVersions: ["current"],
      ...cfg,
    },
  ];
};

module.exports = {
  title: "TanStack Query 中文文档",
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
      content: `Vue 文档已同步完成，Solid, Svelte 文档正在翻译中！`,
      backgroundColor: "#272116",
      textColor: "#eee",
      isCloseable: false,
    },
    navbar: {
      title: "中文文档",
      logo: {
        alt: "logo",
        src: "img/logo-v4.png",
        href: "/react",
      },
      items: [
        {
          label: "框架",
          position: "left",
          items: [
            {
              to: "/react",
              label: "React",
            },
            {
              to: "/vue",
              label: "Vue",
            },
            {
              to: "/solid",
              label: "Solid",
            },
            {
              to: "/svelte",
              label: "Svelte",
            },
          ],
        },
        {
          label: "旧版本",
          position: "right",
          items: [
            {
              to: "/v3-react",
              label: "v3(仅React)",
            },
          ],
        },
        // {
        //不支持多docs的
        //   type: "docsVersionDropdown",
        //   position: "right",
        //   dropdownActiveClassDisabled: true,
        // },
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
      copyright: `Copyright © 2021-${new Date().getFullYear()} Web Community.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: docConfig("react")[1],
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  plugins: [
    docConfig("vue"),
    docConfig("solid"),
    docConfig("svelte"),
    docConfig("v3-react"),
  ],
};
