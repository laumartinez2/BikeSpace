var map,
    infowindow,
    features = [],
    //iconBase = 'https://maps.google.com/mapfiles/kml/shapes/',
    icons = {
        aparcamiento: {
            icon: 'assets/img/parking.png'
        },
        anclaje: {
            icon: 'assets/img/anclaje.png'
        },
        reservables: {
            icon: 'assets/img/parking.png'
        }
    };




function initAutocomplete() {
    
    var styledMapType = new google.maps.StyledMapType([
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "lightness": "23"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#00ff68"
            },
            {
                "saturation": "-32"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#00ff87"
            },
            {
                "saturation": "-40"
            },
            {
                "lightness": "-5"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#00ff49"
            },
            {
                "saturation": "-40"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#00ff34"
            },
            {
                "saturation": "-19"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-61"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c6e3ce"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "21"
            },
            {
                "lightness": "-11"
            },
            {
                "gamma": "1.05"
            },
            {
                "color": "#4d8451"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": "-34"
            },
            {
                "gamma": "10.00"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-57"
            },
            {
                "hue": "#00ff72"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#00ff53"
            },
            {
                "saturation": "-13"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#00ff72"
            },
            {
                "saturation": "-38"
            },
            {
                "lightness": "11"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "lightness": "100"
            },
            {
                "gamma": "10.00"
            },
            {
                "saturation": "100"
            },
            {
                "visibility": "on"
            },
            {
                "hue": "#00ff00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-75"
            },
            {
                "hue": "#00ff68"
            },
            {
                "lightness": "6"
            },
            {
                "gamma": "0.77"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b6dae0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#848484"
            }
        ]
    }
],{name: 'Styled Map'});
    
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: new google.maps.LatLng(41.3970523, 2.1594381),
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
    $.getJSON("assets/jsons/aparcamientos.json", function(data) {
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
                        "<p><img src='assets/img/lock.png' height='20'> " + value.niveldeseguridad + "</p>" +
                    "<button onclick=window.location.href='reservar.html'>Reservar</button></div>"
                });
                infowindow.open(map, marker);
            });
 
        });
        
    });
    
    
    /* Puntos Anclaje */
    $.getJSON("assets/jsons/anclajes.json", function(data) {
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
    $.getJSON("assets/jsons/reservables.json", function(data) {
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
                    "<button onclick=window.location.href='reservar.html'>Reservar</button></div>"
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