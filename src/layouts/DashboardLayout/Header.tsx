import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  makeStyles,
  Breadcrumbs,
  Typography,
  Link,
  TextField,
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SearchIcon from '@material-ui/icons/Search'
import HistoryIcon from '@material-ui/icons/History'
import CloseIcon from '@material-ui/icons/Close'
import { concat } from 'lodash'

interface HeaderProps {
  path?: any
}

const recent = [
  {
    bfaiRating: '',
    date: '2021-01-13',
    output: 'severe',
    proper_name: 'Guardant Health, Inc. hihi',
    rating: 'Guardant Health, Inc. [No Rating]',
    subscription: 'risk_signals',
    ticker: 'GH.US',
    recent: true,
  },
  {
    bfaiRating: '',
    date: '2020-11-16',
    output: 'severe',
    proper_name: 'Inmobiliaria Colonial SOCIMI SA',
    rating: 'Inmobiliaria Colonial SOCIMI SA [No Rating]',
    subscription: 'risk_signals',
    ticker: 'COL.SM',
    recent: true,
  },
  {
    bfaiRating: '',
    date: '2020-11-05',
    output: 'severe',
    proper_name: 'Eldorado Resorts Inc',
    rating: 'Eldorado Resorts Inc [No Rating]',
    subscription: 'risk_signals',
    ticker: 'ERI.US',
    recent: true,
  },
]

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
    </div>
  )
}

export default Header
