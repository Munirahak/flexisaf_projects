import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import TaskInputContext from "./components/TaskInputContext";
import TaskListContext from "./components/TaskListContext";
import TaskInputRedux from "./components/TaskInputRedux";
import TaskListRedux from "./components/TaskListRedux";

function App() {
  return (
    <div className="container">
      <h1>Week 7 - State Management</h1>

      {/* CONTEXT API SECTION */}
      <TaskProvider>
        <TaskInputContext />
        <TaskListContext />
      </TaskProvider>

      <hr />

      {/* REDUX SECTION */}
      <Provider store={store}>
        <TaskInputRedux />
        <TaskListRedux />
      </Provider>
    </div>
  );
}

export default App;
