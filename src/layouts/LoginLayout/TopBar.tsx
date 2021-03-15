import React from 'react'
import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import logo from '../../assets/images/spares-cnx-white.png'

const useStyles = makeStyles({
    root: {},
    toolbar: {
        height: 64,
    },
    image: {
        height: 20,
        width: 250,
        marginRight: 15,
        verticalAlign: 'middle',
    },
})

const TopBar = () => {
    const classes = useStyles()

    return (
        <AppBar className={classes.root} elevation={0}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.image} alt="company logo" />
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
