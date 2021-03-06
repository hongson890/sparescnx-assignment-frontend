import React, { useContext, useEffect, useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Grid,
    InputAdornment,
    makeStyles,
    SvgIcon,
    TextField,
} from '@material-ui/core'
import { Search as SearchIcon } from 'react-feather'
import DateFnsUtils from '@date-io/date-fns'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import IncidentTable from './IncidentTable'
import {
    Context as IncidentContext,
    Provider as IncidentProvider,
} from '../../contexts/incident'
import history from '../../components/History'
import { incidentService } from '../../services/incident.services'
import { Alert } from '../../components/Alert'
import { IncidentStatus } from '../../constants/IncidentStatus'
import { IncidentType } from '../../constants/IncidentType'
import { User } from '../../models/User'
import { Incident } from "../../models/Incident";

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

const userStr = localStorage.getItem('user')
const user = userStr ? JSON.parse(userStr) : null

const IncidentsListInst = () => {
    const classes = useStyles()
    const { state, getAllUser, searchIncident } = useContext(IncidentContext)
    const [incidentType, setIncidentType] = useState<string>(
        IncidentType.NORMAL.value,
    )
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)
    const [listIds, setListIds] = useState<string[]>([])
    const [currentUser, setCurrentUser] = useState<any>(user)
    const [sortedBy, setSortedBy] = useState<string>('createdAt')
    const deleteIncident = async () => {
        try {
            if (listIds.length > 0) {
                await incidentService.deleteIncidents(listIds)
                Alert.info('Delete Incident successfully')
                searchIncident(null, incidentType, page, limit, sortedBy)
            }
        } catch (e) {
            Alert.error('Delete Incident fail')
        }
    }
    const resolveIncident = async () => {
        try {
            if (listIds.length > 0) {
                const selectedIncidents = state.incidentList
                    .filter((i: Incident) => listIds.includes(i._id))
                selectedIncidents.forEach((i: Incident) => {
                        i.status = IncidentStatus.RESOLVED.value
                        return i
                    })

                await incidentService.resolveIncidents(selectedIncidents)
                Alert.info('Resolve Incident successfully')
                searchIncident(currentUser._id, incidentType, page, limit, sortedBy)
            } else {
                Alert.warning('Please select at least one incident')
            }
        } catch (e) {
            Alert.error('Resolve Incident fail')
        }
    }

    useEffect(() => {
        if (!currentUser) return
        if (currentUser.role === 'admin') {
            searchIncident(null, incidentType, page, limit, sortedBy)
        } else {
            searchIncident(currentUser._id, incidentType, page, limit, sortedBy)
        }
    }, [page, limit, incidentType, incidentType])

    const fireChangeTable = (limit: number, page: number) => {
        setLimit(limit)
        setPage(page)
    }

    return (
        <Container maxWidth={false}>
            <Box
                display="flex"
                justifyContent="flex-end"
                style={{ marginBottom: '20px' }}
            >
                {
                    currentUser.role === 'admin' ?
                    <>
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
                    </>
                    :
                    <Button
                    className={classes.assignBtn}
                    variant="contained"
                    onClick={resolveIncident}
                    >
                    Resolve incident
                    </Button>
                }
            </Box>
            <Grid>
                <Card>
                    <CardHeader
                        subheader="This screen filters incidents by incident type, and sort by Created Date desc by default"
                        title="Filter Incident"
                    />
                    <CardContent>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item md={12} xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Incident Type"
                                        name="type"
                                        value={incidentType}
                                        onChange={e =>
                                            setIncidentType(e.target.value)
                                        }
                                        select
                                        SelectProps={{ native: true }}
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
                            </Grid>
                        </CardContent>
                    </CardContent>
                </Card>
            </Grid>
            <Box mt={3}>
                <IncidentTable
                    incidents={state.incidentList}
                    totalRow={state.totalRow}
                    fireChangeLimit={(limit: number): void => setLimit(limit)}
                    fireChangePage={(page: number): void => setPage(page)}
                    fireChangeSelectedUsers={(ids: string[]): void =>
                        setListIds(ids)
                    }
                />
            </Box>
        </Container>
    )
}

export const IncidentsListPage = () => (
    <IncidentProvider>
        <IncidentsListInst />
    </IncidentProvider>
)
