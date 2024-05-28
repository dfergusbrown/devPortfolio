import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Cover = () => {
  const softDev = useRef(null);
  useEffect(() => {
    const typed = new Typed(softDev.current, {
      strings: ["<h2>Software</h2> <h2>Developer</h2>"],
      showCursor: false,
      typeSpeed: 80,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="cover">
      <h1>Fergus Brown</h1>
      <span ref={softDev} />
    </div>
  );
};

export default Cover;
