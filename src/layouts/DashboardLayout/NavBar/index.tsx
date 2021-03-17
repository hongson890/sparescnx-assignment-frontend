import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import * as Icon from 'react-feather'
import {
    createStyles,
    makeStyles,
    useTheme,
    Theme,
} from '@material-ui/core/styles'
import { Avatar, Box, Button, Drawer, List } from '@material-ui/core'
import expand from '../../../assets/images/expand.png'
import home from '../../../assets/images/homeActive.png'
import userIcon from '../../../assets/images/user1.png'

import NavItem from './NavItem'

const items = [
    {
        href: '/incident/list',
        icon: home,
        title: 'Incidents',
        active: true,
    },
]
interface NavBarProps {
    setOpen: (open: boolean) => void
    open: boolean
}

const drawerWidth = 150

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            backgroundColor: theme.palette.primary.main,
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            backgroundColor: theme.palette.primary.main,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        avatarBox: {
            bottom: '96.33%',
            top: '1.09%',
            marginBottom: 60,
        },
        avatar: {
            position: 'absolute',
            cursor: 'pointer',
            top: 17,
            background: '#FFC42C',
            color: '#fff',
            width: 40,
            height: 40,
        },
        listItem: {
            display: 'block',
        },
        toggleBtn: {
            color: '#ffffff',
            bottom: 20,
            position: 'absolute',
            '& img': {
                width: 24,
                height: 24,
            },
        },
        toggleBtnCollapse: {
            color: '#ffffff',
            bottom: 20,
            position: 'absolute',
            '& img': {
                width: 24,
                height: 24,
                transform: 'rotateY(180deg)',
            },
        },
    }),
)

const NavBar = ({ open, setOpen }: NavBarProps) => {
    const classes = useStyles()
    const theme = useTheme()
    const [isOpen, setIsOpen] = useState(open)
    const handleDrawerClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isOpen,
                [classes.drawerClose]: !isOpen,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                }),
            }}
        >
            <Box
                className={classes.avatarBox}
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Avatar
                    className={classes.avatar}
                    component={RouterLink}
                    to="/"
                >
                    SP
                </Avatar>
            </Box>
            <Box className={classes.listItem} flexDirection="column">
                <List>
                    {items.map(item => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            active={item.active}
                            hiddenTitle={!isOpen}
                        />
                    ))}
                </List>
            </Box>
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={2}
            >
                <Button
                    className={
                        isOpen ? classes.toggleBtnCollapse : classes.toggleBtn
                    }
                    onClick={handleDrawerClick}
                >
                    <img alt="" src={expand} />
                </Button>
            </Box>
        </Drawer>
    )
}

export default NavBar
