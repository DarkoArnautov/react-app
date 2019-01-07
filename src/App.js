import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/pages/home/home";

import Signin from "./components/pages/sign/signin";
import Subscribe from "./components/pages/sign/subscribe";
import EmailSignin from "./components/pages/sign/email-signin";
import EmailSignup from "./components/pages/sign/email-signup";

import Search from "./components/pages/search/search";
import Filter from "./components/pages/filter/filter";

import PostList from "./components/pages/posts/postlist";
import Post from "./components/pages/posts/post";
import EditTitleExcerpt from "./components/pages/posts/edit-title-excerpt";
import EditTags from "./components/pages/posts/edit-tags";
import EditComment from "./components/pages/posts/edit-comment";
import EditCitation from "./components/pages/posts/edit-citation";
import Settings from "./components/pages/settings/settings";

import TermsOfService from "./components/pages/terms-of-service/terms-of-service";
import PrivacyPolicy from "./components/pages/privacy-policy/privacy-policy";
import './App.scss';

class App extends Component {
  render() {
    return (
      	<Router>
      		<div>
	        	<Route exact path = "/" component = {Home}/>
            <Route exact path = "/home" component = {Home}/>
	        	<Route exact path = "/sign/signin" component = {Signin}/>
	        	<Route exact path = "/sign/subscribe" component = {Subscribe}/>
            <Route exact path = "/sign/email-signin" component = {EmailSignin}/>
            <Route exact path = "/sign/email-signup" component = {EmailSignup}/>
            <Route exact path = "/search" component = {Search}/>
            <Route exact path = "/filter" component = {Filter}/>
            <Route exact path = "/post-list" component = {PostList}/>
            <Route exact path = "/post" component = {Post}/>
            <Route exact path = "/edit-title-excerpt" component = {EditTitleExcerpt}/>
            <Route exact path = "/edit-tags" component = {EditTags}/>
            <Route exact path = "/edit-comment" component = {EditComment}/>
            <Route exact path = "/edit-citation" component = {EditCitation}/>
            <Route exact path = "/settings" component = {Settings}/>
	        	<Route exact path = "/terms-of-service" component = {TermsOfService}/>
	        	<Route exact path = "/privacy-policy" component = {PrivacyPolicy}/>
	        </div>
      	</Router>
    );
  }
}

export default App;
