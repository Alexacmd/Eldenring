import { MapContainer, TileLayer} from "react-leaflet";
import L from "leaflet";
import Debug from "./Debug";

const bounds: [[number,number], [number,number]] = [
  [-460,0],
  [0,500],
];

export default function Map() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      center={[-224, 240]}
      zoom={0}
      minZoom={0}
      maxZoom={5}
      maxBounds={bounds}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Debug />
      <TileLayer url="/tiles/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}