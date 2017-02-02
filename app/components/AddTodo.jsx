var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  getInitialState: function(e) {
    return {
      selectedPriority: 'High'
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    var priority = this.state.selectedPriority;

    // TODO: get the ref for the comobobox
    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText, priority));
    } else {
      this.refs.todoText.focus();
    }
  },
  handleOptionChange(e) {
    var option = e.target.value;
    this.setState({selectedPriority: option});
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <select ref="selectBox" onChange={this.handleOptionChange}>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
