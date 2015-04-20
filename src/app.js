import React from 'react';

const Hello = React.createClass({
  render() {
    return <h1>Hello from {this.props.name}</h1>;
  }
});

React.render(<Hello name="Jason"/>, document.body);
