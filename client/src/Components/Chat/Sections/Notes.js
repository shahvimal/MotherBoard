import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>I am Notes</h5>
      </React.Fragment>
    );
  }
}

export default withRouter(Notes);
