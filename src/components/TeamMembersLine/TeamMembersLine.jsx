import React from 'react';
import './TeamMembersLine.scss';
import TeamMemberAvatar from "../../UI-KIT/TeamMemberAvatar/TeamMemberAvatar.jsx";

const teamMembers = [
  {
    name: "Sergey Ivanov",
    isTeamLead: true,
  },
  {
    name: "Sergey Trert",
    isTeamLead: false,
  },
  {
    name: "Sergey Ietertov",
    isTeamLead: false,
  },
  {
    name: "Sergey Rrtjewe",
    isTeamLead: false,
  },
  {
    name: "Sergey Trere",
    isTeamLead: false,
  },
  {
    name: "Sergey Werw",
    isTeamLead: false,
  },
]

function TeamMembersLine(props) {
  return (
    <div className="team-members-line">
      {teamMembers.map(({name, isTeamLead}) =>
        <TeamMemberAvatar key={name} name={name} isTeamLead={isTeamLead} />
      )}
    </div>
  );
}

export default TeamMembersLine;
