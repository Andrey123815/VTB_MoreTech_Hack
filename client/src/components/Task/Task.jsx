import React from 'react';
import Button from "../../UI-KIT/Button/Button.jsx";
import RewardLabel from "../../UI-KIT/RewardLabel/RewardLabel.jsx";
import './Task.scss';

function Task(props) {
  const {title, description, rewardCoins, feature, rewardFeature} = props.task;
  return (
    <div className="task__container">
      <span className="task__title">{title}</span>
      <div className="task__description">
        <span>{description}</span>
      </div>
      <div className="awards-section">
        <RewardLabel rewardType={'currency'} reward={'ruble'} rewardAmount={rewardCoins} size={'large'}/>
        <RewardLabel rewardType={'characteristic'} reward={feature} rewardAmount={rewardFeature} size={'large'}/>
        <Button>Подробнее</Button>
      </div>
    </div>
  );
}

export default Task;
