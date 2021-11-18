import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="nav-bar">
            <Link to='/' clasName="home-button">Home</Link> {' '}
            <Link to='/food-list' clasName="home-button">Food List</Link> {' '}
            <Link to='/favorite' clasName="favorite">Favorite</Link> {' '}
            <Link to='/least-favorite' clasName="least-favorite">least-favorite</Link>
        </div>
    )
}

export default NavBar