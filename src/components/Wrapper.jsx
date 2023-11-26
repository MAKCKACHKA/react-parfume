import React from "react";

import "../images/icons.svg";
import { FaTiktok } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

// import "./wrapper-styles.css";
import "../styles/main.css";
export default function Wrapper({ setisMobile, children }) {
  return (
    <>
      <header>
        <div className="container header-container">
          <nav className="navigation">
            <a href="./index.html" className="logo">
              <span className="logo-first-part">Web</span>Studio
            </a>
            <ul className="navigation-list">
              <li className="navigation-link">
                <a href="./index.html" className="link current-page">
                  Головна
                </a>
              </li>
              <li className="navigation-link">
                <a href="./portfolio.html" className="link">
                  Каталог
                </a>
              </li>
              <li className="navigation-link">
                <a href="#" className="link">
                  Покупки
                </a>
              </li>
            </ul>
          </nav>
          <address>
            <ul className="adress-list">
              <li className="adress-item">
                <a href="mailto:info@devstudio.com" className="adress-link">
                  info@devstudio.com
                </a>
              </li>
              <li className="adress-item">
                <a href="tel:+110001111111" className="adress-link">
                  +11 (000) 111-11-11
                </a>
              </li>
            </ul>
          </address>
          <button
            className="menu-toggle js-open-menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            onClick={() => setisMobile(true)}
          >
            {/* <svg className="mobile-menu-button">
              <use href="./icons.svg\#icon-brgr-converted"></use>
            </svg> */}
            <IoMenuSharp className="mobile-menu-button" />
          </button>
        </div>
      </header>
      {children}
      <footer className="footer">
        <ul className="container footer-list">
          <li className="footer-container">
            <a href="./index.html" className="logo">
              <span className="logo-first-part">Web</span>Studio
            </a>
            <p className="footer-text">
              Increase the flow of customers and sales for your business with
              digital marketing & growth solutions.
            </p>
          </li>
          <li className="footer-social-list-box">
            <p className="footer-contain-text">Social media</p>
            <ul className="footer-social-list">
              <li className="footer-social-list-item">
                <a href="#" className="footer-social-list-link">
                  <IoLogoInstagram className="footer-social-list-icon" />
                </a>
              </li>
              <li className="footer-social-list-item">
                <a href="" className="footer-social-list-link">
                  <FaTiktok className="footer-social-list-icon" />
                </a>
              </li>
              {/* <li className="footer-social-list-item">
                <a href="" className="footer-social-list-link">
                  <svg className="footer-social-list-icon">
                    <use href="../images/icons.svg#facebook"></use>
                  </svg>
                </a>
              </li>
              <li className="footer-social-list-item">
                <a href="" className="footer-social-list-link">
                  <svg className="footer-social-list-icon">
                    <use href="../images/icons.svg#linkedin"></use>
                  </svg>
                </a>
              </li> */}
            </ul>
          </li>

          <li className="subscribe-item">
            <p className="footer-contain-text">Subscribe</p>
            <form className="subscribe-form">
              <label className="email-label">
                <input
                  type="email"
                  name="email"
                  placeholder=" E-mail"
                  className="email-input"
                  required
                />
              </label>
              <button className="subscribe-button" type="submit">
                Subscribe
                <svg className="footer-subscribe-icon">
                  <use href="../images/icons.svg#icon-send"></use>
                </svg>
              </button>
            </form>
          </li>
        </ul>
      </footer>
    </>
  );
}
