import React from 'react';
import './UserInfoLabel.scss';

function UserInfoLabel(props) {
  return (
    <span className="user-info-label">{props.param}</span>
  );
}

export default UserInfoLabel;
