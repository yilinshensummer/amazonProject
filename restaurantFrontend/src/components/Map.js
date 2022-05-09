import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Map(props) {
    //console.log(props.restaurant.latitude)
    //let loactionInfo = props.restaurant;
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627 
      },
      zoom: 11
    };
     
        
  
    
  return (
    <div style={{ height: '40vh', width: '40%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyDNFTSVFQ-dDSScJkcUzp5qhqcjT47RYcM'}}
            defaultCenter={defaultProps.center}
            defaultZoom = {defaultProps.zoom}>
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
        </GoogleMapReact>

    </div>
  )
}
// Map.defaultProps = {
//     center:{
//         lat: 45.904404,
//         lng: -122.74946
//     }
// }

