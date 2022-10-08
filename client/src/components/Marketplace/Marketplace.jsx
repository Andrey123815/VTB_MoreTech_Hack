import React from 'react';
import './Marketplace.scss';
import MarketplaceItem from "../../UI-KIT/MarketplaceItem/MarketplaceItem.jsx";
import StatusFilterBlock from "../StatusFilterBlock/StatusFilterBlock.jsx";

const itemsFromBackend = [
  {id: 0, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
  {id: 1, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
  {id: 10, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
  {id: 2, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
  {id: 3, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
  {id: 4, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
  {id: 5, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
  {id: 512, title: 'Title', src: '/static_test_images/market-item.png', price: 500},
];

function Marketplace() {
  return (
    <div className="market-place">
      <div className="market-place__container">
        <StatusFilterBlock />
        <div className="market-place__items">
          {itemsFromBackend.map(item =>
            <MarketplaceItem key={item.id} item={item}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
