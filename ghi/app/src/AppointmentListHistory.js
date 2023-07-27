import { useState, useEffect } from 'react';

function AppointmentListHistory({ appointments })
{
    const [searchInput, setSearchInput] = useState('');
    const [filteredAppointments, setFilteredAppointments] = useState(appointments);

    const formatDate = (dateTime) =>
    {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        return new Date(dateTime).toLocaleString(undefined, options);
    };

    const formatTime = (dateTime) =>
    {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(dateTime).toLocaleString(undefined, options);
    };

    useEffect(() =>
    {
        setFilteredAppointments(appointments);
    }, [appointments]);

    const handleSearch = () =>
    {
        const filteredAppointments = appointments.filter(appointment =>
            appointment.vin.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredAppointments(filteredAppointments);
    };

    return (
        <>
            <h2 className="mt-4">Service History</h2>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search by VIN..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>Search</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Is VIP?</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAppointments.map(appointment =>
                    {
                        return (
                            <tr className="align-middle" key={appointment.id}>
                                <td>{appointment.vin}</td>
                                <td>{appointment.vip ? "Yes" : "No"}</td>
                                <td>{appointment.customer}</td>
                                <td>{formatDate(appointment.date_time)}</td>
                                <td>{formatTime(appointment.date_time)}</td>
                                <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AppointmentListHistory;
