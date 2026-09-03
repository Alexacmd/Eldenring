import {Marker as LeafletMarker} from "react-leaflet"
import { MarkerData } from "../types/marker"
import L from "leaflet";

interface MarkerProps{
  data:MarkerData;
}

const icons = {
  boss: L.icon({
    iconUrl:"icons/map_cursor_02/icon_29.png",
    iconSize:[32,32],
  }),

  site_of_grace: L.icon({
    iconUrl: "icons/map_cursor_02/icon_8.png",
    iconSize: [32,32],
  }),
    item: L.icon({
    iconUrl: "/icons/item.png",
    iconSize: [32, 32],
  }),

  dungeon: L.icon({
    iconUrl: "/icons/dungeon.png",
    iconSize: [32, 32],
  }),

  npc: L.icon({
    iconUrl: "/icons/npc.png",
    iconSize: [32, 32],
  }),

  golden_seed: L.icon({
    iconUrl: "/icons/golden-seed.png",
    iconSize: [32, 32],
  }),
};

export default function Marker({data}: MarkerProps){
  return(
    <LeafletMarker 
    position={data.coords}
    icon= {icons[data.category]}
    />
  );
}