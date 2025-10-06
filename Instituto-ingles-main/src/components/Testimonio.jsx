import React from "react";
import "../styles/testimonio.css";
import Estrella from "../components/Estrella";
import { div } from "framer-motion/client";

const Testimonio = ({ titulo, subtitulo, img }) => {
  return (
    <div className="testimonio">
      <div className="primera-parte">
        <div className="testimonio-img-container">
          <img src={img} alt="ana" />
        </div>

        <div className="container-recomendacion">
          <div>
            <h4>{titulo}</h4>
          </div>
          <div className="estrellas-testimonio">
            <Estrella />
            <Estrella />
            <Estrella />
            <Estrella />
            <Estrella />
          </div>
        </div>
      </div>
      
      <div className="line"></div>

      <div className="testimonio-informacion-container">
        <div>
          <p>{subtitulo}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonio;
