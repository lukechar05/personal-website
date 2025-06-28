/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
        './src/app/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary neutrals
                'white': '#FFFFFF',
                'gray': {
                    50: '#F8F9FA',
                    100: '#E9ECEF',
                    500: '#6C757D',
                    900: '#212529',
                },
                'black': '#000000',

                // Accent colors (choose one as primary)
                'blue': '#3B82F6',
                'green': '#10B981',
                'purple': '#8B5CF6',

                // Semantic colors
                'primary': '#3B82F6', // Change this to your preferred accent
                'secondary': '#6C757D',
                'accent': '#3B82F6',
            },
            fontFamily: {
                'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
                'audiowide': ['var(--font-audiowide)'],
            },
            fontSize: {
                'xs': '0.75rem',
                'sm': '0.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
            },
        },
    },
    plugins: [],
}