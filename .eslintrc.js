module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-qqww08`
  extends: ["qqww08"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
