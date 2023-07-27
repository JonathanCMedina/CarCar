function SaleList({ sales }) {
    return (
        <>
            <h2 className="mt-4"> List of Sales </h2>
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
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td> { sale.salesperson.first_name } </td>
                                <td> { sale.salesperson.last_name } </td>
                                <td> { sale.salesperson.employee_id } </td>
                                <td> { sale.customer.first_name } </td>
                                <td> { sale.customer.last_name } </td>
                                <td> { sale.automobile.vin } </td>
                                <td> { sale.price } </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default SaleList
