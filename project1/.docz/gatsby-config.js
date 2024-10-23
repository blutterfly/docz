const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Project 1 Documentation',
    description: 'A personal knowledge management project',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: { initialColorMode: 'light' },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/larry/docz/project1/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Project 1 Documentation',
        description: 'A personal knowledge management project',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/larry/docz/project1',
          templates:
            '/home/larry/docz/project1/node_modules/docz-core/dist/templates',
          docz: '/home/larry/docz/project1/.docz',
          cache: '/home/larry/docz/project1/.docz/.cache',
          app: '/home/larry/docz/project1/.docz/app',
          appPackageJson: '/home/larry/docz/project1/package.json',
          appTsConfig: '/home/larry/docz/project1/tsconfig.json',
          gatsbyConfig: '/home/larry/docz/project1/gatsby-config.js',
          gatsbyBrowser: '/home/larry/docz/project1/gatsby-browser.js',
          gatsbyNode: '/home/larry/docz/project1/gatsby-node.js',
          gatsbySSR: '/home/larry/docz/project1/gatsby-ssr.js',
          importsJs: '/home/larry/docz/project1/.docz/app/imports.js',
          rootJs: '/home/larry/docz/project1/.docz/app/root.jsx',
          indexJs: '/home/larry/docz/project1/.docz/app/index.jsx',
          indexHtml: '/home/larry/docz/project1/.docz/app/index.html',
          db: '/home/larry/docz/project1/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
