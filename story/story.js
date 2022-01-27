<script>
let map;

function initMap() {
 const myLatLng =  [
{  lat: 45.32075334909435, lng: -75.08736624768575},
{ lat: 45.261480713535136, lng: -75.10423849806091},
{ lat: 45.21071039770976, lng:-75.01291465463055},
{ lat: 45.212645336073145, lng: -75.2230281590643},
{ lat: 45.15989472123551, lng: -75.36585041044411},
{ lat: 45.1506946568472, lng: -75.0774593259272}
];
 const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.219784473869026, lng: -75.15426535537038 },
    zoom: 10,
  });
}
new google.maps.Marker({
    position: map,
    map,
    title: "Conservation Areas near Crysler, ON",
  });

</script>
