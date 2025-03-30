import React from "react";
import "./Footer.css";


function Footer(){
    return (
        <div>
            <div className="footer" id="footer">
            <div className="footer-content">
                <h1>Treda</h1>
                <div className="footer-content-icons">
                    <div><i className="fa-brands fa-twitter"></i></div>
                    <div><i className="fa-brands fa-linkedin-in"></i></div>
                    <div><i className="fa-brands fa-instagram"></i></div>
                </div>
            </div>
            <div className="footer-company">
                <h3>COMPANY</h3>
                    <a href="/">Home</a>
                    <a href="#">About us</a>
                    <a href="/support">Support</a>
                    <a href="#">Privacy policy</a>
            </div>
            <div className="footer-contact">
                <h3 className="mb-3">GET IN TOUCH</h3>
                <p><i className="fa-solid fa-phone"></i> +91-xxxxxxxxxx</p>
                <p><i className="fa-solid fa-envelope"></i> contact@treda.com</p>
            </div>
        </div>
            <div className="copyright">
                <p>Copyright 2024 &copy; Treda.com-All Right Reserved</p>
            </div>
        </div>
       
    );
}

export default Footer;