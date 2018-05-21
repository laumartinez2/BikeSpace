/*function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(41.385216, 2.1808927),
          zoom: 16,
          mapTypeId: 'terrain'
        });


    
        var src = 'trial.kmlgg';
        var kmlLayer = new google.maps.KmlLayer(src, {
          suppressInfoWindows: true,
          preserveViewport: false,
          map: map
        });
        kmlLayer.addListener('click', function(event) {
          var content = event.featureData.infoWindowHtml;
          var testimonial = document.getElementById('capture');
          testimonial.innerHTML = content;
        });
      }
*/


/*$(document).ready(function() {
    $('iframe').contents().find('.i4ewOd-pzNkMb-haAclf').css('display','none');
    $('iframe').contents().find('.QUIbkc').css('display','none');
});*/


var map, 
    infowindow, 
    features = [],
    //iconBase = 'https://maps.google.com/mapfiles/kml/shapes/',
    icons = {
              parking: {
                icon: 'assets/img/parking_lot_maps.png'
              },
              library: {
                icon:'assets/img/library_maps.png'
              }
    };


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: {lat: 41.3925639, lng: 2.1375999}
          });
    

    
    /* Punts-Ancoratge-Bicicletes */    
    $.getJSON( "Punts-Ancoratge-Bicicletes.geojson", function( data ) {
        $.each( data.features, function( index, value ) {
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
    });
    
    
    
        //console.log(value.Ciudad);
        //console.log(value.Latitud, value.Longitud);
         
    /* AparcamentsServeisBicis */    
     $.getJSON( "prueba.json", function( data ) {
         $.each(data.Aparcamientos, function(index, value) {
           var feature = {
               position: new google.maps.LatLng(value.Latitud, value.Longitud),
                type: 'library'
           };
            
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
              });
            
            var infowindow = new google.maps.InfoWindow({
                    content: "<div><h4>" + value.Nombre + "</h4>" +
                "<p> Dirección: " + value.Direccion + "</p>"+
                "<p> Teléfono: " + value.Telefono + "</p>" +
                "<p><img src='assets/img/parking_lot_maps.png' height='20'> " + value.Precio + "</p>" +
                "<p><img src='assets/img/parking_lot_maps.png' height='20'> " + value.Seguridad + "</p></div>"
                });
            
            marker.addListener('click', function() {
                //infowindow.close();//hide the infowindow --> no funciona
                infowindow.open(map, marker);
            });

        });

    });
}


function AutoCenter() {
    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    $.each(markers, function (index, marker) {
    bounds.extend(marker.position);
    });
    //  Fit these bounds to the map
    map.fitBounds(bounds);
}
    
    
    
/*    
    
    
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 41.385216, lng: 2.1808927}
  });
    
    infowindow = new google.maps.InfoWindow();

google.maps.event.addListener(map,'click',function() {
        infowindow.close();
    });

    
    
    // NOTE: This uses cross-domain XHR, and may not work on older browsers.
    map.data.loadGeoJson(
        'AparcamentsServeisBicis.geojson');
    map.data.loadGeoJson(
        'Punts-Ancoratge-Bicicletes.geojson');
    
    // When the user clicks, open an infowindow
  map.data.addListener('click', function(event) {
        var tittle = event.feature.getProperty("Name");
        console.log(tittle);
        infowindow.setContent("<div style='width:150px; text-align: center;'><div><h3>"+tittle+"<h3></div></div>");
        infowindow.setPosition(event.feature.getGeometry().get());
        infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
        infowindow.open(map);
  });   
  
  */

