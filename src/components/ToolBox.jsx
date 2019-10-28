import React, { Component } from 'react';
import axios from 'axios'
import EditTool from './EditTool';

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
                console.log('hi')
                this.setState({
                    baux: res.data,
                })
            })
    }

    updateName = (id, body, el) => {
        axios
            .put(`/api/myToolBox/${id}`, body)
            .then(res => {
                this.setState({
                    baux: res.data
                })
            }
            )
    }


    deleteToolBoxItem = (id) => {
        console.log(id)
        axios.delete(`/api/myToolBox/${id}`)
            .then(res => {
                this.setState({
                    baux: res.data
                })
            })
    }


    render() {
        const toolsBox = this.state.baux.map((tool) => (
            <EditTool key = {tool.id} tool = {tool}
            update = {this.updateName}
            />
            ))
            return (
                <div>
                <h1>Tool Box</h1>
                <ul>
                    {toolsBox}
                </ul>
            </div>
        );
    }
}

export default ToolBox;
// <div key={tool.id}>

//     <li className="id">

//         id: {tool.id}</li>

//     <li>Name: {tool.name}</li>

//     <img src={tool.imgUrl} alt='oops'></img>

//     <li>type: {tool.powerTool}</li>

//     <div className='buttons'>
//         {this.updateName(this.state.baux.name)}
//         <br />
//         <button onClick={(id) => this.deleteToolBoxItem(tool.id)}>YEET Out The Nearest Window</button>
//     </div>
//     <hr />

// </div>