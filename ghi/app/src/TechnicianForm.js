import React, { useState } from "react";

function TechnicianForm({ getTechnicians })
{
    const [employeeId, setEmployeeId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleEmployeeIdChange(event)
    {
        const value = event.target.value;
        setEmployeeId(value);
    }
    function handleFirstNameChange(event)
    {
        const value = event.target.value;
        setFirstName(value);
    }
    function handleLastNameChange(event)
    {
        const value = event.target.value;
        setLastName(value);
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        const data = {
            employee_id: employeeId,
            first_name: firstName,
            last_name: lastName,
        };
        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok)
        {
            setEmployeeId("");
            setFirstName("");
            setLastName("");
            getTechnicians()
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a technician</h1>
                    <form onSubmit={handleSubmit} id="add-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeIdChange} placeholder="Employee ID..." required type="text" name="employeeId" id="employeeId" className="form-control" value={employeeId} />
                            <label htmlFor="employeeId">Employee ID</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} placeholder="First Name..." required type="text" name="firstName" id="firstName" className="form-control" value={firstName} />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} placeholder="Last Name..." required type="text" name="lastName" id="lastName" className="form-control" value={lastName} />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TechnicianForm;
