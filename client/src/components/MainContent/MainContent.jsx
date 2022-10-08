import React from 'react';
import './MainContent.scss';
import TeamMembersLine from "../TeamMembersLine/TeamMembersLine.jsx";
import TasksBlock from "../TasksBlock/TasksBlock.jsx";

function MainContent() {
  return (
    <div className="main-content">
      <TeamMembersLine />
      <TasksBlock />
    </div>
  );
}

export default MainContent;
