import React, { Component } from 'react';

class Gap extends Component {
  divStyle = {
    width: '100%',
    height: this.props.hei + 'px'
  };

  render() {
    return (
    	<div style={this.divStyle}></div>
	);
  }
}

export default Gap;