import React, { useContext, useEffect } from 'react'
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
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import DateFnsUtils from '@date-io/date-fns'
import 'react-toastify/dist/ReactToastify.css'
import { Incident } from '../../models/Incident'
import { IncidentType } from '../../constants/IncidentType'
import { IncidentStatus } from '../../constants/IncidentStatus'
import { User } from '../../models/User'
import {
    Context as IncidentContext,
    Provider as IncidentProvider,
} from '../../contexts/incident'
import { Alert } from '../../components/Alert'

const useStyles = makeStyles(theme => ({
    root: {},
    spinner: {
        marginLeft: '10px',
        width: '12px',
    },
}))

const CreateIncidentInst = () => {
    const classes = useStyles()
    const { state, getAllUser, createIncident } = useContext(IncidentContext)

    useEffect(() => {
        getAllUser()
    }, [])

    const formik = useFormik({
        initialValues: new Incident(),
        validationSchema: Yup.object().shape({
            name: Yup.string().max(255).required('Name is required'),
            userId: Yup.string().max(255).required('User is required'),
        }),
        onSubmit: (incident: Incident) => {
            createIncident(incident)
        },
    })

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
                                error={Boolean(
                                    formik.touched.name && formik.errors.name,
                                )}
                                helperText={
                                    formik.touched.name && formik.errors.name
                                }
                                label="Name"
                                name="name"
                                onChange={formik.handleChange}
                                required
                                value={formik.values.name}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Note"
                                name="note"
                                onChange={formik.handleChange}
                                value={formik.values.note}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="Incident Type"
                                name="type"
                                onChange={formik.handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={formik.values.type}
                                variant="outlined"
                            >
                                {IncidentType.LIST.map(option => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
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
                                    value={formik.values.incidentDate}
                                    onChange={formik.handleChange}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField
                                fullWidth
                                label="User"
                                name="userId"
                                error={Boolean(
                                    formik.touched.userId &&
                                        formik.errors.userId,
                                )}
                                helperText={
                                    formik.touched.userId &&
                                    formik.errors.userId
                                }
                                onChange={formik.handleChange}
                                required
                                select
                                SelectProps={{
                                    native: true,
                                }}
                                defaultValue="-1"
                                value={formik.values.userId}
                                variant="outlined"
                            >
                                <option value="-1">Please select User</option>
                                {state.userList.map((user: User) => {
                                    return (
                                        <option key={user._id} value={user._id}>
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
                                onChange={formik.handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={formik.values.status}
                                variant="outlined"
                            >
                                {IncidentStatus.LIST.map(option => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
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
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <Box display="flex" justifyContent="flex-end" p={2}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={formik.submitForm}
                    >
                        {state.isLoading && (
                            <img
                                alt="spinner"
                                src="/images/spinner.gif"
                                className={classes.spinner}
                            />
                        )}
                        Save Incident
                    </Button>
                </Box>
            </Card>
        </form>
    )
}

export const CreateIncidentPage = () => (
    <IncidentProvider>
        <CreateIncidentInst />
    </IncidentProvider>
)
