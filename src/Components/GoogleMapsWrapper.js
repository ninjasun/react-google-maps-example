
import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';


const noapi = "https://maps.googleapis.com/maps/api/js?=3.exp&libraries=geometry,drawing";

const mapStyle = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#6b7276"},{"weight":"1.00"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#ffc80a"}]},{
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            },
            {
                "weight": 1.4
            }
        ]
    },{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#0c2848"},{"visibility":"on"},{"weight":"1.00"}]}];


const GoogleMapsWrapper = compose(
  withProps({
    googleMapURL: noapi,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
    defaultOptions={{ styles: props.mapStyles }}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
)

export default GoogleMapsWrapper;


GoogleMapsWrapper.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
  markerPosition: PropTypes.object,
  isMarkerShown:PropTypes.bool,
}


GoogleMapsWrapper.defaultProps = {
  zoom: 8,
  center: {lat: -34.397, lng: 150.644  },
  markerPosition: { lat: -34.397, lng: 150.644  },
  isMarkerShown: true,
  mapStyles: mapStyle,

}