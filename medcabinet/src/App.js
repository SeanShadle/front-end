import React from 'react';

import {Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import StrainList from './components/StrainList'
import Strain from './components/Strain'
import SavedList from './components/SavedList'
import PrivateRoute from './components/PrivateRoute'

import StrainForm from './components/StrainForm'


import './App.css';


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
          <Link to='/StrainForm'>Strain Form</Link>
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
          <StrainList />  {/* Once API is implemented -> <PrivateRoute component={StrainList}/>  */}   
        </Route>
        <Route path="/StrainList/:id">
          <Strain  />
        </Route>

        <Route path='/SavedList'>
          <SavedList />  {/* Once API is implemented -> <PrivateRoute component={SavedList}/>  */}
        </Route>
        <Route path='/StrainForm'>
          <StrainForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
