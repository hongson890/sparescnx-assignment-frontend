import React, { useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
    Box,
    Card,
    Checkbox,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
} from '@material-ui/core'
import moment from 'moment'
import { Incident } from '../../models/Incident'
import history from '../../components/History'

const useStyles = makeStyles(theme => ({
    root: {},
    avatar: {
        marginRight: theme.spacing(2),
    },
    viewLink: {
        cursor: 'pointer',
        color: theme.palette.info.main,
    },
}))

interface IncidentTableProps {
    incidents: Array<Incident>
    totalRow: number
    fireChangeLimit: (limit: number) => void
    fireChangePage: (page: number) => void
    fireChangeSelectedUsers: (ids: string[]) => void
}

const IncidentTable = ({
    incidents,
    totalRow,
    fireChangeLimit,
    fireChangePage,
    fireChangeSelectedUsers,
    ...rest
}: IncidentTableProps) => {
    const classes = useStyles()
    const [selectedCustomerIds, setSelectedCustomerIds] = useState<string[]>([])
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)

    useEffect(() => {
        fireChangeSelectedUsers(selectedCustomerIds)
    }, [selectedCustomerIds])

    const handleSelectAll = (event: any) => {
        let newSelectedCustomerIds: string[] = []

        if (event.target.checked) {
            newSelectedCustomerIds = incidents.map(incident => incident._id)
        } else {
            newSelectedCustomerIds = []
        }

        setSelectedCustomerIds(newSelectedCustomerIds)
    }

    const handleSelectOne = (event: any, id: string) => {
        const selectedIndex = selectedCustomerIds.indexOf(id)
        let newSelectedCustomerIds: string[] = []

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds,
                id,
            )
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(1),
            )
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, -1),
            )
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1),
            )
        }

        setSelectedCustomerIds(newSelectedCustomerIds)
    }

    const handleLimitChange = (event: any) => {
        setLimit(event.target.value)
        fireChangeLimit(event.target.value)
    }

    const handlePageChange = (event: any, newPage: number) => {
        setPage(newPage)
        fireChangePage(newPage)
    }

    function getDateValue(dateValue: any) {
        if (!dateValue) return ''
        return moment(dateValue).format('MMMM Do YYYY, h:mm:ss a')
    }

    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box minWidth={1050}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={
                                            selectedCustomerIds.length ===
                                            incidents.length
                                        }
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0 &&
                                            selectedCustomerIds.length <
                                                incidents.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Incident Type</TableCell>
                                <TableCell>Incident Status</TableCell>
                                <TableCell>Created At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {incidents.slice(0, limit).map(incident => (
                                <TableRow
                                    hover
                                    key={incident._id}
                                    selected={
                                        selectedCustomerIds.indexOf(
                                            incident._id,
                                        ) !== -1
                                    }
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={
                                                selectedCustomerIds.indexOf(
                                                    incident._id,
                                                ) !== -1
                                            }
                                            onChange={event =>
                                                handleSelectOne(
                                                    event,
                                                    incident._id,
                                                )
                                            }
                                            value="true"
                                        />
                                    </TableCell>
                                    <TableCell
                                        onClick={() => {
                                            history.push(
                                                `/incident/detail/${incident._id}`,
                                            )
                                        }}
                                    >
                                        <span className={classes.viewLink}>
                                            {incident.name}
                                        </span>
                                    </TableCell>
                                    <TableCell>{incident.type}</TableCell>
                                    <TableCell>{incident.status}</TableCell>
                                    <TableCell>
                                        {getDateValue(incident.createdAt)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={totalRow}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    )
}

export default IncidentTable
