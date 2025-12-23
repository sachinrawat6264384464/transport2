import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTransport } from '../api';

const AddTransport = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        from_city: '',
        to_city: '',
        depart_time: '',
        arrive_time: '',
        fare: '',
        seats_available: '',
        vehicle_type: 'Bus',
        whatsapp: '',
        phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTransport(formData);
            alert('Transport added successfully');
            navigate('/admin/dashboard');
        } catch (error) {
            alert('Error adding transport');
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container add-transport-page">
            <div className="add-transport-card">
                <h2 className="page-title">Add New Transport</h2>
                <form onSubmit={handleSubmit} className="add-transport-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Transport Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Vehicle Type</label>
                            <select
                                name="vehicle_type"
                                value={formData.vehicle_type}
                                onChange={handleChange}
                                className="form-input select-input"
                            >
                                <option value="Bus">Bus</option>
                                <option value="Car">Car</option>
                                <option value="Tempo">Tempo</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">From City</label>
                            <input
                                type="text"
                                name="from_city"
                                required
                                value={formData.from_city}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">To City</label>
                            <input
                                type="text"
                                name="to_city"
                                required
                                value={formData.to_city}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Departure Time</label>
                            <input
                                type="datetime-local"
                                name="depart_time"
                                required
                                value={formData.depart_time}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Arrival Time</label>
                            <input
                                type="datetime-local"
                                name="arrive_time"
                                required
                                value={formData.arrive_time}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Fare (₹)</label>
                            <input
                                type="number"
                                name="fare"
                                required
                                value={formData.fare}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Seats Available</label>
                            <input
                                type="number"
                                name="seats_available"
                                required
                                value={formData.seats_available}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">WhatsApp Number</label>
                            <input
                                type="text"
                                name="whatsapp"
                                required
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Create Transport</button>
                </form>
            </div>
        </div>
    );
};

export default AddTransport;
