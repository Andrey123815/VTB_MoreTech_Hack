import React from 'react';
import './ProgressBar.scss';

function ProgressBar(props) {
  return (
    <figure className="progress-bar">
      <div className="progress-bar__progress-line" style={{width: props.progress}}></div>
    </figure>
  );
}

export default ProgressBar;
