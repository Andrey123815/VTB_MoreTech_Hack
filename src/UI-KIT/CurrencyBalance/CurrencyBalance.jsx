import React from 'react';
import RewardLabel from "../RewardLabel/RewardLabel.jsx";
import {CURRENCIES} from "../../configurations/currencies.js";
import './CurrencyBalance.scss';

function CurrencyBalance() {
  return (
    <div className="currency-balance">
      {CURRENCIES.map(currency =>
        <RewardLabel key={currency} currency={currency} moneyAmount={1000}/>
      )}
    </div>
  );
}

export default CurrencyBalance;
