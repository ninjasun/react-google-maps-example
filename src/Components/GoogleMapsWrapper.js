
import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';


const GoogleMapsWrapper = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
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
}