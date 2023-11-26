import { useState } from "react";
// import "./App.css";
import Mobile from "../components/Mobile-menu";
import ScrollUp from "../components/ScrollUp";
import Wrapper from "../components/Wrapper";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Top from "../components/Top Sales/Top";
import Response from "../components/Response/Response";
import Video from "../components/Video/Video";
import About from "../components/About us/About";

function Home() {
  const [isMobile, setisMobile] = useState(false);

  return (
    <div className="App">
      <Wrapper setisMobile={setisMobile}>
        <Hero />
        <About></About>
        <Top>
          <Slider />
        </Top>
        <Response>
          <Slider />
        </Response>
        <Video>
          <Slider />
        </Video>
      </Wrapper>
      <ScrollUp />
      {<Mobile isMobile={isMobile} setisMobile={setisMobile} />}
    </div>
  );
}

export default Home;
