/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: '#FFCA26',
                dark: '#0B2330',
                gray: '#787578',
                heroBg: '#0AA99E',
                darkBg: '#000000',
                offWhiteBg: '#FAFAFA',
                border: '#64748b',
            },
            backgroundImage: {
                heroImage: "url('/images/hero.png')",
            },
        },
    },
    plugins: [],
};
