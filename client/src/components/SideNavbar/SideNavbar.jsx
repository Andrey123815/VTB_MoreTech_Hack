import React from 'react';
import './SideNavbar.scss'
import SideNavbarItem from "../../UI-KIT/SideNavbarItem/SideNavbarItem.jsx";
import logout from '../../assets/logout.svg'
import {NAV_ITEMS} from "../../configurations/navItems.js";

function SideNavbar(props) {
  return (
    <div className="sidebar">
      <div className='sidebar__nav'>
        {
          NAV_ITEMS.map(item => {
            return (
              <SideNavbarItem key={item.title} title={item.title} icon={item.icon}
                              active={item.active}>{item.title}</SideNavbarItem>
            )
          })
        }
      </div>
      <div>
        <SideNavbarItem icon={logout}>Выйти</SideNavbarItem>
      </div>
    </div>
  );
}

export default SideNavbar;
