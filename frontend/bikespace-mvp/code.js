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
        }
    };




function initAutocomplete() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: new google.maps.LatLng(41.38578152, 2.177163627)
    });

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


    /* AparcamentsServeisBicis */
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
                    content: "<div><h4>" + value.parking + "</h4>" +
                        "<p> Dirección: " + value.direccion + "</p>" +
                        "<p> Teléfono: " + value.telefono + "</p>" +
                        "<p><img src='assets/img/euro.png' height='20'> " + value.precio + "</p>" +
                        "<p><img src='assets/img/lock.png' height='20'> " + value.niveldeseguridad + "</p></div>"
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
                    content: "<div><h4>" + value.parking + "</h4>" +
                        "<p> Dirección: " + value.direccion + "</p>" +
                        "<p> Teléfono: " + value.telefono + "</p>" +
                        "<p><img src='assets/img/euro.png' height='20'> " + value.precio + "</p>" +
                        "<p><img src='assets/img/lock.png' height='20'> " + value.niveldeseguridad + "</p></div>"
                });
                infowindow.open(map, marker);
            });
        });
    });
    
    
    
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