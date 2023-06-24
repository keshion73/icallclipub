module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: true,
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
  devServer: {
    port: process.env.VUE_APP_PORT || 8380
  }
};
