let plugins = [
    require("postcss-import"),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require("postcss-nesting"),
    require("autoprefixer")({ overrideBrowserslist: "> 1%, last 2 versions" })
];

// if (process.env.NODE_ENV == 'production') plugins.push(require("postcss-csso"))
if (process.env.NODE_ENV == "production")
    plugins.push(
        require("cssnano")({
            preset: "default"
        })
    );

module.exports = {
    plugins
};