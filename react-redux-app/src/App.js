// REACT IMPORTS
import React, { useEffect } from 'react';

// REDUX/REACT-REDUX
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// COMPONENT IMPORTS
import { fetchDog } from './actions/index';
import NavBar from './components/NavBar';
import SavedPics from './components/SavedPics';
import Home from './components/Home';

// STYLING
import './App.css';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
`;
const PageContent = styled.p`
  font-size: 1.2rem;
  text-align: left;
  width: 75%;
  padding-left: 2%;
`;
const Button = styled.button`
  padding: 2%;
  margin: 1%;
  font-size: 1.2rem;
  background-color: transparent;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  &:hover {
    background-color: coral;
    color: ivory;
  }
`;
const Image = styled.img`
  border-radius: 25%;
  width: 25%;
  height: 25%;
`;

function App() {

  return (
    <AppDiv>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/savedpics' component={SavedPics} />
      </Switch>
    </AppDiv>
  );
}

export default App;