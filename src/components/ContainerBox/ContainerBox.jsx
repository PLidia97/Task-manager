import TaskCard from "../TaskCard/TaskCard";
import "./ContainerBox.css";

const ContainerBox = () => {
  return (
    <div className="container-box">
      <h1>Tasks</h1>
      <h4>Your tasks in your space.</h4>
      <div className="tasks">
        <TaskCard
          type="t-1"
          status="todo"
          desc="Descriere1"
          date="24/11/2024"
        />
        <TaskCard
          type="t-2"
          status="todo"
          desc="Descriere2"
          date="04/12/2024"
        />
      </div>
    </div>
  );
};

export default ContainerBox;
