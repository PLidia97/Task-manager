// import React, { useContext } from "react";
import "./TaskFilter.css";
import FilterItem from "../FilterItem/FilterItem";
import { useTaskContext } from "../../context/TaskContext";
// import { TaskContex } from "../../App";

const TaskFilter = () => {
  const filterStatus = ["All Tasks", "Pending", "In Progress", "Completed"];
  // const taskContext = useContext(TaskContex);
  const { taskList, selectedStatus, setSelectedStatus } = useTaskContext();
  const getCountByStatus = (status) => {
    if (status === "All Tasks") {
      return taskList.length;
    }
    const filterList = taskList.filter((task) => task.taskStatus === status);
    return filterList.length;
  };
  return (
    <div className="content-filter">
      {filterStatus.map((item, index) => (
        <FilterItem
          key={index}
          status={item}
          count={getCountByStatus(item)}
          isActive={selectedStatus === item}
          onStatusClick={() => setSelectedStatus(item)}
        />
      ))}
    </div>
  );
};

export default TaskFilter;
