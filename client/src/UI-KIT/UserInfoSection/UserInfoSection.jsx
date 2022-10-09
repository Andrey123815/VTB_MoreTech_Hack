import React from 'react';
import './UserInfoSection.scss';

function UserInfoSection(props) {
  return (
    <section className="user-info-section">
      <span className="user-info-section__header">{props.header}</span>
      <span className="user-info-section__value">{props.value}</span>
    </section>
  );
}

export default UserInfoSection;
