import './App.css'
import CustomInput from "./UI-KIT/CustomInput/CustomInput.jsx";
import {INPUT_SETTINGS} from "./configurations/inputs.js";
import TaskConfirmBlock from "./components/TaskConfirmBlock/TaskConfirmBlock.jsx";
import UserGratitudeBlock from "./components/UserGratitudeBlock/UserGratitudeBlock.jsx";

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
      <UserGratitudeBlock />
    </div>
  )
}

export default App
