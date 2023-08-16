import Task from "./Task";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Column = ({ key, column, tasks }) => {
  console.log(key, tasks);
  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map(
          task =>
            task &&
            task.id &&
            task.content && <Task key={task.id} task={task} />
        )}
      </TaskList>
    </Container>
  );
};

Column.propTypes = {
  column: PropTypes.shape({
    title: PropTypes.string,
  }),
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  key: PropTypes.string,
};

export default Column;
