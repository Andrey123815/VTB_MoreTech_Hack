import React, {useContext} from 'react';
import UserInfoLabel from "../../UI-KIT/UserInfoLabel/UserInfoLabel.jsx";
import './ProfilePreviewBanner.scss';
import CurrencyBalance from "../../UI-KIT/CurrencyBalance/CurrencyBalance.jsx";
import {UserContext} from "../../App.jsx";

function ProfilePreviewBanner() {
  const user = useContext(UserContext);
  return (
    <div className="profile-preview-banner">
      <div className="banner__avatar">
        <img src={user?.user?.avatarSrc} width="63px" height="63px" alt="Your avatar"/>
      </div>
      <div className="banner__user-info">
        <UserInfoLabel param={user?.user?.fullName}/>
        <UserInfoLabel param={user?.user?.specialization}/>
        <CurrencyBalance />
      </div>
    </div>
  );
}

export default ProfilePreviewBanner;
