import React from 'react';
import './MainContent.scss';
import TeamMembersLine from "../TeamMembersLine/TeamMembersLine.jsx";
import TasksBlock from "../TasksBlock/TasksBlock.jsx";
import Marketplace from "../Marketplace/Marketplace.jsx";
import ProfilePopup from "../ProfilePopup/ProfilePopup.jsx";

function MainContent() {
  const isMarket = false;
  return (
    <div className="main-content">
      <TeamMembersLine />
      <ProfilePopup />
      {isMarket
        ? <Marketplace />
        : <TasksBlock />
      }
    </div>
  );
}

export default MainContent;
