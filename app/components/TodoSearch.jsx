var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({

  render: function () {

    var {dispatch, showCompleted, searchText, listId} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText[listId]} onChange={() => {
            var search = this.refs.searchText.value;
            dispatch(actions.setSearchText(search, listId));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted[listId]} onChange={() => {
              dispatch(actions.toggleShowCompleted(listId));
            }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )

  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
