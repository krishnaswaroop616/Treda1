import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Orders() {
    const [allOrders, setAllOrders] = useState([]);

    
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:3002/getOrders",{withCredentials:true});
                setAllOrders(res.data);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
    
        fetchOrders();
    }, []);

    const deleteOrder=async (orderId)=>{
        try{
            await axios.delete(`http://localhost:3002/deleteOrder/${orderId}`,{withCredentials:true});
            setAllOrders(allOrders.filter(order => order._id !== orderId))
        }
        catch(err){
            console.log("Error deleting order",err);
        }
    }
    

    return (
        <div >
            <h1 className='title'>Orders({allOrders.length})</h1>

            <table className='table table-sm'>
                <thead>
                <tr >
                    <th className='text-secondary fs-5 fw-lighter'>name</th>
                    <th className='text-secondary fs-5 fw-lighter' >qty</th>
                    <th className='text-secondary fs-5 fw-lighter'>price</th>
                    <th className='text-secondary fs-5 fw-lighter'>mode</th>
                    <th className='text-secondary fs-5 fw-lighter'>Action</th>
                </tr>
                </thead>
                <tbody className=''>
                {allOrders.map((order, index) => {
                    return (
                        <tr key={index}>
                            <td>{order.name}</td>
                            <td>{order.qty}</td>
                            <td>{order.price}</td>
                            <td>{order.mode}</td>
                            <td>
                                <button className="btn btn-danger btn-sm p-2" onClick={() => deleteOrder(order._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
                
            </table>
        </div>
    );
}

export default Orders