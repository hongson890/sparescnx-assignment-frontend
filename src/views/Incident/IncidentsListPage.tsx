import React, { useState } from 'react'
import { Box, Button, Container, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
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
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
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
      <Box display="flex" justifyContent="flex-start">
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
      </Box>
      <Box mt={3}>
        <IncidentTable incidents={incidents} />
      </Box>
    </Container>
  )
}

export default IncidentsListPage
