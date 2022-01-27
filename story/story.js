let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.219784473869026, lng: -75.15426535537038  },
    zoom: 8,
  });
}
