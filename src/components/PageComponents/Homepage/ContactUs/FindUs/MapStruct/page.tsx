/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { Map, Marker } from "pigeon-maps";

export default function MapStruct() {
  const positionMap = { lat: -15.768, lng: -47.872 };
  const positionMarker = { lat: -15.766, lng: -47.872 };
  const customIcon = new Icon({
    iconUrl: "icon_marker.png",
    iconSize: [30, 30],
  });

  return (
    <>
      {/* React-Leaflet */}
      <MapContainer
        center={positionMap}
        zoom={14}
        style={{
          height: "448px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={positionMarker}
          icon={customIcon}
          attribution="Struct - UnB, DF"
        >
          <Popup className="font-nunito font-bold">
            Struct - Empresa Júnior de <br></br>Engenharia de Computação
            <br></br>
            <br></br>
            UnB - Brasília, DF, 70297-400
          </Popup>
        </Marker>
      </MapContainer>
      {/* Pigeon Maps */}
      {/* <Map height={448} defaultCenter={[-15.766, -47.872]} defaultZoom={15}>
        <Marker width={30} anchor={[-15.766, -47.872]} color="red" />
      </Map> */}
    </>
  );
}
