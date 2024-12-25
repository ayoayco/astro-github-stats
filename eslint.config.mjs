import eslintPluginAstro from 'eslint-plugin-astro'
import jsPlugin from '@eslint/js';

export default [
  // add more generic rule sets here, such as:
  jsPlugin.configs.recommended,
  ...eslintPluginAstro.configs['recommended'],
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    ignores: [
      'dist/*',
      '.output/*',
      '.nitro/*',
      'node-modules*',
      'site/*',
      'templates/*',
    ],
  },
]
