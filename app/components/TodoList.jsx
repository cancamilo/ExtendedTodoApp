var React = require('react');
var {connect}  = require('react-redux');

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText, listId} = this.props;

    // TODO: Filter list also by priority
    var renderTodos = () => {
      if ( TodoAPI.countTodos(todos, listId)  === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted[listId], searchText[listId], listId).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div className="todo-list">
        <ReactCSSTransitionGroup
          transitionName="todoItem"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={400}>
            {renderTodos()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

// Connect the component TodoList so that it can request data.
export default connect(
  (state) => {
    return  state;      // request the data that this component needs

  }
)(TodoList);
