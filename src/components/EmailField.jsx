var React = require('react');

var EmailField = React.createClass({
  getInitialState: function() {
    return {value: this.props.value};
  },
  onChange: function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <input
      className="form-control"
      placeholder="EmailField"
      onChange={this.onChange}
      value={this.state.value} />
    );
  }


});

module.exports = EmailField;
