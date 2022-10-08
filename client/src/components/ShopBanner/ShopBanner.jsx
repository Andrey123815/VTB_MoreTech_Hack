import React from 'react';
import './ShopBanner.scss'

function ShopBanner(props) {
    return (
        <div className={'shop__banner'}>
            <span>Монеты ты всегда можешь потратить в нашем магазине!</span>
            <button>В магазин</button>
        </div>
    );
}

export default ShopBanner;
