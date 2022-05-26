import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.Navbar} data-testid="Navbar">
  <div class="navbar">
    <div class="leftnav">
      <div class="dropdown">
        <button class="dropbtn">About Us
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Who We Are</a>
          <a href="#">Our Team</a>
          <a href="#">Testimonials</a>
        </div>
      </div>
      <a href="#Events">Events</a>
      <div class="dropdown">
        <button class="dropbtn">Artists
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">2021</a>
          <a href="#">2022</a>
          <a href="#">Producers</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Media
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Photos</a>
          <a href="#">Video</a>
          <a href="#">Articles</a>
        </div>
      </div>
      <a href="#Sponsors-">Sponsors</a>
    </div>
    <div class='rightnav'>
      <a href='https://www.youtube.com/channel/UCWol48d1OWvCiBH47TEJdJQ'>YT</a>
      <a href='https://www.instagram.com/theknock303/'>IG</a>
    </div>
  </div>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
