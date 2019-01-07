import React, { Component } from 'react';
import TButton from '../../buttons/tbutton/tbutton';
import PageFooter from '../../footer/page-footer';
import Gap from '../../gap/gap';
import TIcon from '../../icon-svg/icon-svg';

//  load images //////
import logo from '../../../assets/images/home-logo.png';
import sublogo from '../../../assets/images/subscription-logo.png';
import dot from '../../../assets/images/dot.png';
import phonedesc from '../../../assets/images/phone-desc.png';

import './home.scss';

class Home extends Component {

  signin () {
    window.location.href = "/sign/signin";
  }

  subscribe () {
    window.location.href = "/sign/subscribe";
  }

  render() {
    return (
      <div className="main-container main-back home-screen" align="center">
        <div className="content-container">
          <div className="header">
              <div className="header-logo" align="left">
                <img src={logo} className="logo" alt="logo"/>
              </div>
              <div className="header-action" align="right">
                <TButton btntype="btnnoframe btn-black" lpad="20" rpad="20" clickEvent={this.signin.bind(this)}>Sign in</TButton>
                <TButton btntype="btnframe btn-green" lpad="23" rpad="24" clickEvent={this.subscribe.bind(this)}>Subscribe</TButton>
              </div>
          </div>
          
          <div className="cover-section" align="center">
            <span>Tertius remembers your favorite literary moments.</span><br/>
            <div className="dot">
              <img className="" src={dot} alt="dot 3" />
            </div>
            <p>Imagine if you could recall the best excerpts from everything you’ve ever read. Whether it’s scintillating prose, profound insights, or facts and figures—Tertius allows you to capture text from the pages of books and magazines so you can tag, cite and store them in a searchable archive of your favorite literary moments.</p>
            <button type="button">Get started</button>
          </div>

          <div className="phone-section">
            <div className="img-section">
              <img className="" src={phonedesc} alt="Phone Application Description" />
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="content-container">
            <div className="about-box" align="left">
              <div className="content">
                <span className="title"> about</span>
                <Gap hei="27"></Gap>
                <p>Tertius is for lifelong learners: we who love to read and think and communicate. We who value the insightful contributions of others and hope to contribute something meaningful of our own.</p>
                <Gap hei="1"></Gap>
                <span className="desc">Available for iPhone</span>
              </div>
            </div>
            <div className="special-box" align="left">
              <div className="content">
                <div className="special-content">
                  <div className="special-item teachers">
                    <div className="sp-icon">
                      <TIcon icon="mic" wid="27" hei="24" fcolor="#aa9c84"/>
                    </div>
                    <div className="content">
                      <span>Teachers</span>
                      <Gap hei="7"></Gap>
                      <p>Curate content for a future sermon, lecture or talk while you’re reading and fresh ideas are flowing.</p>
                    </div>
                  </div>
                  <div className="line"></div>

                  <div className="special-item writers">
                    <div className="sp-icon">
                      <TIcon icon="edit-3" wid="27" hei="24" fcolor="#aa9c84"/>
                    </div>
                    <div className="content">
                      <span>Writers</span>
                      <Gap hei="7"></Gap>
                      <p>Track who wrote what where and recall it in an instant without thumbing thru page after page. </p>
                    </div>
                  </div>

                  <div className="line"></div>
                  <div className="special-item academics">
                    <div className="sp-icon">
                      <TIcon icon="study" wid="27" hei="24" fcolor="#aa9c84"/>
                    </div>
                    <div className="content">
                      <span>Academics</span>
                      <Gap hei="7"></Gap>
                      <p>Experience the satisfaction of having access to the information you’ve deemed to be most meaningful.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-container subscription-section" align="center">
          <div className="logo">
            <img src={sublogo} alt="Subscription Icon" />
          </div>
          <span className="title">subscription</span>
          <Gap hei="28"></Gap>
          <p>Sign up for <span>$5/month</span> or <span>$50/year</span> and archive unlimited content.<br/>Always saved daily and never stored on your phone or computer.</p>
          <button onClick={this.subscribe.bind(this)}>Subscribe</button><br/>
          <span className="question">Have a question? <a href="/">Get support</a></span>
          <Gap hei="100"></Gap>
        </div>
        <PageFooter></PageFooter>
      </div>
    );
  }
}

export default Home;