import React, { Component } from 'react';
import logo from '../../../assets/images/sign-logo.png';
import goback from '../../../assets/images/goback.png';
import Gap from '../../gap/gap';
import './sign.scss';

class EmailSignin extends Component {

  goBack () {
  	window.history.back();
  }

  signin () {
  	window.location.href="/post-list";
  }

  render() {
    return (
    	<div className="sign-page" align="center">
    		<div className="sign-container">
	    		<div className="logo" align="center">
	    			<img src={logo} alt="Tertius logo" />
	    		</div>

	    		<div className="main-block" align="center">
	    			<span className="title">sign in with email</span>
	    			<Gap hei="2"></Gap>
	    			<p>Enter the email associated with your account and we’ll send a “magic link” to your inbox.</p>
	    			<Gap hei="3"></Gap>
	    			<div className="signin-form" align="center">
	    				<input type="text" name="email" id="email" placeholder="Your email"/>
	    				<Gap hei="40"></Gap>
	    				<button className="form-action" type="button" onClick={this.signin.bind(this)}>Continue</button>
	    			</div>
	    		</div>
    		</div>
    		<div className="sign-back" onClick={this.goBack.bind(this)}>
    			<img src={goback} alt=""/>
    		</div>
    	</div>
    );
  }
}

export default EmailSignin;