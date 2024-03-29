// 不要忘了安装 moment
const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
    base: '/',
    title: '阿离王带你零基础学习前端',
    description: '阿离王带你零基础学习前端',
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.jpg' }],
        ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_2343212_wc0gkht90m.css' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
        [
            'script', {},
            `
                // 百度统计
                var _hmt = _hmt || [];
                (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?1b4bdcd9c0d2ea4f6317f749faf6b20e";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
                })();
            `
        ]
    ],
    plugins: [
        // 代码实时展示效果
        [
            'demo-block',
            {
                settings: {
                }
            }
        ],
        [
            'vuepress-plugin-element-tabs'
        ],
        // 代码块复制功能
        [
            'vuepress-plugin-code-copy'
        ],
        // 图片放大
        [
            '@vuepress/medium-zoom',
            {
                selector: 'img.zoom-custom-imgs',
                 // See: https://github.com/francoischalifour/medium-zoom#options
                options: {
                    margin: 16
                }
            }
        ],
        // 返回顶部
        require('./src/plugins/back-to-top/plugin.js'),
        //最后更新时间
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format('LLLL')
                }
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
                }
            }
        ],
        // 在文章中加入思维导图
        [
            '@renovamen/vuepress-plugin-mermaid'
        ],
        [
            'vuepress-plugin-markmap'
          ]
    ],
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
            {
                text: '分类',
                items: [
                    {
                        text: 'HTML',
                        link: '/html/'
                    },
                    {
                        text: 'CSS',
                        link: '/css/'
                    },
                    {
                        text: 'JS',
                        link: '/js/'
                    }
                ]
            },
            { text: '电子书配套视频', link: 'https://space.bilibili.com/666922383' },
            { text: '我的博客', link: 'https://347830076.github.io/myBlog/' },
            
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
                    '/html/12-元素分类',
                    '/html/13-html5',
                    '/html/14-a标签小妙用',
                    '/html/15-其他功能标签',
                    '/html/16-标签嵌套',
                    '/html/17-html学习测试',
                ]
            },
            {
                title: 'css',   // 必要的
                path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true, 可折叠的
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/css/1-语法与引用',
                    '/css/2-文字样式',
                    '/css/3-背景',
                    '/css/4-尺寸',
                    '/css/5-边框',
                    '/css/6-边距',
                    '/css/7-盒子模型',
                    '/css/8-定位',
                    '/css/9-cursor定义光标形状',
                    '/css/10-0-选择器',
                    '/css/10-1-基本选择器',
                    '/css/10-2-层次选择器',
                    '/css/10-3-属性选择器',
                    '/css/10-4-伪类选择器',
                    '/css/10-5-伪元素',
                    '/css/11-overflow',
                    '/css/12-显示隐藏',
                    '/css/13-浮动',
                    '/css/14-bfc',
                    '/css/15-文本溢出处理',
                    '/css/16-图片在容器内的显示方式',
                    '/css/17-flex弹性布局',
                    '/css/18-grid网格布局',
                    '/css/19-布局技巧',
                    '/css/20-css函数',
                    '/css/21-sass',
                    '/css/22-转换',
                    '/css/23-过渡动画',
                    '/css/24-媒体查询',
                    '/css/25-iconfont',
                    '/css/26-viewport',
                    '/css/27-cssReset',
                    '/css/28-精灵图',
                    '/css/30-项目练习'
                ]
            },
            {
                title: 'javascript',
                path: '/js/',
                sidebarDepth: 1,
                children: [
                    '/js/1-语法结构',
                    '/js/2-变量',
                    '/js/2-1作用域',
                    '/js/3-运算符',
                    '/js/4-流程控制',
                    '/js/5-调试',
                    '/js/6-函数',
                    '/js/6-1函数进阶',
                    '/js/7-数组',
                    '/js/8-对象',
                    '/js/8-1对象进阶',
                    '/js/9-String对象',
                    '/js/10-DOM对象',
                    '/js/11-系统对象',
                    '/js/12-json',
                    '/js/13-事件',
                    '/js/14-定时器',
                    '/js/15-web存储',
                    '/js/16-ajax',
                    '/js/17-延迟加载',
                    '/js/18-严格模式',
                    '/js/19-this',
                    '/js/20-闭包原理',
                ]
            }

        ],
        lastUpdated: '更新时间', // string | boolean
    }
}