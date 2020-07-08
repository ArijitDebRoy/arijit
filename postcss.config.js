const env = require("./env");

module.exports = {
    plugins:
        env.NODE_ENV === "production" ?
            [
                "postcss-flexbugs-fixes",
                "tailwindcss",
                ...(
                    [
                        [
                            '@fullhuman/postcss-purgecss',
                            {
                                content: [
                                    './pages/**/*.{js,jsx,ts,tsx}',
                                    './components/**/*.{js,jsx,ts,tsx}',
                                ],
                                defaultExtractor: content =>
                                    content.match(/[\w-/:]+(?<!:)/g) || [],
                            },
                        ],
                    ]
                ),
                [
                    "postcss-preset-env",
                    {
                        "autoprefixer": {
                            "flexbox": "no-2009"
                        },
                        "stage": 3,
                        "features": {
                            "custom-properties": false
                        }
                    }
                ]
            ]
            :
            [
                "tailwindcss",
                [
                    "postcss-preset-env",
                    {
                        "autoprefixer": {
                            "flexbox": "no-2009"
                        },
                        "stage": 3,
                        "features": {
                            "custom-properties": false
                        }
                    }
                ]
            ]
}
