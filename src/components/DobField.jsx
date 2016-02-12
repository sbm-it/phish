var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var DobField = React.createClass({
  getInitialState: function() {
    return {value: null};
  },
  onChange: function(date) {
    this.setState({value: date});
  },
  render: function() {
    return (
      <DatePicker
        placeholderText="Birth Date"
        selected={this.state.value}
        onChange={this.onChange}
        />
    );
  }
});

module.exports = DobField;
