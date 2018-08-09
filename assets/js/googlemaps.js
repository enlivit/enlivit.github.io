function initMap() {
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                featureType: 'poi.business',
                stylers: [{visibility: 'off'}]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                  { "color": "#000000" }
                ]
              }
          ],
        {name: 'Styled Map'});

    // The location of Uluru,27.6814133,85.3198517,17z
    var uluru = {lat: 27.6813015, lng: 85.3220346};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru, disableDefaultUI: true, zoomControl: true });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, 
                                         map: map, 
                                         title: 'Enliv Information Technologies',
                                         icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                                        });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map'); 
    
  }