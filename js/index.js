import L from 'leaflet'
import 'leaflet/dist/leaflet.css!'

L.Icon.Default.imagePath = '/literary-minsk/images/'


var map = L.map('map', {
    center: [
        53.906673602477845,
        27.566628456115723
    ], //skver janki kupaly
    zoom: 15
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([
             53.906673602477845,
             27.566628456115723
         ]).addTo(map)
    .bindPopup('skver janki kupaly');
