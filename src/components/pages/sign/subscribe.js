import React, { Component } from 'react';
import logo from '../../../assets/images/sign-logo.png';
import apple from '../../../assets/images/apple.png';
import Gap from '../../gap/gap';
import SignButton from '../../buttons/sign-button/sign-button';
import './sign.scss';

class Subscribe extends Component {

  signupWithGoogle () {
  	window.location.href = "/post-list";
  }

  signupWithEmail () {
  	window.location.href = "/sign/email-signup";
  }

  render() {
    return (
    	<div className="sign-page" align="center">
    		<div className="sign-container">
	    		<div className="logo" align="center">
	    			<img src={logo} alt="Tertius logo" />
	    		</div>

	    		<div className="main-block" align="center">
	    			<span className="title">subscribe to tertius</span>
	    			<Gap hei="2"></Gap>
	    			<p>Sign up for <span>$5/month</span> or <span>$50/year</span> and start curating your favorite literary moments.</p>
	    			<Gap hei="3"></Gap>
	    			<div className="signin-action">
	    				<SignButton icon="google" clickEvent={this.signupWithGoogle.bind(this)}>Sign up with Google</SignButton>
	    				<Gap hei="18"></Gap>
	    				<SignButton icon="email" clickEvent={this.signupWithEmail.bind(this)}>Sign up with email</SignButton>
	    				<Gap hei="21"></Gap>
	    				<span>Already a subscriber?&nbsp;<a href='/sign/signin'>Sign in</a></span>
	    			</div>
	    		</div>

	    		<div className="apple" align="center">
	    			<img src={apple} alt="" />
	    			<Gap hei="5"></Gap>
	    			<span>Available on the app store for iPhone</span>
	    		</div>
    		</div>
    	</div>
    );
  }
}

export default Subscribe;