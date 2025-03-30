import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";


function Support(){
    return(
        <>
        <Navbar/>
        <div className="container">
            <div >
                <h1 className="mt-5 text-success">Support Center</h1>
                <p className="fs-5 mb-5"><b>Your Trading, Our Support</b> – Get answers, resolve issues, and trade with confidence.</p>
                <br></br>
                <h2 className="text-success"><i class="fa fa-search" aria-hidden="true"></i> How can we help you?</h2>
                <p className="fs-5">Browse through common topics or reach out to our support team for assistance.</p>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div>
                <h1 className="mb-5 text-success"> Popular Help Topics</h1>
                <h3><a href="#account-opening" style={{textDecoration:"none", color:"black"}}>Account Opening & Verification</a></h3>
                <ul style={{lineHeight:"2"}}>
                    <li>How to open a trading account?</li>
                    <li>Required documents for KYC verification</li>
                    <li>How long does account activation take?</li>
                </ul>
                <br></br>
                <h3><a href="#trading-investing" style={{textDecoration:"none", color:"black"}}>Trading & Investing</a></h3>
                <ul style={{lineHeight:"2"}}>
                    <li>How to place buy and sell orders?</li>
                    <li>Understanding intraday and delivery trading</li>
                    <li>How does margin trading work?</li>
                </ul>
                <br></br>
                <h3><a href="#deposits-withdrawls" style={{textDecoration:"none", color:"black"}}>Deposits & Withdrawals</a></h3>
                <ul style={{lineHeight:"2"}}>
                    <li>How to add funds to your trading account?</li>
                    <li>Withdrawal process and timeframes</li>
                    <li>Bank linking & UPI payment support</li>
                </ul>
                <br></br>
                <h3><a href="#platform-technical" style={{textDecoration:"none", color:"black"}}>Platform & Technical Issues</a></h3>
                <ul style={{lineHeight:"2"}}>
                    <li>Forgot password? Reset instructions</li>
                    <li>Unable to log in? Fixing login issues</li>
                    <li>Order execution delays – what to do?</li>
                </ul>
                <br></br>
            </div>
            <div>
                <hr></hr>
                <h1 className="mt-5 mb-5 text-success" >Frequently Asked Questions (FAQs)</h1>
                <h2 className="mb-4" id="account-opening">Account & KYC</h2>
                <p className="fs-5">Q: How do I open an account?</p>
                <ul>
                    <li>Register online and upload your PAN card, Aadhaar, and bank details.</li>
                    <li>Complete e-KYC verification (takes 24-48 hours).</li>
                    <li>Start trading after approval!</li>
                </ul>
                <br></br>
                <p className="fs-5">Q: Can I trade without completing KYC?</p>
                <ul>
                    <li>No, KYC is mandatory as per SEBI regulations.</li>
                </ul>
                <br></br>
                <hr></hr>
                <h2 className="mb-4 mt-4" id="deposits-withdrawls">Deposits & Withdrawals</h2>
                <p className="fs-5">Q: How do I add funds to my trading account?</p>
                <ul>
                    <li>Use UPI, net banking, or NEFT/RTGS transfers.</li>
                    <li>Funds reflect in real-time via UPI and net banking.</li>
                </ul>
                <br></br>
                <p className="fs-5">Q: How do I withdraw my funds?</p>
                <ul>
                    <li>Go to Funds -&gt; Withdraw and enter the amount.</li>
                    <li>Withdrawals are processed within 24 hours.</li>
                </ul>
                <br></br>
                <p className="fs-5">Q: Why is my withdrawal request delayed?</p>
                <ul>
                    <li>Ensure that bank details are correct.</li>
                    <li>Check if there are any open positions affecting withdrawal limits.</li>
                </ul>
                <br></br>
                <hr></hr>
                <h2 className="mb-4 mt-4" id="trading-investing">Trading & Orders</h2>
                <p className="fs-5">Q: How do I place an order?</p>
                <ul>
                    <li>Search for a stock, select BUY or SELL, set quantity, and confirm.</li>
                    <li>Choose order type: Market, Limit, Stop-Loss, or GTT (Good Till Triggered).</li>
                </ul>
                <br></br>
                <p className="fs-5">Q: Why did my order get rejected?</p>
                <ul>
                    <li>Insufficient funds or margin</li>
                    <li>Trading limits or stock restrictions</li>
                    <li>Market closure or price fluctuation</li>
                </ul>
                <br></br>
                <p className="fs-5">Q: How do I check my trade history?</p>
                <ul>
                    <li>Go to Orders &gt; Trade History to view past transactions.</li>
                </ul>
                <br></br>
                <hr></hr>
                <h2 className="mb-4 mt-4" id="platform-technical" >Technical Support</h2>
                <p className="fs-5">Q: I forgot my password. How can I reset it?</p>
                <ul>
                    <li>Click ‘Forgot Password’ on the login page and follow the steps.</li>
                    <li>If you don’t receive a reset email, check spam or contact support.</li>
                </ul>
                <br></br>
                <p className="fs-5">Q: My stock prices are not updating. What’s wrong?</p>
                <ul>
                    <li>Check your internet connection.</li>
                    <li>Clear cache and reload the platform.</li>
                    <li>If the issue persists, contact support.</li>
                </ul>
                <br></br>
                <p className="fs-5">Q: My order got stuck. How do I fix this?</p>
                <ul>
                    <li>Verify order status under "Pending Orders".</li>
                    <li>Check if the exchange is facing downtime.</li>
                    <li>If it’s a large volume trade, it may take time to execute.</li>
                </ul>
                <br></br>
            </div>
            <div>
                <hr></hr>
                <h2 className="mt-5 mb-4 text-success"><i class="fa fa-phone-square" aria-hidden="true"></i> Contact Us</h2>
                <p className="fs-5">Still need help? Reach out to us through multiple channels:</p>
                <p  ><i className="fa-solid fa-envelope text-success"></i> <b>Email</b> : support@treda.com</p>
                <p><i className="fa fa-phone text-success mb-5" aria-hidden="true"></i> <b>Phone</b>: +91xxxxxxxxxx</p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Support;