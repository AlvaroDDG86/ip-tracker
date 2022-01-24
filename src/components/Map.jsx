import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Map(props) {
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  return (
    <div className="h-full z-10 bg-black">
      <MapContainer
        className="h-full"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        { props.marker && <Marker position={props.marker}></Marker> }
        { props.marker && <ChangeMapView coords={props.marker} /> }
      </MapContainer>
    </div>
  );
}