
function SalespersonHistory ({ salespeople }){
    return (
        <>
        <h2 className="mt-4"> Sales History </h2>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Test
            </button>
            <div className="dropdown-menu">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
            </div>
        </div>
        </>
    )
}

export default SalespersonHistory;