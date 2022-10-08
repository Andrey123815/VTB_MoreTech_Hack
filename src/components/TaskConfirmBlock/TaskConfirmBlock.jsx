import React from 'react';
import './TaskConfirmBlock.scss';
import CustomInput from "../../UI-KIT/CustomInput/CustomInput.jsx";
import {INPUT_SETTINGS} from "../../configurations/inputs.js";
import Button from "../../UI-KIT/Button/Button.jsx";

function TaskConfirmBlock() {
  return (
    <div className="task-confirm-block">
      <div className="task-confirm__data-control">
        <header>Подтвердите прохождение задания</header>
        <div className="data-control__input-block">
          <CustomInput settings={INPUT_SETTINGS.taskConfirm} />
          <div>
            <Button>Подтвердить</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskConfirmBlock;
