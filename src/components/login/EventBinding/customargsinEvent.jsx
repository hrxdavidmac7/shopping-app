export function EventBinding()
{

    function InsertClick(title, cities, e){
       console.log(title);
       console.log(cities);
       console.log(e.clientX + "\n" + e.target.id);
    }

    return(
        <div className="container-fluid">
            <h2>Event Binding</h2>
            <button onClick={(e)=>{ InsertClick('Welcome',['Delhi','Hyd'], e) }} name="Insert" id="btnInsert" className="btn btn-primary"> Insert </button>
        </div>
    )
}
