import React, {useState} from 'react';
import Popup from "../../UI-KIT/Popup/Popup.jsx";
import ProfileCard from "../ProfileCard/ProfileCard.jsx";

function ProfilePopup(props) {
  const [open, setOpen] = useState(false);
  const onClickHandler = () => {
    console.log("CLICK", !open);
    setOpen(!open);
  }
  const onClose = () => {
    setOpen(false);
  }
  return (
    <Popup open={open} onClose={onClose}>
      <ProfileCard onClick={onClickHandler} />
    </Popup>
  );
}

export default ProfilePopup;
