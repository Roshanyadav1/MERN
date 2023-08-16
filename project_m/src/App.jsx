import "./App.css";
import initialData from "./initial-data";
import { useState } from "react";
import Column from "./Column";
 
function App() {
  const [data, setData] = useState(initialData);
  const {tasks, columns, columnOrder } = data;

  return columnOrder.map(columnId => {
    const column = columns[columnId];
    const task = column.taskIds.map(taskId => tasks[taskId]);

    console.log(setData);
    return (
      <Column key={column.id} column={column} tasks={task}/>
    )
  });
}

export default App;
