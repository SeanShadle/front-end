import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import StrainList from './components/StrainList'
import SavedList from './components/SavedList'

export default function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/Signup'>Signup</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/StrainList'>Strain List</Link>
          <Link to='/SavedList'>Saved List</Link>
        </div>
      </nav>
      <Switch>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route path='/StrainList'>
          <StrainList />
        </Route>
        <Route path='/SavedList'>
          <SavedList />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
