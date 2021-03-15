import React, { useContext, useEffect, useState } from 'react'
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
import { Search as SearchIcon } from 'react-feather'
import IncidentTable from './IncidentTable'
import {
    Context as IncidentContext,
    Provider as IncidentProvider,
} from '../../contexts/incident'
import history from '../../components/History'
import { incidentService } from '../../services/incident.services'
import { Alert } from '../../components/Alert'

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

const IncidentsListInst = () => {
    const classes = useStyles()
    const { state, getAllUser, searchIncident } = useContext(IncidentContext)
    const [filterValue, setFilterValue] = useState('aaaa')
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)
    const [listIds, setListIds] = useState<string[]>([])
    const deleteIncident = async () => {
        console.log(listIds)
        try {
            if (listIds.length > 0) {
                await incidentService.deleteIncidents(listIds)
                Alert.info('Delete Incident successfully')
                searchIncident(filterValue, page, limit, orderBy)
            }
        } catch (e) {
            Alert.error('Delete Incident fail')
        }
    }
    const orderBy = ['type', 'incidentDate']

    useEffect(() => {
        searchIncident(filterValue, page, limit, orderBy)
    }, [page, limit])

    useEffect(() => {
        if (filterValue.length >= 3) {
            searchIncident(filterValue, page, limit, orderBy)
        }
    }, [filterValue])

    const fireChangeTable = (limit: number, page: number) => {
        setLimit(limit)
        setPage(page)
    }

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
                                value={filterValue}
                                helperText="Please input more than 3 characters"
                                onChange={e => setFilterValue(e.target.value)}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                fontSize="small"
                                                color="action"
                                            >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    ),
                                }}
                                placeholder="Search Incident by name"
                                variant="outlined"
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Box mt={3}>
                <IncidentTable
                    incidents={state.incidentList}
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
