import React, { Component, useEffect, useState } from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../navbar/NavBar';
import '../navbar/navbar.css';
import Information from '../information/Information';
import ActivityList from '../activity/ActivityList';
import ManageActivities from '../activity/ManageActivities';
import './home.css';
import BlocTuto from '../bloctuto/BlocTuto';


const mapStateToProps = (state) => ({
  token: state.token,
});

const Home = ({ token, history }) => {
  useEffect(() => {
    if (token === null) {
      history.push('/login');
    }
  });

  return (
    <Router>
      <div className="navbarPage">
        <div>
          <NavBar />
        </div>
        <div className="appComponentsRouter">
          <Switch>
            <Route exact path="/">
              <BlocTuto />
            </Route>
            <Route exact path="/informations">
              <Information />
            </Route>
            <Route exact path="/activities">
              <ActivityList />
            </Route>
            <Route component={ManageActivities} exact path="/manageactivities" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(Home);
