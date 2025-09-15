import js from "@eslint/js"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettierPlugin from "eslint-plugin-prettier"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactRefreshPlugin from "eslint-plugin-react-refresh"
import globals from "globals"

export default [
  // другие базовые правила
  js.configs.recommended,

  // подключаем плагин и правила сразу
  reactHooksPlugin.configs["recommended-latest"],

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2025,
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: {
      react: reactPlugin,
      "react-refresh": reactRefreshPlugin,
      prettier: prettierPlugin,
      "@typescript-eslint": tsPlugin
    },
    rules: {
      semi: "off",
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true }
      ],
      "prefer-const": "error",
      "prettier/prettier": ["error", { semi: false }],

      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" }
      ]
    }
  },

  { ignores: ["node_modules", "dist"] }
]
