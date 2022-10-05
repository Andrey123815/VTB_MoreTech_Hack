import React from 'react';
import './TeamMembersLine.scss';
import TeamMemberAvatar from "../../UI-KIT/TeamMemberAvatar/TeamMemberAvatar.jsx";

function TeamMembersLine(props) {
  return (
    <div className="team-members-line">
      {props.teamMembers.map(({name, isTeamLead}) =>
        <TeamMemberAvatar name={name} isTeamLead={isTeamLead} />
      )}
    </div>
  );
}

export default TeamMembersLine;
