const math = require('remark-math')
const katex = require('rehype-katex')
require('dotenv').config()

module.exports = {
  customFields: {
    // Analytics proxy URL
    analyticsProxyUrl: process.env.REACT_APP_AMPLITUDE_PROXY_URL,
    // Determines if staging env
    stagingEnv: process.env.REACT_APP_STAGING,
    // From node
    nodeEnv: process.env.NODE_ENV,
  },
  title: 'ETCswap',
  tagline: 'Documentation and Guides',
  url: 'https://docs.etcswap.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.png',
  organizationName: 'etcswap', // Usually your GitHub org/user name.
  projectName: 'v3-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/social-card.png',
    prism: {
      additionalLanguages: ['solidity'],
    },
    algolia: {
      apiKey: '32465e2ab6f7554ff014e64c0d92171c',
      indexName: 'v3-docs',
      appId: 'S0IDD0YGLZ',
    },
    navbar: {
      title: 'ETCswap Docs',
      logo: {
        alt: 'ETCswap Logo',
        src: 'img/etcswap_logo.svg',
      },
      items: [
        {
          to: '/concepts/overview',
          label: 'Concepts',
          position: 'right',
          className: 'V3_active',
        },
        {
          to: '/contracts/v3/overview',
          label: 'Contracts',
          position: 'right',
          className: 'V3_active',
        },
        {
          to: '/sdk/v3/overview',
          label: 'SDKs',
          position: 'right',
          className: 'V3_active',
        },
        {
          to: '/api/subgraph/overview',
          label: 'APIs',
          position: 'right',
          className: 'V3_active',
        },
        {
          label: 'Launchpad',
          href: '/products/launchpad/overview',
          position: 'left',
          className: 'persistent',
        },
        {
          label: 'V3',
          to: '/products/v3/overview',
          position: 'left',
          className: 'persistent',
        },
        {
          label: 'V2',
          to: '/products/v2/overview',
          position: 'left',
          className: 'persistent',
        },
        {
          label: 'Hummingbot',
          href: '/products/hummingbot/overview',
          position: 'left',
          className: 'persistent',
        },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: 'Protocol',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/ETCswap_org',
            },
            {
              label: 'Bug Bounty',
              href: 'https://github.com/etcswap/v3-periphery/blob/etcswap/bug-bounty.md',
            },
            {
              label: '#dev-chat',
              href: 'https://discord.gg/EhXrGtCHr7',
            },
            {
              label: 'Whitepaper',
              href: 'https://uniswap.org/whitepaper-v3.pdf',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'v3-core',
              href: 'https://github.com/etcswap/v3-core',
            },
            {
              label: 'v3-sdk',
              href: 'https://github.com/etcswap/v3-sdk',
            },
            {
              label: 'v3-periphery',
              href: 'https://github.com/etcswap/v3-periphery',
            },
            {
              label: 'Deployment addresses',
              href: 'https://github.com/etcswap',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'V3 App',
              href: 'https://v3.etcswap.org',
            },
            {
              label: 'V3 Analytics',
              href: 'https://info.etcswap.org',
            },
            {
              label: 'V2 App',
              href: 'https://v2.etcswap.org',
            },
            {
              label: 'USC',
              href: 'https://classicusd.com',
            },
            {
              label: 'Token Lists',
              href: 'https://tokenlists.org/',
            },
            {
              label: 'ETCswap Brand',
              href: 'https://github.com/etcswap/brand',
            },
          ],
        },
        {
          title: 'Ethereum Classic',
          items: [
            {
              label: 'Website',
              href: 'https://ethereumclassic.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ETC_network',
            },
            {
              label: 'Discord',
              href: 'https://ethereumclassic.org/discord',
            },
            {
              label: 'News',
              href: 'https://ethereumclassic.org/news',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/ethereumclassic',
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/etcswap/v3-docs/tree/main/',
          includeCurrentVersion: true,
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          path: 'blog/',
          blogTitle: 'Engineering Blog',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    ['@saucelabs/theme-github-codeblock', {}],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // 1/9/23 V3 SDK Guide Redirects
          {
            to: '/sdk/v3/guides/background',
            from: '/sdk/v3/guides/quick-start',
          },
          {
            to: '/sdk/v3/guides/swaps/quoting',
            from: ['/sdk/v3/guides/creating-a-pool', '/sdk/v3/guides/fetching-prices'],
          },
          {
            to: '/sdk/v3/guides/swaps/trading',
            from: '/sdk/v3/guides/creating-a-trade',
          },
          {
            to: '/sdk/v3/guides/swaps/routing',
            from: '/sdk/v3/guides/auto-router',
          },
          {
            to: '/sdk/v3/guides/liquidity/modifying-position',
            from: ['/sdk/v3/guides/liquidity/adding', '/sdk/v3/guides/liquidity/removing'],
          },
        ],
        createRedirects(existingPath) {
          // V3 Redirects
          if (existingPath.includes('/concepts/overview')) {
            return [existingPath.replace('/concepts/overview', '/protocol/introduction')]
          }
          if (existingPath.includes('/contracts/v3/reference')) {
            return [existingPath.replace('/contracts/v3/reference', '/protocol/reference')]
          }
          if (existingPath.includes('/contracts/v3/guides')) {
            return [existingPath.replace('/contracts/v3/guides', '/protocol/guides')]
          }
          // V2 Redirects
          if (existingPath.includes('/contracts/v2/reference')) {
            return [existingPath.replace('/contracts/v2/reference', '/protocol/V2/reference')]
          }
          if (existingPath.includes('/contracts/v2/guides')) {
            return [existingPath.replace('/contracts/v2/guides', '/protocol/V2/guides')]
          }
          // Permit2 Redirects
          if (existingPath.includes('/contracts/permit2')) {
            return [existingPath.replace('/contracts/permit2', '/protocol/permit2')]
          }
          // v3-sdk Redirects
          if (existingPath.includes('/sdk/v3/overview')) {
            return [existingPath.replace('/sdk/v3/overview', '/sdk/introduction')]
          }
          if (existingPath.includes('/sdk/v3/guides')) {
            return [existingPath.replace('/sdk/v3/guides', '/sdk/guides')]
          }
          // swap-widgets Redirects
          if (existingPath.includes('/sdk/swap-widget/overview')) {
            return [existingPath.replace('/sdk/swap-widget/overview', '/sdk/widgets/swap-widget')]
          }
          if (existingPath.includes('/sdk/swap-widget/reference/v2')) {
            return [existingPath.replace('/sdk/swap-widget/reference/v2', '/sdk/widgets/swap-widget/api')]
          }
          if (existingPath.includes('/concepts')) {
            return [existingPath.replace('/concepts', '/protocol/concepts')]
          }

          // Return a falsy value: no redirect created
          return undefined
        },
      },
    ],
  ],
}
