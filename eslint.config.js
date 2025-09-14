import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [

  js.configs.recommended,


  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2025,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      prettier: prettierPlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      semi: "off",
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      // Общие правила
      "prefer-const": "error",
      "prettier/prettier": ["error", { semi: false }],

      // React правила
      "react/jsx-uses-react": "off", // для React 17+ не нужен import React
      "react/react-in-jsx-scope": "off",

      // TypeScript правила
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  // Игнорирование папок
  {
    ignores: ["node_modules", "dist"],
  },
];
