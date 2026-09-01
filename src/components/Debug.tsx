import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

export default function Debug() {
  const map = useMap();

  useEffect(() => {
    function handleMousemove(event: L.LeafletMouseEvent) {
        console.log(event.latlng);
        console.log(map.getBounds());
        console.log(map.getSize());
    }

    map.on ("click", handleMousemove);
    
    return () => {
        map.off("click", handleMousemove);
    };

}, [map]);

return null;
}