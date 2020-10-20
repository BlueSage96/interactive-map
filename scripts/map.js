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
      victim: `Freddie Gray (1989-2015)<sup><a href="footnotes.html">1</a></sup>`,

      description: `Freddie Gray grew up in the Gilmore Homes projects located in Sandtown-Winchester which is Baltimore’s poorest black neighborhood.
                    His arrest on April 12, 2015, was recorded on a bystander’s cellphone.
                    He died on April 19, 2015, from a spinal cord injury while in police custody.<sup><a href="footnotes.html">2</a></sup>`,

      protest: `Anger from years of unchecked police brutality in Baltimore exploded after Freddie Gray’s death.
                Thousands began protesting in the streets of Baltimore.
                A resident emphasized that protestors were not “thugs” or “criminals” and were peaceful.
                They went to Annapolis city council attempting to get reforms and went down many avenues to get some positive changes to no avail.<sup><a href="footnotes.html">3</a></sup>`,

      riot: `Riots began on April 27th, 2015, the day Gray was laid to rest.
             At the end of the day, riot police showed up at the Mondawin Mall (for the working-class). They claimed there were rumors about gang activity and a plot to attack the police, allegedly
             The police shut down public transportation near the mall which prevent students from going home and the riots started.
             Sandtown was burned that evening: Police cars, a drug store, and many storefronts.
             The Maryland Governor called the National Guard.
             The Baltimore mayor issued a curfew.
             The media focused on looting more than the protests.<sup><a href="footnotes.html">4</a></sup>`,

      badge: `The police officers involved are BPD Officers Caesar Goodson, William Porter, Garrett Miller, and Edward Nero; Lieutenant Brian Rice; and Sergeant Alicia White.
              They were put on paid leave which caused the protests to intensify.
              On May 1, 2015,  the Baltimore State’s Attorney’s Office (SAO) charged the officers with reckless endangerment, involuntary manslaughter, and second-degree depraved heart murder.
              On September 12, 2017, the Justice Department decided not to prosecute the officers due to lack of evidence.<sup><a href="footnotes.html">5</a></sup>`,
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-81.681290, 41.505493]
    },
    properties: {
      victim: `Malissa Williams (1982-2012)<sup><a href="footnotes.html">6</a></sup>`,
      description: `Born June 20, 1982, Malissa suffered from mental illness and was constantly homeless.
                    Killed on November 29, 2012, by police along with Timothy Russell
                    Got in a car with Russell and was followed by police because an onlooker report that the pair was going to get drugs
                    Once Russell realized they were being followed he sped up and a police chase ensued. He stuck his hand of the window to get the police to stop shooting.
                    Instead, thirteen police officers fired over 100 rounds into the car.<sup><a href="footnotes.html">7</a></sup>`,

      protest: `Major protests were held by Black Lives Matter activists in Cleveland after Brelo’s acquittal.<sup><a href="footnotes.html">8</a></sup>`,

      riot:`After Brelo’s acquittal, rioting broke out in addition to protests, and 71 people were arrested.
            Among them were 30 adult males, 16 women, and a few minors.
            The main charges were obstruction of justice and aggravated rioting.<sup><a href="footnotes.html">9</a></sup>`,

      badge: `Police officer Michael Brelo got out of the police car and fired more rounds into the car after it had crashed into another police car.
              On May 30, 2014, Michael Brelo was indicted on two counts of voluntary manslaughter because he continued firing long after the other twelve officers stopped.
              He was found not guilty by Judge John P. O’Donnell on May 23, 2015.
              Six police officers including Brelo were fired on January 26, 2016.<sup><a href="footnotes.html">10</a></sup>
              According to Black Past, by October 2017 five of these officers had been reinstated.
              `
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-93.258133, 44.986656]
    },
    properties: {
      victim: `George Floyd (1973-2020)<sup><a href="footnotes.html">11</a></sup>`,

      description: `On May 25, 2020, George Floyd bought some cigarettes at a convenience store.
                    An employee suspected his $20 bill was counterfeit so they called the police.<sup><a href="footnotes.html">12</a></sup>
                    Officers arrived and Derek Chauvin handcuffed and pinned Mr. Floyd to the ground by kneeling
                    on his neck while the other three officers held Mr. Floyd down.<sup><a href="footnotes.html">13</a></sup> Chauvin did not move his knee
                    until well after the paramedics arrived. George Floyd was at this point unresponsive and later pronounced dead <sup><a href="footnotes.html">14</a></sup>.
                    This case went viral because it was filmed by bystanders and Mr. Floyd can be heard continuously saying “I can’t breathe”.
                    On June 1, the results of two autopsies were released. One was requested by the Floyd family and the other from a government agency.
                    The reports both said George Floyd’s death was a homicide but differed on the underlying factors besides Chauvin kneeling on his neck.<sup><a href="footnotes.html">14</a></sup>`,

      protest: `Tens of thousands of people from 140 American cities protested after Floyd's death.
                The National Guard was activated in 21 or more states including Minnesota.
                Minneapolis officers used tear gas and fired rubber bullets at the crowds after some rioters targeted the precinct of the four former police officers
                and vandalized police cars with graffiti.
                On May 31, Minneapolis police arrested approximately 200 people including a man who drove a tanker truck toward a crowd.<sup><a href="footnotes.html">15</a></sup>`,

      riot:`Some businesses in Minneapolis were set ablaze including restaurants and an auto-parts store. Vandalism and fires led to Minnesota Governor Tim Walz called in the National Guard.
            Minneapolis mayor Jacob Frey established an 8 p.m. curfew after the largely peaceful protests turned into looting and domestic terrorism by some people.
            Mr. Frey stated that the city was confronting organized crime members, out-of-state instigators, white supremacists, and so on.<sup><a href="footnotes.html">16</a></sup>`,

      badge: `All four officers (Derek Chauvin, Thomas Lane, J. Alexander Kueng, and You Thao) was fired the day after George Floyd’s death.<sup><a href="footnotes.html">17</a></sup>
              Derek Chauvin had previously faced at least 17 misconduct complaints over a 20 year period for acts such as brutality.<sup><a href="footnotes.html">18</a></sup>
              The Hennepin County Attorney Mike Freeman charged Derek Chauvin with third-degree murder and second-degree manslaughter on May 29th which equated to a maximum 35-year sentence.
              On June 3rd, another charge of second-degree murder was given to Chauvin.<sup><a href="footnotes.html">19</a></sup>
              The other officers were charged with aiding and abetting second-degree murder.<sup><a href="footnotes.html">20</a></sup>`
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-85.764771, 38.328732]
    },
    properties: {
      victim: `Breonna Taylor (1993-2020)<sup><a href="footnotes.html">21</a></sup>`,

      description: `Breonna Taylor was an African American medical worker from Louisville, Kentucky who was shot and killed by police during a failed raid on her apartment. Just after midnight on March 13th, three Louisville officers use a battering ram to enter her apartment because they were executing a search warrant. Taylor’s apartment was targeted because her ex-boyfriend was believed to have used it to receive packages. However, they did not know that Taylor had ended that relationship the month before. Walker later said that they thought it was Breonna’s ex-boyfriend at the door and asked to make sure.


Walker fired a warning shot after the police knocked the door off of the hinges because he thought someone was trying to break into their home.

In response, Sergeant Jonathan Mattingly fired six rounds into their apartment while Hankison blindly shot 10 rounds. The paramedics had been sent away an hour before the raid which was in violation of police policy. When the paramedics returned, they rendered aid to Mattingly had been shot and ignored Taylor for a few minutes until they realized she was badly injured. Despite she did not receive medical attention for over twenty minutes after she was shot. Moreover, the coroner concluded that she most likely died less than a minute after she was shot.

The Louisville police department was granted a “no-knock” entry by the court; however, just before the raid, they were ordered to “knock and announce”. The officers claimed they announced themselves while Walker said they did not. On an important note, Breonna was not involved with any drug trade although her ex was arrested in August on drug charges. Also, Kenneth Walker has a gun license.

For months, the Taylor family has been demanding justice. Last month, they were given a $12 million settlement after Breonna Taylor’s mother filed a wrongful-death lawsuit against the city of Louisville. Many people were critical of how the slow pace of this case compared to George Floyd’s.<sup><a href="footnotes.html">22</a></sup>`,

      protest: `On September 22, Louisville Mayor Greg Fischer declared a state of emergency because of an anticipation of “civil unrest” following the trial. He also established a 9 p.m. to 6: 30 a.m. curfew until September 25th. Louisville police chief restricted movement downtown by placing barricades and moved city vehicles to the downtown area. Also, he did not allow policers officers to request time off.<sup><a href="footnotes.html">23</a></sup>`,

      riot:`Breonna Taylor would have been 27 on June 5th. On that day, #SayHerName was used on Twitter in her memory and bring more awareness to her case. Since then this hashtag has been used to represent other unarmed black female victims such as Tanisha Anderson. Atatiana Jefferson.<sup><a href="footnotes.html">24</a></sup>`,

      badge: `Brett Hankison is the only police officer in the case that was fired. His termination letter stated that he showed “an extreme indifference to the value of human life”. He was charged with wanton endangerment but not for Taylor’s killing. He pled not guilty and the other two officers were not charged with any crimes even though they also fired shots. The verdict was so controversial that one of the jurors filed a court motion to publicly release the proceedings. This juror believes that Kentucky Attorney General Daniel Cameron did not give the jury all of the evidence. These recordings are about 15 hours. Mattingly, who was on administrative leave, sent an email to other officers defending the three officers’ actions. On June 11, no-knock warrants were banned by city officials. Mayor Fischer has since replaced the police chief and officers are now required to wear body cameras.<sup><a href="footnotes.html">25</a></sup>`
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.935242, 40.730610]
    },
    properties: {
      victim: `Eric Garner (1970-2014)<sup><a href="footnotes.html">26</a></sup>`,

      description: `On July 17, 2014, Eric Garner was hanging out with a friend outside of a beauty shop. A fight broke so Garner tried to break it up. Police officers arrived on the scene and assumed he caused the fight. They surrounded him while Garner’s friends Ramsey and Taisha pulled out his phone and filmed the incident. Taisha tried to explain what happened but the police did not care. The officers pushed Garner to the ground and his eyes began rolling into the back of his head while he struggled to breathe. He yelled out, “I can’t breathe!”. One of the officers even had the audacity to smile at Taisha before as he was leaving with the other cops. The ambulance arrived but they sat for twenty minutes without attempting to resuscitate him. <sup><a href="footnotes.html">27</a></sup>`,

      protest: `The Saturday after Garner’s death, his family and in-laws marched up to the police precinct with Reverend Al Sharpton. Other people showed support by joining them. Everyone linked arms and cars stopped as a sign of respect. One person threw a bottle but Garner’s stepfather stopped any riots before they could happen.<sup><a href="footnotes.html">28</a></sup>.`,

      riot:``,

      badge: `The police officers lied to the their commander and said that Eric was selling cigarettes and resisted arrest.<sup><a href="footnotes.html">29</a></sup>. Garner had been arrested once before for selling cigarettes and the police continued to harass him afterwards. <sup><a href="footnotes.html">30</a></sup>. Witnesses were able to quickly dismiss this report because all of them had the same story.<sup><a href="footnotes.html">31</a></sup>`
    }
  },

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [30.0974,96.0783]
    },
    properties: {
      victim: `Sandra Bland(1987-2015)<sup><a href="footnotes.html">32</a></sup>`,

      description: `On July 10, 2015 Sandra Bland was pulled over. When she asked the officer why he claimed it was because he was ticketing her for an improper lane change. He asked her to put her cigarette out while she was in her car. She refused because she was in her car and then the officer made her get out of her car.<sup><a href="footnotes.html">33</a></sup> He became aggressive blaming her for her current predicament. She called his bluff which made him angrier and she was thrown to the ground and the officer called for back up. <sup><a href="footnotes.html">34</a></sup> When back up arrived the officer claimed she kicked him. He and another officer where emphasizing that he was injured while standing in front of the dashboard camera.<sup><a href="footnotes.html">35</a></sup> She is taken to jail at the Waller County Sheriff’s Department and at some point she dies. Her death was ruled a suicide but many people believe she was murdered. To this day no one outside of the sheriff’s office knows what really happened.<sup><a href="footnotes.html">36</a></sup>`,

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
  ]
};


// add markers to map
geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    const victim = document.createElement('div');
    victim.className = 'victim-marker';


    // make a marker for each feature and add to the map
    new mapboxgl.Marker(victim)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);


    new mapboxgl.Marker(victim)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 15 }) // add popups
        .setHTML(`
        <div class="tooltip">
            <p class="tooltip" id="victim-name">${marker.properties.victim} </p>
            <p class="tooltip">${marker.properties.description} </p>
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
                <p class="tooltip">${marker.properties.protest} </p>
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
