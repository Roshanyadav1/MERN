import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
`;

// eslint-disable-next-line react/prop-types
const Task = ({ key ,task }) => {
  console.log(task , key, "is this working the task are");
  return <Container>{task.content}</Container>;
};

Task.propTypes = {
  task: PropTypes.shape({
    key: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Task;
