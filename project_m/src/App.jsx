import "./App.css";
import initialData from "./initial-data";
import { useState } from "react";
import Column from "./Column";

import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [data, setData] = useState(initialData);
  const { tasks, columns, columnOrder } = data;

  const onDragEnd = result => {
    console.log(result);
  };

  return (
    <DragDropContext
      onDragStart={start => console.log(start)}
      onDragUpdate={update => console.log(update)}
      onDragEnd={onDragEnd}>
      {columnOrder.map(columnId => {
        const column = columns[columnId];
        const task = column.taskIds.map(taskId => tasks[taskId]);

        console.log(setData);
        return <Column key={column.id} column={column} tasks={task} />;
      })}
    </DragDropContext>
  );
}

export default App;
