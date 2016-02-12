var React = require('react');

var IdField = React.createClass({
  getInitialState: function() {
    return {value: ""};
  },
  onChange: function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <input
      className="form-control"
      placeholder="Employee ID"
      onChange={this.onChange}
      value={this.state.value} />
    );
  }


});

module.exports = IdField;
