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


var map, infowindow;


function initMap() {
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
}
