import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
return(
    <nav>
                        <ul>
                            <li>
                                <Link to ='/'>Tool Box</Link>
                            </li>
                            <li>
                                <Link to = '/AllTools'>All Tools</Link>
                            </li>
                            <li>
                                <Link to = '/PowerTools'>PowerTools</Link>
                            </li>
                            <li>
                                <Link to = '/AnalogTools'>Analog Tools</Link>
                            </li>
                        </ul>
                    </nav>
)
};
export default Nav;