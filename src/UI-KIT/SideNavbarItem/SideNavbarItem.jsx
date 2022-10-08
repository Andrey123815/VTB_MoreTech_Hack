import React, {useState} from 'react';
import './SideNavbarItem.scss'

function SideNavbarItem(props) {

    return (
        <div onClick={() => active(props.title)} className={`sidebar__item-button`}>
            {
                props.active && <div className={'right-row'}/>
            }

            <img src={props.icon} alt={props.children}/>
            <article>{props.children}</article>
        </div>
    );
}

export default SideNavbarItem;