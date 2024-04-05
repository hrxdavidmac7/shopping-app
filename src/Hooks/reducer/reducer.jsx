import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
let initialState= {CartCount:0};

function reducer(state, action){
    switch(action.type){
        case 'add':
            return{ CartCount: state.CartCount+1 } 
        case 'remove':
            return{ CartCount: state.CartCount-1 }
    }
}

export function ReducerDemo(){

    const[state, dispatch] = useReducer(reducer, initialState);
    function handleAddClick(){
        dispatch({type:'add'})
    }
    function handleRemoveClick(){
        dispatch({type:'remove'})
    }

    return(
        <div className="conatainer-fluid">
            <h2 className="btn border bi bi-cart4 m-2">Your cart <span className="btn btn-outline-primary">{state.CartCount}</span></h2><hr></hr>
            <button className="btn btn-success" onClick={handleAddClick}>Add</button>
            <button className="btn btn-danger" onClick={handleRemoveClick}>Remove</button>
        </div>
    )
}