var Popups = require('react-popups')

var PopupHandler = React.createClass({
  render: function() {
    console.log('received: ', this.props.data) // received: clicked element identifier
    var Popup = <DefaultPopup/>
    switch(this.props.data) {
      case 'clicked element identifier': Popup = <SomePopup/>; break
      // ...
      // var something = this.props.popupProps.something
    }
  }
  return ({Popup})
})

var App = React.createClass({
  render: function() {
    var linkIfNoMatch = '/your-url' // for no action use 'javaScript:void(0)'
    return (
      <div>
        <Popups handler={PopupHandler}
                clickButtons={[0]}        // if defined adds 'click' event; 0 left, 1 middle, 2 right
                dataName='data-yourdata'  // defaults to 'data'
                />
                //event='someOtherEvent'
                //popupProps={something: ..}  // will be passed to PopupHandler

        Some <a data-yourdata={'clicked element identifier'} href={linkIfNoMatch}>demo</a> text.
      </div>
    )
  }
})

require('react-dom').render(<App/>, document.body)
