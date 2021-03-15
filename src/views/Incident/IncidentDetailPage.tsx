import React, { useEffect, useState } from 'react'
import {
    Box,
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
import { Incident } from '../../models/Incident'
import { userService } from '../../services/users.services'

const useStyles = makeStyles(theme => ({
    root: {},
    box: {
        width: '50%',
    },
    table: {
        minWidth: 650,
    },
}))

const IncidentDetailPage = (incident: Incident) => {
    const classes = useStyles()
    const [assignee, setAssignee] = useState('')
    useEffect(() => {
        const userDetail: any = getUserDetail(incident.userId)
        setAssignee(`${userDetail.firstName} ${userDetail.lastName}`)
    }, [])

    async function getUserDetail(userId?: string) {
        const userDetail = await userService.getUserDetail(userId)
        return userDetail
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
