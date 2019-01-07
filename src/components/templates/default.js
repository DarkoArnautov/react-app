import React, { Component } from 'react';
import PageHeader from '../header/header';
import PageFooter from '../footer/page-footer';
import './default.scss';

class DefaultTemplate extends Component {
	render() {
	  	return (
	  		<div className="tertius-main-page" align="center">
	  			<PageHeader headerType={this.props.headerType} pageType={this.props.pageType}></PageHeader>
	  			<div className="content-container" align="center">
	  				{this.props.children}
	  			</div>
	  			<PageFooter></PageFooter>
	  		</div>
	  	);
	}
}

export default DefaultTemplate;