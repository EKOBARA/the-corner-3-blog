import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home </Link>
            <Link to="/about">About</Link>
            <Link to='/article'>Article </Link>
            <Link to='/account'>Account </Link>

        </nav>
    );
};

export default Nav;