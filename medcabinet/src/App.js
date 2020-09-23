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
import styled from 'styled-components'


import './App.css';


export default function App() {
  return (
    <div className="App">


      <StyledHeader className="header-bar">
        <StyledTitle>Med Cabinet</StyledTitle>
        <nav>
              <StyledAnchor href="https://pensive-torvalds-e7aa79.netlify.app/">Home</StyledAnchor>
              <StyledLink to='/Signup'>Signup</StyledLink>
              <StyledLink to='/Login'>Login</StyledLink>
              <StyledLink to='/StrainList'>Strain List</StyledLink>
              <StyledLink to='/SavedList'>Saved List</StyledLink>
              <StyledLink to='/StrainForm'>Strain Form</StyledLink>
        </nav>
      </StyledHeader>


      <Switch>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
       
      <PrivateRoute exact path="/StrainList" component={StrainList}/>    
        
        <Route path="/StrainList/:id">
          <Strain  />
        </Route>

       
       <PrivateRoute exact path = '/SavedList' component={SavedList}/>  
        
        <Route path='/StrainForm'>
          <StrainForm />
        </Route>
        {/* <Route path='/'>
          <Home />
        </Route> */}
      </Switch>
    </div>
  );
}

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    margin: auto;
    height: auto;
    font-size: 1.25rem;
    padding: 2.5rem 0;
}
`

const StyledTitle = styled.h2`
    font-family: 'Maven Pro', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
`

const StyledAnchor = styled.a`
    color: black;
    text-decoration: none;
    padding: 0 1.5rem;
    font-weight: 500;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    padding: 0 1.5rem;
    font-weight: 500;
    
`





