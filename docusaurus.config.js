// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '雨云百科',
  tagline: '解决您80%的服务器问题',
  url: 'https://www.rainyun.com',
  baseUrl: '/',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
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
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📖 Wiki文档',
          },
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
            href: 'http://wpa.qq.com/msgrd?v=3&uin=527125516&site=qq&menu=yes',
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
                href: '/rvh',
              },
              {
                label: '云服务器',
                href: '/rcs',
              },
              {
                label: '游戏云（MC服）',
                href: '/rgs',
              },
              {
                label: '高防CDN',
                href: '/cdn',
              },
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
        copyright: `广州润雨科技有限公司 版权所有 Copyright © 2018-2022 All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
