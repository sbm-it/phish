var React = require('react');
var request = require('superagent');
var IdField = require('./IdField.jsx');
var DobField = require('./DobField.jsx');
var EmailField = require('./EmailField.jsx');

var phishCapture = React.createClass({
  onSubmit: function(e) {
    var httpRequestBody = {
      email: this.refs.fieldEmail.state.value,
      dob: this.refs.fieldDob.state.value,
      sbid: this.refs.fieldID.state.value
    }
    request
      .post('/api/stories')
      .send(httpRequestBody)
      .end(function (err, res) {
        if (err) {
          return console.log(err);
        }
      }.bind(this));

    console.log(httpRequestBody);
  },
  render: function() {
    return (
      <div className="col-med-6">
        <div className="panel-body">
          <p>To download your tax documents we need to properly identify you please provide the information requested below and hit enter to receive a downloadable version of your tax documents.</p>
          <div style={{display:'none'}}>
            <EmailField value="wade.jakahi@stonybrookmedicine.edu" ref="fieldEmail"/>
          </div>
            <div className="col-med-1">enter your Stoney Brook ID# </div><div className="col-med-1"><IdField ref="fieldID"/></div>
          enter your Date of Birth <DobField ref="fieldDob"/>
          <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
})

module.exports = phishCapture;
