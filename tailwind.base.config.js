/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        '../bda-app-host/src/**/*.{ts,tsx}',
        './node_modules/db-design-system/src/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            screens: {
                ms: '320px',
                mm: '375px',
                ml: '425px'
            },
            fontFamily: {
                sans: ['"Nunito Sans Variable"', 'sans-serif']
            },
            borderWidth: {
                lg: '6px',
                md: '4px',
                sm: '2px'
            },
            boxShadow: {
                sm: '0px 0px 2px 0px rgba(0, 0, 0, 0.9)',
                md: '0px 0px 3px 0px rgba(0, 0, 0, 0.12)',
                lg: '0px 0px 4px 0px rgba(0, 0, 0, 0.40)',
                error: '0px 16px 7px 0px rgba(255, 104, 110, 1)',
                success: '0px 0px 10px 0px rgba(141, 212, 193, 1)'
            },
            fontSize: {
                // Definiciones para Display
                'display-l': [
                    '4rem',
                    { lineHeight: 'auto', letterSpacing: '-0.03em' }
                ],
                'display-m': [
                    '3.5rem',
                    { lineHeight: 'auto', letterSpacing: '-0.03em' }
                ],
                'display-s': [
                    '3rem',
                    { lineHeight: 'auto', letterSpacing: '-0.02em' }
                ],

                // Definiciones para Encabezados
                'heading-xl': [
                    '2.625rem',
                    { lineHeight: 'auto', letterSpacing: '-0.016rem' }
                ],
                'heading-l': [
                    '2.25rem',
                    { lineHeight: 'auto', letterSpacing: '-0.014rem' }
                ],
                'heading-m': [
                    '2rem',
                    { lineHeight: 'auto', letterSpacing: '-0.012rem' }
                ],
                'heading-s': [
                    '1.75rem',
                    { lineHeight: '2rem', letterSpacing: '0' }
                ],
                'heading-xs': [
                    '1.375rem',
                    { lineHeight: 'auto', letterSpacing: '0' }
                ],

                // Definiciones para Cuerpo
                'body-l': [
                    '1.125rem',
                    { lineHeight: 'auto', letterSpacing: '0' }
                ],
                'body-m': ['1rem', { lineHeight: 'auto', letterSpacing: '0' }],
                'body-s': [
                    '0.875rem',
                    { lineHeight: 'auto', letterSpacing: '0' }
                ],
                'body-xs': [
                    '0.75rem',
                    { lineHeight: 'auto', letterSpacing: '0' }
                ],

                // Definiciones para Etiquetas
                'label-m': [
                    '1rem',
                    { lineHeight: '1.5rem', letterSpacing: '0' }
                ],
                'label-s': [
                    '0.875rem',
                    { lineHeight: '1.125rem', letterSpacing: '0' }
                ],

                'size-1': '0.75rem', // 12px
                'size-2': '0.875rem', // 14px
                'size-3': '1rem', // 16px
                'size-4': '1.125rem', // 18px
                'size-5': '1.5rem', // 24px
                'size-6': '2rem', // 32px
                'size-7': '2.5rem', // 40px
                'size-8': '3rem', // 48px
                'size-9': '4rem' // 64px
            },
            // Shadcn colors
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary-600))',
                    900: 'hsl(var(--primary-900))',
                    800: 'hsl(var(--primary-800))',
                    700: 'hsl(var(--primary-700))',
                    600: 'hsl(var(--primary-600))',
                    500: 'hsl(var(--primary-500))',
                    400: 'hsl(var(--primary-400))',
                    300: 'hsl(var(--primary-300))',
                    200: 'hsl(var(--primary-200))',
                    100: 'hsl(var(--primary-100))',
                    50: 'hsl(var(--primary-50 ))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary-900))',
                    900: 'hsl(var(--secondary-900))',
                    800: 'hsl(var(--secondary-800))',
                    700: 'hsl(var(--secondary-700))',
                    600: 'hsl(var(--secondary-600))',
                    500: 'hsl(var(--secondary-500))',
                    400: 'hsl(var(--secondary-400))',
                    300: 'hsl(var(--secondary-300))',
                    200: 'hsl(var(--secondary-200))',
                    100: 'hsl(var(--secondary-100))',
                    50: 'hsl(var(--secondary-50) )',
                    foreground: 'hsla(var(--secondary-foreground))'
                },
                success: {
                    DEFAULT: 'hsl(var(--success-800))',
                    800: 'hsl(var(--success-800))',
                    700: 'hsl(var(--success-700))',
                    500: 'hsl(var(--success-500))',
                    300: 'hsl(var(--success-300))',
                    200: 'hsl(var(--success-200))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                warning: {
                    DEFAULT: 'hsl(var(--warning))',
                    800: 'hsl(var(--warning-800))',
                    700: 'hsl(var(--warning-700))',
                    500: 'hsl(var(--warning-500))',
                    300: 'hsl(var(--warning-300))',
                    200: 'hsl(var(--warning-200))',
                    foreground: 'hsl(var(--warning-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: []
};
