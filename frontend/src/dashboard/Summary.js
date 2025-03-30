import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [allHoldings,setAllHoldings]=useState([]);
    const [userData,setUserData]=useState({ username: "", balance: 0 });

    async function getHoldings(){
        const res=await axios.get("http://localhost:3002/getHoldings");
        const tempholdings=res.data;
        setAllHoldings([...tempholdings]);
        
    }

    async function getUserData() {
        try {
            const res = await axios.get("http://localhost:3002/summary", { withCredentials: true });
            setUserData(res.data);
        } catch (error) {
            console.error("Error fetching user data:", error.message);
        }
    }
    const totholdings=allHoldings.reduce((sum,stock)=>sum+stock.qty,0);
    const totalInvestment = allHoldings.reduce((sum, stock) => sum + (stock.qty * stock.avg), 0);

   
    useEffect(()=>{
        getHoldings();
        getUserData();
    },[allHoldings]);


    return (
      <div className="summary-container">
          <h2 className="summary-username">Hi, {userData.username}!</h2>
          <h5 className="mt-2 mb-4">Balance: &#8377; {userData.balance}</h5>
          <h5 className="holdings mb-4">Holdings : ({totholdings})</h5>
          <h5 className="holdings mb-4">Total investment : &#8377; {totalInvestment.toFixed(3)}</h5>
          
      </div>
  );
  
};

export default Dashboard;
