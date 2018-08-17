
import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';



const GoogleMapsWrapper = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkO_ub7b-XvuCg-i7ohVoX6UCS7wuWzh8&v=3.exp&libraries=geometry,drawing",
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
    styles={props.mapStyles}
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
  // The style is copy from https://snazzymaps.com/style/2/midnight-commander
  mapStyles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]

}