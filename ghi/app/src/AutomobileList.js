function AutomobileList({ autos })
{
    return (
        <>
            <h2 className="mt-4">Automobiles</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map(auto =>
                    {
                        return (
                            <tr key={auto.href}>
                                <td>{auto.vin}</td>
                                <td>{auto.color}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.model.manufacturer.name}</td>
                                <td>{auto.sold ? "Yes" : "No"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AutomobileList;
