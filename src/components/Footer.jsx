import React, { Component } from 'react';
import Nav from './Nav';
import './compCss/Footer.css'
// import ToolBox from './ToolBox';

class Footer extends Component {
    render() {
        return (
            <div>
                <hr/>
                <footer>
                <h1>What's in my ToolBox</h1>
                    <Nav />
                </footer>
            </div>
        );
    }
}

export default Footer;