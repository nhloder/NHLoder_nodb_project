import React, { Component } from 'react';

const OneTool = () => {
    this.state.map((tool) => (
        <>
            <li className="id">
                id: {tool.id}</li>
            <li>Name: {tool.name}</li>
            <img src={tool.imgUrl} alt='oops'></img>
            <li>type: {tool.powerTool}</li>
            <div className='buttons'>
                <button onClick={() => this.updateName()}>Give Nickname not done</button>
                <br />
                <button onClick={() => this.deleteToolBoxItem()}>YEET Out The Nearest Window</button>
            </div>
            <hr />
        </>

    ))
} 
export default OneTool