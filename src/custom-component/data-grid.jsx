



export function DataGrid(props){
   
    if(props.layout ==="grid"){
        
    return(
        <table className={`table table-hover ${props.theme}`}>
            <caption>{props.caption}</caption>
          
          <thead>
            <tr>
                {
                    props.fields.map(field=> <th key={field}>{field} <button className="bi bi-sort-alpha-down btn btn-primary"></button></th>)
                }
            </tr>
          </thead>
          <tbody>
            {
                props.data.map(item=> 
                    <tr key={item}> 
                    {
                        Object.keys(item).map(key=>
                        <td key={key}>{item[key]}
                        
                        
                        </td>
                        )
                    }               
                     </tr>
                
                )
                
            }
          </tbody>

        </table>
    )

}else{
    return(
        <div className="d-flex flex-wrap">
            {
                props.data.map(item=> 
                    <div className="card p-2 m-2" style={{width:'200px'}}>
                        <div className="card-header">
                            {
                               <div>
                            
                                 <div>{item[Object.keys(item)[0]]}</div>
                               </div>
                            }

                        </div>
                        <div className="card-body">
                            {
                                <div>
                                    
                                </div>
                            }

                         </div>

                    </div>
                    )
            }

        </div>
    )
}
}