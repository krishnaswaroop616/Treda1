import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom  ">
                <div className="container p-1 ">
                    <a className="navbar-brand " href="/"><img src='media/images/logo.png' alt='logo' style={{width:"40%"}}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>
                           
                            
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;