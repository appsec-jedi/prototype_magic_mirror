function enableTrafficInfo (map) {
   // Center map on New York
   map.setCenter({lat: 44.977, lng: -93.265});
   map.setZoom(10);

   // Show traffic tiles
   map.setBaseLayer(defaultLayers.normal.traffic);

   // Enable traffic incidents layer
   map.addLayer(defaultLayers.incidents);
 }
