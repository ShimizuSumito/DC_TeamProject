import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav= () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Main/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Main/Weather">Weather</Link>
                </li>
                <li>
                    <Link to="/Main/timeline">Timeline</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;
