import React, { Component } from 'react';

class EditTool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editToggle: false,
            nickname: ''
        }
    }


    toggleEdit = () => {
        this.setState({
            editToggle: !this.state.editToggle
        })
        if (this.state.editToggle && this.state.nickName) {
            this.props.updateNameFn(this.props.baux.id, { name: this.state.nickName })
        }

    }


    save = (id,body) => {
        this.props.update(id, body)
        this.setState ({
            editToggle : false})
        
    }

    handleChange = (e) => {
        this.setState({
            nickName: e.target.value
        })
    }

    render() {
        const { tool } = this.props
        return (
            <div>
                <div key={tool.id}>

                    <li className="id">

                        id: {tool.id}</li>

                    <li>Name: {tool.name}</li>

                    <li>Nickname : {tool.nickName}</li>

                    <img src={tool.imgUrl} alt='oops'></img>

                    <li>type: {tool.powerTool}</li>

                    <div className='buttons'>
                        {/* {this.updateName(this.state.baux.name)} */}
                        <br />
                        <button onClick={(id) => this.deleteToolBoxItem(tool.id)}>YEET Out The Nearest Window</button>
                    </div>


                </div>
                {this.state.editToggle ? <input onChange={e => this.handleChange(e)}
                    placeholder= "Give Nickname"/> : null}

                {!this.state.editToggle ? <button onClick={() => this.toggleEdit()}>Give Nickname</button> :
                    <button onClick={() => this.save(tool.id, {nickName: this.state.nickName})}>Change Nickname</button>}
            </div>
        );
    }
}

export default EditTool;