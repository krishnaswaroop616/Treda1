import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const holdingsRes = await axios.get("http://localhost:3002/getHoldings", { withCredentials: true });
      const userHoldings = holdingsRes.data;
      const holding = userHoldings.find(stock => stock.name === uid);

      if (!holding || holding.qty < stockQuantity) {
        alert("You don't have enough stocks to sell!");
        return;
      }
      const res = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      }, { withCredentials: true });
      console.log('Order sell successfully:', res.data);
      
    }
    catch (err) {
      console.error('Error placing order:', err.response?.data || err.message);
    }
    closeSellWindow();
  }
  const handleCancelClick = () => {
    closeSellWindow();
  };



  return (
    <div className="containers border" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-danger" onClick={handleSellClick} >
            Sell
          </Link>
          <Link to="" className="btn btn-secondary" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SellActionWindow;