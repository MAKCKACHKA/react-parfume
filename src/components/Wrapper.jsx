import React, { useState } from "react";

import "../images/icons.svg";
import { FaTiktok } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

// import "./wrapper-styles.css";
import "../styles/main.css";
import ScrollUp from "./ScrollUp";
import Mobile from "./Mobile-menu";

import { useLocation } from "react-router-dom";

export default function Wrapper() {
  const [isMobile, setisMobile] = useState(false);
  const location = useLocation().pathname;
  return (
    <>
      <header>
        <div className="container header-container">
          <nav className="navigation">
            {/* <Link className="logo" to="/goit-react-hw-05-movies" end="true">
              Home
            </Link> */}
            <Link className="logo" to="/react-parfume" end="true">
              <span className="logo-first-part">Web</span>Studio
            </Link>
            <ul className="navigation-list">
              <li className="navigation-link">
                <Link
                  to="/react-parfume"
                  end="true"
                  className={
                    location === "/react-parfume" ? "link current-page" : "link"
                  }
                >
                  Головна
                </Link>
              </li>
              <li className="navigation-link">
                <Link
                  to="/react-parfume/catalog"
                  end="true"
                  className={
                    location === "/react-parfume/catalog"
                      ? "link current-page"
                      : "link"
                  }
                >
                  Каталог
                </Link>
              </li>
              {/* <li className="navigation-link">
                <Link to="/react-parfume" end="true" className="link">
                  <FiShoppingCart className="cart-icon" />
                </Link>
              </li> */}
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
          <Link to="/react-parfume/buy" end="true" className="link">
            <FiShoppingCart className="cart-icon" />
            <div className="cart-icon-info">
              <p>1</p>
            </div>
          </Link>

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

      <Suspense fallback={<div className="hero-title">Loading page...</div>}>
        <Outlet />
      </Suspense>

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
                <a
                  href="https://www.instagram.com/?hl=en"
                  className="footer-social-list-link"
                >
                  <IoLogoInstagram className="footer-social-list-icon" />
                </a>
              </li>
              <li className="footer-social-list-item">
                <a
                  href="https://www.tiktok.com/"
                  className="footer-social-list-link"
                >
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
      <ScrollUp />
      {<Mobile isMobile={isMobile} setisMobile={setisMobile} />}
    </>
  );
}
