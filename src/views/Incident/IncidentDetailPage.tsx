import React, { useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    Grid,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from '@material-ui/core'
import {
    DateTimePicker,
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { Incident } from '../../models/Incident'
import { IncidentType } from '../../constants/IncidentType'
import { IncidentStatus } from '../../constants/IncidentStatus'
import { User } from '../../models/User'
import usersData from '../../tests/mocks/user-datas'

const useStyles = makeStyles(theme => ({
    root: {},
    box: {
        width: '50%',
    },
    table: {
        minWidth: 650,
    },
}))

const IncidentDetailPage = () => {
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
        <Card>
            <CardHeader title="Incident Detail" />
            <Divider />
            <CardContent>
                <Box minWidth={false} className={classes.box}>
                    <Table
                        className={classes.table}
                        size="small"
                        aria-label="a dense table"
                    >
                        <TableBody>
                            <TableRow>
                                <TableCell variant="head">Name</TableCell>
                                <TableCell>
                                    Incident for winter solder
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Assignee</TableCell>
                                <TableCell>Pham Hong Son</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Status</TableCell>
                                <TableCell>New</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Type</TableCell>
                                <TableCell>Urgent</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Create At</TableCell>
                                <TableCell>18 Mar 2021</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </CardContent>
        </Card>
    )
}

export default IncidentDetailPage
