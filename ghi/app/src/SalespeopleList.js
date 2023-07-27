function SalespeopleList ({ salespeople })
{
    return (
        <>
            <h2 className="mt-4"> Salespeople </h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> First Name </th>
                        <th> Last Name </th>
                        <th> Employee ID </th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(salesperson =>
                        {
                            return (
                                <tr key={ salesperson.id }>
                                    <td>{ salesperson.first_name }</td>
                                    <td> { salesperson.last_name } </td>
                                    <td> { salesperson.employee_id } </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}

export default SalespeopleList;
