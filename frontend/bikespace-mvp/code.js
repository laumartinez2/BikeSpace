

function initMap() {
        var barcelona = {lat: 41.3942753, lng: 2.1496245};
    
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: barcelona
        });
        var marker = new google.maps.Marker({
          position: barcelona,
          map: map
        });
      }
