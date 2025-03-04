// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '蛇による人間のためのブログ',
  tagline: 'ITに関する知識だったり、ゲームに関する話題だったりを自由気ままに述べている個人ブログです。',
  favicon: 'img/favicon.ico',

  url: 'https://viasnake.com/',
  baseUrl: '/',

  organizationName: 'viasnake',
  projectName: 'viasnake.com',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/viasnake/viasnake.com/edit/master/',
        },
        blog: {
          // routeBasePath: "/",
          showReadingTime: false,
          editUrl:
            'https://github.com/viasnake/viasnake.com/edit/master/',
          blogSidebarCount: 15,
          blogSidebarTitle: "最近の投稿",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8017032553209403",
      async: true,
      crossorigin: "anonymous",
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: 'viasnake.com',
        logo: {
          alt: 'viasnake.com',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: "/blog",
            position: "left",
            label: "ブログ",
          },
          {
            type: "docSidebar",
            sidebarId: "projectSidebar",
            position: "left",
            label: "プロジェクト一覧",
          },
          {
            type: "docSidebar",
            sidebarId: "tipSidebar",
            position: "left",
            label: "Tips",
          },
          {
            href: "https://github.com/viasnake/viasnake.com",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://twitter.com/viasnake",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Social",
            items: [
              {
                label: "X (Twitter)",
                href: "https://twitter.com/viasnake",
              },
              {
                label: "GitHub",
                href: "https://github.com/viasnake",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} viasnake. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: 'WVM8NRAGNB',
        apiKey: '47f561de7d7e6d3949aa4a5a26514a56',
        indexName: 'viasnake',
        contextualSearch: true,
        externalUrlRegex: 'viasnake\\.com|www.viasnake\\.com|www.mcplay\\.biz|www.alflag\\.org',
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
      },
    }),
};

export default config;
