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
      <h3 style={green}>Sostenibilidad y el espacio en casa</h3>
      <p>En el presente apartado te proponemos algunos ejemplos útiles a la hora de pensar los espacios que habitamos, para que sean lo más eficiente posible, tanto en el manejo de la energía como en el del agua y en los materiales que se utilizan. Analizamos cómo puede diseñarse nuestra vivienda para lograr confort y sostenibilidad.</p>
    </div>
  );
}

const green = {
  color: "rgb(11, 126, 25)"
};

// const neonGreen = {
//   boxSizing: "1px",
//   border: "none",
//   borderRadius: "20px",
//   padding: "1em 0.5em 0.2em 1em",
//   boxShadow: "0px 5px 26px 8px rgb(11, 126, 25)"
// }

// const textGlow = {
//   textShadow: "0 0 10px rgb(11, 126, 25), 0 0 20px rgb(11, 126, 25), 0 0 30px rgb(11, 126, 25), 0 0 40px rgb(11, 126, 25), 0 0 50px rgb(11, 126, 25)",
//   color: "inherit"
// }

export default Chapter3;
