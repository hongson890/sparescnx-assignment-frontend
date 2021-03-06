import React from 'react'
import { makeStyles } from '@material-ui/core'
import TopBar from './TopBar'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 200,
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
    },
}))

interface LoginLayoutProps {
    children: any
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TopBar />
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout
