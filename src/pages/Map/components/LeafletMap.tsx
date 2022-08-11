import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

interface Props {
  width: string;
  height: string;
}

const LeafletMap = (props: Props) => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          width: props.width,
          height: props.height,
        }}
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default LeafletMap;
