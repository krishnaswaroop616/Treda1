import React, { useEffect ,useState} from 'react';
import { BrowserRouter,Routes,Route, Outlet, useNavigate } from 'react-router-dom';


import Holdings from "./Holding";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Topbar from "./Topbar";
import {GeneralContextProvider} from './GeneralContext';
import axios from 'axios';

function Dashboard() {
    const navigate=useNavigate();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    

    useEffect(()=>{
       const checkUser = async () => {
            try {
                const res = await axios.get("https://treda-backend-o490.onrender.com/verify", { withCredentials: true });
                setUser(res.data.user);
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    navigate('/login');
                    setTimeout(() => {
                        alert("Login to proceed");
                    }, 50);
                } else {
                    console.error("Error verifying user:", err);
                }
            }
        };

        checkUser();
        
    },[]);

 


    return (
        <>
        <Topbar/>
        <div className='dashboard-container'>
            <GeneralContextProvider>
            <WatchList />
            </GeneralContextProvider>
            <div className="content">
                    <Outlet/>
            </div>

        </div>
        </>
    );
}

export default Dashboard;
