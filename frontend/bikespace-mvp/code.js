function initMap() {
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