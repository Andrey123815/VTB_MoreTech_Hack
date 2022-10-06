import './App.css'
import Popup from "./UI-KIT/Popup/Popup.jsx";
import CurrencyBalance from "./UI-KIT/CurrencyBalance/CurrencyBalance.jsx";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import ProfilePreviewBanner from "./components/ProfilePreviewBanner/ProfilePreviewBanner.jsx";
import UserInfoSection from "./UI-KIT/UserInfoSection/UserInfoSection.jsx";
import ProgressBar from "./UI-KIT/ProgressBar/ProgressBar.jsx";
import SingleCharacteristic from "./UI-KIT/SingleCharacteristic/SingleCharacteristic.jsx";

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
      <ProfileCard />
    </div>
  )
}

export default App
