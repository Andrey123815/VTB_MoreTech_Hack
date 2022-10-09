import React from 'react';
import './RewardLabel.scss';
import {REWARD_ICONS} from "../../configurations/rewardIcons.js";

function RewardLabel(props) {
  const logo = props.rewardType === 'currency'
    ? `/currencies/${props.reward}.svg`
    : `/icons/${props.reward}.svg`

  const logoStyles = props.size === 'large'
    ? REWARD_ICONS.large
    : REWARD_ICONS.small[['lvl', 'nft'].includes(props.reward) ? props.reward : 'other'];
  const fontStyles = props.size === 'large' ? {fontSize: '14px'} : {fontSize: '10px'};

  return (
    <div className={`reward-label_${props.size}`}>
      <img style={logoStyles} className="reward-label__reward-logo" src={logo} alt={props.reward} />
      <span style={fontStyles} className="reward-label__money-amount">{props.rewardAmount}</span>
    </div>
  );
}

export default RewardLabel;
