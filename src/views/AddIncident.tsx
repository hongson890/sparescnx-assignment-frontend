import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  TextField,
} from '@material-ui/core'
import {
  DateTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Incident } from '../models/Incident'
import { IncidentType } from '../constants/IncidentType'
import { IncidentStatus } from '../constants/IncidentStatus'
import { User } from '../models/User'
import usersData from '../tests/mocks/user-datas'

const useStyles = makeStyles(theme => ({
  root: {},
}))

const AddIncident = () => {
  const classes = useStyles()
  const [values, setValues] = useState(new Incident())
  const [users, setUsers] = useState<User[]>(usersData)

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const handleChangeDate = (dateValue: any) => {
    setValues({
      ...values,
      incidentDate: dateValue,
    })
  }

  const saveIncident = () => {
    console.log(values)
  }

  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader
          subheader="Please add detail information for the new incident"
          title="Create Incident"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="Name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Note"
                name="note"
                onChange={handleChange}
                value={values.note}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Incident Type"
                name="type"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.type}
                variant="outlined"
              >
                {IncidentType.LIST.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  variant="inline"
                  fullWidth
                  inputVariant="outlined"
                  ampm={false}
                  id="date-picker-inline"
                  label="Select Incident Date"
                  value={values.incidentDate}
                  onChange={handleChangeDate}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="User"
                name="userId"
                onChange={handleChange}
                required
                select
                SelectProps={{
                  native: true,
                }}
                defaultValue="-1"
                value={values.userId}
                variant="outlined"
              >
                <option value="-1">Please select User</option>
                {users.map((user: User) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.firstName} {user.lastName}
                    </option>
                  )
                })}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Incident Status"
                name="Incident Status"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.status}
                variant="outlined"
              >
                {IncidentStatus.LIST.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="Description"
                name="description"
                onChange={handleChange}
                value={values.description}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained" onClick={saveIncident}>
            Save Incident
          </Button>
        </Box>
      </Card>
    </form>
  )
}

export default AddIncident
