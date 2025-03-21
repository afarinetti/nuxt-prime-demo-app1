import type { Config } from "prettier";

export const config: Config = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    ".*styles.css$",
    "",
    "dayjs",
    "^vue$",
    "^nuxt$",
    "^@nuxt$",
    "^nuxt/.*$",
    "^@nuxt/.*$",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^@primevue/(.*)$",
    "^@primeuix/(.*)$",
    "^@docs/(.*)$",
    "^@/.*$",
    "^../(?!.*.css$).*$",
    "^./(?!.*.css$).*$",
    "\\.css$",
  ],
  overrides: [
    {
      files: "*.mdx",
      options: {
        printWidth: 70,
      },
    },
  ],
};
