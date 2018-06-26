module.exports = {
  mode: "production",
  entry: "./src/app.js",
  devtool: "source-map",
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js" // 'vue/dist/vue.common.js' for webpack 1
    }
  }
  // the loader which should be applied, it'll be resolved relative to the context
  // -loader suffix is no longer optional in webpack2 for clarity reasons
  // see webpack 1 upgrade guide
};
