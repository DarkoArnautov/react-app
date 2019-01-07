import React, { Component } from 'react';
import DefaultTemplate from '../../templates/default';
import Gap from '../../gap/gap';
import './privacy-policy.scss';

class PrivacyPolicy extends Component {
	render() {
	  	return (
		  	<DefaultTemplate>
				<div className="page-container privacy-policy" align="left">
					<div className="title">
						<span>privacy policy</span>
					</div>

					<Gap hei="23"/>
					<div className="content">
						<p>
	    					<span>Effective Date: January 1, 2019</span><br/><br/>
							<span>Introduction</span><br/><br/>
							As we state in our 3 Laws of Data Protection, we are committed to protecting the privacy of your data. This Privacy Policy explains more specifically what information Tertius Corporation and its Group Companies (together, “Tertius,” “we” or “us”) collect from Account Holders and End Users (“you”) through Tertius’s websites and applications, which we refer to collectively as “the Service.” The Service includes the Tertius Software.<br/><br/>
							Please note, if you use Tertius Basic, Plus, or Premium, you are both the Account Holder and End User of an Tertius service account. If you use Tertius Business, the Account Holder is the Customer who has contracted with Tertius as defined in our Tertius Business Agreement and the End Users are the individuals whose user accounts are linked to that Tertius Business account. You can find these and other defined terms used in this policy in our Glossary at the end of this page.<br/><br/>
							Although significant changes are rare, this policy may be amended as new features, technology, or legal requirements arise, so please check back from time to time. We’ll notify you if we make a significant change and, where required, seek your consent.<br/>
							What information does Tertius collect? 
							We built Tertius to help you remember and organize your ideas, thoughts, and memories. That means you can input, upload, or store in Tertius any text, images, and other data that you choose—we refer to that information as “Content”. We also collect and receive the following types of information:<br/><br/>
							Basic subscriber information. To open your account and process payments, we collect and receive basic information like your email address and, depending on how you purchase a subscription to Tertius Plus, Tertius Premium or Tertius Business (each a “Paid Service”), your billing address and other payment information.<br/><br/>
							Usage data. We collect and log data on how you and others access and use Tertius, for example, the act of creating a note or sharing a note. Usage data may be collected through cookies, and similar technologies. For more information, including how to opt-out, visit our Cookie Information page.<br/><br/>
							Location information. We collect the IP address you use to connect to the Service, and — if you choose to share it — your location information from a mobile device.<br/><br/>
							Device information. We collect information about the number and type of devices you use to connect to the Service, as well as information about the operating systems on those devices (e.g., iOS, Android, Windows). Learn more about information our applications collect from your device on our Data Usage page.<br/><br/>
							We also may link your subscriber information with data we receive from our partners and other third parties to help understand your needs and provide you with a better experience.  For example, if you create or log into an Tertius account using your Google Apps credentials via single sign-on, we will have access to certain information such as your name and email address as authorized in your Google Apps profile settings.<br/><br/>
							<span>How does Tertius use my information?</span><br/><br/>
							We have specific rules for how and when we use the information we collect and receive. We describe these below.<br/><br/>
							<span>What does Tertius do with my information?</span><br/><br/>
							We are committed to protecting the privacy of your information. Below, we describe the ways in which we use the information we collect and receive to provide, maintain, and improve the Service; to provide troubleshooting and customer support; to protect the Service for all our users; to contact you; and to administer Tertius Business accounts.<br/><br/>
							We use a number of technologies to help you get the most out of the Service. Our systems automatically analyze your data to power Tertius features and to continually improve the Service for you in a way that does not require anyone to look at your Content. This may include, for example:<br/><br/>
						</p>
					</div>
				</div>
			</DefaultTemplate>
	    );
	}
}

export default PrivacyPolicy;