import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpdHRwcmljZTk2IiwiYSI6ImNrZ2NrbHlvYTAxM2IzOWxqOGYzMWgyMzcifQ.CXWLjbWbWrf1Te2WclqceQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

document.getElementById('map').innerHTML = map;
