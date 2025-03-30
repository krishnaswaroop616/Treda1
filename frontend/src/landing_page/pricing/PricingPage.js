import React from 'react';
import "./PricingPage.css";
import Navbar from '../Navbar';
import Footer from "../Footer/Footer";

function Pricing() {
    return (
        <>
        <Navbar/>
        <div className='main' id='pricing'>
            <div className='container '>
                <h1 className='mt-5'><i class="fa-solid fa-sack-dollar"></i> Smart Trading, Smarter Pricing</h1>
                <p><b>Trade with confidence, without worrying about high fees.</b></p>
                <p style={{marginBottom:"80px"}}>Our transparent and cost-effective pricing model ensures that you keep more of your profits while enjoying premium trading features.</p>
            </div>

            <div className='container  mt-5  p-4  '>
                <h2><i class="fa-solid fa-thumbtack "></i> Our Pricing Structure</h2>
                <p><i class="fa-regular fa-circle-check"></i> <b>₹0 Account Opening</b> – Start trading for free!</p>
                 <p><i class="fa-regular fa-circle-check"></i> <b>₹0 on Equity Delivery</b>– Invest long-term with zero brokerage.</p>
                <p><i class="fa-regular fa-circle-check"></i> <b> Flat ₹20 Per Trade</b> – One fixed charge, no matter the volume.</p>
                <p style={{marginBottom:"80px"}}><i class="fa-regular fa-circle-check"></i> <b>No Hidden Fees</b>– What you see is what you pay.</p>
            </div>

            <div className='container section mt-5 '>
                <h1 className='heading text-center fw-medium'>Choose a plan that works for you</h1>
                <div className="pricing-section">
                    <div className="pricing-card">
                        <h2 className="price">&#8377;0</h2>
                        <h3>Zero Commission Trading</h3>
                        <p>Trade stocks with ₹0 brokerage on equity delivery orders.</p>
                    </div>

                    <div className="pricing-card">
                        <h2 className="price">&#8377;10</h2>
                        <h3>Low-Cost Intraday</h3>
                        <p>Flat &#8377;10 per executed intraday order for fast & easy trading.</p>
                    </div>

                    <div className="pricing-card premium">
                        <h2 className="price">&#8377;199</h2>
                        <h3>Premium Trading Plan</h3>
                        <p>Get access to advanced tools, real-time analytics, and expert insights.</p>
                    </div>
                </div>
                <h3 className='text-center' style={{marginBottom:"120px"}}>Switch plans anytime. No lock-in. No surprises.</h3>
            </div>

            <div className='container  mt-5 mb-4'>
                <h2>Why Pay More When You Can Pay Less?</h2>
                <p> &nbsp;<i class="fa-solid fa-rocket"></i> Ultra-Fast Execution – Trade in milliseconds.</p>
                <p> &nbsp;<i class="fa-solid fa-lock"></i> Bank-Grade Security – 2FA & encrypted transactions.</p>
                <p> &nbsp;<i class="fa-solid fa-bullhorn"></i> Smart Alerts – Get real-time updates.</p>
            </div>
            <div className=" ">
                <a href="/signup" className=" btn btn-success p-3 mb-5 mx-3 fs-5">Start Trading Now</a>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default Pricing;