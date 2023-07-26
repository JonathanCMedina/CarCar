import React, { useState, useEffect } from "react";

function AutomobileForm({ getAutos })
{
    const [vin, setVin] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");
    const [models, setModels] = useState([]);
    const [model, setModel] = useState("");

    function handleVinChange(event)
    {
        const value = event.target.value;
        setVin(value);
    }
    function handleColorChange(event)
    {
        const value = event.target.value;
        setColor(value);
    }
    function handleYearChange(event)
    {
        const value = event.target.value;
        setYear(value);
    }
    function handleModelChange(event)
    {
        const value = event.target.value;
        setModel(value);
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        const data = {
            vin,
            color,
            year,
            model_id: model,
        };
        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(automobileUrl, fetchConfig);
        if (response.ok)
        {
            setVin("");
            setColor("");
            setYear("");
            setModel("");
            getAutos();
        }
    };

    const fetchModels = async () =>
    {
        const url = "http://localhost:8100/api/models/"
        const response = await fetch(url)
        if (response.ok)
        {
            const data = await response.json();
            setModels(data.models);
        }
    };
    useEffect(() =>
    {
        fetchModels();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a model</h1>
                    <form onSubmit={handleSubmit} id="add-model-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} placeholder="VIN..." required type="text" name="vin" id="vin" className="form-control" value={vin} />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} placeholder="Color..." required type="text" name="color" id="color" className="form-control" value={color} />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleYearChange} placeholder="Year..." required type="text" name="year" id="year" className="form-control" value={year} />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="mb-3">
                            <select
                                required
                                name="model"
                                onChange={handleModelChange}
                                id="model"
                                className="form-select"
                                value={model}
                            >
                                <option value="">Choose a model</option>
                                {models.map((model) =>
                                {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
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

export default AutomobileForm;
