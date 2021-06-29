import React from 'react';
import './App.css';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import RegisterPage from './components/registerPage/RegisterPage';
import LogPage from './components/logPage/LogPage';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={RegisterPage} exact path="/register" />
          <Route component={LogPage} exact path="/login" />
          <Route component={Home} exact path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
