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
            component={UserTablePage}
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
