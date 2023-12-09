// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMap,
// } from "https://cdn.esm.sh/react-leaflet";
import { MapContainer, Popup, Marker, TileLayer, useMap } from "react-leaflet";
// import L from "leaflet";
import { React, useState } from "react";
import museum from "../images/museumR.png";
import lake from "../images/dockR.png";
import forestProfile from "../images/treesR.png";
import forest from "../images/forest.png";
import veres from "../images/pine-treeR.png";
import swamp from "../images/swampR.png";
import listSearchIcon from "../images/search.png";
import backArrow from "../images/left-arrow.png";
import bukovi from "../images/bukovi-lisy-modified.jpg";
import koroleva from "../images/Koroleva-hora.jpg";
import muzey from "../images/Muzey-pryrody-modified.jpg";
import profil from "../images/Profil-A.Piasetskoho-modified.jpg";
import zalyvky from "../images/Zalyvky-modified.jpg";
import cross from "../images/close.png";
import { Icon, L } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Infobox from "./infobox";
import text from "./details-texts.js";

export default function Map() {
  const museumIcon = new Icon({
    iconUrl: museum,
    iconSize: [38, 38],
  });
  const forestProfileIcon = new Icon({
    iconUrl: forestProfile,
    iconSize: [38, 38],
  });
  const lakeIcon = new Icon({
    iconUrl: lake,
    iconSize: [40, 40],
  });
  const forestIcon = new Icon({
    iconUrl: forest,
    iconSize: [38, 38],
  });
  const veresIcon = new Icon({
    iconUrl: veres,
    iconSize: [38, 38],
  });
  const swampIcon = new Icon({
    iconUrl: swamp,
    iconSize: [38, 38],
  });
  const markers = [
    {
      geolocation: [49.959405, 23.648103],
      popUp: "Ліс Верещиця",
      icon: veresIcon,
    },
    {
      geolocation: [49.940307, 23.775011],
      popUp: "Лісотипологічний профіль Андрія П'ясецького",
      icon: forestProfileIcon,
    },
    {
      geolocation: [49.925849, 23.766759],
      popUp: "Торфове болото Заливки",
      icon: swampIcon,
    },
    {
      geolocation: [49.916187, 23.752421],
      popUp: "Королева гора над Янівським ставом",
      icon: lakeIcon,
    },
    {
      geolocation: [49.910431, 23.748792],
      popUp: "Музей природи Розточчя",
      icon: museumIcon,
    },
  ];
  const [searchBlockVisible, setSearchBlockVisible] = useState(true);
  const [infoBlockVisible, setInfoBlockVisible] = useState(true);
  const toggleSearchBlock = () => {
    setSearchBlockVisible(!searchBlockVisible);
  };
  const toggleInfoBlock = () => {
    setInfoBlockVisible(!infoBlockVisible);
  };

  return (
    <>
      <img
        className="listSearch"
        src={listSearchIcon}
        onClick={toggleSearchBlock}
      />
      {searchBlockVisible && (
        <div className="side-menu">
          <div className="list-search-bar">
            <img
              className="backArrow left"
              src={backArrow}
              onClick={toggleSearchBlock}
            />
            <span className="search-text">Пошук</span>
            <p className="right"></p>
          </div>
          <img className="monument" src={profil} />
          <img className="monument" src={koroleva} />
          <img className="monument" src={zalyvky} />
          <img className="monument" src={bukovi} />
          <img className="monument" src={muzey} />
        </div>
      )}
      <div className="map">
        <MapContainer
          style={{ width: "100%", height: "87.9vh" }}
          center={[49.924579, 23.737062]}
          zoom={13}
          dragging={true}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Marker position={marker.geolocation} icon={marker.icon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}

          {/* <Marker position={[49.917293, 23.751952]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        </MapContainer>
      </div>
      {infoBlockVisible && (
        // <div className="detailed-info">
        //   <img className="monument-full" src={koroleva} />
        //   <img className="cross" src={cross} onClick={toggleInfoBlock} />
        //   <div className="monument-info">
        //     <span className="monument-title">
        //       Королева гора над Янівським ставом
        //     </span>
        //     <p className="monument-text">
        //       Саме тут Іван Франко написав свого "Мойсея". З цього місця
        //       відкриваються величні панорами неповторних розточанських
        //       ландшафтів. Польодовиковий останець, що височіє над Янівським
        //       ставом, в минулому – одне з найулюбленіших місць відпочинку
        //       польських королів.
        //     </p>
        //     <span className="monument-button">Продовження</span>
        //   </div>
        // </div>
        <Infobox
          cross={cross}
          monImage={koroleva}
          toggleFunction={toggleInfoBlock}
          title={text[0].title}
          desc={text[0].desc}
        />
      )}
    </>
  );
}
