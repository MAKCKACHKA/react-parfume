import React, { useEffect, useState } from "react";

import "../../styles/main.css";
// import "./products.css";
export default function Products() {
  const parfums = fetch(
    "https://makckachka.github.io/parfume-project-layout/parfume.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status: ${response.status}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  const [data, setData] = useState([]);

  useEffect(() => {
    parfums.then((data) => {
      setData(data);
    });
  }, []);

  return (
    <ul className="portfolio-list">
      {data.map((product) => (
        <li key={product.code} className="portfolio-list-item">
          <a href="#" className="portfolio-item-link">
            <div className="img-wrapper">
              <img
                className="prod-img"
                src={product.image}
                alt={product.name}
                width="356"
                height="400"
              />
              <p className="overlay">{product.description}</p>
            </div>
            <div className="portfolio-text">
              <h3 className="portfolio-item-title">{product.name}</h3>
              <p className="portfolio-item-text">{product.description}</p>
            </div>
          </a>
        </li>
      ))}

      {/* <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/"
              alt="Banking App Interface Concept"
              max-width="360"
            />

            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">
              Banking App Interface Concept
            </h3>
            <p className="portfolio-item-text">App</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/cashlesspayment.jpg"
              alt="Cashless Payment"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Cashless Payment</h3>
            <p className="portfolio-item-text">Marketing</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/meditaionapp.jpg"
              alt="Meditaion App"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Meditaion App</h3>
            <p className="portfolio-item-text">App</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/taxiservice.jpg"
              alt="Taxi Service"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Taxi Service</h3>
            <p className="portfolio-item-text">Marketing</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/screenillustrations.jpg"
              alt="Screen Illustrations"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Screen Illustrations</h3>
            <p className="portfolio-item-text">Design</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/onlinecourses.jpg"
              alt="Online Courses"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Online Courses</h3>
            <p className="portfolio-item-text">Marketing</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/instagramstoriessconcept.jpg"
              alt="Instagram Stories Concept"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Instagram Stories Concept</h3>
            <p className="portfolio-item-text">Design</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/organicfood.jpg"
              alt="Organic Food"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Organic Food</h3>
            <p className="portfolio-item-text">Web Site</p>
          </div>
        </a>
      </li>
      <li className="portfolio-list-item">
        <a href="" className="portfolio-item-link">
          <div className="img-wrapper">
            <img
              src="../../images/freshcoffee.jpg"
              alt="Fresh Coffee"
              max-width="360"
            />
            <p className="overlay">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quas molestiae dolores illo adipisci sint? Praesentium culpa
              beatae amet exercitationem?
            </p>
          </div>
          <div className="portfolio-text">
            <h3 className="portfolio-item-title">Fresh Coffee</h3>
            <p className="portfolio-item-text">Web Site</p>
          </div>
        </a>
      </li> */}
    </ul>
  );
}
