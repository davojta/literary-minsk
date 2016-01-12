import L from 'leaflet'
import 'leaflet/dist/leaflet.css!'
import $ from 'jquery'
import 'dwa012/html5-qrcode/lib/jsqrcode-combined.min'
import 'dwa012/html5-qrcode/src/html5-qrcode'

L.Icon.Default.imagePath = '/literary-minsk/images/'


var map = L.map('map', {
    center: [
        53.906673602477845,
        27.566628456115723
    ], //skver janki kupaly
    zoom: 13
});

let isAudioStarted = false;
$('#reader').html5_qrcode(function(data){
    console.log('data', data);
    if (data && data.toLowerCase && data.toLowerCase().indexOf('brouka')) {
        const $audio = $('#brouka_audio')
        if (!isAudioStarted) {
            $audio[0].load();
            $audio[0].play();
            isAudioStarted = true;
        }
    }
                              // do something when code is read
                          },
                          function(error){
                              //show read errors
                          }, function(videoError){
        //the video stream could be opened
    }
);



L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var kupalaMarker = L.marker([
             53.906673602477845,
             27.566628456115723
         ], {
    title: 'Kupala',
    marker_id: 'kupala'
}).addTo(map)
    .bindPopup('skver janki kupaly');

var broukaMarker = L.marker([
                          53.89932551290641,
                          27.56103605031967
                      ], {
                          title: 'Brouka',
                          marker_id: 'brouka'
                      }).addTo(map)
    .bindPopup('Музей Броўкі');




const $audio =  $('#audio');

kupalaMarker.on('click', (e) => {
    $audio[0].load();
    $audio[0].play();
    console.log('brouka marker click', e)
})

broukaMarker.on('click', (e) => {
    const $audio = $('#brouka_audio')

    $audio[0].load();
    $audio[0].play();
    console.log('brouka marker click', e)
})
