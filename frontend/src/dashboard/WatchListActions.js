import React,{useContext} from 'react';
import { Tooltip } from '@mui/material';

import GeneralContext from "./GeneralContext";



function WatchListActions({uid}){

    const generalContext=useContext(GeneralContext);

    const handleBuyClick=()=>{
        generalContext.openBuyWindow(uid);
    }

    const handleSellClick=()=>{
        generalContext.openSellWindow(uid);
    }

    return (
        <span className='actions'>
            <span>
                <Tooltip title="Buy (B) " placement='top' arrow >
                    <button  className='buy' onClick={handleBuyClick} >Buy</button>
                </Tooltip>
                <Tooltip title="Sell (S) " placement='top' arrow >
                    <button  className='sell' onClick={handleSellClick}>Sell</button>
                </Tooltip>
            </span>

        </span>
    );
}

export default WatchListActions;