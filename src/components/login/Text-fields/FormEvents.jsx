export function FormEvent(){
    function handleTouch(){
        alert("hey");
    }
    return (
        <div className="container-fluid">
            <div className="mt-4">
                <img onTouchStart={handleTouch} src="iphone_15pro.jpg" width="200px"></img>
                <img onTouchStart={handleTouch} src="iphone_15pro.jpg" width="200px"></img>
                
            </div>
        </div>
    )
}