import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    color: '#FFFFFF',
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'center',
    letterSpacing: 0,
    padding: '10px 20px',
    textTransform: 'none',
    width: '100%',
    borderRadius: 0,
    '& .MuiButton-label': {
      justifyContent: 'flex-start',
    },
  },
  buttonActive: {
    borderRight: '5px solid #4EAAFF',
    opacity: 1,
  },
  buttonInactive: {
    border: 'none',
    opacity: 0.8,
  },
  icon: {
    color: '#FFFFFF',
    width: 24,
    height: 24,
  },
  title: {
    marginLeft: 20,
    marginRight: 'auto',
    color: '#FFFFFF',
  },
  active: {
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& $icon': {
      color: 'rgba(255, 255, 255)',
    },
    opacity: 1,
  },
  inactive: {
    color: '#FFFFFF',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& $icon': {
      color: 'rgba(255, 255, 255, 0.3)',
    },
    opacity: 0.6,
  },
}))

interface NavItemProps {
  className?: string
  href: string
  icon: any
  title: string
  hiddenTitle?: boolean
  active?: boolean
}

const NavItem = ({
  className,
  href,
  icon,
  title,
  hiddenTitle,
  active,
  ...rest
}: NavItemProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        activeClassName={clsx(classes.active, {
          [classes.buttonActive]: active,
          [classes.buttonInactive]: !active,
        })}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        <img className={classes.icon} alt="" src={icon} />
        {!hiddenTitle && <span className={classes.title}>{title}</span>}
      </Button>
    </div>
  )
}

export default NavItem
