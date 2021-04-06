let map

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52, lng: 19 },
    zoom: 5,
  })

  for (let i = 0; i < 20; i++) {
    const lat = 50.0 + (4.0 * Math.random())
    const lng = 15.0 + (8.0 * Math.random())
    const position = { lat: lat, lng: lng }

    new google.maps.Marker({
        position: position,
        map: map,
        title: "Sklep Malwa",
        label: i.toString()
    })
  }

}