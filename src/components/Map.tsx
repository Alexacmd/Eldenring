import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function Debug() {
  const map = useMap();

  useEffect(() => {
    console.log("Zoom:", map.getZoom());
    console.log("Center:", map.getCenter());
    console.log("Pixel Bounds:", map.getPixelBounds());
    console.log("Pixel Origin:", map.getPixelOrigin());
  }, [map]);

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