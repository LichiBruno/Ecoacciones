import React from "react";
import { FaRecycle as Recycle } from "react-icons/fa";

function Chapter3() {
  return (
    <div className="Chapters">
      <Recycle
        style={{
          color: "rgb(11, 126, 25)",
          // uncomment the lines below to center icon
          // position: "relative",
          // left: "50%",
          width: "2em",
          height: "2em",
        }}
      />
      <h3>si</h3>
    </div>
  );
}

// const green = {
//   color: "rgbrgb(11, 126, 25)"
// };

// const neonYellow = {
//   boxSizing: "1px",
//   border: "none",
//   borderRadius: "20px",
//   padding: "1em 0.5em 0.2em 1em",
//   boxShadow: "0px 5px 26px 8px rgbrgb(11, 126, 25)"
// }

// const textGlow = {
//   textShadow: "0 0 10px rgbrgb(11, 126, 25), 0 0 20px rgbrgb(11, 126, 25), 0 0 30px rgbrgb(11, 126, 25), 0 0 40px rgbrgb(11, 126, 25), 0 0 50px rgbrgb(11, 126, 25)",
//   color: "inherit"
// }

export default Chapter3;
