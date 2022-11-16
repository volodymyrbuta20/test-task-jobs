import GoogleMapReact from 'google-map-react';
import {FaMapMarkerAlt} from "react-icons/fa";

const ReactComponent = () => <div><FaMapMarkerAlt style={{width: "30px", height: "30px"}}/></div>;

export default function SimpleMap(props){
    const defaultProps = {
        center: {
            lat: props.location.lat,
            lng: props.location.long
        },
        zoom: 12
    };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJ8_wzoJ7hU4l0CcLXrg3MCGNk8Cny8Mk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <ReactComponent/>
      </GoogleMapReact>
    </div>
  );
}