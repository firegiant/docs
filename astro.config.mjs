import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

// import astroBrokenLinksChecker from 'astro-broken-link-checker';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.firegiant.com',
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.startsWith('https://docs.firegiant.com/wix3/')
    }),
    starlight({
      title: 'Docs',
      logo: {
        dark: './src/assets/firegiant-logo-black.svg',
        light: './src/assets/firegiant-logo-standard.svg',
      },
      social: {
        github: 'https://github.com/firegiant/docs/',
      },
      customCss: [
        './src/styles/custom.css',
        './src/fonts/font-face.css',
      ],
      components: {
        // Override the default `Head` component to add our page tracking.
        Head: './src/components/starlight/Head.astro',
        // Override the default `SiteTitle` component to link to both firegiant.com and docs.firegiant.com.
        SiteTitle: './src/components/starlight/SiteTitle.astro',
      },
      sidebar: [
        { label: 'Quick Start', collapsed: false, autogenerate: { directory: 'quick-start', collapsed: true } },

        { label: 'HeatWave', collapsed: true, items: [
          'heatwave',
          'heatwave/creating-new-wix-projects',
          'heatwave/converting-wix-v3-projects',
          'heatwave/adding-wix-extensions',
          'heatwave/adding-project-references',
          'heatwave/building-wix-projects',
          'heatwave/reporting-bugs',
          { label: 'Build Tools', collapsed: true, items: [
            'heatwave/build-tools',
            'heatwave/build-tools/firegiant-licensing',
            { label: 'Advanced Harvesting', collapsed: true, autogenerate: { directory: '/heatwave/build-tools/harvesting' } },
            { label: 'MSIX', collapsed: true, autogenerate: { directory: '/heatwave/build-tools/msix' } },
            'heatwave/build-tools/driver',
            'heatwave/build-tools/protected-services',
            'heatwave/build-tools/support',
          ] },
        ] },

        { label: 'WiX Toolset', collapsed: true, items: [
          'wix',
          'wix/using-wix',
          'wix/gethelp',
          'wix/releasenotes',

          { label: 'Tutorial', collapsed: true, items: [
            { label: 'Tutorial Introduction', link: 'wix/tutorial/' },
            { label: 'Sprint 1: Welcome to the team', collapsed: true, autogenerate: { directory: 'wix/tutorial/sprint1' } },
            { label: 'Sprint 2: Installing the app', collapsed: true, autogenerate: { directory: 'wix/tutorial/sprint2' } },

            { label: 'Sprint 3: Testing, virtually', collapsed: true, autogenerate: { directory: 'wix/tutorial/sprint3' } },
            { label: 'Sprint 4: Blocking packages', collapsed: true, autogenerate: { directory: 'wix/tutorial/sprint4' } },
            { label: 'Sprint 5: Using WiX extensions', collapsed: true, autogenerate: { directory: 'wix/tutorial/sprint5' } },

            { label: 'Product Backlog', link: 'wix/tutorial/product-backlog/' },
          ] },

          { label: 'Tools and concepts', collapsed: true, items: [
            'wix/tools/msbuild',
            'wix/tools/preprocessor',
            'wix/tools/payloads',
            'wix/tools/signing',
            'wix/tools/validation',
            'wix/tools/dtf',
            'wix/tools/patches',
            'wix/tools/codepage',
            'wix/tools/wixexe',
            'wix/tools/heat'
          ] },

          { label: 'WiX extensions and custom actions', collapsed: true, autogenerate: { directory: '/wix/tools/wixext' } },
          { label: 'Burn', collapsed: true, autogenerate: { directory: '/wix/tools/burn' } },

          { label: 'WiX v5 for WiX v4 users', collapsed: true, autogenerate: { directory: '/wix/fivefour' } },
          { label: 'WiX v4 for WiX v3 users', collapsed: true, autogenerate: { directory: '/wix/fourthree' } },
          { label: 'Development', collapsed: true, autogenerate: { directory: '/wix/development' } },
          { label: 'WiX v3', badge: { text: 'deprecated', variant: 'danger' }, collapsed: true, items: [
            'wix/wix3',
            { label: 'WiX v3 Tutorial', badge: { text: 'deprecated', variant: 'danger' }, collapsed: true, items: [
              'wix3/tutorial',
              { label: 'Getting Started', collapsed: true, autogenerate: { directory: '/wix3/tutorial/Getting Started' } },
              { label: 'User Interface', collapsed: true, autogenerate: { directory: '/wix3/tutorial/User Interface' } },
              { label: 'Events and Actions', collapsed: true, autogenerate: { directory: '/wix3/tutorial/Events and Actions' } },
              { label: 'Upgrades and Modularization', collapsed: true, autogenerate: { directory: '/wix3/tutorial/Upgrades and Modularization' } },
              { label: 'Net and .NET', collapsed: true, autogenerate: { directory: '/wix3/tutorial/net-and-net' } },
              { label: 'COM, Expression Syntax, Miscellanea', collapsed: true, autogenerate: { directory: '/wix3/tutorial/COM, Expression Syntax, Miscellanea' } },
              { label: 'SQL', collapsed: true, autogenerate: { directory: '/wix3/tutorial/SQL' } },
              { label: 'User Interface Revisited', collapsed: true, autogenerate: { directory: '/wix3/tutorial/User Interface Revisited' } },
              { label: 'Transforms', collapsed: true, autogenerate: { directory: '/wix3/tutorial/Transforms' } },
              { label: 'Standard Libraries', collapsed: true, autogenerate: { directory: '/wix3/tutorial/Standard Libraries' } },
              { label: 'Localization', collapsed: true, autogenerate: { directory: '/wix3/tutorial/Localization' } }
            ] },
          ] },
        ] },

        { label: 'API Reference', collapsed: true, autogenerate: { directory: '/wix/api' } },
        { label: 'Schema Reference', collapsed: true, items: [
          { label: 'WiX Core Schema', collapsed: true, autogenerate: { directory: '/wix/schema/wxs' } },
          { label: 'Localization Schema', collapsed: true, autogenerate: { directory: '/wix/schema/wxl' } },
          { label: 'Bootstrapper Application Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/bal' } },
          { label: 'COM+ Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/complus' } },
          { label: 'Dependency Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/dependency' } },
          { label: 'DifxApp Extension Schema', badge: { text: 'deprecated', variant: 'danger' }, collapsed: true, autogenerate: { directory: '/wix/schema/difxapp' } },
          { label: 'DirectX Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/directx' } },
          { label: 'Firewall Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/firewall' } },
          { label: 'HTTP Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/http' } },
          { label: 'IIS Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/iis' } },
          { label: 'MSMQ Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/msmq' } },
          { label: '.NET Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/netfx' } },
          { label: 'PowerShell Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/powershell' } },
          { label: 'SQL Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/sql' } },
          { label: 'UI Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/ui' } },
          { label: 'Util Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/util' } },
          { label: 'VisualStudio Extension Schema', collapsed: true, autogenerate: { directory: '/wix/schema/vs' } },

          { label: 'Theme UI Schema', collapsed: true, autogenerate: { directory: '/wix/schema/thmutil' } },

          { label: 'HeatWave Build Tools Schema', badge: { text: 'FireGiant', variant: 'caution' }, collapsed: true, autogenerate: { directory: '/firegiant/schema/buildtools' } },
          { label: 'HeatWave Build Tools MSIX Schema', badge: { text: 'FireGiant', variant: 'caution' }, collapsed: true, autogenerate: { directory: '/firegiant/schema/msix' } }
        ] },
      ],
    })
    // , astroBrokenLinksChecker({  logFilePath: 'broken-links.log', checkExternalLinks: false })
  ],
});
