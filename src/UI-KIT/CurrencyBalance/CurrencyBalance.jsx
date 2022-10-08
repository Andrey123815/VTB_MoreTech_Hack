import React from 'react';
import RewardLabel from "../RewardLabel/RewardLabel.jsx";
import {BALANCE_LINE_FEATURES} from "../../configurations/currencies.js";
import './CurrencyBalance.scss';

function CurrencyBalance() {
  return (
    <div className="currency-balance">
      {BALANCE_LINE_FEATURES.map(({rewardType, reward, rewardAmount}) =>
        <RewardLabel key={reward} rewardType={rewardType} reward={reward} rewardAmount={rewardAmount}/>
      )}
    </div>
  );
}

export default CurrencyBalance;
