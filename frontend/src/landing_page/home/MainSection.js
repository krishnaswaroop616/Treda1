import React from 'react';
import "./MainSection.css";

function HomeSection() {
    return (
        <div className="home-section mt-5" id="home">
            <h1 className="section-title">Why Trade With Us?</h1>
            <p className="sub-text">
                Experience seamless trading with advanced tools, low fees, and top-tier security.
            </p>

            <div className="features-container">
                <div className="feature">
                    <h3><i class="fa-solid fa-rocket"></i> Real-Time Trading</h3>
                    <p>Execute trades instantly with lightning-fast order execution. No delays, no lag—just real-time trading at your fingertips.</p>
                </div>

                <div className="feature">
                    <h3><i class="fa-solid fa-sack-dollar"></i> Low Fees & Zero Hidden Charges</h3>
                    <p>Competitive brokerage rates with zero hidden costs. Transparent pricing so you keep more of your profits.</p>
                </div>

                <div className="feature">
                    <h3><i class="fa-solid fa-lock"></i> Secure & Reliable</h3>
                    <p>Bank-grade security, two-factor authentication (2FA), and encrypted transactions to protect your investments.</p>
                </div>

                <div className="feature">
                    <h3><i class="fa-solid fa-chart-simple"></i> Portfolio Management</h3>
                    <p>Track your investments, analyze performance, and rebalance your portfolio—all in one place.</p>
                </div>

                <div className="feature">
                    <h3><i class="fa-solid fa-bullhorn"></i> Smart Alerts & Notifications</h3>
                    <p>Set price alerts, earnings announcements, and market news notifications to stay ahead of the game.</p>
                </div>

                <div className="feature">
                    <h3><i class="fa-solid fa-chart-line"></i> Advanced Charting</h3>
                    <p>Technical indicators, candlestick patterns, and AI-driven insights to help traders make informed decisions.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;