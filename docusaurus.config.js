const {themes} = require('prism-react-renderer');

const config = {
  title: 'dmai的嵌入式学习笔记',
  tagline: '从零开始，记录STM32、C语言、FreeRTOS的学习之路',
  favicon: 'img/favicon.ico',
  
  // 👇 部署到 GitHub Pages 需要改这两行
  url: 'https://dmai418.github.io',
  baseUrl: '/embedded-blog/',
  
  organizationName: 'Dmai418',    // 改成你的 GitHub 用户名
  projectName: 'embedded-blog',       // GitHub 仓库名
  deploymentBranch: 'gh-pages',       // 部署分支
  
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans'] },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: './sidebars.js' },
        blog: { showReadingTime: true },
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '嵌入式笔记',
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '学习笔记' },
        { to: '/blog', label: '博客', position: 'left' },
        {
          href: 'https://github.com/dmai418/embedded-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习路径',
          items: [
            { label: 'C语言基础', to: '/docs/c-language/basics' },
            { label: 'STM32入门', to: '/docs/stm32/intro' },
            { label: 'FreeRTOS', to: '/docs/freertos/intro' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '博客', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/dmai418/embedded-blog' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['c', 'cpp', 'bash', 'powershell'],
    },
  },
};

module.exports = config;
