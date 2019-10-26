import React, { Component } from 'react';

import axios from 'axios'

class PowerTools extends Component {
    constructor() {
        super()
        this.state={
            list2:[]
        }
        }
        
        componentDidMount = () => {
            axios.get(`/api/toolsList`)
                .then(res => {
                    console.table(res.data)
                    res.data.forEach(element => {
                        
                        if (res.data.powerTools === "Power Tool"){
                        this.setState({
                            list2: res.data.toolsList
                            // id: res.data.id,
                            // name: res.data.name,
                            // imgUrl: res.data.imgUrl,
                            // powerTool: res.data.powerTool,
                        })
                    }
                    });
            
                }
                )
                
        }
    
    
    render() {
        const powerTools = this.state.list2.map((tool) => {
            return (
                <>
                <li className="id">
                    id: {tool.id}</li>
                    <li>{tool.name}</li>
                    <img src={tool.imgUrl} alt='oops'></img>
                    <li>type: {tool.powerTool}</li>
                    <div></div>
                <hr/>
                    
                </>
            )
        })
        return (
            <div>
                <h1>Power Tools</h1>
                {powerTools}
            </div>
        );
    }
}


export default PowerTools;