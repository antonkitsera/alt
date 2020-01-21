import React from 'react'
import GoogleMapReact from 'google-map-react'

import MarkerIcon from '../assets/icon-marker.svg'

const defaultProps = {
  center: {
    lat: 50.447734, 
    lng: 30.512667,
  },
  zoom: 14,
}

const MarkerComponent = ({ text }) => (
    <div className="map-marker">
        <p className="map-marker__text">{text}</p>
        <img className="map-marker__icon" src={MarkerIcon} alt="Marker"/>
    </div>
)

const GoogleMap = () => (
  <section className="map">
    <div className="map__wrapper container" style={{ height: '400px', width: '100%' }}  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
    <GoogleMapReact
      options={{
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "saturation": -100
                },
                {
                  "lightness": 60
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
      }}
      bootstrapURLKeys={{ key: 'AIzaSyAYvgI3aT67BHQSBqqATXjXTh4J9ol2srk' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <MarkerComponent
        lat={50.445720}
        lng={30.512667}
        text={'Kiev, Bogdan Khmelnitsky 17/52'}
      />
    </GoogleMapReact>
    </div>
  </section>
)

export default GoogleMap