import React, { useContext, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Card from '@material-ui/core/Card'
import SortIcon from '@material-ui/icons/ArrowDownward'
import styled from 'styled-components'
import {
    Context as UserContext,
    Provider as UserProvider,
} from '../contexts/users'
import { getFullName } from '../contexts/users/users.helper'

const Div = styled.div`
    width: 100%;
`

const columnConfig = [
    {
        name: 'email',
        selector: (rowData: any) => {
            return rowData.email
        },
        sortable: true,
    },
    {
        name: 'Full Name',
        sortable: true,
        selector: (rowData: any) => {
            return getFullName(rowData)
        },
    },
    {
        name: 'username',
        sortable: true,
        selector: (rowData: any) => {
            return `${rowData.login.username}`
        },
    },
    {
        name: 'Thumbnail Icon',
        sortable: false,
        selector: (rowData: any) => {
            return (
                <img
                    alt={rowData.email}
                    src={rowData.picture.thumbnail}
                    style={{ width: 30, borderRadius: '50%' }}
                />
            )
        },
    },
]
const UserTable = () => {
    const { state, searchUser } = useContext(UserContext)

    const [columns, setColumns] = useState(columnConfig)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    useEffect(() => {
        searchUser(page, pageSize, state.seed)
    }, [])

    const handlePageChange = (pageIndex: number, totalRow: number) => {
        searchUser(pageIndex, pageSize, state.seed)
    }

    const handlePerRowsChange = async (
        currentRowsPerPage: number,
        currentPage: number,
    ) => {
        setPage(1)
        setPageSize(currentRowsPerPage)
        searchUser(page, currentRowsPerPage, state.seed)
    }
    return (
        <Div>
            <Card>
                <DataTable
                    title="List users from api /randomuser"
                    sortIcon={<SortIcon />}
                    columns={columns}
                    keyField="email"
                    defaultSortField="Full Name"
                    data={state.userList}
                    progressPending={state.isLoading}
                    pagination
                    paginationServer
                    paginationTotalRows={100}
                    paginationDefaultPage={page}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                />
            </Card>
        </Div>
    )
}
export const UserTablePage = () => (
    <UserProvider>
        <UserTable />
    </UserProvider>
)
