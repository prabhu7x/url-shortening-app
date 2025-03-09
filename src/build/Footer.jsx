import React from 'react'
import images from './Images';

function Footer() {
  return (
    <footer>
      <div className="boost">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
      <div className="shortly">
        <h1>Shortly</h1>
        <ul className="features">
          <span>Features</span>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>

        <ul className="resources">
          <span>Resources</span>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <ul className="company">
          <span>Company</span>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="social-med-icons">
        <a href="#">
          <img src={images.icon_facebook} alt="" />
        </a>
        <a href="#">
          <img src={images.icon_twitter} alt="" />
        </a>
        <a href="#">
          <img src={images.icon_pinterest} alt="" />
        </a>
        <a href="#">
          <img src={images.icon_instagram} alt="" />
        </a>
      </div>
      <div className="attribution">
        Challenge by{"frontendMentor"}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Prabhu7k</a>.
      </div>
    </footer>
  );
}

export default Footer