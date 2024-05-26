import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav= () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <span className="dropdown-toggle" onClick={toggleDropdown}>More</span>
                        {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link className='Home' to="/Main">Home</Link></li>
                            <li><Link to="/Main/timeline">Timeline</Link></li>
                            <li><Link className='Weather' to="/Main/Weather">Weather</Link></li>
                        </ul>
                        )}
                    </li>
                    <li>
                        <Link className='Home' to="/Main">Home</Link>
                    </li>
                    <li>
                        <Link className='Timeline' to="/Main/timeline">Timeline</Link>
                    </li>
                    <li>
                        <Link className='Weather' to="/Main/Weather">Weather</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Nav;
