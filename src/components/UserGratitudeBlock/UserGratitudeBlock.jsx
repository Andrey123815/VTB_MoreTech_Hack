import React from 'react';
import './UserGratitudeBlock.scss';
import AutocompleteInput from "../../UI-KIT/AutocompleteInput/AutocompleteInput.jsx";
import Button from "../../UI-KIT/Button/Button.jsx";
import CustomInput from "../../UI-KIT/CustomInput/CustomInput.jsx";
import {INPUT_SETTINGS} from "../../configurations/inputs.js";

function UserGratitudeBlock() {
  return (
    <div className="user-gratitude-block">
      <header className="user-gratitude-block__header-text">Поблагодарите коллегу за что-нибудь</header>
      <div className="user-gratitude-block__user-choice">
        <span className="user-choice__header">Выберите пользователя</span>
        <AutocompleteInput sx={{width: "100%", fontSize: "5px"}} />
      </div>
      <div className="user-gratitude-block__control-line">
        <span className="control-line__currency-section">
          <img src="/currencies/ruble.svg" alt="currency image" />
        <CustomInput settings={INPUT_SETTINGS.cashReward}/>
        </span>
        <Button>Поблагодарить</Button>
      </div>
    </div>
  );
}

export default UserGratitudeBlock;
