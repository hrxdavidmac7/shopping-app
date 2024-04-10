import * as React from 'react';


export class CustomNav extends React.Component{
    constructor(){
        super();
    }
    render(){
      return(
        <nav className='d-flex justify-content-between'>
        <h2>{this.props}</h2>
        <div>
            {
                this.props.navitems.map(item=> <span className="mx-3" key={item}></span>)
            }
        </div>
        <div>
            <span className='bi bi-person-fill mx-2'></span>
            <span className='bi bi-search mx-2'></span>
            <span className='bi bi-person-fill mx-2'></span>
            
        </div>
    </nav>
      )
    }
}