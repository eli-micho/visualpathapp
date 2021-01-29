import React from 'react';
import { connect } from "react-redux";
import MainApp from "./../index";

const RenderTasks = ({ content }) => (
  <ul className="todo-list">
    {content && content.length
      ? content.map((text, index) => {
          return (
              <li>
                  {text.content}
              </li>
          );
        })
      : "No tasks!"}
  </ul>
);

const mapStateToProps = state => {
  const { content } = state.content
  return { content };
};

// export default TodoList;
export default connect(mapStateToProps)(RenderTasks);
