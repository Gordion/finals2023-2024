// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMap,
// } from "https://cdn.esm.sh/react-leaflet";
import { MapContainer, Popup, Marker, TileLayer, useMap } from "react-leaflet";
// import L from "leaflet";

import museum from "../images/museumR.png";
import lake from "../images/dockR.png";
import forestProfile from "../images/treesR.png";
import forest from "../images/forest.png";
import veres from "../images/pine-treeR.png";
import swamp from "../images/swampR.png";
import listSearchIcon from "../images/search.png";
import { Icon, L } from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export default function Map() {
  // let DefaultIcon = L.icon({
  //   iconUrl: icon,
  //   shadowUrl: iconShadow,
  // });

  // L.Marker.prototype.options.icon = DefaultIcon;
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

  return (
    <>
      <img className="listSearch" src={listSearchIcon} />
      <div className="side-menu"></div>
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

          {/* <TileLayer
          attribution="Esri World Imagery"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
        /> */}

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
      <div className="detailed-info"></div>
    </>
  );
}
