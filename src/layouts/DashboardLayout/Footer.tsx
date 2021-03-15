import React from 'react'
import { makeStyles } from '@material-ui/core'
import logo from '../../assets/images/spares-cnx.png'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '25px 0px 25px 25px',
    },
    image: {
        height: 20,
        width: 150,
        marginRight: 15,
        verticalAlign: 'middle',
    },
    copyRight: {
        fontSize: 14,
        opacity: 0.3,
        color: '#1B3963',
    },
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={logo} className={classes.image} alt="Blue Fire logo" />
            <span className={classes.copyRight}>
                © 2021 SparesCNX Ltd. All Rights Reserved
            </span>
        </div>
    )
}

export default Footer
