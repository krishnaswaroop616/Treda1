import React from 'react';
import Menu from './Menu';
import "./Dashboard.css";

function Topbar() {
    return (
        <div className='topbar-container'>
            <div className="indices-container">
                <h2 className=' fs-3 fw-bold' style={{color:"rgb(84, 130, 53)"}}>WatchList</h2>
            </div>
            <Menu />
        </div>
    );
}

export default Topbar;  