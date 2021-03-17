import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider, Grid,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableRow, TextField,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import history from '../../components/History'
import { Incident } from '../../models/Incident'
import { incidentService } from '../../services/incident.services'
import { User } from "../../models/User";
import { userService } from "../../services/users.services";
import { IncidentStatus } from "../../constants/IncidentStatus";
import { Alert } from '../../components/Alert'

const useStyles = makeStyles(theme => ({
    root: {},
    box: {
        width: '50%',
    },
    table: {
        minWidth: 650,
    },
}))

export interface Identifiable {
    id: string
}

const IncidentDetailPage = () => {
    const classes = useStyles()
    const params: Identifiable = useParams()
    const [incident, setIncident] = useState(new Incident())
    const [listUser, setListUser] = useState<any[]>([])
    const [selectedUserId, setSelectedUserId] = useState('')
    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        const listU = await userService.getAll()
        setListUser(listU)
        getIncidentDetail(params.id)

    }

    const getIncidentDetail = async (id: string) => {
        const incidentDetail = await incidentService.getIncidentDetail(id)
        setIncident(incidentDetail)
        setSelectedUserId(incidentDetail._id)
    }

    const assignIncident = async () => {
        if (selectedUserId) {
            incident.userId = selectedUserId
            incident.status = IncidentStatus.ASSIGNED.value
            incident.assignee = getAssigneeName(selectedUserId)
        }
        const result = await incidentService.updateIncident(incident)
        console.log(result)
        if (result.ok) {
            Alert.success(`Assign this incident to ${incident.assignee} successfully`)
            history.push('/incident/list')
        }
    }

    const getAssigneeName = (userId?: string) => {
        const filterA = listUser.filter((u: any) => u._id === userId)
        if (!filterA || filterA.length === 0) {
            return ''
        }
        return `${filterA[0].firstName} ${filterA[0].lastName}`
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
                                <TableCell>{incident.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Assignee</TableCell>
                                <TableCell>{incident.assignee}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Status</TableCell>
                                <TableCell>{incident.status}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Type</TableCell>
                                <TableCell>{incident.type}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell variant="head">Create At</TableCell>
                                <TableCell>
                                    {moment(incident.createdAt).format(
                                        'MMMM Do YYYY, h:mm:ss a',
                                    )}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <hr />
                <Box display="flex" justifyContent="flex-start" p={2}>
                    <TextField
                        style={{ width: '25%', marginLeft: '10px', marginTop: '10px', height: '40px' }}
                        label="User"
                        name="userId"
                        required
                        select
                        onChange={(e) => { setSelectedUserId(e.target.value)}}
                        value={selectedUserId}
                        SelectProps={{
                            native: true,
                        }}
                        defaultValue={selectedUserId}
                        variant="outlined"
                    >
                        <option value="-1">Please select User</option>
                        {listUser.map((user: User) => {
                            return (
                                <option key={user._id} value={user._id}>
                                    {user.firstName} {user.lastName}
                                </option>
                            )
                        })}
                    </TextField>
                    <Button style={{ height: '40px', marginTop: '20px', marginLeft: '20px' }} onClick={assignIncident} color="primary" variant="contained">
                        Assign Incident
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default IncidentDetailPage
