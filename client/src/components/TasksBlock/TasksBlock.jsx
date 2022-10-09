import React, {useContext} from 'react';
import CategoryFilterBlock from "../CategoryFilterBlock/CategoryFilterBlock.jsx";
import StatusFilterBlock from "../StatusFilterBlock/StatusFilterBlock.jsx";
import Button from "../../UI-KIT/Button/Button.jsx";
import Task from "../Task/Task.jsx";
import './TasksBlock.scss';
import {useGetCountTasksInProgressQuery, useGetTasksQuery} from "../../services/taskAPI.js";
import {UserContext} from "../../App.jsx";

const tasks = [
  {
    id: 223,
    title: 'Title',
    description: 'Description  ',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  },
  {
    id: 12,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  },
  {
    id: 234523,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  },
  {
    id: 3453,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  },
  {
    id: 2456423,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  },
  {
    id: 767,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  }, {
    id: 288823,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  },
  {
    id: 979,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  },
  {
    id: 9097,
    title: 'Title',
    description: 'Description',
    rewardCoins: 34,
    feature: 'leadership',
    rewardFeature: 34,
  }
];

function TasksBlock() {
  const user = useContext(UserContext);
  console.log(user)

  const {data: counters} = useGetCountTasksInProgressQuery(user.accessToken);
  const {data: tasks} = useGetTasksQuery(user.accessToken);
  return (
    <div className="tasks-block">
      <div className="tasks-block__up-line">
        <StatusFilterBlock/>
        <Button>Создать задание</Button>
      </div>
      <div className="tasks-block__tasks">
        <CategoryFilterBlock/>
        <div className="tasks__tasks_items">
          {tasks && tasks.map(task =>
            <Task key={task.id} task={task}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default TasksBlock;
