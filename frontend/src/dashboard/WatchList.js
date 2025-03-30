import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./Dashboard.css";
import WatchListItem from './WatchListItem';

 
function WatchList(){
    const [stocks,setStocks]=useState([]);
        const API_KEY="cv5bhq1r01qj2ke0elm0cv5bhq1r01qj2ke0elmg";
        const stockSymbols=["AAPL","TSLA", "GOOGL", "AMZN", "MSFT", "NFLX", "NVDA", "META", "AMD", "IBM"];
    
        useEffect(()=>{
          const fetchStocks= async ()=>{
            let stockData=[];
            for(let symbol of stockSymbols){
                try{
                  const res=await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
                  stockData.push({
                    symbol,
                    price:res.data.c,
                    change:res.data.d,
                    percentChange:res.data.dp,
                    highPrice:res.data.h,
                    lowPrice:res.data.l,
                  });
    
                  setStocks([...stockData]);
                }
                catch(err){
                  console.log("Error occured while fetching stocks",err);
                }
            }
          };
    
          fetchStocks();
          const interval=setInterval(fetchStocks,20000);
          return ()=>clearInterval(interval);
        },[]);
    return (
        <div className='watchlist-container'>
          
           <ul className='list'>
            {stocks.map((stock,index)=>{
                return (
                    <WatchListItem stock={stock} key={index}/>
                )
            })}
           </ul>
        </div>
    );
}

export default WatchList;