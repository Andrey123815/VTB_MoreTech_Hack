import React from 'react';
import './UserGratitudeBlock.scss';
import AutocompleteInput from "../../UI-KIT/AutocompleteInput/AutocompleteInput.jsx";
import Button from "../../UI-KIT/Button/Button.jsx";
import CustomInput from "../../UI-KIT/CustomInput/CustomInput.jsx";
import {INPUT_SETTINGS} from "../../configurations/inputs.js";

function UserGratitudeBlock() {
  return (
    <div className="user-gratitude-block">
      <header className="user-gratitude-block__header-text">Начислить бонусы коллеге</header>
      <div className="user-gratitude-block__user-choice">
        <span className="user-choice__header">Выберите пользователя</span>
        <AutocompleteInput sx={{width: "100%", fontSize: "5px"}} size='large'/>
      </div>
      <div className="user-gratitude-block__bonus-choice">
        <span className="user-choice__header">Выберите бонус</span>
        <div className="user-gratitude-block__control-line">
          <AutocompleteInput sx={{width: "100%", fontSize: "5px"}} size='small'/>
          <CustomInput settings={INPUT_SETTINGS.cashReward}/>
        </div>
      </div>
      <div className="send-bonus-block">
        <Button>Отправить</Button>
      </div>
    </div>
  );
}

export default UserGratitudeBlock;
