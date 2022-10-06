import './App.css'
import CustomInput from "./UI-KIT/CustomInput/CustomInput.jsx";
import {INPUT_SETTINGS} from "./configurations/inputs.js";
import TaskConfirmBlock from "./components/TaskConfirmBlock/TaskConfirmBlock.jsx";
import UserGratitudeBlock from "./components/UserGratitudeBlock/UserGratitudeBlock.jsx";
import TasksCounter from "./UI-KIT/TasksCounter/TasksCounter.jsx";
import StatusFilterBlock from "./components/StatusFilterBlock/StatusFilterBlock.jsx";
import CategoryFilterBlock from "./components/CategoryFilterBlock/CategoryFilterBlock.jsx";

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
      <CategoryFilterBlock />
    </div>
  )
}

export default App
