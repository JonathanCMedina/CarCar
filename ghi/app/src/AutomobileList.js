import { useState, useEffect } from 'react';

function AutomobileList() {
    const [autos, setAutos] = useState([]);

    async function getAutos() {
        console.log('starting fetch');
        const url = "http://localhost:8100/api/automobiles/";
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos);
            console.log('fetched the autos');
        } else {
            console.error('An error has occurred fetching the data')
        }
    }

    useEffect(() => {
        getAutos();
    }, [])

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
