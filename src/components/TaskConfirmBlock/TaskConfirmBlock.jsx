import React from 'react';
import './TaskConfirmBlock.scss';
import CustomInput from "../../UI-KIT/CustomInput/CustomInput.jsx";
import {INPUT_SETTINGS} from "../../configurations/inputs.js";
import Button from "../../UI-KIT/Button/Button.jsx";

function TaskConfirmBlock(props) {
  return (
    <div className="task-confirm-block">
      <header>Подтвердите прохождение задания</header>
      <div className="task-confirm__data-control">
        <CustomInput settings={INPUT_SETTINGS.taskConfirm} />
        <Button>Подтвердить</Button>
      </div>
    </div>
  );
}

export default TaskConfirmBlock;
