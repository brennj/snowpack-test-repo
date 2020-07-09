const esbuild = require("rollup-plugin-esbuild");

module.exports = {
  extends: "@snowpack/app-scripts-react",
  scripts: {
  },
  plugins: ["@snowpack/plugin-react-refresh"],
  installOptions: {
    rollup: {
      plugins: [
        esbuild({
          include: ["**/node_modules/@test-package/**"],
        }),
      ],
    },
  },
};
