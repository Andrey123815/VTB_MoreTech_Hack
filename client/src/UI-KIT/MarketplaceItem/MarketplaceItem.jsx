import React from 'react';
import './MarketplaceItem.scss';
import Button from "../Button/Button.jsx";
import RewardLabel from "../RewardLabel/RewardLabel.jsx";

function MarketplaceItem(props) {
  const {title, src, price} = props.item;
  return (
    <div className="market-place__item">
      <div className="item__image">
        <img src={src} alt="title"/>
        <hr className="image__separator"/>
      </div>
      <span className="item">
        <span className="item__title">
          {title}
        </span>
        <div className="item__price-block">
          <div className="price-block">
            <header className="price-block__header">Стоимость</header>
            <RewardLabel key={'ruble'} rewardType={'currency'} reward={'ruble'} rewardAmount={price} size='large'/>
          </div>
          <Button>Купить</Button>
        </div>
        </span>
    </div>
  );
}

export default MarketplaceItem;
