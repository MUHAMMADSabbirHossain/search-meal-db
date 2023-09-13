import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='md:grid md:grid-cols-3'>
            <div>Logo</div>
            <div>
                <h1 className='text-6xl font-bold'>The Meal DB!!!</h1>
            </div>
            <div>
                <Link className='text-xl font-semibold m-2 p-2' to="/">Home</Link>
                <Link className='text-xl font-semibold m-2 p-2' to="/about">About</Link >
            </div>
        </div>
    );
};

export default NavBar;