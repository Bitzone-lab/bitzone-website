const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
      content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './sections/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
]

module.exports = {
    plugins: [
        'postcss-easy-import',
        'tailwindcss',
        process.env.NODE_ENV === 'production' ? purgecss : undefined,
        'autoprefixer',
        'cssnano'
    ]
}
