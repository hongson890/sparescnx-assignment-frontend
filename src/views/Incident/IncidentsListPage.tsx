import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  InputAdornment,
  makeStyles,
  SvgIcon,
  TextField,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { Search as SearchIcon } from 'react-feather'
import IncidentTable from './IncidentTable'
import incidentData from '../../tests/mocks/incident-data'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  addBtn: {
    marginRight: theme.spacing(2),
  },
  deleteBtn: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
    color: theme.palette.error.contrastText,
  },
  assignBtn: {
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
    color: theme.palette.error.contrastText,
  },
}))

const IncidentsListPage = () => {
  const classes = useStyles()
  const [incidents] = useState(incidentData)
  const history = useHistory()
  const deleteIncident = () => {}

  return (
    <Container maxWidth={false}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          className={classes.addBtn}
          color="primary"
          variant="contained"
          onClick={() => {
            history.push('/incident/create')
          }}
        >
          Add incident
        </Button>
        <Button
          className={classes.deleteBtn}
          variant="contained"
          onClick={deleteIncident}
        >
          Delete incident
        </Button>
        <Button
          className={classes.assignBtn}
          variant="contained"
          onClick={deleteIncident}
        >
          Assign incident
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth="100%">
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search Incident"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box mt={3}>
        <IncidentTable incidents={incidents} />
      </Box>
    </Container>
  )
}

export default IncidentsListPage
