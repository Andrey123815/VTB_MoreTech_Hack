import React from 'react';
import './TeamMemberAvatar.scss';

function TeamMemberAvatar(props) {
  return (
    <div className="team-member">
      <div className={props.isTeamLead ? "team-member-avatar team-lead-avatar" : "team-member-avatar"}></div>
      <span>{props.name}</span>
    </div>
  );
}

export default TeamMemberAvatar;
