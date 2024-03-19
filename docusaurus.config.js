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
                    postsPerPage:1
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
                    {to:'/docs',label: '📚 文档', position: 'left'},
                    {to:'/docs/guide',label: '📖 指南', position: 'left'},
                    {to: '/blog', label: '🧬 技术博客', position: 'left'},
                    {
                        type: 'dropdown',
                        html:'<div ><svg style="margin-bottom: -2px;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M385.2 167.6c6.4 0 12.6 .3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 .1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 .1 10-9.9 19.6-24.4 19.6z"/></svg> 交流社区</div>',
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
                        type: 'dropdown',
                        html:'<div ><svg style="margin-bottom: -2px;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"/></svg>工具</div>',
                        position: 'right',
                        items: [{
                            href: 'https://ping.pe/',
                            html: '<div class="navbar__link"  style="display: flex;justify-content: flex-start;align-items: center;"><svg  style="position: relative;margin-right: 8px;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg><div>全球多地PING</div></div>'
                        },{
                            href: 'https://ipw.cn/dns/',
                            html: '<div class="navbar__link"  style="display: flex;justify-content: flex-start;align-items: center;"><svg style="position: relative;margin-right: 8px;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg></path></svg><div>DNS查询</div></div>'
                        },{
                            href: 'https://www.speedtest.net/apps/cli',
                            html: '<div class="navbar__link"  style="display: flex;justify-content: flex-start;align-items: center;"><svg style="position: relative;margin-right: 8px;" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg></path></svg><div>SpeedTest测速</div></div>'
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
                            },{
                                label: '哔哩哔哩',
                                href: 'https://space.bilibili.com/77954745/video',
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
