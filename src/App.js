// import { createContext } from "react";
import ContainerBox from "./components/ContainerBox/ContainerBox";
import { TaskProvider } from "./context/TaskContext";
// export const TaskContex = createContext();

function App() {
  return (
    <div className="App">
      {/* <TaskContex.Provider value={[1, 2, 3]}> */}
      <TaskProvider>
        <ContainerBox />
      </TaskProvider>

      {/* </TaskContex.Provider> */}
    </div>
  );
}

export default App;
