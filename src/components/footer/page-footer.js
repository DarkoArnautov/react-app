import React, { Component } from 'react';
import './page-footer.scss';

class PageFooter extends Component {
  render() {
    return (
    	<div className="footer-back" align="center">
    		<div className="content-container">
    			<div className="copyright" align="left">
    				<span>Copyright © 2019 Tertius. All rights reserved.</span>
    			</div>
    			<div className="footer-action" align="right">
    				<span><a href="/privacy-policy">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/terms-of-service">Terms of Service</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/support">Support</a></span>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default PageFooter;