const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            padding: '1rem',
        },
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            highlight: colors.cyan,
            gray: colors.slate,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
