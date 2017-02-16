var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import ListHeader from 'ListHeader';
import Nav from 'Nav';

var TodoApp = React.createClass({

  render: function () {

    return (
      <div className="main-container">
        <h1 className="page-title">Todo App ++</h1>

        <div className="lists-container">

          <div className="row">

            <div className="column small-centered small-12 medium-uncentered medium-4 large-uncentered large-4">
              <div className="container">
                <ListHeader headerText='High priority'></ListHeader>
                <TodoSearch listId='High'/>
                <TodoList listId='High'/>
              </div>
            </div>

            <div className="column small-centered small-12 medium-uncentered medium-4 large-uncentered large-4">
              <div className="container">
                <ListHeader headerText='Medium priority'></ListHeader>
                <TodoSearch listId='Medium'/>
                <TodoList listId='Medium' />
              </div>
            </div>

            <div className="column small-12 medium-uncentered medium-4 large-uncentered large-4">
              <div className="container">
                <ListHeader headerText='Low priority'></ListHeader>
                <TodoSearch  listId='Low'/>
                <TodoList listId='Low' />
              </div>
            </div>
          </div>

          <div className="row" id="footer">
            <div className="column small-centered small-8 medium-centered medium-4 large-centered large-4 ">
              <AddTodo />
            </div>
          </div>
        </div>

      </div>
    )
  }
});

module.exports = TodoApp;
