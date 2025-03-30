import React from 'react';


function HeroSection(){
    return (
        <div className='container '>
           <div className='row text-center '>
            <img src='/media/images/Hero.jpg' style={{width:"70vw",height:"65vh",margin:"0 auto",borderRadius:"18px"}} className='mb-5 '></img>
            <h1 >Smart Investing For Everyone</h1>
            <p className='fs-5'>Invest in Stocks, Mutual Funds, and more with ease.</p>
            <a className="btn btn-success p-3 fs-5 mt-1 mb-5" style={{width:"20%",margin:"0 auto"}} href='/signup'>Get Started</a>
           </div>
        </div>
    );
}

export default HeroSection;