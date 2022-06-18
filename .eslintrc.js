module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "universe/native",
    "universe/shared/typescript-analysis",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    // We will use TypeScript's types for component props instead
    "react/prop-types": "off",

    // Why would you want unused vars?
    "@typescript-eslint/no-unused-vars": "warn",

    // I suggest this setting for requiring return types on functions only where useful
    "@typescript-eslint/explicit-function-return-type": "off",

    // Includes .prettierrc.js rules
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        bracketSameLine: false,
        trailingComma: "es5",
      },
      { usePrettierrc: false },
    ],
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
};