import React from 'react';
import Popup from "../../UI-KIT/Popup/Popup.jsx";
import ProfileCard from "../ProfileCard/ProfileCard.jsx";

function ProfilePopup(props) {
  return (
    <Popup>
      <ProfileCard />
    </Popup>
  );
}

export default ProfilePopup;
