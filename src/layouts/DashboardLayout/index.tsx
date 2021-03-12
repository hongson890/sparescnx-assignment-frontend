import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import NavBar from './NavBar'
import Footer from './Footer'
import Header from './Header'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingLeft: 0,
  },
  wrapperClose: {
    paddingLeft: 0,
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
    flexDirection: 'column',
  },
}))

interface DashboardLayoutProps {
  children: any
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const updateOpenClass = (isOpened: boolean) => {
    setOpen(isOpened)
  }
  return (
    <div className={classes.root}>
      <NavBar setOpen={updateOpenClass} open={open} />
      <div
        className={clsx(classes.wrapper, {
          [classes.wrapperClose]: !open,
        })}
      >
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Header path={children.props.match.path.replace('/', '')} />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
