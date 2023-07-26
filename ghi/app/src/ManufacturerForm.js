import React, { useState } from "react";

function ManufacturerForm({ getManufacturers })
{
    const [name, setName] = useState("");

    function handleNameChange(event)
    {
        const value = event.target.value;
        setName(value);
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        const data = { name };
        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok)
        {
            setName("");
            getManufacturers()
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a manufacturer</h1>
                    <form onSubmit={handleSubmit} id="add-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Manufacturer name..." required type="text" name="name" id="name" className="form-control" value={name} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManufacturerForm;
