import React,{useState,useEffect} from 'react';
import axios from "axios";



function Holdings() {

    const [allHoldings,setAllHoldings]=useState([]);

    async function getHoldings(){
        const res=await axios.get("http://localhost:3002/getHoldings");
        const tempholdings=res.data;
        setAllHoldings([...tempholdings]);
    }

    const totalInvestment = allHoldings.reduce((sum, stock) => sum + (stock.qty * stock.avg), 0);
    const currentValue = allHoldings.reduce((sum, stock) => sum + (stock.qty * stock.price), 0);
    const profitLoss = currentValue - totalInvestment;
    const profitLossPercentage = (profitLoss / totalInvestment) * 100;


    useEffect(()=>{
        getHoldings();
    },[allHoldings]);


    return (
        <>
            <h3 className='title'>Holdings ({allHoldings.length})</h3>

            <div className='order-table'>
                <table>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                    </tr>

                    {allHoldings.map((stock, index) => {
                        const currVal = stock.price * stock.qty;
                        const isProfit = currVal - stock.avg * stock.qty >= 0.0;
                        const profClass = isProfit ? "profit" : "loss";
                        

                        return (
                            <tr key={index} >
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{currVal.toFixed(2)}</td>
                                <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2) }</td>
                                <td className={profClass}>{stock.net}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                    {totalInvestment.toFixed(3)}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                    {currentValue.toFixed(3)}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5 style={profitLoss>=0?{color:"rgb(89, 194, 55)"}:{color:"rgb(250, 118, 140)"}} >{profitLoss.toFixed(2)} ({profitLossPercentage.toFixed(3)}&nbsp;%)</h5>
                    <p>P&L</p>
                </div>
            </div>
        </>
    );

}

export default Holdings;