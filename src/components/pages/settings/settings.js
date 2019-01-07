import React, { Component } from 'react';
import ReactModal from 'react-modal';
import DefaultTemplate from '../../templates/default';
import TButton from '../../buttons/tbutton/tbutton';
import Gap from '../../gap/gap';
import './settings.scss';

class Settings extends Component {
	constructor(){
		super();
		this.state = {
			emailNotification: false,
			deactive_modal_open: false,
			account_modal_open: false,
			close_icon: false
		};

		this.onOpenDeactiveModal = this.onOpenDeactiveModal.bind(this);
		this.onCloseDeactiveModal = this.onCloseDeactiveModal.bind(this);
		this.onOpenAccountModal = this.onOpenAccountModal.bind(this);
		this.onCloseAccountModal = this.onCloseAccountModal.bind(this);
	}

	componentDidMount() {
	    ReactModal.setAppElement('body');
	};

	handleNotification(event) {
	    this.setState({ emailNotification: event.target.id === 'on' ? true : false});
	};

	onOpenDeactiveModal = () => {
	    this.setState({ deactive_modal_open: true });
	};
	 
	onCloseDeactiveModal = () => {
	    this.setState({ deactive_modal_open: false });
	};

	onOpenAccountModal = () => {
	    this.setState({ account_modal_open: true });
	};
	
	onCloseAccountModal = () => {
	    this.setState({ account_modal_open: false });
	};

	editEmail () {

	}

	downloadZip () {
		
	}

	render() {
	  	return (
	  		<DefaultTemplate>
				<div className="page-container settings" align="left">
					<div className="title">
						<span>settings</span>
					</div>

					<div className="content sections">
						<div className="section">
							<div className="section-title">
								<span>Your email</span>
							</div>
							<Gap hei="25"></Gap>
							<div className="email-row">
								<div className="email-label" align="left">
									<span>brianmatthewrobinson@gmail.com</span>
								</div>
								<div className="email-btn" align="right">
									<TButton btntype="btnframe btn-gray" lpad="15" rpad="15" clickEvent={this.editEmail.bind(this)}>Edit Email</TButton>
								</div>
							</div>
						</div>

						<div className="section">
							<div className="section-title">
								<span>Email notifications</span>
							</div>
							<Gap hei="14"></Gap>
							<p>We’ll email you when we have news to share about content and product features, or questions related to user research.</p>
							<Gap hei="19"></Gap>
							<div className="email-notification">
								<button id="on" className={this.state.emailNotification ? "on active" : "on"} onClick={this.handleNotification.bind(this)}>On</button>
								<button id="off" onClick={this.handleNotification.bind(this)} className={this.state.emailNotification ? "off" : "off active"}>Off</button>
							</div>
							<Gap hei="14"></Gap>
						</div>

						<div className="section">
							<div className="section-title">
								<span>Download archive</span>
							</div>
							<Gap hei="14"></Gap>
							<p>Download a copy of the content you’ve archived on Tertius to a .zip file.</p>
							<Gap hei="19"></Gap>
							<div className="">
								<TButton rpad="18" lpad="18" btntype="btnframe btn-gray" clickEvent={this.downloadZip.bind(this)}>Download .zip</TButton>
							</div>
							<Gap hei="14"></Gap>
						</div>

						<div className="section">
							<div className="section-title">
								<span>Deactivate account</span>
							</div>
							<Gap hei="14"></Gap>
							<p>Deactivating your account will suspend your service within a few minutes. You can sign up again anytime to reactivate your account and restore its content. </p>
							<Gap hei="19"></Gap>
							<div className="link" onClick={this.onOpenDeactiveModal}><span>sDeactivate account</span></div>
							<ReactModal 
					           isOpen={this.state.deactive_modal_open}
					           contentLabel=""
					           onRequestClose={this.onCloseDeactiveModal}
					           style={{
							    overlay: {
							      position: 'fixed',
							      top: 0,
							      left: 0,
							      right: 0,
							      bottom: 0,
							      backgroundColor: 'rgba(243, 236, 223	, 0.9)'
							    },
							    content: {
							      position: 'absolute',
							      top: '153px',
							      left: 'calc(50% - 221px)',
							      width: '442px',
							      height: '231px',
							      borderRadius: '5px',
							      borderColor: '#e7e3db',
							      padding: 0,
							      background: '#fbf7f0'
							    }
							  }}
					        >
					        	<div className="deactive-modal" align="center">
					        		<p>Are you sure you want to deactivate your account?</p>
					        		<Gap hei="14"/>
					        		<button className="confirm-deactive">Deactivate</button>
					        		<Gap hei="14"/>
					        		<div className="cancel-deactive" onClick={this.onCloseDeactiveModal}>Nevermind</div>
					        	</div>
					        </ReactModal>
							<Gap hei="14"></Gap>
						</div>

						<div className="section">
							<div className="section-title">
								<span>Delete account</span>
							</div>
							<Gap hei="14"></Gap>
							<p>Permanently delete your account and all of your content.</p>
							<Gap hei="19"></Gap>
							<div className="link" onClick={this.onOpenAccountModal}><span>Delete account</span></div>
							<ReactModal 
					           isOpen={this.state.account_modal_open}
					           contentLabel=""
					           onRequestClose={this.onCloseAccountModal}
					           style={{
							    overlay: {
							      position: 'fixed',
							      top: 0,
							      left: 0,
							      right: 0,
							      bottom: 0,
							      backgroundColor: 'rgba(243, 236, 223	, 0.9)'
							    },
							    content: {
							      position: 'absolute',
							      top: '153px',
							      left: 'calc(50% - 221px)',
							      width: '442px',
							      height: '441px',
							      borderRadius: '5px',
							      borderColor: '#e7e3db',
							      padding: 0,
							      background: '#fbf7f0'
							    }
							  }}
					        >
					        	<div className="account-delete-modal" align="center">
					        		<p>
					        			We’re sorry to see you go. Once your account is deleted, all of your content will be lost forever. If you’re not sure about that, we suggest you deactivate or contact support@tertius.app instead.<br/><br/>
										To confirm deletion, type your contact <br/>email below and click ‘Delete account’:
									</p>
									<Gap hei="5"/>
					        		<input className="contract-email" type="text" />
					        		<Gap hei="35"/>
					        		<button className="confirm-account-delete">Delete account</button>
					        		<Gap hei="11"/>
					        		<div className="cancel-account-delete" onClick={this.onCloseAccountModal}>Nevermind</div>
					        	</div>
					        </ReactModal>
							<Gap hei="14"></Gap>
						</div>
					</div>
				</div>
			</DefaultTemplate>
	    );
	}
}

export default Settings;