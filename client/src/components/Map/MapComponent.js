import React, { useState } from 'react';
import ReactMapGL, { Marker , Popup} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw';

export default function MapComponent() {
  let [viewport, setViewport] = useState({
    latitude: 32.7762719,
    longitude: -96.7968559,
    zoom: 10,
    width: '965px',
    height: '50vh',
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw'
      }
      mapStyle="mapbox://styles/mapbox/streets-v11"
      {...viewport}
      onViewportChange={(newView) => setViewport(newView)}
    >
      <marker longitude={-96.785152} latitude={32.841959} Pin size={10} >
      
      </marker>

    </ReactMapGL>
  );
}
