const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
      content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './sections/**/*.{js,jsx,ts,tsx}',
          './sections/**/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          "./node_modules/next/dist/pages/**/*.js",
          "./node_modules/next/dist/Layout/**/*.js",
          "./node_modules/next/dist/components/**/*.js"
      ],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      safelist: ["html", "body"]
  }
]

module.exports = {
    plugins: [
        'postcss-easy-import',
        'tailwindcss',
        'autoprefixer',
        process.env.NODE_ENV === 'production' ? purgecss : undefined,
        'cssnano'
    ]
}
