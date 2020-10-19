//import geojson from 'geojson.json'
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpdHRwcmljZTk2IiwiYSI6ImNrZ2NrbHlvYTAxM2IzOWxqOGYzMWgyMzcifQ.CXWLjbWbWrf1Te2WclqceQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-97.5,26.7568057], // starting position [lng, lat]
  zoom: 3.8, // starting zoom
  // scrollZoom: true,
  // touchZoomRotate: true
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
      victim: `Freddie Gray (1989-2015)`,
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
      coordinates: [-81.681290, 41.505493]
    },
    properties: {
      victim: `Malissa Williams (1982-2012)`,
      description: `Born June 20, 1982, Malissa had mental illness and was constantly homeless. Killed on November 29, 2012 by police along with Timothy Russell
                    Got in a car with Russell and was followed by police because an onlooker report that the pair was going to get drugs.
                    Once Russell realized they were being followed he sped up and a police chased ensued. He stuck his hand of the window to get police to stop shooting. Instead, thirteen police officers fired over 100 round into the car.
                    `,
      protest: `Major protests were held by Black Lives Matter activists in Cleveland after Brelo’s acquittal. `,

      riot:`After Brelo’s acquittal, rioting broke out in addition to protests and 71 people were arrested. Among them were 30 adult males, 16 women, and few minor. The main charges were obstruction of justice and aggravated rioting.`,

      badge: `Police officer Michael Brelo got out his of police car and fired more rounds into the car after it had crashed into another police car.
              On May 30, 2014, Michael Brelo was indicted on two counts of voluntary manslaughter because he continued firing long after the other twelve officers stopped.
              He was found not guilty by Judge John P. O’Donnell on May 23, 2015.
              Six police officers including Brelo where fired on January 26, 2016.
              According to Black Past, by October 2017 five of these officers had been reinstated.`
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-93.258133, 44.986656]
    },
    properties: {
      victim: `George Floyd (1973-2020)`,

      description: `On May 25, 2020, George Floyd bought some cigarettes at a convenience store.
                    An employee suspected his $20 bill was counterfeit so they called the police.
                    Officers arrived and Derek Chauvin handcuffed and pinned Mr. Floyd to the ground by kneeling
                    on his neck while the other three officers held Mr. Floyd down. Chauvin did not move his knee
                    until well after the paramedics arrived. George Floyd was at this point unresponsive and later pronounced dead.
                    This case went viral because it was filmed by bystanders and Mr. Floyd can be heard continuously saying “I can’t breathe”.
                    On June 1, the results of two autopsies were released. One was requested by the Floyd family and the other from a government agency.
                    The reports both said George Floyd’s death was a homicide but differed on the underlying factors besides Chauvin kneeling on his neck.`,

      protest: `Tens of thousands of people from 140 American cities protested after Floyd's death.
                The National Guard was activated in 21 or more states including Minnesota.
                Minneapolis officers used tear gas and fired rubber bullets at the crowds after some rioters targeted the precinct of the four former police officers and vandalized police cars with graffiti.
                On May 31, Minneapolis police arrested approximately 200 people were arrested including a man who drove a tanker truck toward a crowd.`,

      riot:`Some businesses in Minneapolis was set ablaze including restaurants and an auto-parts store. Vandalism and fires led to Minnesota Governor Tim Walz called in the National Guard.
            Minneapolis mayor Jacob Frey established a 8 p.m. curfew after the large peaceful protests turned into looting and domestic terrorism by some people.
            Mr. Frey stated that the city was confronting organized crime members, out-of-state instigators, white supremacists and so on. `,

      badge: `All four officers (Derek Chauvin, Thomas Lane, J. Alexander Kueng, and You Thao) was fired the day after George Floyd’s death.
              Derek Chauvin had previously faced at least 17 misconduct complaints over a 20 year period for acts such as brutality.
              The Hennepin County attorney Mike Freeman charged Derek Chauvin with third-degree murder and second-degree manslaughter on May 29th which equated to a maximum 35-year sentence.
              On June 3rd, another charge of second-degree murder was given to Chauvin. The other officers were charged with aiding and abetting second-degree murder. `
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-85.764771, 38.328732]
    },
    properties: {
      victim: `Breonna Taylor (1993-2020)`,

      description: ``,

      protest: ``,

      riot:``,

      badge: ``
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.935242, 40.730610]
    },
    properties: {
      victim: `Eric Garner (1970-2014)`,

      description: ``,

      protest: ``,

      riot:``,

      badge: ``
    }
  },

  // {
  //   type: 'Feature',
  //   geometry: {
  //     type: 'Point',
  //     coordinates: []
  //   },
  //   properties: {
  //     victim: ``,
  //
  //     description: ``,
  //
  //     protest: ``,
  //
  //     riot:``,
  //
  //     badge: ``
  //   }
  // },

  // {
  //   type: 'Feature',
  //   geometry: {
  //     type: 'Point',
  //     coordinates: []
  //   },
  //   properties: {
  //     victim: ``,
  //
  //     description: ``,
  //
  //     protest: ``,
  //
  //     riot:``,
  //
  //     badge: ``
  //   }
  // },
  ]
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
