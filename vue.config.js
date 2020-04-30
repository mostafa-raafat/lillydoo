const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["./node_modules"]
        },
        prependData: `@import "@/scss/global.scss";`
      }
    }
  }
};
