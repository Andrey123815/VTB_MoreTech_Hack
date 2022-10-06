import React from 'react';
import './StatusFilterTab.scss';
import TasksCounter from "../TasksCounter/TasksCounter.jsx";

function StatusFilterTab(props) {
  return (
    <section
      className={props.active ? "status-filter-tab_active" : "status-filter-tab"}
      onClick={props.onClick}
    >
      <div className="status-tab__status-text">{props.filterText}</div>
      {props.type !== 'new' && props.count > 0 &&
        <TasksCounter status={props.type === 'inProcess' ? 'in-process' : 'done'} count={props.count} />
      }
    </section>
  );
}

export default StatusFilterTab;
