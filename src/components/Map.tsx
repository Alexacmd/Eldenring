import { MapContainer, TileLayer} from "react-leaflet";
import L from "leaflet";
import Debug from "./Debug";
import Marker from "./Marker";
import bosses from "../data/bosses.json";
import graceSites from "../data/grace_sites.json";

// const map_bounds: L.LatLngBoundsExpression = [
//   [-512,-512],
//   [512,512],
// ];

const target = L.latLngBounds([[-512, -512], [512, 512]]);


export default function Map() {
  return (
    <MapContainer
      crs={L.CRS.Simple}
      center={[-223, 237]}
      zoom={0}
      minZoom={0}
      maxZoom={5}
      // maxBounds={bounds}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Debug />
      <TileLayer url="/tiles/{z}/{x}/{y}.png" />

      {bosses.map((boss) => (
        <Marker  key={boss.id} data={boss} />
      ))}

      {graceSites.map((site_of_grace) => (
        <Marker key={site_of_grace.id} data = {site_of_grace} />
      ))}

    </MapContainer>
  );
}