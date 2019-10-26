import React, { Component } from 'react';
import axios from 'axios'
import RenameTool from './RenameTool';

class ToolBox extends Component {
    constructor() {
        super();
        this.state = {
            baux: []
        }
    }
    componentDidMount() {
        axios
            .get('/api/myToolBox')
            .then(res => {
                this.setState({
                    baux: res.data,

                })
            })
    }

    updateName = (id, body) => {
        axios
            .put(`/api/myToolBox/${id}`, body)
            .then(res => {
                this.setState({
                    baux: res.data
                    
                })
                
            }
            );
    }

updatePt2 = (el,id) => {
    return (
        <RenameTool
            baux={el} key={el.id}
            updateNameFn={this.updateName}
        />)
    
}

    deleteToolBoxItem = (id) => {
        axios
            .delete(`/api/myToolBox/${id}`)
            .then(res => {
                this.setState({
                    baux: res.data
                })
            })
    }


    render() {
        const allTools = this.state.baux.map((tool) => (
            <div key={tool.id}>
                <li className="id">
                    id: {tool.id}</li>
                <li>Name: {tool.name}</li>
                <img src={tool.imgUrl} alt='oops'></img>
                <li>type: {tool.powerTool}</li>
                <div className='buttons'>
                    {this.updatePt2}
                    <br />
                    <button onClick={() => this.deleteToolBoxItem()}>YEET Out The Nearest Window</button>
                </div>
                <hr />

            </div>

))
return (
    <div>
                <h1>Tool Box</h1>
                <ul>
                    {allTools}
                </ul>
            </div>
        );
    }
}

export default ToolBox;
{/* <button onClick={() => this.updatePt2()}>Give nickname</button> */}