import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDate = (e) => {
    setTaskDate(e.target.value);
  };

  const handleTaskDesc = (e) => {
    setTaskDesc(e.target.value);
  };

  console.log(taskName, taskDate, taskDesc);

  const handleSubmitForm = (e) => {
    console.log("Submit");
    e.preventDefault();
  };

  return (
    <div className="createTaskForm">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" id="taskname" onChange={handleTaskName} />

        <label htmlFor="taskDate">Due date</label>
        <input type="date" id="taskDate" onChange={handleTaskDate} />

        <label htmlFor="taskDesc">Task Description</label>
        <textarea id="taskDesc" onChange={handleTaskDesc}></textarea>
        <Button text="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
