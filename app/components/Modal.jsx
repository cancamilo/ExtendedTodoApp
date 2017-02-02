var React = require('react');
var {connect} = require('react-redux');

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export var Modal = React.createClass({

  render: function() {
    if(this.props.isOpen) {
      return (
        <ReactCSSTransitionGroup>
          <div>
            <h6 className="text">Simple Modal</h6>
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
        return <ReactCSSTransitionGroup transitionName={this.props.transitionName} />;
    }
  }
});

export default connect() (Modal);
