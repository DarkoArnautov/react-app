import React, { Component } from 'react';
import logo from '../../../assets/images/sign-logo.png';
import Gap from '../../gap/gap';
import SignButton from '../../buttons/sign-button/sign-button';
import './sign.scss';

class Signin extends Component {
  signinWithGoogle () {
  	window.location.href = "/post-list";
  }

  signinWithEmail () {
  	window.location.href = "/sign/email-signin";
  }

  render() {
    return (
    	<div className="sign-page" align="center">
    		<div className="sign-container">
	    		<div className="logo" align="center">
	    			<img src={logo} alt="Tertius logo" />
	    		</div>

	    		<div className="main-block" align="center">
	    			<span className="title">welcome back</span>
	    			<Gap hei="2"></Gap>
	    			<p>Sign in to your existing account.</p>
	    			<Gap hei="3"></Gap>
	    			<div className="signin-action">
	    				<SignButton icon="google" clickEvent={this.signinWithGoogle.bind(this)}>Sign in with Google</SignButton>
	    				<Gap hei="18"></Gap>
	    				<SignButton icon="email" clickEvent={this.signinWithEmail.bind(this)}>Sign in with email</SignButton>
	    				<Gap hei="21"></Gap>
	    				<span>Don’t have a subscription?&nbsp;<a href="/sign/subscribe">Sign up</a></span>
	    			</div>
	    		</div>
    		</div>
    	</div>
    );
  }
}

export default Signin;