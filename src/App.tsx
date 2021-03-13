import React from 'react'
import { Router, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import './index.css'
import { createBrowserHistory } from 'history'
import theme from './theme'
import GlobalStyles from './components/GlobalStyles'
import DashboardLayout from './layouts/DashboardLayout'
import { RouteWrapper } from './components/RouteWrapper'
import { LoginPage } from './views/LoginPage'
import LoginLayout from './layouts/LoginLayout'
import { UserTablePage } from './views/UserTable'
import CreateIncidentPage from './views/Incident/CreateIncidentPage'
import IncidentsListPage from './views/Incident/IncidentsListPage'
import IncidentDetailPage from './views/Incident/IncidentDetailPage'

export const history = createBrowserHistory()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Switch>
          <RouteWrapper
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
