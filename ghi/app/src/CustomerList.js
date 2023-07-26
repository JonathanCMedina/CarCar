function CustomerList ({ customers })
{
    return (
        <>
            <h2 className="mt-4"> Customers </h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            <td> First Name </td>
                            <td> Last Name </td>
                            <td> Address </td>
                            <td> Phone Number </td>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer =>
                        {
                            return(
                                <tr key= { customer.id } >
                                    <td> { customer.first_name } </td>
                                    <td> { customer.last_name } </td>
                                    <td> { customer.address } </td>
                                    <td> { customer.phone_number } </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default CustomerList;
