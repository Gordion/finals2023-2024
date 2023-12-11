import { React, useState } from "react";
import cross from "../images/close.png";
export default function Infobox(props) {
  return (
    <div className="detailed-info">
      <img className="monument-full" src={props.monImage} />
      <img className="cross-map" src={cross} onClick={props.toggleFunction} />
      <div className="monument-info">
        <span className="monument-title">
          {props.title}
          {/* Королева гора над Янівським ставом */}
        </span>
        <p className="monument-text">
          {props.desc}
          {/* Саме тут Іван Франко написав свого "Мойсея". З цього місця
          відкриваються величні панорами неповторних розточанських ландшафтів.
          Польодовиковий останець, що височіє над Янівським ставом, в минулому –
          одне з найулюбленіших місць відпочинку польських королів. */}
        </p>
        <span className="monument-button">Продовження</span>
      </div>
    </div>
  );
}
