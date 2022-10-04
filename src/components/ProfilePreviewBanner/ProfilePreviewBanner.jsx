import React from 'react';
import UserInfoLabels from "../../UI-KIT/UserInfoLabels/UserInfoLabels.jsx";
import './ProfilePreviewBanner.scss';
import CurrencyBalance from "../../UI-KIT/CurrencyBalance/CurrencyBalance.jsx";

function ProfilePreviewBanner(props) {
  return (
    <div className="profile-preview-banner">
      <div className="banner__avatar">
        <img src="/currencies/ruble.svg" width="63px" height="63px" alt="Your avatar"/>
      </div>
      <div className="banner__user-info">
        <UserInfoLabels param="Sergey Ivanov"/>
        <UserInfoLabels param="Frontend developer"/>
        <CurrencyBalance />
      </div>
    </div>
  );
}

export default ProfilePreviewBanner;
