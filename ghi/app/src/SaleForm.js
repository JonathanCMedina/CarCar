import React, { useState, useEffect } from 'react';

function SaleForm({ fetchSales }) {
    const [auto, setAuto] = useState('');
    const [autos, setAutos] = useState([]);
    const [salesperson, setSalesperson] = useState('');
    const [salespeople, setSalespeople] = useState([]);
    const [customer, setCustomer] = useState('');
    const [customers, setCustomers] = useState([]);
    const [price, setPrice] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            automobile: auto,
            salesperson,
            customer,
            price,
        };
        console.log(data)
        const saleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(saleUrl, fetchConfig);
        if (response.ok){
            setAuto('');
            setSalesperson('');
            setCustomer('');
            setPrice('');
        }
    }
    const fetchAutos = async () =>
    {
        const response = await fetch('http://localhost:8100/api/automobiles/');
        if (response.ok)
        {
            const data = await response.json();
            setAutos(data.autos);
        }
    }
    const fetchCustomers = async () =>
    {
        const response = await fetch('http://localhost:8090/api/customers/');
        if (response.ok)
        {
            const data = await response.json();
            setCustomers(data.customers);
        }
    }
    const fetchSalespeople = async () =>
    {
        const response = await fetch('http://localhost:8090/api/salespeople/');
        if (response.ok)
        {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    };
    useEffect(() =>
    {
        fetchAutos();
        fetchCustomers();
        fetchSalespeople();
    }, []);

    function handleAutoChange(event){
        const { value } = event.target;
        setAuto(value);
    };
    function handleSalespersonChange(event){
        const { value } = event.target;
        setSalesperson(value);
    };
    function handleCustomerChange(event){
        const { value } = event.target;
        setCustomer(value);
    };
    function handlePriceChange(event){
        const { value } = event.target;
        setPrice(value);
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1> Create a new sale </h1>
                    <form onSubmit={handleSubmit} id="create-sale-form">
                        <div className="mb-3">
                            <select required name="Auto" onChange={handleAutoChange} id="Auto" className="form-select" value={auto}>
                                <option value="" > Select an unsold automobile </option>
                                    {autos.map(auto =>
                                    {
                                        if (auto.sold === false)
                                        {
                                            return (
                                                <option key={auto.vin} value={auto.vin} >
                                                    {auto.year} {auto.color} {auto.model.manufacturer.name} {auto.model.name}
                                                </option>
                                            )
                                        }
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select required name="Salesperson" onChange={handleSalespersonChange} id="Salesperson" className="form-select" value={salesperson}>
                                <option value=""> Select a salesperson </option>
                                {salespeople.map(salesperson =>
                                    {
                                        return (
                                            <option key={salesperson.id} value={salesperson.id}>
                                                {salesperson.first_name} {salesperson.last_name} {salesperson.employee_id}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select required name="Customer" onChange={handleCustomerChange} id="Customer" className="form-select" value={customer}>
                                <option value=""> Select a customer </option>
                                {customers.map(customer =>
                                    {
                                        return (
                                            <option key={customer.id} value={customer.id} >
                                                {customer.first_name} {customer.last_name} {customer.address} {customer.phone_number}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} placeholder="Price" required type="text" name="Price" className="form-control" value={price} />
                            <label htmlFor="Price" > Price </label>
                        </div>
                        <button className="btn btn-primary"> Create </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SaleForm;
