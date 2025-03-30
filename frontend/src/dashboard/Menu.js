import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Menu() {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const navigate=useNavigate();
    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    }

    

    const handleLogout=async ()=>{
        try {
            await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
            
            navigate("/login");
            setTimeout(()=>{
                alert("Logout successful");
            },50);
        } catch (error) {
            console.error("Error logging out:", error);
        }

    }



    return (
        <div className='menu-container'>
            <img src='/media/images/logo.png' ></img>
            <div className='menus'>
                <ul style={{ listStyle: "none" }}>
                    <li><Link style={{ textDecoration: "none" }} to="/dashboard" onClick={() => handleMenuClick(0)}><p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p></Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/dashboard/orders" onClick={() => handleMenuClick(1)}><p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p></Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/dashboard/holdings" onClick={() => handleMenuClick(2)}><p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p></Link></li>
                    <li><Link style={{ textDecoration: "none" }} to="/dashboard/positions" onClick={() => handleMenuClick(3)}><p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p></Link></li>                </ul>
                <hr className='hr'></hr>
                <span className=' mb-2' style={{cursor:"pointer"}} onClick={handleLogout} ><i className="fa-solid fa-user "></i>&nbsp;&nbsp;Logout</span>
                
                
            </div>
        </div>
    );
}

export default Menu;