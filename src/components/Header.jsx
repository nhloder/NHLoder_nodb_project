import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Tool Box</h1>
                    <nav>
                        <ul>
                            <li>Tool Box</li>
                            <li>All Tools</li>
                            <li>Power Tools</li>
                            <li>Analog Tools</li>
                        </ul>
                    </nav>
                </header>
                <hr/>
                <article>
                    Concept: You have a new Tool Box! Now what should you put in it?
                    <br/>
                    First let's take a look at what tools you DO have and see which ones you want to take with you. then see if you can find any more that you'd like to have and feel free to add them to the list. also if you'd like to nickname your tools go right ahead! otherwise if you feel as if you don't need a tool anymore go ahead and just fuckin' YEET it out the nearest window.
                </article>
            </div>
        );
    }
}

export default Header;