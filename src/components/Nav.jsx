import React from 'react'
import { Link } from 'react-router-dom';
import './compCss/Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul className="navitems"></ul>
                <li>
            <button>
                    <Link to='/'>Tool Box</Link>
            </button>
                </li>
                <li>
                    <button>
                    <Link to='/AllTools'>All Tools</Link>
                    </button>
                </li>
                {/* <li>
                    <Link to='/PowerTools'>PowerTools</Link>
                </li>
                <li>
                    <Link to='/AnalogTools'>Analog Tools</Link>
                </li> */}
            
        </nav>
    )
};
export default Nav;