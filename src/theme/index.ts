import { createMuiTheme, colors } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        background: {
            default: colors.common.white,
            paper: colors.common.white,
        },
        primary: {
            main: 'rgba(1,95,149,0.9)',
        },
        secondary: {
            main: 'rgba(1,95,149,0.9)',
        },
        text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600],
        },
        error: {
            main: 'rgb(220, 0, 78)',
        },
    },
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})

export default theme
