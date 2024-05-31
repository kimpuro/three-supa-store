import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './'],
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
        }
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];