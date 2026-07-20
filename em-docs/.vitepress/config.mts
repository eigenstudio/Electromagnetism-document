import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Electromagnetism Docs",
  description: "Documentation for Electromagnetism Theory, Validation, and Practice",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Theory', link: '/theory/' },
      { text: 'Validation', link: '/validation/' },
      { text: 'Practice', link: '/practice/' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Theory', link: '/theory/' },
          { text: 'Validation', link: '/validation/' },
          { text: 'Practice', link: '/practice/' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
