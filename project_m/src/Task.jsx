import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
`;

 

const Task = ({ key , task }) => {
  return (<Container key={key}>{task.content}</Container>)
};

Task.propTypes = {
  task: PropTypes.shape({
    content: PropTypes.string,
  }),
  key: PropTypes.string || PropTypes.any, 
};

export default Task;
