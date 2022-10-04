import React from 'react';
import './RewardLabel.scss';

function RewardLabel(props) {
  return (
    <div className="reward-label">
      <img className="reward-label__reward-logo" src={`/currencies/${props.currency}.svg`} alt={props.currency} />
      <span className="reward-label__money-amount">{props.moneyAmount}</span>
    </div>
  );
}

export default RewardLabel;
