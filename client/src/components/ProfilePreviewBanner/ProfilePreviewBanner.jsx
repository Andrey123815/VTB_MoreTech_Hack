import React from 'react';
import UserInfoLabel from "../../UI-KIT/UserInfoLabel/UserInfoLabel.jsx";
import './ProfilePreviewBanner.scss';
import CurrencyBalance from "../../UI-KIT/CurrencyBalance/CurrencyBalance.jsx";

function ProfilePreviewBanner(props) {
  return (
    <div className="profile-preview-banner">
      <div className="banner__avatar">
        <img src="/static_test_images/member.png" width="63px" height="63px" alt="Your avatar"/>
      </div>
      <div className="banner__user-info">
        <UserInfoLabel param="Sergey Ivanov"/>
        <UserInfoLabel param="Frontend developer"/>
        <CurrencyBalance />
      </div>
    </div>
  );
}

export default ProfilePreviewBanner;
