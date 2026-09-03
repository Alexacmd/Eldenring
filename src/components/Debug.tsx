import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L, { latLng } from "leaflet";

export default function Debug() {
  const map = useMap();

  useEffect(() => {
    // const centre = map.getCenter()
    // console.log("Center:", centre.lat, centre.lng)

    function handleMousemove(event: L.LeafletMouseEvent) {
        console.log(event.latlng.lat, event.latlng.lng);
        // console.log(map.getBounds());
        // console.log(map.getSize());
    }

    map.on ("click", handleMousemove);
    
    return () => {
        map.off("click", handleMousemove);
    };

}, [map]);

return null;
}