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
                    showLastUpdateTime: true,

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
                hideOnScroll: true,

                //title: '雨云百科',
                logo: {
                    alt: '雨云百科',
                    src: 'img/img_3.png',
                },
                items: [
                    {
                        type: 'dropdown',
                        //label: '📚 文档',
                        html:'<div class="navbar__item navbar__item1"><div style="display: flex"><div style="max-width: 30px;max-height: 30px;margin: 0 4px"><svg style="position: relative;top: 3px;" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#000000" d="M433.8 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51.1 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.3 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8C60.7 98.1 109 0 224 0c113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z"/></svg> </div> <div>交流社区</div></div></div>',
                        position: 'right',
                        items: [{
                            href: 'https://app.rainyun.com/img/wxgzh.1e17b386.jpg',
                            html: '<div style="display: flex;justify-content: flex-start;align-items: center;"><svg style="position: relative;margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 448 512"><path data-v-2e6b03b0="" fill="currentColor" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" class=""></path></svg><div>公众号</div></div>'
                        },{
                            href: 'https://forum.rainyun.com/',
                            html: '<div style="display: flex;justify-content: flex-start;align-items: center;"><svg style="position: relative;margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 448 512"><path data-v-2e6b03b0="" fill="currentColor" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" class=""></path></svg><div>雨云论坛</div></div>'
                        }]
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
