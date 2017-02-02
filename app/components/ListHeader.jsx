var React = require('react');
var {connect} = require('react-redux');

import AddTodo from 'AddTodo';

import Modal, {closeStyle} from 'simple-react-modal'


export var ListHeader = React.createClass({
  getInitialState: function(){
    return { isModalOpen: false}
  },
  closePopup: function(e) {
    e.preventDefault();
    debugger;
    this.setState({isModalOpen: false});

  },
  showPopup: function(e) {
    e.preventDefault();
    this.setState({isModalOpen: true});

  },
  render: function() {
    var title = this.props.headerText;
    return (
      <div>
        <Modal
           show={this.state.isModalOpen}
           onClose={this.closePopup}>
           <AddTodo/>
        </Modal>
        <h6 className="list-title">{title}</h6>
        <button  className="add-button button" onClick={this.showPopup}>+</button>
      </div>
    );
  }

});

export default connect() (ListHeader);
