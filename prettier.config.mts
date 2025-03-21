import type { Config } from 'prettier';

const config: Config = {
  // customizations
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: false,
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  // plugins
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '',
    'dayjs',
    '^vue$',
    '^nuxt$',
    '^@nuxt$',
    '^nuxt/.*$',
    '^@nuxt/.*$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@primevue/(.*)$',
    '^@primeuix/(.*)$',
    '^@docs/(.*)$',
    '^@/.*$',
    '^../(?!.*.css$).*$',
    '^./(?!.*.css$).*$',
    '\\.css$',
  ],
  // overrides
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 70,
      },
    },
  ],
};

export default config;
