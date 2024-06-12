/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            main: ["Inter", "sans-serif"],
            sub: ["Lexend Deca", "serif"],
        },
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },
        extend: {
            backgroundImage: {
                mobile: "url('/images/image-header-mobile.jpg')",
                desktop: "url('/images/image-header-desktop.jpg')",
            },
        },
    },
    plugins: [],
};
