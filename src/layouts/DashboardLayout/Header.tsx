import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumbs, IconButton, Link, makeStyles, Typography, } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InputIcon from '@material-ui/icons/Input'

interface HeaderProps {
    path?: any
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: '18px 23px',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        height: 20,
        width: 92,
        marginRight: 15,
        verticalAlign: 'middle',
    },
    copyRight: {
        fontSize: 14,
        opacity: 0.3,
        color: '#1B3963',
    },
    breadcrumb: {
        color: '#1B3963',
        '& .MuiBreadcrumbs-li': {
            '& a': {
                display: 'flex',
                alignItems: 'center',
            },
            fontSize: 12,
            '& p': {
                fontSize: 12,
                textTransform: 'capitalize',
            },
        },
        '& .MuiBreadcrumbs-separator': {
            opacity: 0.5,
            marginLeft: 5,
            marginRight: 5,
            '& .MuiSvgIcon-root': {
                height: 18,
            },
        },
    },
    homeIcon: {
        marginRight: 7,
    },
}))

const Header = ({ path }: HeaderProps) => {
    const classes = useStyles()
    const history = useHistory()
    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        history.push('/login')
    }
    const userStr = localStorage.getItem('user')
    const currentUser = userStr ? JSON.parse(userStr) : null
    const [fullName, setFullName] = useState<string>('')

    useEffect(() => {
        setFullName(`${currentUser.firstName} ${currentUser.lastName}`)
    },[])

    return (
        <div className={classes.root}>
            <Breadcrumbs
                separator={<ChevronRightIcon />}
                className={classes.breadcrumb}
            >
                <Link color="inherit" href="/">
                    <HomeIcon className={classes.homeIcon} /> Home
                </Link>
                {path && <Typography color="inherit">{path}</Typography>}
            </Breadcrumbs>
            <IconButton onClick={logOut} color="inherit">
                <InputIcon />
            </IconButton>
        </div>
    )
}

export default Header
