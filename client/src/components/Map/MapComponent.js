import React, { useState, PureComponent } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row } from 'reactstrap';

const mapStyle = {
  width: '100%',
  height: 600,
};

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw';

// const params = {
//   country: 'us',
// };

// class MapView extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//         latitude: 45.50884,
//         longitude: -73.58781,
//         zoom: 15,
//       },
//     };
//   }

//   onSelected = (viewport, item) => {
//     this.setState({
//       viewport,
//     });
//   };

//   render() {
//     const { viewport } = this.state;
//     return (
//       <Container fluid={true}>
//         <Row>
//           <Col>
//             <h2>Search</h2>
//           </Col>
//         </Row>
//         <Row className="py-4">
//           <Col xs={2}>
//             <Geocoder
//               mapboxApiAccessToken={
//                 'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw'
//               }
//               onSelected={this.onSelected}
//               viewport={viewport}
//               hideOnSelect={true}
//               value=""
//               queryParams={params}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <ReactMapGL
//               mapboxApiAccessToken={
//                 'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw'
//               }
//               mapStyle="mapbox://styles/mapbox/streets-v11"
//               {...viewport}
//               {...mapStyle}
//               onViewportChange={(viewport) => this.setState({ viewport })}
//             ></ReactMapGL>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default MapView;

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
