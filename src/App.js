import "./App.css";
import TasksList from "./components/TaskList";
import { TaskContextProvider} from "./contexts/TaskContext";

function App() {
  return (
    <TaskContextProvider>
   
        <div style={{ display: "flex", justifyContent: "center" }}>
        <TasksList />
       
        
      </div>
    </TaskContextProvider>
  );
}

export default App;
