import React, { useState, useEffect } from "react";

function ModelForm({ getModels })
{
    const [name, setName] = useState("");
    const [manufacturers, setManufacturers] = useState([]);
    const [manufacturer, setManufacturer] = useState("");
    const [url, setUrl] = useState("");

    function handleNameChange(event)
    {
        const value = event.target.value;
        setName(value);
    }
    function handleManufacturerChange(event)
    {
        const value = event.target.value;
        setManufacturer(value);
    }
    function handleUrlChange(event)
    {
        const value = event.target.value;
        setUrl(value);
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        const data = {
            name,
            manufacturer_id: manufacturer,
            picture_url: url,
        };
        const modelUrl = "http://localhost:8100/api/models/";
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok)
        {
            setName("");
            setManufacturer("");
            setUrl("");
            getModels();
        }
    };

    const fetchManufacturers = async () =>
    {
        const url = "http://localhost:8100/api/manufacturers/"
        const response = await fetch(url)
        if (response.ok)
        {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    };
    useEffect(() =>
    {
        fetchManufacturers();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a model</h1>
                    <form onSubmit={handleSubmit} id="add-model-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} placeholder="Model name..." required type="text" name="name" id="name" className="form-control" value={name} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleUrlChange} placeholder="Picture URL..." required type="text" name="url" id="url" className="form-control" value={url} />
                            <label htmlFor="url">Picture URL</label>
                        </div>
                        <div className="mb-3">
                            <select
                                required
                                name="manufacturer"
                                onChange={handleManufacturerChange}
                                id="manufacturer"
                                className="form-select"
                                value={manufacturer}
                            >
                                <option value="">Choose a manufacturer</option>
                                {manufacturers.map((manufacturer) =>
                                {
                                    return (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
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

export default ModelForm;
