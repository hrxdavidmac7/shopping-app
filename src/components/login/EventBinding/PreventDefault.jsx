export function EventBinding()
{
    function SubmitClick(e){
        e.preventDefault();
        alert('Form Submitted to server');
    }


    return(
        <div className="container-fluid">
            <h2>Event Binding</h2>
            <form onSubmit={SubmitClick}>
               User Name: <input type="text" name="UserName"/> <button type="submit">Submit</button>    
            </form>            
        </div>
    )
}

// used in generic buttons to not autosubmit as in input type=submit mechnism in html element