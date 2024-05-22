const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js").postCss(
    "resources/css/app.css",
    "public/css"
);

module.exports = {
    // Other webpack configuration...
    devServer: {
        proxy: {
            "/api": "http://127.0.0.1:8000",
        },
    },
};
