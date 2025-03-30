import React, { useState } from 'react';
import WatchListActions from './WatchListActions';

function WatchListItem({stock,index}){
    const [showWatchListAction,setShowWatchListAction]=useState(false);
    
    const handleMouseEnter=()=>{
        setShowWatchListAction(true);
    }

    const handleMouseExit=()=>{
        setShowWatchListAction(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} key={index}>
            <div className='item'>
                <p className={stock.change<0?"down":"up"}>{stock.symbol}</p>
                <div className='item-info'>
                    <span className='percent'>{stock.percentChange} %</span>
                    {stock.change>=0?<span>&nbsp;<i className="fa-solid fa-caret-up" style={{color:"green"}}></i>&nbsp;</span>:<span>&nbsp;<i className="fa-solid fa-caret-down" style={{color:"red"}}></i>&nbsp;</span>}
                    <span className='percent text-secondary'><b>&nbsp;{stock.price}</b></span>
                </div>
            </div>
            {showWatchListAction && <WatchListActions uid={stock.symbol} />}
        </li>
    )
}

export default WatchListItem;