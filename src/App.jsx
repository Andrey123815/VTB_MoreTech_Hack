import './App.css'
import CustomInput from "./UI-KIT/CustomInput/CustomInput.jsx";
import {INPUT_SETTINGS} from "./configurations/inputs.js";
import TaskConfirmBlock from "./components/TaskConfirmBlock/TaskConfirmBlock.jsx";

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
      <TaskConfirmBlock />
    </div>
  )
}

export default App
