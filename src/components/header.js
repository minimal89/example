import PropTypes from "prop-types"
import React from "react"
import logo from '../images/talkwalker-logo-white.svg';
import "./header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const Header = ({ siteTitle }) => (
  <>
    <header className="block-space">
      <div className="top-links">
          <a href="#">English </a>
          <a href="#">Alerts / Search</a>
          <a href="#">Client Login</a>
          <a href="#">+352 20 33 35 3 43</a>
      </div>
    </header>
    <header className="block-space fullWidthMenu">
      <div className="bottom-nav">
        <input type="checkbox" id="checkbox-toggle" />
        <div className="logo-wrapper">
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <label className="hamburger" htmlFor="checkbox-toggle">
            <FontAwesomeIcon className="open" icon={faBars} />
            <FontAwesomeIcon className="close" icon={faTimes} />
          </label>
        </div>
        <ul className="nav">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Covid-19</a>
          </li>
          <li>
            <a href="#">Enterprise</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <a href="#" className="btn btn-lg menuButton">Free Demo</a>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
