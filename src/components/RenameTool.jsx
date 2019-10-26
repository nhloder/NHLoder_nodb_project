import React, { Component } from 'react';

class RenameTool extends Component {
    constructor() {
        super();
        this.state = {
            editToggle: false,
            nickname: ''
        }
    }


    toggleEdit() {
        this.setState({
            editToggle: !this.state.editToggle
        })
            if (this.state.editToggle && this.state.nickName) {
                this.props.newNameFn(this.props.baux.id, { name: this.state.nickName })
            }
        
    }

    handleChange(e) {
        this.setState({
            nickName: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editToggle ? <input onChange={e => this.handleChange(e)}
                    placeholder={this.props.baux.name} /> : null}
                <button onClick={() => this.toggleEdit()}>Give Nickname not done</button>
            </div>
        );
    }
}

export default RenameTool;