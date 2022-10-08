import React from 'react';
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import './SingleCharacteristic.scss';

function SingleCharacteristic(props) {
  return (
    <section className="characteristic">
      <header className="characteristic__info">
        {props.name}
        <img className="info__avatar" src={`/icons/${props.type}.svg`} alt={`/icons/${props.type}.svg`} />
      </header>
      <div className="characteristic__graphic-block">
        <figcaption className="graphic-block__progress-score">{props.progress}</figcaption>
        <ProgressBar progress={props.progress} />
      </div>
    </section>
  );
}

export default SingleCharacteristic;
