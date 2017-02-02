var React = require('react');
var {connect} = require('react-redux');

export var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.navbarInput.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.navbarInput.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function(){
  return(
          <div className="top-bar">
            <div className="top-bar-right">

            </div>
          </div>
       );
     }
});

export default connect()(Nav);
