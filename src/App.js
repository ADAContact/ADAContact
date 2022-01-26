import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';

import React from 'react';
import componentQueries from 'react-component-queries';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

import AuthPage from 'pages/AuthPage';
import DashboardPage from 'pages/DashboardPage';

import GA4React from "ga-4-react";
const ga4react = new GA4React("UA-201791504-1");

ga4react.initialize();

const getBasename = () => {
  return `/${process.env.PUBLIC_URL}`;
};


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};


class App extends React.Component {
  render() {
    return (
      // <BrowserRouter basename={getBasename()}>
      <HashRouter basename={getBasename()}>

        {/* <GAListener> */}
        <Switch>

          <LayoutRoute
            exact
            path="/login"
            layout={EmptyLayout}
            component={props => (
              <AuthPage {...props} authState={STATE_LOGIN} />
            )}
          />
          <LayoutRoute
            exact
            path="/signup"
            layout={EmptyLayout}
            component={props => (
              <AuthPage {...props} authState={STATE_SIGNUP} />
            )}
          />

          <LayoutRoute
            exact
            path="/signout"
            layout={EmptyLayout}
            component={props => (
              <AuthPage {...props} authState={STATE_LOGIN} />
            )}
          />

          <MainLayout breakpoint={this.props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Route exact path="/" render={(props) => <DashboardPage {...props} />} />

            </React.Suspense>
          </MainLayout>
          <Redirect to='/' />
        </Switch>
        {/* </GAListener> */}


        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
