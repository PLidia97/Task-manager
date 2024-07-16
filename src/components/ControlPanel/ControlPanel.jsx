import React from "react";
import "./ControlPanel.css";
import Button from "../Button/Button";
import TaskFilter from "../TaskFilter/TaskFilter";

const ControlPanel = (props) => {
  return (
    <div className="controlPanel">
      <div className="left">
        <h1>Tasks</h1>
        <h4>Your tasks in your space.</h4>
        <TaskFilter />
      </div>
      <Button text="Create task" onClickFunction={props.onClickFunction} />
    </div>
  );
};

export default ControlPanel;
