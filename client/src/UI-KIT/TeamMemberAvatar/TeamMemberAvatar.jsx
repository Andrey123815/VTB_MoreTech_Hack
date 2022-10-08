import React from 'react';
import './TeamMemberAvatar.scss';

function TeamMemberAvatar(props) {
  return (
    <div className="team-member">
      <div className={props.isTeamLead ? "team-members__avatar_team-lead" : "team-member__avatar"}></div>
      <span>{props.name}</span>
    </div>
  );
}

export default TeamMemberAvatar;
