import { useEffect, useState } from "react";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";
import NoTasks from "../NoTasks/NoTasks";
import Modal from "../Modal/Modal";
import ControlPanel from "../ControlPanel/ControlPanel";
import { useTaskContext } from "../../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

const ContainerBox = () => {
  const [isEmOpen, setIsEmOpen] = useState(false);
  const { taskList, setTaskList, selectedStatus } = useTaskContext();
  const openModal = () => setIsEmOpen(true);

  const closeModal = () => setIsEmOpen(false);

  const onAddTask = (task) => {
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        taskName: task.name,
        taskDate: task.date,
        taskDesc: task.desc,
        //sau spread ...task
        taskStatus: "Todo",
      },
    ]);
  };
  // console.log(taskList);

  const setFilteredTasks = () => {
    if (selectedStatus === "All Tasks") {
      return taskList;
    }
    const filterList = taskList.filter(
      (task) => task.taskStatus === selectedStatus
    );
    return filterList;
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const filteredTasks = setFilteredTasks();
  // const contextData = useTaskContext();
  // console.log(contextData);
  return (
    <div className="container-box">
      <ControlPanel onClickFunction={openModal} />

      {/* {randare conditionala} */}
      {taskList.length > 0 ? (
        <div className="tasks">
          {filteredTasks.map((task, index) => (
            <TaskCard
              name={task.taskName}
              status={task.taskStatus}
              desc={task.taskDesc}
              date={task.taskDate}
              id={task.id}
              //task = {task}
              key={index}
            />
          ))}
        </div>
      ) : (
        <NoTasks onClickFunction={openModal} />
      )}

      {/* <Modal  /> */}
      <Modal isOpen={isEmOpen} onClose={closeModal}>
        <CreateTaskForm addTask={onAddTask} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ContainerBox;
