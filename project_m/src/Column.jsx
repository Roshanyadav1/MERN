// import Task from "./Task";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {provided => {
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map(task => {
              console.log(task, "is this working");
              return (
                // <Task key={task.id} task={task} />
                <>
                <h1>{task.content}</h1>
                </>
              );
            })}
            {provided.placeholder}
          </TaskList>;
        }}
      </Droppable>
    </Container>
  );
};

Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default Column;
