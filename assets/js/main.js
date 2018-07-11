// public token
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpb2FuIiwiYSI6ImNqaHZla2ticTB5Y28zcXAzb2F1eHNlZ2sifQ.xSx21-Ra58aPdvo4ZlWwVg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [174.7633, -36.8485],
    zoom: 14
});
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': 'lines',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [{
                    'type': 'Feature',
                    'properties': {
                        'color': '#0A0A0A' // red
                    },
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [174.742126, -36.838916],
                            [174.743874, -36.840135],
                            [174.744670, -36.840640],

                            [174.788599, -36.849947]
                            
                        ]
                    }
                }]
            }
        },
        'paint': {
            'line-width': 3,
            // Use a get expression (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
            // to set the line-color to a feature property value.
            'line-color': ['get', 'color']
        }
    });


    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);


});