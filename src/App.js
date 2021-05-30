import logo from './logo.svg';
import './App.css';

import { useRef, useState, useEffect } from 'react';


import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibWNnYWZmaW4iLCJhIjoiY2twYjRsbTg2MHZhMDJ1bnhweDRra253ZCJ9.9TmS9oQA44INeUljuDApCA';
function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>mapboxology</h1>
      </header>

      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
