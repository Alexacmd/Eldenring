import { MapContainer, TileLayer} from "react-leaflet";
import L from "leaflet";
import Debug from "./Debug";

export default function Map() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      center={[100, 100]}
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