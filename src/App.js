import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import Home from './components/pages/Home';
import RickandMState from './context/rickandmorty/RickandMState';
import Alert from './components/layout/Alert';
import AlertState from './context/alert/AlertState';
import SingleCharacter from './components/characters/SingleCharacter';

const App = () => {
  return (
    <RickandMState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/character/:id'
                  component={SingleCharacter}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </RickandMState>
  );
};

export default App;
