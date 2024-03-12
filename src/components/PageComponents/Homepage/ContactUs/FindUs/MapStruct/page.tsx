/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
// import { Map, Marker } from "pigeon-maps";

export default function MapStruct() {
  const positionMap = { lat: -15.768, lng: -47.872 };
  const positionMarker = { lat: -15.766, lng: -47.872 };
  const customIcon = new Icon({
    iconUrl: "icon_marker.png",
    iconSize: [30, 30],
  });
  const [showZoomControl, setShowZoomControl] = useState<boolean>(true);

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize.width > 640) {
      setShowZoomControl(true);
    } else {
      setShowZoomControl(false);
    }
  }, [screenSize.width]);

  return (
    <>
      {/* React-Leaflet */}
      <MapContainer
        center={positionMap}
        zoom={14}
        zoomControl={false}
        className="h-[256px] rounded-sm sm:h-[448px]"
      >
        {showZoomControl ? <ZoomControl></ZoomControl> : ""}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={positionMarker}
          icon={customIcon}
          attribution="Struct - UnB, DF"
        >
          <Popup className="font-nunito text-[8px] font-bold sm:text-[12px]">
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
