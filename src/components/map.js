// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMap,
// } from "https://cdn.esm.sh/react-leaflet";
import { MapContainer, Popup, Marker, TileLayer, useMap } from "react-leaflet";
// import L from "leaflet";
import React, { useState, useEffect, useCallback } from "react";
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

// const monumentImages = [
//   { id: "profil", src: profil },
//   { id: "koroleva", src: koroleva },
//   { id: "zalyvky", src: zalyvky },
//   { id: "bukovi", src: bukovi },
//   { id: "muzey", src: muzey },
// ];

const findTextByPopup = (popupValue) => {
  return text.find((item) => item.title === popupValue);
};

export default function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [matchingText, setMatchingText] = useState(null);
  const [matchingTextResult, setMatchingTextResult] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onMarkerClick = (e) => {
    const clickedMarker = e.target;
    const updatedMarker = {
      icon: clickedMarker.options.icon.options.iconUrl,
      popup: clickedMarker.options.children.props.children,
    };
    setSelectedMarker(updatedMarker);

    const matchingTextResult = findTextByPopup(updatedMarker.popup);
    setMatchingText(matchingTextResult);

    toggleInfoBlock();
    console.log(selectedMarker);
  };

  const onImageClick = (obj) => {
    setSelectedPhoto(obj);
    toggleInfoPhotoBlock();
  };

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
      popUp: "Верещиця – давні букові ліси",
      icon: veresIcon,
    },
    {
      geolocation: [49.940307, 23.775011],
      popUp: "Лісотипологічний профіль А.П’ясецького",
      icon: forestProfileIcon,
    },
    {
      geolocation: [49.925849, 23.766759],
      popUp: "Польодовикове торфове болото Заливки",
      icon: swampIcon,
    },
    {
      geolocation: [49.916187, 23.752421],
      popUp: "Королева гора над Янівським ставом",
      icon: lakeIcon,
    },
    {
      geolocation: [49.910431, 23.748792],
      popUp: "Музей природи, колонія сірої чаплі",
      icon: museumIcon,
    },
  ];
  // function onMarkerClick(e) {
  //   console.log("Marker clicked!", e.target.options.children.props.children);
  // }

  const [searchBlockVisible, setSearchBlockVisible] = useState(true);
  const [infoBlockVisible, setInfoBlockVisible] = useState(false);
  const [infoPhotoBlockVisible, setInfoPhotoBlockVisible] = useState(false);
  const toggleSearchBlock = () => {
    setSearchBlockVisible(!searchBlockVisible);
  };
  const toggleInfoPhotoBlock = () => {
    //     const findTextByPopup = (popupValue) => {
    //       console.log(popupValue, text);
    //       return text.find((item) => item.title === popupValue);
    //     };
    // console.log();
    //     if (selectedMarker && selectedMarker.popup) {
    //       const matchingTextResult = findTextByPopup(selectedMarker.popup);
    //       console.log(">>", matchingTextResult);
    //       setMatchingText(matchingTextResult);
    //     }
    setInfoPhotoBlockVisible(!infoPhotoBlockVisible);
  };
  const toggleInfoBlock = () => {
    //     const findTextByPopup = (popupValue) => {
    //       console.log(popupValue, text);
    //       return text.find((item) => item.title === popupValue);
    //     };
    // console.log();
    //     if (selectedMarker && selectedMarker.popup) {
    //       const matchingTextResult = findTextByPopup(selectedMarker.popup);
    //       console.log(">>", matchingTextResult);
    //       setMatchingText(matchingTextResult);
    //     }
    setInfoBlockVisible(!infoBlockVisible);
  };

  useEffect(() => {
    if (selectedMarker && selectedMarker.popup) {
      const matchingTextResult = findTextByPopup(selectedMarker.popup);
      setMatchingText(matchingTextResult);
    }
    // console.log(matchingText);
    // setMatchingTextResult(matchingText);
  }, [selectedMarker, setMatchingText]);

  console.log("infoBlockVisible", infoBlockVisible);
  console.log("selectedMarker", selectedMarker);
  console.log("matchingText", matchingText);

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
          {text.map((image) => (
            <img
              className="monument"
              id={image.id}
              src={image.image}
              onClick={() => onImageClick(image)}
            />
          ))}
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
            <Marker
              position={marker.geolocation}
              icon={marker.icon}
              eventHandlers={{ click: onMarkerClick }}
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {infoBlockVisible && selectedMarker && (
        <Infobox
          cross={cross}
          monImage={matchingText.image}
          toggleFunction={toggleInfoBlock}
          // title={text[0].title}
          title={matchingText.title}
          desc={matchingText.desc}
        />
      )}
      {infoPhotoBlockVisible && selectedPhoto && (
        <Infobox
          cross={cross}
          monImage={selectedPhoto.image}
          toggleFunction={toggleInfoPhotoBlock}
          // title={text[0].title}
          title={selectedPhoto.title}
          desc={selectedPhoto.desc}
        />
      )}
    </>
  );
}
