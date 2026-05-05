import nextVitals from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    ignores: [".next/**", ".pnp.*", "node_modules/**"]
  },
  ...nextVitals
];

export default config;
