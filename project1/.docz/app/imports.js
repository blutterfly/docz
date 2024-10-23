export const imports = {
  'docs/index.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.md'
    ),
}
