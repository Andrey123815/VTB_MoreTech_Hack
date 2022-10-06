import React, {useState} from 'react';
import './StatusFilterBlock.scss';
import StatusFilterTab from "../../UI-KIT/StatusFilterTab/StatusFilterTab.jsx";
import {STATUS_FILTERS} from "../../configurations/filters.js";

const initFilterType = 'new';

const tasksCountFromBackend = {
  inProcess: 2,
  done: 0
}

function StatusFilterBlock() {
  const [currFilterType, setCurrFilterType] = useState(initFilterType);
  return (
    <div className="status-filter-block">
      {STATUS_FILTERS.map(({type, description}) =>
        <StatusFilterTab
          key={type}
          type={type}
          count={tasksCountFromBackend[type]}
          filterText={description}
          active={type === currFilterType}
          onClick={() => setCurrFilterType(type)}
        />
      )}
    </div>
  );
}

export default StatusFilterBlock;
