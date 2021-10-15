import React, { useState, PureComponent } from 'react';
import ReactMapGL, {
	Marker,
	NavigationControl,
	Popup,
	FullscreenControl,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row } from 'reactstrap';

import { Room } from "@material-ui/icons";
import "./MapComponent.css"
import petData from "./mapData/pet.json"


mapboxgl.workerClass =
	// eslint-disable-next-line import/no-webpack-loader-syntax
	require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
  
const mapStyle = {
	width: '100%',
	height: 600,
};

const params = {
	country: 'us',
};

const navControlStyle = {
	right: 10,
	bottom: 25,
};

const fullscreenControlStyle = {
	right: 10,
	top: 10,
};

const geolocateControlStyle= {
  left: 10,
  top: 10
};

class MapView extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedPet: null,
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

  componentDidMount() {
    const listener = e => {
      if (e.key === "Escape") {
        this.setState({
          selectedPet: null
        });
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  };

  render() {
    const { viewport, selectedPet } = this.state;
    console.log(selectedPet);
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

              {petData.features.map( pet => (
                <Marker
                key={pet.properties.PET_ID}
                onClick={()=>{
                  this.setState({
                    selectedPet: pet
                  })
                }}
                latitude={pet.geometry.coordinates[1]}
                longitude={pet.geometry.coordinates[0]}
              >
                <Room style={{fontSize:viewport.zoom * 4, color:"blue"}}/>
              </Marker>
              ))}
              
              {selectedPet ? (
                <Popup
                latitude={selectedPet.geometry.coordinates[1]}
                longitude={selectedPet.geometry.coordinates[0]}
                onClose={() => {
                  this.setState({
                    selectedPet: null
                  })
                }}
                >
                
                <div className="petInfo">
                  <label>Pet Name: </label>
                  <h6>{selectedPet.properties.NAME}</h6>
                  <label>Pet Type: </label>
                  <h6>{selectedPet.properties.TYPE}</h6>
                  <label>Pet Color: </label>
                  <h6>{selectedPet.properties.COLOR}</h6>
                  <label>Pet Location: </label>
                  <h6>{selectedPet.properties.Location}</h6>
                </div>
                </Popup>
                
              ) : null}
              
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
