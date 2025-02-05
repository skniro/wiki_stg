import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

export default defineConfig({
  title: "Skniro Wiki",
  description: "Skniro Wiki",
  themeConfig: {
    nav: [
          { text: 'Home', link: 'https://history.skniro.org' },
          { text: 'Project', link: 'https://history.skniro.org/project.html' },
          { text: 'Wiki', link: '/' },
          { text: 'Music', link: 'https://history.skniro.org/music/character.htm' },
          { text: 'Wiki', link: 'https://history.skniro.org/About.html' },
    ],

        sidebar: generateSidebar({
           documentRootPath: '/docs/',
           collapsed: false,
           capitalizeFirst: true
    }),

    socialLinks: [
        { icon: 'github', link: 'https://github.com/skniro' },
        { icon: 'discord', link: 'https://discord.com/invite/pDaMyHDfBy' }
    ]
  },
  lastUpdated: true,
})
