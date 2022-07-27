// Create the tile layer that will be the background of our map.
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Initialize all the LayerGroups that we'll use.
var layers = {
  AMERICAN: new L.LayerGroup(),
  BAR: new L.LayerGroup(),
  BARBECUE: new L.LayerGroup(),
  CAFE: new L.LayerGroup(),
  CHINESE: new L.LayerGroup(),
  DESSERT: new L.LayerGroup(),
  DINE_WITH_A_LOCAL_CHEF: new L.LayerGroup(),
  DINER: new L.LayerGroup(),
  FRENCH: new L.LayerGroup(),
  GERMAN: new L.LayerGroup(),
  INTERNATIONAL: new L.LayerGroup(),
  ITALIAN: new L.LayerGroup(),
  JAPANESE: new L.LayerGroup(),
  LEBANESE: new L.LayerGroup(),
  MEDITERRANEAN: new L.LayerGroup(),
  MEXICAN: new L.LayerGroup(),
  MIDDLE_EASTERN: new L.LayerGroup(),
  PIZZA: new L.LayerGroup(),
  SEAFOOD: new L.LayerGroup(),
  SPANISH: new L.LayerGroup(),
  STEAKHOUSE: new L.LayerGroup(),
};

// Create the map with our layers.
var map = L.map("map-id", {
  center: [47.7511, -120.7401],
  zoom: 8,
  layers: [
    layers.AMERICAN,
    layers.BAR,
    layers.BARBECUE,
    layers.CAFE,
    layers.CHINESE,
    layers.DESSERT,
    layers.DINE_WITH_A_LOCAL_CHEF,
    layers.DINER,
    layers.FRENCH,
    layers.GERMAN,
    layers.INTERNATIONAL,
    layers.ITALIAN,
    layers.JAPANESE,
    layers.LEBANESE,
    layers.MEDITERRANEAN,
    layers.MEXICAN,
    layers.MIDDLE_EASTERN,
    layers.PIZZA,
    layers.SEAFOOD,
    layers.SPANISH,
    layers.STEAKHOUSE
  ]
});

// Add our "streetmap" tile layer to the map.
streetmap.addTo(map);

// Create an overlays object to add to the layer control.
var overlays = {
  "American": layers.AMERICAN,
  "Bar": layers.BAR,
  "Barbecue": layers.BARBECUE,
  "Cafe": layers.CAFE,
  "Chinese": layers.CHINESE,
  "Dessert": layers.DESSERT,
  "Dine With A Local Chef": layers.DINE_WITH_A_LOCAL_CHEF,
  "Diner": layers.DINER,
  "French": layers.FRENCH,
  "German": layers.GERMAN,
  "International": layers.INTERNATIONAL,
  "Italian": layers.ITALIAN,
  "Japanese": layers.JAPANESE,
  "Lebanese": layers.LEBANESE,
  "Mediterranean": layers.MEDITERRANEAN,
  "Mexican": layers.MEXICAN,
  "Middle Eastern": layers.MIDDLE_EASTERN,
  "Pizza": layers.PIZZA,
  "Seafood": layers.SEAFOOD,
  "Spanish": layers.SPANISH,
  "Steakhouse": layers.STEAKHOUSE
};

// Create a control for our layers, and add our overlays to it.
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map.
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend".
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map.
info.addTo(map);

// Initialize an object that contains icons for each layer group.
var icons = {
  AMERICAN: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  BAR: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  BARBECUE: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "maroon",
    shape: "penta"
  }),
  CAFE: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  CHINESE: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  }),
  DINE_WITH_A_LOCAL_CHEF: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  DINER: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  FRENCH: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  GERMAN: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  INTERNATIONAL: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  ITALIAN: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  JAPANESE: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  LEBANESE: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  MEDITERRANEAN: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  MEXICAN: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  MIDDLE_EASTERN: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  PIZZA: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  SEAFOOD: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  SPANISH: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  STEAKHOUSE: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  })
};

// 
d3.json("/Project3/DATA.json", function(json) {
    //rendering logic here
}


  // When the first API call completes, perform another call to the Citi Bike station status endpoint.
  d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_status.json").then(function(statusRes) {
    var updatedAt = infoRes.last_updated;
    var stationStatus = statusRes.data.stations;
    var stationInfo = infoRes.data.stations;

    // Create an object to keep the number of markers in each layer.
    var restaurantCount = {
      AMERICAN: 0,
      BAR: 0,
      BARBECUE: 0,
      CAFE: 0,
      CHINESE: 0,
      DESSERT: 0,
      DINE_WITH_A_LOCAL_CHEF: 0,
      DINER: 0,
      FRENCH: 0,
      GERMAN: 0,
      INTERNATIONAL: 0,
      ITALIAN: 0,
      JAPANESE: 0,
      LEBANESE: 0,
      MEDITERRANEAN: 0,
      MEXICAN: 0,
      MIDDLE_EASTERN: 0,
      PIZZA: 0,
      SEAFOOD: 0,
      SPANISH: 0,
      STEAKHOUSE: 0,
    };

    // Initialize stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for the layer group.
    var restaurantType;

    // Loop through the stations (they're the same size and have partially matching data).
    for (var i = 0; i < stationInfo.length; i++) {

      // Create a new station object with properties of both station objects.
      var station = Object.assign({}, stationInfo[i], stationStatus[i]);
      // If a station is listed but not installed, it's coming soon.
      if (!station.is_installed) {
        stationStatusCode = "COMING_SOON";
      }
      // If a station has no available bikes, it's empty.
      else if (!station.num_bikes_available) {
        stationStatusCode = "EMPTY";
      }
      // If a station is installed but isn't renting, it's out of order.
      else if (station.is_installed && !station.is_renting) {
        stationStatusCode = "OUT_OF_ORDER";
      }
      // If a station has less than five bikes, it's status is low.
      else if (station.num_bikes_available < 5) {
        stationStatusCode = "LOW";
      }
      // Otherwise, the station is normal.
      else {
        stationStatusCode = "NORMAL";
      }

      // Update the station count.
      stationCount[stationStatusCode]++;
      // Create a new marker with the appropriate icon and coordinates.
      var newMarker = L.marker([station.lat, station.lon], {
        icon: icons[stationStatusCode]
      });

      // Add the new marker to the appropriate layer.
      newMarker.addTo(layers[stationStatusCode]);

      // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
      newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available + " Bikes Available");
    }

    // Call the updateLegend function, which will update the legend!
    updateLegend(updatedAt, stationCount);
  });
});

// Update the legend's innerHTML with the last updated time and station count.
function updateLegend(time, stationCount) {
  document.querySelector(".legend").innerHTML = [
    "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
    "<p class='out-of-order'>Out of Order Stations: " + stationCount.OUT_OF_ORDER + "</p>",
    "<p class='coming-soon'>Stations Coming Soon: " + stationCount.COMING_SOON + "</p>",
    "<p class='empty'>Empty Stations: " + stationCount.EMPTY + "</p>",
    "<p class='low'>Low Stations: " + stationCount.LOW + "</p>",
    "<p class='healthy'>Healthy Stations: " + stationCount.NORMAL + "</p>"
  ].join("");
}