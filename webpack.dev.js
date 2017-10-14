const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    devtool: "source-map",
    devServer: {
        open: true,
        overlay: true
    }
});
