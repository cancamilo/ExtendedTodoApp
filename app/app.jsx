var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe( () => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Shut up', 'High'));
store.dispatch(actions.setSearchText('Dog', 'Low'));
store.dispatch(actions.toggleShowCompleted('Medium'));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // <TodoApp/>,
  <div>Hello this is dog</div>,
  document.getElementById('app')
);

//require('./plaground/redux-todo');
