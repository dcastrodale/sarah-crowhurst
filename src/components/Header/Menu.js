import React, { Component } from 'react';
import { Link } from 'gatsby';

import './menu.scss';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    }
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    console.log()
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <div className="menu">
        <button
          className={`hamburger hamburger--squeeze ${this.state.menuOpen ? 'is-active' : null}`}
          onClick={this.handleMenuToggle}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className={`menu__menu-overlay ${this.state.menuOpen ? 'is-active' : null}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="digital-strategy-consultancy">Digital Strategy Consultancy</Link>
            </li>
            <li>
              <Link to="paid-social-media-strategy-and-implementation">Paid Social Media</Link>
            </li>
            <li>
              <Link to="building-internal-resource">Building Internal Resource</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}