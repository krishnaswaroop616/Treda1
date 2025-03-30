import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import "./SignUp.css"; 

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
     const navigate=useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3002/login", formData,{withCredentials:true});
            console.log(res);
            if(res && res.data){
                alert(res.data.message);
                navigate("/dashboard");
            }
            
            
        } catch (err) {
            console.log(err);
            alert(err.response.data.message);
        }
    };

    return (
        <>
        <Navbar />
        <div className="auth-container">
            
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
                <p>Don't have an account? <Link to="/signup" className="text-success">Sign up here</Link></p>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default Login;
