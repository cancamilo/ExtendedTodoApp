var React = require('react');
var ReactDOM = require('react-dom');

// Allows children element to dispatch actionss
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');


// Subscribe to any changes in the State and save to local storage
store.subscribe( () => {
  var state = store.getState();
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();

store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // TodoApp component and all of its children will be able to access data in the store and dispatcha actions
  <Provider store = {store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
