import React, { useState } from 'react';
import './applyform.css'; // Importing CSS file

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        mobileNumber: '',
        email: '',
        tenthPercentage: '',
        twelfthPercentage: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="college-admission-form">
            <h2>College Admission Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>10th Percentage:</label>
                    <input type="number" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>12th Percentage:</label>
                    <input type="number" name="twelfthPercentage" value={formData.twelfthPercentage} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ApplyForm;
