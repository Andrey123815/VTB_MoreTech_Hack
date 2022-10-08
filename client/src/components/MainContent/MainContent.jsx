import React from 'react';
import './MainContent.scss';
import TeamMembersLine from "../TeamMembersLine/TeamMembersLine.jsx";
import TasksBlock from "../TasksBlock/TasksBlock.jsx";
import Marketplace from "../Marketplace/Marketplace.jsx";

function MainContent() {
  const isMarket = true;
  return (
    <div className="main-content">
      <TeamMembersLine />
      {isMarket
        ? <Marketplace />
        : <TasksBlock />
      }
    </div>
  );
}

export default MainContent;
