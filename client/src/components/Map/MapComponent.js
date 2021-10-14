import React, { useState, PureComponent } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup, FullscreenControl  } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row } from 'reactstrap';
import { Room } from "@material-ui/icons";
import axios from "axios";
import "./MapComponent.css"

const mapStyle = {
  width: '100%',
  height: 600,
};

const mapboxApiKey =
  'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw';

const params = {
  country: 'us',
};

const navControlStyle= {
  right: 10,
  bottom: 25
};

const fullscreenControlStyle= {
  right: 10,
  top: 10
};

class MapView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 32.7762719,
        longitude: -96.7968559,
        zoom: 10,
      },
    };
  }

  onSelected = (viewport, item) => {
    this.setState({
      viewport,
    });
  };

  render() {
    const { viewport } = this.state;
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h2>Pet Search Based on Location</h2>
          </Col>
        </Row>
        <Row className="py-4">
          <Col xs={2}>
            <Geocoder
              mapboxApiAccessToken={
                'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw'
              }
              onSelected={this.onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value=""
              queryParams={params}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={
                'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw'
              }
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({ viewport })}
            >
              <NavigationControl style={navControlStyle} />

              <FullscreenControl style={fullscreenControlStyle} />
              z`
              <Marker
                latitude={32.8418011}
                longitude={-96.7815281}
                offsetLeft={-20} 
                offsetTop={-10}
              >
                <Room style={{fontSize:viewport.zoom * 4, color:"blue"}}/>
              </Marker>

              <Popup
              latitude={32.8418011}
              longitude={-96.7815281}
              closeButton={true}
              closeOnClick={false}
              anchor="left"
              offsetLeft={10} 
              offsetTop={-5}
              >
              <div className="petInfo">
                <label>Name: </label>
                <h5>Snowball</h5>
                <label>Breed: </label>
                <h6>chihuahua</h6>
                <label>Description: </label>
                <p>This is a black small dog with a red butt.</p>
              </div>
              </Popup>

            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MapView;

// Commented stuff is previous map but will leave in here just in case :)

// mapboxgl.accessToken =
//   'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw';

// export default function MapComponent() {
//   let [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   return (
//     <ReactMapGL
//       mapboxApiAccessToken={
//         'pk.eyJ1Ijoia3Jpc3R5Z3VlcnJlcm8yMCIsImEiOiJja3Vob2U1MnYyZmxvMndvOHIzMzNzMnZiIn0.WY_nDAowRmL88PNZs7iJRw'
//       }
//       {...viewport}
//       onViewportChange={(newView) => setViewport(newView)}
//     ></ReactMapGL>
//   );
// }
