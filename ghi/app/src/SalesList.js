import React, { useState, useEffect } from 'react';


function SaleList() {
    const [sales, setSales] = useState([])

    async function fetchSaleList() {
        const response = await fetch('http://localhost:8090/api/sales/');
        if (!response.ok){
            setSales([]);
            return;
        }
        const saleListData = await response.json();
        console.log(saleListData);
        setSales(saleListData.sales)
    }
    useEffect(() => {
        fetchSaleList();
    }, [])
    return (
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
                {sales.map((sale, index) => {
                    return (
                        <tr key={`${sale.id}-${index}`}>
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
    );
}

export default SaleList
