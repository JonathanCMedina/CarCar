import React, { useState } from 'react';

function SalespersonForm({ fetchSalespeople }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    function handleChangeFirstName(event) {
        const { value } = event.target;
        setFirstName(value);
    }
    function handleChangeLastName(event) {
        const { value } = event.target;
        setLastName(value);
    }
    function handleChangeEmployeeId(event) {
        const { value } = event.target;
        setEmployeeId(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            employee_id: employeeId,
        };
        const salespersonUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await fetch(salespersonUrl, fetchConfig);
        if (response.ok){
            setFirstName('');
            setLastName('');
            setEmployeeId('');
            fetchSalespeople();
        }
    }
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1> Create a new salesperson </h1>
                    <form onSubmit={handleSubmit} id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input value={firstName} onChange={handleChangeFirstName} placeholder="First Name" required type="text" name="First Name" id="First Name" className="form-control"/>
                            <label htmlFor="First Name"> First Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={lastName} onChange={handleChangeLastName} placeholder="Last Name" required type="text" name="Last Name" id="Last Name" className="form-control"/>
                            <label htmlFor="Last Name"> LastName </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={employeeId} onChange={handleChangeEmployeeId} placeholder="Employee ID" required type="text" name="Employee ID" id="Employee ID" className="form-control"/>
                            <label htmlFor="Employee ID"> Employee ID </label>
                        </div>
                        <button className="btn btn-primary">Create Salesperson </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalespersonForm;
