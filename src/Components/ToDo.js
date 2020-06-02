import React, { Component} from 'react';
import {MDBInput} from 'mdbreact';
import ListItems from './ListItems';
export class ToDo extends Component {
    constructor(props){
        super();
        this.handleDelete.bind(this);
        this.state={
            todoList : [

            ],
            value :''
        }
    }

    handleSubmit=(event)=>{
        
        let todoElement=this.state.value;
        if(todoElement!==''){
            this.setState({
                todoList :[...this.state.todoList,todoElement],
                value : ''
            })
        }
        
        event.preventDefault();
        
    }

    handleChange=(event)=>{
        let todoElement=event.target.value;
        this.setState({
            value : todoElement
        })
    }

    handleDelete=(index)=>{
        let TabElem=[...this.state.todoList];
        TabElem.splice(index,1);
        console.log(TabElem)
        this.setState({
            todoList : TabElem
        })
    }

    render() {
        return (
            <div className="todo">
                <form onSubmit={this.handleSubmit}>
                    <div className="myGrid">
                        <div className="g1">
                            <MDBInput  onChange={this.handleChange} value={this.state.value} style={{width:'100%'}}/>
                        </div>
                        <div className="g2">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
                <ListItems element={this.state.todoList} delete={this.handleDelete} / >
            </div>
        )
    }
}

export default ToDo
