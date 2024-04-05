import { useState } from "react";
import { DataGrid } from "../custom-component/data-grid";




export function RenderDemo(){
    const [layout, setLayout] = useState('card');
   
   
    function handleLayoutChange(e){
    setLayout(e.target.value);
    }
    return(
    <div className="container-fluid">
      <div className="mt-2">
        <select onChange={handleLayoutChange}>
            <option>Select layout</option>
            <option value='grid'>Grid</option>
            <option value='card'>Card</option>
        </select>
      </div>

        <h2>Datta grid</h2>
        <DataGrid layout={layout} theme="bg-color-red"  caption={"Updated years ago"} fields={['Name', 'Price','Stock']} data={[{Name:'TV', Price:0, Stock:'Available'},{Name:'TV', Price:0, Stock:'Available'}]}/>
        <h2>Employee Data</h2>
        <DataGrid layout={layout} theme="bg-dark" caption={"Updated years ago"} fields={['Employee', 'ID','Salary']} data={[{Employee:'Ravi',ID:0, Salary:45000}]} />
    </div>
    )
}