import './App.css'
import TeamMembersLine from "./components/TeamMembersLine/TeamMembersLine.jsx";

const teamMembers = [
  {
    name: "Sergey Ivanov",
    isTeamLead: true,
  },
  {
    name: "Sergey Ivanov",
    isTeamLead: false,
  },
  {
    name: "Sergey Ivanov",
    isTeamLead: false,
  },
  {
    name: "Sergey Ivanov",
    isTeamLead: false,
  },
  {
    name: "Sergey Ivanov",
    isTeamLead: false,
  },
  {
    name: "Sergey Ivanov",
    isTeamLead: false,
  },
]

function App() {
  return (
    <div className="App">
      <TeamMembersLine teamMembers={teamMembers} />
    </div>
  )
}

export default App
