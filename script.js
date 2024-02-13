mapboxgl.accessToken = 'pk.eyJ1IjoiYWlkYW5hcm1zdHJvbmciLCJhIjoiY2xzam1tczhoMnJqMzJpbzZ4OWh0bmI4dyJ9.2pEogvW_3XlwcsMh4kMfCQ'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/dark-v9', // style URL
    center: [-79.384, 43.713], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', () => {
//Add a data source containing GeoJSON data
map.addSource('uoft-data', {
    type: 'geojson',
    data: {
    "type": "FeatureCollection",
    "features": [
    {
    "type": "Feature",
    "properties": {
    "name": "Sidney Smith Hall"
    },
    "geometry": {
    "coordinates": [
    -79.39865237301687,
    43.662343395037766
    ],
    "type": "Point"
    }
    }
    ]
    }
    });
    map.addLayer({
    'id': 'uoft-pnt',
    'type': 'circle',
    'source': 'uoft-data',
    'paint': {
    'circle-radius': 6,
    'circle-color': '#B42222'
    }
    });
    });


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