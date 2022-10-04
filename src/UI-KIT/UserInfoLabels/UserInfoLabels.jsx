import React from 'react';
import './UserInfoLabels.scss';

function UserInfoLabels(props) {
  return (
    <span className="user-info-label">{props.param}</span>
  );
}

export default UserInfoLabels;
