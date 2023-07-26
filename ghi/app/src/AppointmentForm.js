import React, { useState, useEffect } from "react";

function AppointmentForm({ getAppointments })
{
    const [vin, setVin] = useState("");
    const [customer, setCustomer] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [reason, setReason] = useState("");
    const [technicians, setTechnicians] = useState([]);
    const [technician, setTechnician] = useState("");

    function handleVinChange(event)
    {
        const value = event.target.value;
        setVin(value);
    }
    function handleCustomerChange(event)
    {
        const value = event.target.value;
        setCustomer(value);
    }
    function handleDateTimeChange(event)
    {
        const value = event.target.value;
        setDateTime(value);
    }
    function handleReasonChange(event)
    {
        const value = event.target.value;
        setReason(value);
    }
    function handleTechnicianChange(event)
    {
        const value = event.target.value;
        setTechnician(value);
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        const data = {
            vin,
            customer,
            date_time: dateTime,
            reason,
            technician_id: technician,
        };
        const appointmentUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok)
        {
            setVin("");
            setCustomer("");
            setDateTime("");
            setReason("");
            setTechnician("");
            getAppointments();
        }
    };

    const fetchTechnicians = async () =>
    {
        const url = "http://localhost:8080/api/technicians/"
        const response = await fetch(url)
        if (response.ok)
        {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    };
    useEffect(() =>
    {
        fetchTechnicians();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a service appointment</h1>
                    <form onSubmit={handleSubmit} id="add-appointment-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} placeholder="VIN..." required type="text" name="vin" id="vin" className="form-control" value={vin} />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleCustomerChange} placeholder="Customer..." required type="text" name="customer" id="customer" className="form-control" value={customer} />
                            <label htmlFor="customer">Customer</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleDateTimeChange} placeholder="dateTime..." required type="datetime-local" name="dateTime" id="dateTime" className="form-control" value={dateTime} />
                            <label htmlFor="dateTime">DateTime</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleReasonChange} placeholder="Reason..." required type="text" name="reason" id="reason" className="form-control" value={reason} />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <div className="mb-3">
                            <select
                                required
                                name="technician"
                                onChange={handleTechnicianChange}
                                id="technician"
                                className="form-select"
                                value={technician}
                            >
                                <option value="">Choose a technician</option>
                                {technicians.map((technician) =>
                                {
                                    return (
                                        <option key={technician.id} value={technician.id}>
                                            {technician.first_name} {technician.last_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointmentForm;
