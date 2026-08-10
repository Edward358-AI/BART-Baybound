import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * Shared flat ESLint config. Packages re-export this from their own
 * eslint.config.mjs so `eslint .` works per-package under Turborepo.
 */
export default tseslint.config(
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.turbo/**", "**/coverage/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
);
