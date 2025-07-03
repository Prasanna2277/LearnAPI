import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '', role: 'customer' }); // Added role

    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/register/', form);
            alert('Registration Successful!');
        } catch {
            alert('Registration Failed!');
        }
    };

    return (
        <div className="container mt-4">
            <h3>Register</h3>
            <form onSubmit={handlesubmit} className="w-50">
                <div className="mb-3">
                    <label>Username</label>
                    <input className="form-control" name="username" onChange={handlechange} required />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control" name="email" onChange={handlechange} required />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={handlechange} required />
                </div>
                <div className="mb-3">
                    <label>Role</label>
                    <select name="role" className="form-control" onChange={handlechange} required>
                        <option value="customer">Customer</option>
                        <option value="merchant">Merchant</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;
