import { IoMdClose } from "react-icons/io";

import "../styles/main.css";
export default function Mobile({ setisMobile, isMobile }) {
  return (
    <div
      className={
        !isMobile
          ? "menu-container js-menu-container"
          : "menu-container js-menu-container is-open"
      }
      id="mobile-menu"
    >
      <button
        className="menu-toggle mobile-close-btn"
        onClick={() => setisMobile(false)}
      >
        <IoMdClose className="mobile-close-btn-icon" />
      </button>

      <div className="mobile-menu">
        <nav className="mobile-navigation">
          <ul className="mobile-navigation-list">
            <li className="mobile-navigation-link">
              <a href="./index.html" className="nav-link">
                Studio
              </a>
            </li>
            <li className="mobile-navigation-link">
              <a href="./portfolio.html" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="mobile-navigation-link contacts">
              <a href="#" className="nav-link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <address>
          <ul className="mobile-adress-list">
            <li className="mobile-adress-item">
              <a href="tel:+110001111111" className="mobile-adress-link">
                +11 (000) 111-11-11
              </a>
            </li>
            <li className="mobile-adress-item">
              <a
                href="mailto:info@devstudio.com"
                className="mobile-adress-link"
              >
                info@devstudio.com
              </a>
            </li>
          </ul>
        </address>
        <ul className="mobile-social-list">
          <li className="mobile-social-list-item">
            <a href="#" className="mobile-social-list-link">
              <svg className="mobile-social-list-icon">
                <use href="../images/icons.svg#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="mobile-social-list-item">
            <a href="" className="mobile-social-list-link">
              <svg className="mobile-social-list-icon">
                <use href="../images/icons.svg#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="mobile-social-list-item">
            <a href="" className="mobile-social-list-link">
              <svg className="mobile-social-list-icon">
                <use href="../images/icons.svg#facebook"></use>
              </svg>
            </a>
          </li>
          <li className="mobile-social-list-item">
            <a href="" className="mobile-social-list-link">
              <svg className="mobile-social-list-icon">
                <use href="../images/icons.svg#linkedin"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
