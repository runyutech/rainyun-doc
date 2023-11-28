// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '雨云百科',
  tagline: '解决您80%的服务器问题',
  url: 'https://www.rainyun.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'akr-on', // Usually your GitHub org/user name.
  projectName: 'rainyun-doc', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '雨云百科',
        logo: {
          alt: '雨云百科',
          src: 'img/logo.png',
        },
        items: [
          {to: '/blog', label: '🧬 技术博客', position: 'left'},
          {
            href: 'https://www.rainyun.com',
            label: '🌦 雨云官网',
            position: 'left',
          },
          {
            href: 'https://shang.qq.com/wpa/qunwpa?idkey=3c0ca38b53d0d81c25dd8a504174bb0ec4efd8cc3d678c726e2a0d4968d9a357',
            label: '🧧 QQ群',
            position: 'right',
          },
          {
            href: 'https://www.rainyun.com/?show_support=1',
            label: '🎧 咨询',
            position: 'right',
          },
          {
            href: 'https://app.rainyun.com',
            label: '💻 控制台',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '门户',
            items: [
              {
                label: '雨云官网',
                href: '/',
              },
              {
                label: '售前咨询',
                href: 'http://wpa.qq.com/msgrd?v=3&uin=527125516&site=qq&menu=yes',
              },
              {
                label: '推广合作',
                href: 'https://app.rainyun.com/agent-vip',
              },
            ],
          },
          {
            title: '产品',
            items: [
              {
                label: '虚拟主机',
                href: '/docs/rcs',
              },
              {
                label: '云服务器',
                href: '/docs/rvh',
              },
              {
                label: '游戏云（MC服）',
                href: '/docs/rgs',
              },
              // {
              //   label: '高防CDN',
              //   href: '/cdn',
              // },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ群',
                href: 'https://shang.qq.com/wpa/qunwpa?idkey=3c0ca38b53d0d81c25dd8a504174bb0ec4efd8cc3d678c726e2a0d4968d9a357',
              },
              {
                label: '论坛',
                href: 'https://forum.rainyun.com/',
              },
            ],
          },
        ],
        copyright: `广州润雨科技有限公司 版权所有 Copyright © 2018-2023 润雨云® All Rights Reserved.<br> 
        <a style="color:gray;" href="https://beian.miit.gov.cn/">
          <img style="height:14px" src="https://cn-sy1.rains3.com/rainyun-assets/Pic/2023/11/img_1701157590_2b0fefb17fb634dae7aa04ac94a2d9cb"/> 粤ICP备19052839号
        </a>
        <a style="color:gray;" href="https://tsm.miit.gov.cn/dxxzsp/xkz/xkzgl/resource/qiyesearch.jsp?num=B1-20231485&type=xuke">《中华人民共和国增值电信业务经营许可证》 B1-20231485</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'S38C1W44CI',
  
        // Public API key: it is safe to commit it
        apiKey: '65f29501279bf8e9eeea7cf302c91ae2',
  
        indexName: 'rainyun',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      }
    }),
};

module.exports = config;
