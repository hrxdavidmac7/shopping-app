import React from "react";
import { CustomNav } from "./custom-navabr";


export class Register extends React.Component
{
     constructor(){
        super();
        this.state = {msg: ''}
        this.handleInsertClick =  this.handleInsertClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
     }

      handleInsertClick(){
        this.setState({msg: 'Record Inserted'});
     }
     handleDeleteClick(){
        this.setState({msg: 'Record Deleted'});
     }

     render(){
        return(
            <div className="container-fluid">
                <CustomNav title="amazon" navitems="gh" />
                <button onClick={this.handleInsertClick} className="btn btn-primary mt-3">Insert</button>
                <button onClick={this.handleDeleteClick} className="btn mt-3 btn-danger">Delete</button>
                <p> {this.state.msg} </p>
            </div>
        )
     }
}
