import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw';

export default function MapComponent() {
  let [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw'
      }
      {...viewport}
      onViewportChange={(newView) => setViewport(newView)}
    ></ReactMapGL>
  );
}
