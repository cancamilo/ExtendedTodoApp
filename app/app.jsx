var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // <TodoApp/>,
  <div>Hello this is dog</div>,
  document.getElementById('app')
);

require('./plaground/redux-todo');
