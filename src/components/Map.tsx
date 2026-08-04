import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function Debug() {
  const map = useMap();

  useEffect(() => {
    (window as any).map = map;
    console.log("Map is available")
  },[map]);

  return null;
}

export default function Map() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      center={[78, 78]}
      zoom={0}
      minZoom={0}
      maxZoom={5}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Debug />
      <TileLayer url="/tiles/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}