import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>I am Events</h5>
      </React.Fragment>
    );
  }
}

export default withRouter(Events);
