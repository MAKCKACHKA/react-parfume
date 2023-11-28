import React from "react";

import "../../styles/main.css";

export default function Form() {
  return (
    <ul className="filter-buttons-list">
      <li className="button-item">
        <button type="button" className="filter-button">
          All
        </button>
      </li>
      <li className="button-item">
        <button type="button" className="filter-button">
          Web Site
        </button>
      </li>
      <li className="button-item">
        <button type="button" className="filter-button">
          App
        </button>
      </li>
      <li className="button-item">
        <button type="button" className="filter-button">
          Design
        </button>
      </li>
      <li className="button-item">
        <button type="button" className="filter-button">
          Marketing
        </button>
      </li>
    </ul>
  );
}
