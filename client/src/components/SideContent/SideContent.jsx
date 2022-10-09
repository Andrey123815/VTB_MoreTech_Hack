import React from 'react';
import ProfilePreviewBanner from "../ProfilePreviewBanner/ProfilePreviewBanner.jsx";
import TaskConfirmBlock from "../TaskConfirmBlock/TaskConfirmBlock.jsx";
import UserGratitudeBlock from "../UserGratitudeBlock/UserGratitudeBlock.jsx";
import ShopBanner from "../ShopBanner/ShopBanner.jsx";
import './SideContent.scss';

function SideContent() {
  return (
    <div className="side-content">
      <ProfilePreviewBanner />
      <TaskConfirmBlock />
      <UserGratitudeBlock />
      <ShopBanner />
    </div>
  );
}

export default SideContent;
