import React, { useEffect, useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import history from '../../components/History'
import { Incident } from '../../models/Incident'
import { incidentService } from '../../services/incident.services'

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
    const [assignee, setAssignee] = useState('')
    const params: Identifiable = useParams()
    const [incident, setIncident] = useState(new Incident())
    useEffect(() => {
        getIncidentDetail(params.id)
    }, [])

    async function getIncidentDetail(id: string) {
        const incidentDetail = await incidentService.getIncidentDetail(id)
        setIncident(incidentDetail)
        setAssignee(incidentDetail.fullName)
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
                                <TableCell>{assignee}</TableCell>
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
                <Box display="flex" justifyContent="flex-start" p={2}>
                    <Button onClick={() => {
                        history.push(`/incident/edit/${incident._id}`)
                    }} color="primary" variant="contained">
                        Edit Incident
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default IncidentDetailPage
