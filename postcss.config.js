const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
      content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './sections/**/*.{js,jsx,ts,tsx}',
          './sections/**/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ["html", "body"]
  }
]

module.exports = {
    plugins: [
        'postcss-easy-import',
        'tailwindcss',
        // process.env.NODE_ENV === 'production' ? purgecss : undefined,
        'autoprefixer',
        'cssnano'
    ]
}
