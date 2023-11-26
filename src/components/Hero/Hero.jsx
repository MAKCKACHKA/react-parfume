import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
// import "../../styles/main.css";
import "./hero-slider.css";

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

const test = [1, 2];
export default function Hero() {
  const [data, setData] = useState([]);
  useEffect(() => {
    parfums.then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      // pagination={{
      //   clickable: true,
      // }}
      // modules={[Pagination]}
      className="mySwiper"
    >
      {test.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="hero-section">
            <div className="container hero-container">
              <h1 className="hero-title">
                Effective Solutions for Your Business
              </h1>
              <button type="button" className="hero-button" data-modal-open>
                Order Service
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
