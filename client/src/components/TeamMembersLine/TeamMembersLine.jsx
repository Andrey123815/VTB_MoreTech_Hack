import React, {useContext} from 'react';
import './TeamMembersLine.scss';
import TeamMemberAvatar from "../../UI-KIT/TeamMemberAvatar/TeamMemberAvatar.jsx";
import {useGetTeamMembersQuery} from "../../services/teamAPI.js";
import {UserContext} from "../../App.jsx";

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
  const user = useContext(UserContext);
  const {data: members, error} = useGetTeamMembersQuery(user.accessToken);

  return (
    <div className="team-members-line">
      {members && members.map(member =>
        <TeamMemberAvatar key={member.id} name={member.fullName} isTeamLead={member.role === 'teamlead'} />
      )}
    </div>
  );
}

export default TeamMembersLine;
