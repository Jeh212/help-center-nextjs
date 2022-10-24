import { createStitches } from "@stitches/react";




export const {
    config,
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({

    theme: {
        colors: {
            white: '#fff',
            green: "#00B37E",
            greenDark: "#145746",
            dark: '#232129',
            gray300: '#666360',
            gray400: '#C4C4CC',
            gray500: '#29292E',
            gray600: '#232129',
            darkModal: '#121214',
        },
        fontSizes: {
            md: '1.125rem',
            lg: '1.125rem',
            xl: '1.125rem',
            '2xl': '2rem'
        }
    }

})