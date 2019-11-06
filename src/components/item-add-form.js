import React, { Component } from 'react';
import '../styles/item-add-form.css';

export default class ItemAddForm extends Component{
    state = {
        label: ''
    };
    onLabelChange = ({target}) => {
        this.setState({
            label: target.value,
            inputValue: ''
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    };
    
    render(){
        return(
            <form className="item-add-form"
                  onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done?"
                    onChange={this.onLabelChange}
                    value={this.state.label}/>
                <button className="btn btn-danger">
                    Add Item
                </button>
            </form>
        )
    }
}