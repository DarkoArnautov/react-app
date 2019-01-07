import React, { Component } from 'react';
import logo from '../../../assets/images/sign-logo.png';
import goback from '../../../assets/images/goback.png';
import Gap from '../../gap/gap';
import './sign.scss';

class EmailSignup extends Component {

  goBack () {
  	window.history.back();
  }

  signup () {
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
	    			<span className="title">sign up with email</span>
	    			<Gap hei="2"></Gap>
	    			<p>Enter your email and we’ll send a “magic link” to your inbox so you can login.</p>
	    			<Gap hei="3"></Gap>
	    			<div className="signin-form" align="center">
	    				<input type="text" name="fullname" id="fullname" placeholder="Your full name"/>
	    				<Gap hei="32"></Gap>
	    				<input type="text" name="email" id="email" placeholder="Your email"/>
	    				<Gap hei="39"></Gap>
	    				<button className="form-action" type="button" onClick={this.signup.bind(this)}>Create account</button>
	    			</div>
	    		</div>

	    		<div className="last-footer" align="center">
	    			<Gap hei="5"></Gap>
	    			<span>By creating an account, I accept Tertius’<br/><a href="/terms-of-service">Terms of Service.</a></span>
	    		</div>
    		</div>
    		<div className="sign-back" onClick={this.goBack.bind(this)}>
    			<img src={goback} alt=""/>
    		</div>
    	</div>
    );
  }
}

export default EmailSignup;