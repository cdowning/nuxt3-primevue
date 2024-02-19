import type { Config } from 'tailwindcss';

import colors from './colors';

export default {
    darkMode: 'class',
    important: true,
    content: [
        `components/**/*.{vue,js,ts}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        'presets/**/*.{js,vue,ts}',
    ],
    theme: {
        // Using this for color palette in storybook
        colors: {
            yellow: colors.yellow,
            blush: colors.blush,
            teal: colors.teal,
            rose: colors.rose,
            green: colors.green,
            cream: colors.cream,
            gray: colors.gray,
            blue: colors.blue,
            purple: colors.purple,
        },
        fontFamily: {
            // https://tailwindcss.com/docs/font-family
            poppins: ['Poppins', '-apple-system', 'sans-serif'],
            lato: [
                'Lato',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif',
            ],
            worksans: ['WorkSans', '-apple-system', 'sans-serif'],
            // Add Lobster?
            milkshake: ['Milkshake', '-apple-system', 'serif'],
        },
        // https://type-scale.com/ - Major Third (base 16px)
        fontSize: {
            xs: '0.64rem', // 10.24px
            sm: '0.8rem', // 12.80px
            base: '1rem', // based on 16px base
            md: '1.25rem', // 20.00px
            lg: '1.563rem', // 25.00px
            xl: '1.953rem', // 31.25px
            '2xl': '2.441rem', // 20.00px
            '3xl': '3.052rem', // 48.83px
            '4xl': '3.815rem', // 61.04px
        },
        extend: {
            backgroundColor: {
                primary: 'var(--bg-primary)',
                secondary: 'var(--bg-secondary)',
                // secondary: withOpacityValue('--bg-secondary'),
            },
            textColor: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                subtle: 'var(--text-subtle)',
            },
            borderColor: {
                card: {
                    primary: 'var(--card-border-primary)',
                    secondary: 'var(--card-border-secondary)',
                },
            },
            colors: {
                'primary-50': 'rgb(var(--primary-50))',
                'primary-100': 'rgb(var(--primary-100))',
                'primary-200': 'rgb(var(--primary-200))',
                'primary-300': 'rgb(var(--primary-300))',
                'primary-400': 'rgb(var(--primary-400))',
                'primary-500': 'rgb(var(--primary-500))',
                'primary-600': 'rgb(var(--primary-600))',
                'primary-700': 'rgb(var(--primary-700))',
                'primary-800': 'rgb(var(--primary-800))',
                'primary-900': 'rgb(var(--primary-900))',
                'primary-950': 'rgb(var(--primary-950))',
                'surface-0': 'rgb(var(--surface-0))',
                'surface-50': 'rgb(var(--surface-50))',
                'surface-100': 'rgb(var(--surface-100))',
                'surface-200': 'rgb(var(--surface-200))',
                'surface-300': 'rgb(var(--surface-300))',
                'surface-400': 'rgb(var(--surface-400))',
                'surface-500': 'rgb(var(--surface-500))',
                'surface-600': 'rgb(var(--surface-600))',
                'surface-700': 'rgb(var(--surface-700))',
                'surface-800': 'rgb(var(--surface-800))',
                'surface-900': 'rgb(var(--surface-900))',
                'surface-950': 'rgb(var(--surface-950))',
            },
            gridTemplateColumns: {
                // https://bryanlrobinson.com/blog/howto-css-grid-layout-to-make-a-simple-fluid-card-grid/
                'card-portrait': 'repeat(auto-fit, minmax(320px, 1fr))',
                'card-landscape': 'repeat(auto-fit, minmax(200px, 1fr))',
                'card-square': 'repeat(auto-fit, minmax(357px, 1fr))',
            },
        },
        // https://github.com/rogden/tailwind-config-viewer#themereplacements
        configViewer: {
            themeReplacements: {
                'var(--bg-primary)': '#fedc97',
            },
        },
    },
    plugins: [],
} satisfies Config;
