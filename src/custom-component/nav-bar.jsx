export function NavBar(props)
{
    return(
        <nav className={`d-flex justify-content-between p-3 border border-1 rounded rounded-2 ${props.Theme}`}>
            <div className="h3"> {props.BrandName} </div>
            <div>
                {
                    props.MenuItems.map(item=> <span className="mx-4" key={item}><a>{item}</a></span>)
                }
            </div>
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder={`Search ${props.BrandName}`} />
                    <button className="btn btn-warning bi bi-search"></button>
                </div>
            </div>
        </nav>
    )
}