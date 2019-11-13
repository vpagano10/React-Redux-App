import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavDiv = styled.div`
    padding: 2%;
    border: 4px solid khaki;
    display: flex;
    justify-content: space-between;
    background-color: steelblue;
`;
const PageTitle = styled.h1`
    color: khaki;
    &:hover {
        color: ivory;
    }
`;
const PageLink = styled(Link)`
    text-decoration: none;
    color: khaki;
    margin-top: 30px;
    &:hover {
        color: ivory;
        transform: scale(1.5);
        margin-right: 10px;
    }
`;
const HomeLink = styled(Link)`
    text-decoration: none;
`;

function NavBar() {
    return (
        <NavDiv>
            <HomeLink to='/'>
                <PageTitle>DogFinder</PageTitle>
            </HomeLink>
            <PageLink to='/savedpics'>My Saved Pics</PageLink>
        </NavDiv>
    )
}

export default NavBar;