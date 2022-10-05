import React, {useState} from 'react';
import './StatusFilterBlock.scss';
import StatusFilterTab from "../../UI-KIT/StatusFilterTab/StatusFilterTab.jsx";
import {STATUS_FILTERS} from "../../configurations/filters.js";

const initFilter = 'Новые задания';

function StatusFilterBlock() {
  const [currFilter, setCurrFilter] = useState(initFilter);
  return (
    <div className="category-filter-block">
      {STATUS_FILTERS.map(filter =>
        <StatusFilterTab
          key={filter}
          filter={filter}
          active={filter === currFilter}
          onClick={() => setCurrFilter(filter)}
        />
      )}
    </div>
  );
}

export default StatusFilterBlock;
