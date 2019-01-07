import React, { Component } from 'react';
import './tbutton.scss';

class TButton extends Component {
	click_event () {
		this.props.clickEvent();
	}

	render() {
	  	let btnStyle = {
		    paddingLeft: this.props.lpad + 'px',
		    paddingRight: this.props.rpad + 'px',
		};

	    return (
	    	<button onClick={this.click_event.bind(this)} className={this.props.btntype} style={btnStyle}>{this.props.children}</button>
	    );
	}
}

export default TButton;