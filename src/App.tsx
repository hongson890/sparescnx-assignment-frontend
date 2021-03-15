import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import './index.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import theme from './theme'
import GlobalStyles from './components/GlobalStyles'
import DashboardLayout from './layouts/DashboardLayout'
import { ProtectedRouteWrapper, RouteWrapper } from './components/RouteWrapper'
import { LoginPage } from './views/LoginPage'
import LoginLayout from './layouts/LoginLayout'
import IncidentDetailPage from './views/Incident/IncidentDetailPage'
import { CreateIncidentPage } from './views/Incident/CreateIncidentPage'
import history from './components/History'
import { IncidentsListPage } from './views/Incident/IncidentsListPage'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ReactNotification />
            <GlobalStyles />
            <Router history={history}>
                <Switch>
                    <ProtectedRouteWrapper
                        exact
                        path="/"
                        component={IncidentsListPage}
                        layout={DashboardLayout}
                    />
                    <RouteWrapper
                        exact
                        path="/incident/create"
                        component={CreateIncidentPage}
                        layout={DashboardLayout}
                    />
                    <RouteWrapper
                        exact
                        path="/incident/detail/:id"
                        component={IncidentDetailPage}
                        layout={DashboardLayout}
                    />
                    <RouteWrapper
                        exact
                        path="/incident/list"
                        component={IncidentsListPage}
                        layout={DashboardLayout}
                    />
                    <RouteWrapper
                        exact
                        path="/login"
                        component={LoginPage}
                        layout={LoginLayout}
                    />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
