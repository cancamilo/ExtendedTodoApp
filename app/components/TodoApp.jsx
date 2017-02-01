var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchTextH: '',
      searchTextM: '',
      searchTextL: '',
      todosHigh: TodoAPI.getTodos('high'),
      todosMedium: TodoAPI.getTodos('medium'),
      todosLow: TodoAPI.getTodos('low')
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="main-container">
        <h1 className="page-title">Todo App</h1>

        <div className="lists-container">

          <div className="row">

            <div className="column small-centered small-12 medium-uncentered medium-4 large-uncentered large-4">
              <div className="container">
                <h4 className="text-center">High Priority</h4>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              </div>
            </div>

            <div className="column small-centered small-12 medium-uncentered medium-4 large-uncentered large-4">
              <div className="container">
                <h4 className="text-center">Medium Priority</h4>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              </div>
            </div>

            <div className="column small-12 medium-uncentered medium-4 large-uncentered large-4">
              <div className="container">
                <h4 className="text-center">Low Priority</h4>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="column small-centered small-11 medium-centered medium-6 large-centered large-6 ">
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>

        </div>

      </div>
    )
  }
});

module.exports = TodoApp;
