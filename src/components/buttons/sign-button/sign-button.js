import React, { Component } from 'react';
import './sign-button.scss';
import GoogleIcon from '../../../assets/images/google.png';
import EmailIcon from '../../../assets/images/email.png';


class SignButton extends Component {

  click_event () {
    this.props.clickEvent();
  }

  render() {
  	var icon;
  	if (this.props.icon === 'google')
  		icon = GoogleIcon;
  	else if(this.props.icon === 'email')
  		icon = EmailIcon;

    return (
    	<div className="sign-button" onClick={this.click_event.bind(this)}>
    		<div className="icon">
    			<img src={icon} alt=""/>
    		</div>
    		<div className="name" align="left">
    			<span>{this.props.children}</span>
    		</div>
    	</div>
    );
  }
}

export default SignButton;