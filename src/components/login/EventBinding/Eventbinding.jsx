


export function EventBinding()
{

    function InsertClick(e){
        console.log(`X Position=${e.clientX}\nName=${e.target.name}`);
    }

    return(
        <div className="container-fluid">
            <h2>Event Binding</h2>
            <button onClick={InsertClick} name="Insert" id="btnInsert" className="btn btn-primary"> Insert </button>
        </div>
    )
}