import eslint from '@eslint/js';
import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
// import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import { withNuxt } from './.nuxt/eslint.config.mjs';

configureVueProject({
  tsSyntaxInTemplates: true,
  scriptLangs: ['ts'],
  rootDir: import.meta.url,
});

const vueTsConfig = defineConfigWithVueTs(
  eslint.configs.recommended,
  pluginVue.configs['flat/strongly-recommended'],
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
);

export default withNuxt({
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.url,
    },
  },
})
  // @ts-expect-error Ignore the type error below as it works fine
  .prepend(...vueTsConfig)
  // .append(eslintPluginPrettier)
  .append(eslintConfigPrettier);
