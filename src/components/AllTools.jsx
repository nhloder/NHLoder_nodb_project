import React, { Component } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import './compCss/AllTools.css'






export default class AllTools extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            // id: '',
            // name: '',
            // imgUrl: '',
            // powerTool: ''
        }
    }

    

    componentDidMount = () => {
        axios.get(`/api/toolsList`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    list: res.data.toolsList
                    // id: res.data.id,
                    // name: res.data.name,
                    // imgUrl: res.data.imgUrl,
                    // powerTool: res.data.powerTool,
                })
                toast.success(`got all tools`)
                
            })
            .catch(err => {
                toast.error(`uh oh i did a bad`)
            })
    }

    
    // power=(list) => {
    //     for(let i = 0; i <= this.state.list.length; i++){
    //     if (this.state.list[i].powerTool === true){
    //         return 'Power Tool'}
            
    //         if(this.state.list[i].powerTool === false){
    //             return 'Analog tool'}}
    // }
    render() {

        const allTools = this.state.list.map((tool) => {
            return (
                <>
                <li className="id">
                    id: {tool.id}</li>
                    <li>{tool.name}</li>
                    <img src={tool.imgUrl} alt='oops'></img>
                    <li>type: {tool.powerTool}</li>
                    <hr/>
                </>
            )
        })
        

        return (
            <div>
                {/* <ToastContainer /> */}
                <div className="box">
                    <h1>All Tools</h1>
                <ul>
                    {allTools}
                </ul>
                </div>
            </div>
        )

    };
};