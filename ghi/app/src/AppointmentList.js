function AppointmentList({ appointments })
{
    const handleFinishClick = (appointmentId) =>
    {
        const url = `http://localhost:8080/api/appointments/${appointmentId}/finish/`; // Update the URL to match your backend endpoint

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: "",
        })
            .then((response) =>
            {
                if (response.ok)
                {
                    window.location.reload();
                } else
                {
                    console.error('Failed to modify appointment status');
                }
            })
            .catch((error) =>
            {
                console.error('Error occurred while updating appointment status:', error);
            });
    };
    const handleCancelClick = (appointmentId) =>
    {
        const url = `http://localhost:8080/api/appointments/${appointmentId}/cancel/`; // Update the URL to match your backend endpoint

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: "",
        })
            .then((response) =>
            {
                if (response.ok)
                {
                    window.location.reload();
                } else
                {
                    console.error('Failed to modify appointment status');
                }
            })
            .catch((error) =>
            {
                console.error('Error occurred while updating appointment status:', error);
            });
    };

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

    return (
        <>
            <h2 className="mt-4">Service Appointments</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        {/* <th>Is VIP?</th> */}
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th className="text-center">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment =>
                    {
                        if (appointment.status === "Active")
                        {
                            return (
                                <tr className="align-middle" key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    {/* <td>{appointment.vip}</td> */}
                                    <td>{appointment.customer}</td>
                                    <td>{formatDate(appointment.date_time)}</td>
                                    <td>{formatTime(appointment.date_time)}</td>
                                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                    <td>{appointment.reason}</td>
                                    <td className="text-center">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-success" onClick={() => handleFinishClick(appointment.id)}>Finish</button>
                                            <button type="button" className="btn btn-danger" onClick={() => handleCancelClick(appointment.id)}>Cancel</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AppointmentList;
