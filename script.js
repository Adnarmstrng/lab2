mapboxgl.accessToken = 'pk.eyJ1IjoiYWlkYW5hcm1zdHJvbmciLCJhIjoiY2xzam1tczhoMnJqMzJpbzZ4OWh0bmI4dyJ9.2pEogvW_3XlwcsMh4kMfCQ'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/dark-v9', // style URL
    center: [-79.384, 43.713], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', () => {
//Add a data source containing GeoJSON data

// Add a data source from a Mapbox tileset
map.addSource('censustracts', { // Create your own source ID
    'type': 'vector',
    'url': 'mapbox://aidanarmstrong.a2ueu202' // Update to your mapbox tileset ID
    });
    map.addLayer({
    'id': 'map-census', // Create your own layer ID
    'type': 'fill', // Note this is different to point data
    'source': 'censustracts', // Must match source ID from addSource Method
    'paint': {
    'fill-color': '#888888', // Test alternative colours and style properties
    'fill-opacity': 0.4,
    'fill-outline-color': 'black'
    },
    'source-layer': '...' // Tileset NAME (diff to ID), get this from mapbox tileset page
    },
    // Drawing order - places layer below points
    // Here the addlayer method takes 2 arguments (the layer as an object and a
    //string for another layer's name). If the other layer already exists, the new layer
    //will be drawn before that one
    )})


// map.on('load', () => {
//     // Add a new source from our GeoJSON data and
   
//     map.addSource('parks', {
//     type: 'geojson',
//     // Point to GeoJSON data
//     data: 'https://github.com/Adnarmstrng/lab2/main/parks.geojson',
//     cluster: true,
//     clusterMaxZoom: 14, // Max zoom to cluster points on
//     clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
//     });
     
//     map.addLayer({
//     id: 'clusters',
//     type: 'circle',
//     source: 'parks',
//     filter: ['has', 'point_count'],
//     paint: {
//     //   * Blue, 20px circles when point count is less than 100
//     //   * Yellow, 30px circles when point count is between 100 and 750
//     //   * Pink, 40px circles when point count is greater than or equal to 750
//     'circle-color': [
//     'step',
//     ['get', 'point_count'],
//     '#51bbd6',
//     100,
//     '#f1f075',
//     750,
//     '#f28cb1'
//     ],
//     'circle-radius': [
//     'step',
//     ['get', 'point_count'],
//     20,
//     100,
//     30,
//     750,
//     40
//     ]
//     }
//     });
     
//     map.addLayer({
//     id: 'cluster-count',
//     type: 'symbol',
//     source: 'parks',
//     filter: ['has', 'point_count'],
//     layout: {
//     'text-field': ['get', 'point_count_abbreviated'],
//     'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
//     'text-size': 12
//     }
//     });
     
//     map.addLayer({
//     id: 'unclustered-point',
//     type: 'circle',
//     source: 'parks',
//     filter: ['!', ['has', 'point_count']],
//     paint: {
//     'circle-color': '#11b4da',
//     'circle-radius': 4,
//     'circle-stroke-width': 1,
//     'circle-stroke-color': '#fff'
//     }
//     })
// })