let map;

function initMap() {
 const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 45.219784473869026, lng: -75.15426535537038 },
  });
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 
const markers = locations.map((location, i) => {
  return new google.maps.Marker({
    position: location,
   label: labels[i % labels.length],
    });
 });
  
 const locations =  [
{  lat: 45.32075334909435, lng: -75.08736624768575},
{ lat: 45.261480713535136, lng: -75.10423849806091},
{ lat: 45.21071039770976, lng:-75.01291465463055},
{ lat: 45.212645336073145, lng: -75.2230281590643},
{ lat: 45.15989472123551, lng: -75.36585041044411},
{ lat: 45.1506946568472, lng: -75.0774593259272}
];
