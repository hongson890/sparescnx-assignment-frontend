import { Route, Redirect } from 'react-router-dom';
import React , {useEffect} from 'react';
import { getCookie } from '../utils/cookie';

export const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

export const ProtectedRouteWrapper = ({
    component: Component,
    layout: Layout,
    ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (getCookie('isLoggedIn') === 'true') {
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )
      } else {
        return <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      }
    }}
  />
);
