// REACT IMPORTS
import React, { useEffect } from 'react';

// REDUX/REACT-REDUX
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

// COMPONENT IMPORTS
import { fetchDog } from '../actions/index';
import NavBar from './NavBar';
import SavedPics from './SavedPics';

// STYLING
import '../App.css';
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
    background-color: steelblue;
    color: ivory;
    border: 2px solid ivory;
  }
`;
const Image = styled.img`
  border-radius: 25%;
  width: 25%;
  height: 25%;
`;

function Home(props) {
  useEffect(() => {
    props.fetchDog();
  }, []);

  return (
    <AppDiv>
      <NavBar />
      <PageContent>Thinking of adding a new member to the family!</PageContent>
      <PageContent>With DogFinder, look for the dog you want to bring into your life. Looking for a particular breed or simply searching for one that fits your family has never been easier. If you find the image of a dog that you like simply "like" the picture to save it for later.</PageContent>
      {props.dogError && <p>Error: {props.dogError}</p>}
      <div>
        {props.isDogLoading ? (
          <div className='spinner' />
        ) : (
          <Image src={props.dogImage} alt='Good Boy' />
        )}
      </div>
      <Button>Save</Button>
      <Button>Next</Button>
    </AppDiv>
  );
}

function mapStateToProps(state) {
  return {
    isDogLoading: state.dog.isLoading,
    dogImage: state.dog.dog,
    dogError: state.dog.error
  }
}

const mapDispatchToProps = {
  fetchDog
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);
