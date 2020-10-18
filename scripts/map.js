//import geojson from 'geojson.json'
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpdHRwcmljZTk2IiwiYSI6ImNrZ2NrbHlvYTAxM2IzOWxqOGYzMWgyMzcifQ.CXWLjbWbWrf1Te2WclqceQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-95.4600575,42.7568057], // starting position [lng, lat]
  zoom: 3.5, // starting zoom
  scrollZoom: true,
  touchZoomRotate: true
});

const nav = new mapboxgl.NavigationControl({
  showCompass: true
});
map.addControl(nav,'top-right');

var scale = new mapboxgl.ScaleControl({
maxWidth: 80,
unit: 'imperial'
});
map.addControl(scale);

scale.setUnit('imperial');

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-76.609383, 39.299236]
    },
    properties: {
      victim: 'Freddie Gray (1989-2015)',
      footnote: 1,
      description: `Freddie Gray grew up in the Gilmore Homes projects located in Sandtown-Winchester which is Baltimore’s poorest black neighborhood.
                    His arrest on April 12, 2015 was recorded on a bystander’s cellphone.
                    He died on April 19, 2015 from a spinal cord injury while in police custody.`,

      protest: `Anger from years of unchecked police brutality in Baltimore exploded after Freddie Gray’s death.
                Thousands began protesting in the streets of Baltimore.`,

      riot: `Riots began on April 27th, 2015, the day Gray was laid to rest.
             The police shut down public transportation near the mall which prevent students from going home and the riots started.
             Sandtown was burned that evening: Police cars, a drug store , and a many store fronts.`,

      badge: `The police officers involved are: BPD Officers Caesar Goodson, William Porter, Garrett Miller, and Edward Nero; Lieutenant Brian Rice; and Sergeant Alicia White.
              They were put on paid leave which caused the protests to intensify.
              On September 12, 2017, the Justice Department decided not to prosecute the officers due to lack of evidence.`,
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.414, 37.776]
    },
    properties: {
      victim: 'person2',
      description: 'San Francisco, California',
      protest: 'some information here',
      riot:'more info here',
      badge: 'officer info here'
    }
  }]
};


// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    const victim = document.createElement('div');
    victim.className = 'victim-marker';
    const footnotes = marker.properties.footnote ? `<a href="footnotes.html"><sup class="footnote">${marker.properties.footnote}</sup></a>` : "";

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(victim)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);


    new mapboxgl.Marker(victim)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 15 }) // add popups
        .setHTML(`
        <div class="tooltip">
            <p class="tooltip" id="victim-name">${marker.properties.victim} ${footnotes}</p>
            <p class="tooltip">${marker.properties.description} ${footnotes}</p>
        </div>
        `))
        .addTo(map);


        var protest = document.createElement('div');
        protest.className = 'protest-marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(protest)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);


          new mapboxgl.Marker(protest)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 5 }) // add popups
            .setHTML(`
              <div class="tooltip">
                <p class="tooltip">${marker.properties.protest} ${footnotes}</p>
              </div>
            `))
            .addTo(map);


          // create a HTML element for each feature
          var riot = document.createElement('div');
          riot.className = 'riot-marker';

          // make a marker for each feature and add to the map
          new mapboxgl.Marker(riot)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);


          new mapboxgl.Marker(riot)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 5 }) // add popups
              .setHTML(`
              <div class="tooltip">
                  <p class="tooltip">${marker.properties.riot}</p>
              </div>
              `))
              .addTo(map);

              // create a HTML element for each feature
              var badge = document.createElement('div');
              badge.className = 'badge-marker';

              // make a marker for each feature and add to the map
              new mapboxgl.Marker(badge)
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);


                new mapboxgl.Marker(badge)
                  .setLngLat(marker.geometry.coordinates)
                  .setPopup(new mapboxgl.Popup({ offset: 5}) // add popups
                  .setHTML(`
                    <div class="tooltip">
                      <p class="tooltip">${marker.properties.badge}</p>
                    </div>
                  `))
                  .addTo(map);
});
