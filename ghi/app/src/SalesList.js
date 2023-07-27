import { useState } from 'react';


function SaleList({ sales }) {
    const [search, setSearch] = useState('')
    return (
        <>
            <h2 className="mt-4"> List of Sales </h2>
            <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder='Search sales history by salesperson first name' onChange={(event) => setSearch(event.target.value)} />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Salesperson First Name </th>
                        <th> Salesperson Last Name </th>
                        <th> Employee Number</th>
                        <th> Purchaser First Name </th>
                        <th> Purchaser Last Name </th>
                        <th> Automobile VIN </th>
                        <th> Price of Sale </th>
                    </tr>
                </thead>
                <tbody>
                    {sales
                        .filter((sale) => {
                        return search.toLowerCase() === ''
                        ? sale
                        : sale.salesperson.first_name.toLowerCase().includes(search.toLowerCase());
                    })
                        .map((sale) => (
                            <tr key={sale.id}>
                            <td> { sale.salesperson.first_name } </td>
                            <td> { sale.salesperson.last_name } </td>
                            <td> { sale.salesperson.employee_id } </td>
                            <td> { sale.customer.first_name } </td>
                            <td> { sale.customer.last_name } </td>
                            <td> { sale.automobile.vin } </td>
                            <td> { sale.price } </td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default SaleList;
