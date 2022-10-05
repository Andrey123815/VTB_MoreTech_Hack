import './App.css'
import TeamMembersLine from "./components/TeamMembersLine/TeamMembersLine.jsx";
import CategoryFilterBlock from "./components/CategoryFilterBlock/CategoryFilterBlock.jsx";
import StatusFilterBlock from "./components/StatusFilterBlock/StatusFilterBlock.jsx";

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
      <StatusFilterBlock />
    </div>
  )
}

export default App
