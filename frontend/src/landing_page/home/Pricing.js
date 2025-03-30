import React from 'react';
import "./Pricing.css";

function HomePricingSection() {
    return (
        
        <div className="home-pricing-section">
            <div className="pricing-content">
                <h2 className="pricing-title">Unbeatable Pricing, No Hidden Fees</h2>
                <p className="pricing-description">
                    Get the most competitive brokerage rates with absolute transparency. 
                    Enjoy zero account opening charges and ultra-low trading fees.
                </p>

                <ul className="pricing-list">
                    <li><i class="fa-solid fa-circle-check"></i> ₹0 account opening fees</li>
                    <li><i class="fa-solid fa-circle-check"></i> Zero brokerage on equity delivery</li>
                    <li><i class="fa-solid fa-circle-check"></i> No hidden charges, complete transparency</li>
                </ul>

                <a href="/pricing" className="p-2 btn btn-success fs-5 mb-3 mt-3 " style={{width:"40%", margin:"0 auto"}}>Learn More &nbsp; <i class="fa-solid fa-arrow-right "></i></a>
            </div>

            <div className="pricing-image">
                <img src='/media/images/pricing.png' style={{width:"100%",marginLeft:"80px"}}></img>
            </div>
        </div>
    );
}

export default HomePricingSection;