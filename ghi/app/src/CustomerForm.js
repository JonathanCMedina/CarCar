import React, { useState } from 'react';

function CustomerForm({ fetchCustomers }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            address: address,
            phone_number: phoneNumber,
        }
        const customerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok){
            setFirstName('');
            setLastName('');
            setAddress('');
            setPhoneNumber('');
            fetchCustomers();
        }
    }
    function handleChangeFirstName(event) {
        const { value } = event.target;
        setFirstName(value);
    }
    function handleChangeLastName(event) {
        const { value } = event.target;
        setLastName(value);
    }
    function handleChangeAddress(event) {
        const { value } = event.target;
        setAddress(value);
    }
    function handleChangePhoneNumber(event) {
        const { value } = event.target;
        setPhoneNumber(value);
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1> Create a new customer </h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input value={firstName} onChange={handleChangeFirstName} placeholder="First Name" required type="text" name="First Name" id="First Name" className="form-control"/>
                            <label htmlFor="First Name"> First Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={lastName} onChange={handleChangeLastName} placeholder="Last Name" required type="text" name="Last Name" id="Last Name" className="form-control"/>
                            <label htmlFor="First Name"> Last Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={address} onChange={handleChangeAddress} placeholder="Address" required type="text" name="Address" id="Address" className="form-control"/>
                            <label htmlFor="Address"> Address </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={phoneNumber} onChange={handleChangePhoneNumber} placeholder="Phone Number" required type="text" name="Phone Number" className="form-control"/>
                            <label htmlFor="Phone Number"> Phone Number </label>
                        </div>
                        <button className="btn btn-primary"> Create a Customer </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomerForm;
