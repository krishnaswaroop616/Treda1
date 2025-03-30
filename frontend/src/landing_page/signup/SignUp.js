import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import "./SignUp.css";  

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate=useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3002/signup", formData);
            console.log(res);
            alert(res.data.message);
            navigate("/login");

        } catch (err) {
            alert(err.response.data);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="auth-container">
            
            <div className="auth-box">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit" className="btn btn-success">Signup</button>
                </form>
                <p>Already have an account? <Link to="/login" className="text-success">Login here</Link></p>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default Signup;
