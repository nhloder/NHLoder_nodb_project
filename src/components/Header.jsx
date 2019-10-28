import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import routes from '../routes';
import Nav from './Nav'


class Header extends Component {
    render() {
        return (
            <div>
                    
                <header>
                    <h1>Whats In My Tool Box?</h1>
                    <Nav />
                </header>
                <hr/>
                <article>
                    Concept: You have a new Tool Box! Now what should you put in it?
                    <br/>
                    -First let's take a look at what tools you DO have and see which ones you want to take with you.
                    <br />
                    -Then see if you can find any more that you'd like to have and feel free to add them to the list.
                    <br/> 
                    -Also if you'd like to nickname your tools go right ahead!
                    Otherwise, if you feel as if you don't need a tool anymore go ahead and just frickin' YEET it out the nearest window!
                </article>
                <hr/>
                {routes}
                    
            
            </div>
        );
    }
}

export default Header;