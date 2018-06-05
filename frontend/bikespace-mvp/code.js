var map,
    infowindow,
    features = [],
    //iconBase = 'https://maps.google.com/mapfiles/kml/shapes/',
    icons = {
        aparcamiento: {
            icon: 'assets/img/p-aparcamiento.png'
        },
        anclaje: {
            icon: 'assets/img/circulo.png'
        },
        reservables: {
            icon: 'assets/img/p-reservable.png'
        }
    };




function initAutocomplete() {
    
    var styledMapType = new google.maps.StyledMapType([
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
],{name: 'Styled Map'});
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: new google.maps.LatLng(41.3747023, 2.1658516),
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
    });
    
    //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
    
    
    
    /* Punts-Ancoratge-Bicicletes
    $.getJSON("Punts-Ancoratge-Bicicletes.geojson", function(data) {
        $.each(data.features, function(index, value) {
            var feature = {
                position: new google.maps.LatLng(value.geometry.coordinates[1], value.geometry.coordinates[0]),
                type: 'parking'
            };

            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });

            var infowindow = new google.maps.InfoWindow({
                content: "<div id='colorets'><img src='assets/img/parking_lot_maps.png'><h4> Nom: " + value.properties.Name + "</h4>" + "<p>Preu: " + value.properties.Name + "</p></div>"
            });

            marker.addListener('click', function() {
                //infowindow.close();//hide the infowindow --> no funciona
                infowindow.open(map, marker);
            });

        });
    }); */


    /* Aparcamientos */
    $.getJSON("aparcamientos.json", function(data) {
        $.each(data.aparcamientos, function(index, value) {
            var feature = {
                position: new google.maps.LatLng(value.latitud, value.longitud),
                type: 'aparcamiento'
            };

            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });

            infowindow = new google.maps.InfoWindow();
            marker.addListener('click', function() {
                //infowindow.close();//hide the infowindow --> no funciona
                infowindow.setOptions({
                    content: "<div class='text-marker'><h2>" + value.parking + "</h2>" +
                        "<h3>" + value.direccion + "</h3>" +
                        "<div class='icon-text'><img src='assets/img/ic_phone.svg'><p>" + value.telefono + "</p></div>" +
                        "<div class='icon-text'><img src='assets/img/euro.png' height='20'><p>" + value.precio + "</p></div>" +
                        "<p><img src='assets/img/lock.png' height='20'> " + value.niveldeseguridad + "</p>"
                });
                infowindow.open(map, marker);
            });
 
        });
        
    });
    
    
    /* Punts Anclatje */
    $.getJSON("anclajes.json", function(data) {
        $.each(data.anclajes, function(index, value) {
            var feature = {
                position: new google.maps.LatLng(value.latitud, value.longitud),
                type: 'anclaje'
            };

            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });

            infowindow = new google.maps.InfoWindow();
            marker.addListener('click', function() {
                //infowindow.close();//hide the infowindow --> no funciona
                infowindow.setOptions({
                    content: "<div class='text-marker'><h2>" + value.parking + "</h2>" +
                        "<h3>" + value.direccion + "</h3>" +
                        "<div class='icon-text'><img src='assets/img/euro.png' height='20'><p>" + value.precio + "</p></div>" +
                        "<p><img src='assets/img/lock.png' height='20'> " + value.niveldeseguridad + "</p>"
                });
                infowindow.open(map, marker);
            });
        });
    });
    
    
    
    /* Aparcamientos Reservables */
    $.getJSON("reservables.json", function(data) {
        $.each(data.reservables, function(index, value) {
              console.log(value.latitud, value.longitud);
            var feature = {
                position: new google.maps.LatLng(value.latitud, value.longitud),
                type: 'reservables'
            };

            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });

            infowindow = new google.maps.InfoWindow();
            marker.addListener('click', function() {                
                //infowindow.close();//hide the infowindow --> no funciona
                infowindow.setOptions({
                    content: "<div class='text-marker'><h2>" + value.parking + "</h2>" +
                        "<h3>" + value.direccion + "</h3>" +
                        "<div class='icon-text'><img src='assets/img/euro.png' height='20'><p>" + value.precio + "</p></div>" +
                        "<p><img src='assets/img/lock.png' height='20'> " + value.niveldeseguridad + "</p>" +
                    "<button onclick=window.location.href='reserva/reserva.html'>Reservar</button></div>"
                });
                infowindow.open(map, marker);
            });
        });
    });
    
    
    
}

function alerta() {
        alert("Llena el formulario");
}

function AutoCenter() {
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    $.each(markers, function(index, marker) {
        bounds.extend(marker.position);
    });
    //  Fit these bounds to the map
    map.fitBounds(bounds);
}