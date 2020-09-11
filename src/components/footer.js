import React from "react"
import "./footer.scss";
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';

const Footer = () => (
  <>
      <div className="footer">
      <div className="block block-space">
           <div className="footer-content">
             <div className="footer-links">
             <div className="flex flex-sm-column flex-md-row justify-space-between">
                <div className="col col-xs-6 col-sm-4 col-md-3 col-lg-2">
                  <ul>
                    <h3>Products</h3>
                    <li>Social Listening</li>
                    <li>Social Media Analytics</li>
                    <li>Reporting</li>
                    <li>Action</li>
                    <li>Influencer One</li>
                    <li>Quick Search</li>
                    <li>Command Center</li>
                    <li>Talkwalker AI Engine</li>
                  </ul>
                </div>
                <div className="col col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <ul>
                    <h3>Solutions</h3>
                    <li>PR/Communication</li>
                    <li>Digital Marketing</li>
                    <li>Consumer Insights</li>
                    <li>Agencies</li>
                    <li>Why Talkwalker</li>
                  </ul>
                </div>
                <div className="col col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <ul>
                    <h3>Academy</h3>
                    <li>Publications</li>
                    <li>Blog</li>
                    <li>Webinars</li>
                    <li>Industry Research</li>
                    <li>Live Insights</li>
                    <li>Digital Excellence Center</li>
                    <li>API User Manual</li>
                    <li>User Manual</li>
                  </ul>
                </div>
                <div className="col col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <ul>
                    <h3>Pricing</h3>
                    <li>Plans</li>
                    <h3>About Us</h3>
                    <li>Team</li>
                    <li>In the News</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Reviews</li>
                  </ul>
                </div>
               <div className="col col-xs-6 col-sm-4 col-md-4 col-lg-2 border-left">
                   <ul>
                     <h3>Must read</h3>
                     <li>Social Media Listening Guide</li>
                     <li>Glossary Of Social Media Terms</li>
                     <li>Digital Footprint Guide</li>
                     <li>How to Track Social Mentions</li>
                     <li>How to Measure Share of Voice</li>
                     <li>Definitive guide to PR measurement</li>
                     <li>Influencer Marketing Guide</li>
                     <li>Social Media Measurement Guide</li>
                     <li>Consumer Intelligence Guide</li>
                     <li>Social Media Analytics Tools</li>
                   </ul>
                </div>
             </div>
             </div>
           </div>
      </div>
      </div>
      <div className="block block-space">
        <div className="flex flex-column flex-lg-row align-items-start">
          <div className="col col-lg-8 copyright">
            <ul className="flex flex-row">
              <li>Copyright © 2020 Talkwalker Inc. All Rights Reserved</li> &nbsp;|&nbsp;
              <li  className="skyblue">Impressum</li> &nbsp;|&nbsp;
              <li  className="skyblue">Author Privacy Policy</li> &nbsp;|&nbsp;
              <li  className="skyblue"> Privacy Policy</li> &nbsp;|&nbsp;
              <li  className="skyblue">Terms of service </li>
            </ul>
            <h5>Europe - Talkwalker Sarl: <span style={{color: "#1A9EDA"}}>16, Avenue Monterey L-2163 Luxembourg</span></h5>
            <h5>US - Talkwalker Inc: <span style={{color: "#1A9EDA"}}>485 Lexington Avenue, Floor 26th, NY, NY 10017</span></h5>
            <h5>APAC - Talkwalker Pte. Ltd: <span style={{color: "#1A9EDA"}}>8 Cross Street #18-110, Manulife Tower, Singapore 048424</span></h5>
          </div>
          <div className="col col-lg-4 social">
            <ul className="flex justify-end">
              <li><img src={facebook}/></li>
              <li><img src={twitter}/></li>
              <li><img src={linkedin}/></li>
              <li><img src={youtube}/></li>
              <li><img src={instagram}/></li>
            </ul>
          </div>
        </div>
      </div>
  </>
)

export default Footer
