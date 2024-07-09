import React, { useState } from "react";
import "./CreateTaskForm.css";
import Button from "../Button/Button";

const CreateTaskForm = (props) => {
  // const [taskName, setTaskName] = useState("");
  // const [taskDate, setTaskDate] = useState("");
  // const [taskDesc, setTaskDesc] = useState("");
  const [taskData, setTaskData] = useState({ name: "", date: "", desc: "" });
  const [formErrors, setFormErrors] = useState({});

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

  const validateForm = () => {
    let errors = {};

    if (!taskData.name) {
      errors.nameError = "Task name is required!";
    } else if (taskData.name.length < 3) {
      errors.nameError = "Task name must have minim 3 characters!";
    }

    if (!taskData.date) {
      errors.dateError = "Task date is required!";
    } else if (new Date(taskData.date) < new Date()) {
      errors.dateError = "Task date should not be in the past";
    }

    if (!taskData.desc) {
      errors.descError = "Task description is required!";
    } else if (taskData.desc.length < 3) {
      errors.descError = "Task dsecription must have minim 3 characters!";
    } else if (taskData.desc.length > 30) {
      errors.descError = "Task dsecription must have max 30 characters!";
    }

    setFormErrors({ ...errors });

    let isValid = Object.keys(errors).length < 1;

    return isValid;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let isValid = validateForm();
    // props.addTask(newTask);

    if (isValid) {
      props.addTask(taskData);
      resetState();
      if (props.closeModal) {
        props.closeModal();
      }
    } else {
      console.log("Avem erori");
    }
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
          className={formErrors.nameError && "inputError"}
        />

        {formErrors.nameError && (
          <span className="error-message">{formErrors.nameError}</span>
        )}

        <label htmlFor="taskDate">Due date</label>
        <input
          type="date"
          id="taskDate"
          onChange={handleTaskDate}
          // value={taskDate}
          value={taskData.date}
          className={formErrors.dateError && "inputError"}
        />

        {formErrors.dateError && (
          <span className="error-message">{formErrors.dateError}</span>
        )}

        <label htmlFor="taskDesc">Task Description</label>
        <textarea
          id="taskDesc"
          onChange={handleTaskDesc}
          // value={taskDesc}
          value={taskData.desc}
          className={formErrors.descError && "inputError"}
        ></textarea>

        {formErrors.descError && (
          <span className="error-message">{formErrors.descError}</span>
        )}

        <Button text="Create Task" />
      </form>
    </div>
  );
};

export default CreateTaskForm;
