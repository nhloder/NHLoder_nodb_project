import React, { Component } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';



export default class AllTools extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            powerTool: '',
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:2552/toolsList`)
            .then(res => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    powerTool: res.data.powerTool,
                })
                // toast.success(`got all tools`)
            })
            // .catch(err => {
            //     toast.error(`uh oh i did a bad`)
            // })
    }

    doThing =() => {
        this.componentDidMount()
    }

    render() {
        // const allTools = this.state.tools.map(({ id, name, imgUrl, powerTool }) => {
        //     return (
        //     )
        // })
        
        const { id, name, powerTool } = this.state

        return (
            <div>
                {/* <ToastContainer /> */}
                <div className="box">
                    {this.componentDidMount()}
                <ul>
                    <li className="id">id: {id}</li>
                    <li>{name}</li>
                    {/* <img src={imgUrl} alt='oops'></img> */}
                    <li>{powerTool}</li>
                </ul>
                    
                </div>
            </div>
        )

    };
};