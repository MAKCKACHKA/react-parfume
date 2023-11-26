import { useState } from "react";
import Mobile from "../components/Mobile-menu";
import ScrollUp from "../components/ScrollUp";
import WrapperC from "../components/Wrapper Catalogue";
import Filter from "../components/Filter/Filter";
import Products from "../components/Product List/Products";

// import "../styles/main.css";

export default function Catalog() {
  const [isMobile, setisMobile] = useState(false);

  return (
    <>
      <WrapperC setisMobile={setisMobile}>
        <h1 className="hero-title">Каталог</h1>
        <section className="portfolio-section">
          <Filter />
          <Products />
        </section>
      </WrapperC>

      <ScrollUp />
      {<Mobile isMobile={isMobile} setisMobile={setisMobile} />}
    </>
  );
}
