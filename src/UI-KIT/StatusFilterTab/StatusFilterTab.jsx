import React from 'react';
import './StatusFilterTab.scss';

function StatusFilterTab(props) {
  return (
    <section
      className={props.active ? "status-filter-tab_active" : "status-filter-tab"}
      onClick={props.onClick}
    >
      <div className="status-tab__status-text">{props.filter}</div>
    </section>
  );
}

export default StatusFilterTab;
