import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = (props) => {
  // const [taskName, setTaskName] = useState("");
  // const [taskDate, setTaskDate] = useState("");
  // const [taskDesc, setTaskDesc] = useState("");
  const [taskData, setTaskData] = useState({ name: "", date: "", desc: "" });

  const handleTaskName = (e) => {
    // setTaskName(e.target.value);

    setTaskData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleTaskDate = (e) => {
    // setTaskDate(e.target.value);
    setTaskData((prevState) => ({
      ...prevState,
      date: e.target.value,
    }));
  };

  const handleTaskDesc = (e) => {
    // setTaskDesc(e.target.value);
    setTaskData((prevState) => ({
      ...prevState,
      desc: e.target.value,
    }));
  };

  // console.log(taskName, taskDate, taskDesc);

  // const newTask = {
  //   name: taskName,
  //   date: taskDate,
  //   desc: taskDesc,
  // };

  const resetState = () => {
    // setTaskName("");
    // setTaskDate("");
    // setTaskDesc("");
    setTaskData({ name: "", date: "", desc: "" });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // props.addTask(newTask);
    props.addTask(taskData);
    resetState();
  };

  return (
    <div className="createTaskForm">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          id="taskname"
          onChange={handleTaskName}
          // value={taskName}
          value={taskData.name}
        />

        <label htmlFor="taskDate">Due date</label>
        <input
          type="date"
          id="taskDate"
          onChange={handleTaskDate}
          // value={taskDate}
          value={taskData.date}
        />

        <label htmlFor="taskDesc">Task Description</label>
        <textarea
          id="taskDesc"
          onChange={handleTaskDesc}
          // value={taskDesc}
          value={taskData.desc}
        ></textarea>
        <Button text="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
