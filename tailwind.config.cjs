module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}', // Include all Svelte files
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-search-icon': "url(\"data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.5 12.625C10.0543 12.625 12.125 10.5543 12.125 8C12.125 5.44568 10.0543 3.375 7.5 3.375C4.94568 3.375 2.875 5.44568 2.875 8C2.875 10.5543 4.94568 12.625 7.5 12.625Z' stroke='%2324FFBC' stroke-width='1.75'/%3E%3Cpath d='M13.3813 15.1187C13.723 15.4604 14.277 15.4604 14.6187 15.1187C14.9604 14.777 14.9604 14.223 14.6187 13.8813L13.3813 15.1187ZM10.3813 12.1187L13.3813 15.1187L14.6187 13.8813L11.6187 10.8813L10.3813 12.1187Z' fill='%2324FFBC'/%3E%3C/svg%3E%0A\")",
                'custom-route-icon': "url(\"data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.56299 14.605L13.919 9.20301C14.919 8.62601 14.919 7.18301 13.919 6.60501L4.56299 1.20301C4.33489 1.07131 4.07613 1.002 3.81275 1.00204C3.54936 1.00209 3.29063 1.07148 3.06257 1.20325C2.83451 1.33501 2.64517 1.52451 2.51359 1.75267C2.38201 1.98083 2.31282 2.23962 2.31299 2.50301V13.306C2.31282 13.5694 2.38201 13.8282 2.51359 14.0563C2.64517 14.2845 2.83451 14.474 3.06257 14.6058C3.29063 14.7375 3.54936 14.8069 3.81275 14.807C4.07613 14.807 4.33489 14.7377 4.56299 14.606V14.605ZM6.50999 8.38701L2.31299 9.51201V6.29701L6.50999 7.42001C7.00399 7.55301 7.00399 8.25401 6.50999 8.38601V8.38701Z' fill='%2324FFBC'/%3E%3C/svg%3E%0A\")"
            },
            spacing: {
                '1': '0.25rem', // 4px
                '1.5': '0.375rem', // 6px
                '2': '0.5rem', // 8px
                '3': '0.625rem', // 10px
                '4': '0.75rem', // 12px
                '5': '0.875rem', // 14px
                '6': '1rem', // 16px
                '7': '1.25rem', // 20px
                '8': '1.5rem', // 24px
                '9': '1.75rem', // 28px
                'hundred': '6.25rem', // 100px
                'footer-height': '5.063rem', // 81px
            },
            fontFamily: {
                'sf-pro-bold': ['SF Pro Display Bold', 'sans-serif'],
                'inter-semi-bold': ['SF Pro Inter Semibold', 'sans-serif'],
                'inter-regular': ['SF Pro Inter Regular', 'sans-serif'],
            },
            fontSize: {
                'xs': '0.75rem', // 12px
                'sm': '0.875rem', // 14px
                'base': '1rem', // 16px
                'lg': '1.125rem', // 18px
                'xl': '1.25rem', // 20px
                '2xl': '1.5rem', // 24px
                '3xl': '1.875rem', // 30px
                '4xl': '2.25rem', // 36px
                '5xl': '3rem', // 48px
                'display': '2rem', // 32px
            },
            colors: {
                'primary-gradient': '#0B0B0F',
                'secondary-gradient': '#1A1A22',
                'bottom-primary-gradient': '#211A1A',
                'bottom-secondary-gradient': '#212127',
                'origin': '#24FFBC',
                'dark': '#1E1E1E',
                'lightGray': '#F5F5F5',
                'darkGray': '#83838D',
                'darkBlueGray': '#1B1E22',
                'black': '#0B0B0F',
            },
            zIndex: {
                '1': '1',
                '2': '2',
                '3': '3',
            },
            animation: {
                'idle-up-down-1': 'upDown 2s ease-in-out infinite',
                'idle-up-down-2': 'upDown 2.5s ease-in-out infinite',
                'idle-up-down-3': 'upDown 3s ease-in-out infinite',
            },
            keyframes: {
                upDown: {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-6px)',
                    },
                },
            },
        },
    },
    plugins: [],
};
