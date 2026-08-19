import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import hooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['docs/**', 'coverage/**'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  hooks.configs.flat.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  prettier
)
