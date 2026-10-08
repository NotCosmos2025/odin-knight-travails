import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
    mode: "development",
    target: "web",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist/",
        watchFiles: ["./src/template.html"],
        liveReload: true,
        hot: false,
    },
});
