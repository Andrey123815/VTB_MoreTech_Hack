import React from 'react';
import './TasksCounter.scss';

function TasksCounter(props) {
  return (
    <div className={`tasks-counter_task-${props.status}`}>
      <span className="tasks-counter__count">{props.count}</span>
    </div>
  );
}

export default TasksCounter;
