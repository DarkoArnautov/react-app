import React, { Component } from 'react';
import logo from '../../assets/images/home-logo.png';
import TIcon from '../icon-svg/icon-svg';
import TButton from '../buttons/tbutton/tbutton';
import './header.scss';

export default class PageHeader extends Component {

	constructor(){
		super();
		this.state = {
			showMenu: false
		};

		this.showMenu = this.showMenu.bind(this);
    	this.closeMenu = this.closeMenu.bind(this);
	}
	
	showMenu(event) {
	    event.preventDefault();
	    
	    this.setState({ showMenu: true }, () => {
	    	document.addEventListener('click', this.closeMenu);
	    });
	}

	closeMenu() {
	    this.setState({ showMenu: false }, () => {
	    	document.removeEventListener('click', this.closeMenu);
	    });
	}

	saveTitleExcerpt () {

	}

	cancelTitleExcerpt () {
		window.history.back();
	}

	render() {
	  	return (
	    	<div className="header-back" align="center">
	    		<div className="content-container">
	    			<div className="logo" align="left">
	    				<a href="/post-list"><img src={logo} alt="" /></a>
	    			</div>
	    			<div className="header-action" align="right">
	    				<div className="actions">
	    					<TIcon cl="btn-icon" icon="user" wid="30" hei="30" fcolor="#757575" onIconClick={this.showMenu}/>
	    					{
	    						this.state.showMenu ? (
			    					<div className="sub-menu">
	    								<ul className="user-menu">
	    									{
	    										this.props.headerType !== 'edit-type' ?(
	    											<li><div>New post</div></li>
	    										) : (null)
	    									}
			    							<li><a href="/settings"><div>Settings</div></a></li>
			    							<li><a href="/terms-of-service"><div>Help</div></a></li>
			    							<li><a href="/home"><div>Sign out</div></a></li>
	    								</ul>
			    					</div>
		    					) : ( null )
	    					}
	    				</div>
		    			{
		    				this.props.pageType === 'edit-title-excerpt-type' ?
			    			(
			    				<div className="actions">
			    					<TButton btntype="btnnoframe btn-gray" rpad="20" lpad="18" clickEvent={this.cancelTitleExcerpt.bind(this)}>Cancel</TButton>
			    					<TButton btntype="btnframe btn-green" rpad="14" lpad="12" clickEvent={this.saveTitleExcerpt.bind(this)}>Save and close</TButton>
			    				</div>
			    			) : ( null )
		    			}
		    			{
		    				this.props.headerType !== 'edit-type' ? (
								<div className="actions">
			    					<a href="/filter"><TIcon cl={this.props.pageType === 'filter' ? "btn-icon-active" :"btn-icon"} icon="filter" wid="32" hei="30" fcolor="#757575"/></a>
			    				</div>
			    			) : ( null )
			    		}
			    		{
			    			this.props.headerType !== 'edit-type' ? (
			    				<div className="actions">
			    					<a href="/search"><TIcon cl={this.props.pageType === 'search' ? "btn-icon-active" :"btn-icon"} icon="search" wid="30" hei="30" fcolor="#757575"/></a>
			    				</div>
		    				) : ( null )
		    			}
	    			</div>
	    		</div>
	    	</div>
	    );
	}
}