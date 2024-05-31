import React, { useEffect, useRef } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Typed from "typed.js";
import backgroundImage from "../assets/images/mountain-range-sillhouette-code.jpg";

const TypedText = () => {
  const softDev = useRef(null);
  useEffect(() => {
    if (softDev.current) {
      const typed = new Typed(softDev.current, {
        strings: ["<h2>Software</h2> <h2>Developer</h2>"],
        showCursor: false,
        typeSpeed: 80,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);
  
  return <span ref={softDev} />;
};

const Cover = () => {

  return (
    <div className="cover">
      <ParallaxBanner style={{height: "100%"}}
        layers={[
          {
            children: <img src={backgroundImage} />,
            expanded: false,
            translateY: [-45, 10],
            opacity: [1, .25],
          },
        ]}
      >
        <ParallaxBannerLayer>
          <h1>Fergus Brown</h1>
          <TypedText />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
};

export default Cover;
