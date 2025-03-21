import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { withNuxt } from './.nuxt/eslint.config.mjs';

const vueTsConfig = defineConfigWithVueTs([
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  eslintConfigPrettier,
]);

// @ts-expect-error Ignore the type error below as it works fine
export default withNuxt().prepend(...vueTsConfig);
