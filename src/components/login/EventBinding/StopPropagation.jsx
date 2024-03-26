export function EventBinding()
{
    function handleNavbarClick(){
        alert("Navbar Clicked");
    }

    function handleSearchClick(e){
        alert("Search Button Clicked");
        e.stopPropagation();
    }
   
    return(
        <div className="container-fluid">
            <h2>Event Binding</h2>
            <nav className="p-4 bg-dark text-white" onClick={handleNavbarClick}>
                <h3>Navbar</h3>
                <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"> Search</button>
            </nav>    
        </div>
    )
}
// it is used to stop propagting other elemnt when it clicked, mean it willl not touch another elment for any events