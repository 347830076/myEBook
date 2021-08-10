// 不要忘了安装 moment
const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
    base: '/myEBook/',
    title: '阿离王带你零基础学习前端',
    description: '阿离王带你零基础学习前端',
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.jpg' }],
        ['link', { rel: 'stylesheet', href: 'http://at.alicdn.com/t/font_2343212_wc0gkht90m.css' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    ],
    plugins: {
        // 代码实时展示效果
        'demo-block': {
            settings: {
            }
        },
        'vuepress-plugin-element-tabs': true,
        // 代码块复制功能
        'vuepress-plugin-code-copy': true,
        // 图片放大
        '@vuepress/medium-zoom': {
            selector: 'img.zoom-custom-imgs'
        },
        // 返回顶部
        '@vuepress/back-to-top': {},
        //最后更新时间
        '@vuepress/last-updated':
        {
            transformer: (timestamp) => {
                return moment(timestamp).format('LLLL')
            }
        },

        // '@vuepress/pwa': {
        //     serviceWorker: true,
        //     updatePopup: {
        //         message: "发现新内容可用",
        //         buttonText: "刷新"
        //     }
        // }
    },
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/347830076/',
        logo: '/logo.jpg',
        head: [
            ['link', { rel: 'icon', href: '/logo.jpg' }],
            ['meta', { name: 'author', content: '阿离王' }],
            ['meta', { name: 'keywords', content: '热爱代码，前端分享' }],
            ['link', { rel: 'manifest', href: '/manifest.json' }],
            ['meta', { name: 'theme-color', content: '#3eaf7c' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
            ['link', { rel: 'apple-touch-icon', href: '/icons/lufei.jpg' }],
            ['link', { rel: 'mask-icon', href: '/icons/lufei.jpg', color: '#3eaf7c' }],
            ['meta', { name: 'msapplication-TileImage', content: '/icons/lufei.jpg' }],
            ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
        ],
        // 顶部路由
        nav: [
            { text: '首页', link: '/' },
            { text: 'B站视频', link: 'https://space.bilibili.com/666922383' },
            // {
            //     text: '更多功能',
            //     items: [
            //         {
            //             text: '分组一', items: [
            //                 { text: 'css', link: '/css/' },
            //             ]
            //         },
            //         {
            //             text: '分组二', items: [
            //                 { text: '工具类', link: '/tool/' },
            //             ]
            //         }
            //     ]
            // },
        ],
        // 侧边栏路由
        sidebar: [
            {
                title: '首页',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: 'html',
                path:'/html/',
                sidebarDepth:1,
                children: [
                    '/html/前端工程师',
                    '/html/0-HTML学习资料',
                    '/html/1-开发工具',
                    '/html/2-html介绍和结构分析',
                    '/html/3-常用标签',
                    '/html/4-文件的路径',
                    '/html/5-图片音频视频',
                    '/html/6-实体字符',
                    '/html/7-列表',
                    '/html/8-表格',
                    '/html/9-内嵌框架',
                    '/html/10-表单标签',
                    '/html/11-icon',
                ]
            },
            // {
            //     title: 'css',   // 必要的
            //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //     // collapsable: false, // 可选的, 默认值是 true, 可折叠的
            //     sidebarDepth: 1,    // 可选的, 默认值是 1
            //     children: [
            //         '/css/',
            //     ]
            // },

        ],
        lastUpdated: '更新时间', // string | boolean
    }
}