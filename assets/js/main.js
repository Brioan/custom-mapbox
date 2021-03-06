// public token
mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpb2FuIiwiYSI6ImNqaHZla2ticTB5Y28zcXAzb2F1eHNlZ2sifQ.xSx21-Ra58aPdvo4ZlWwVg';
var map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [174.7633, -36.8485],
    zoom: 14
});
var map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/brioan/cjjr6zraw10x82ruo69ubdgi2',
    center: [174.7633, -36.8485],
    zoom: 14
});

var map = new mapboxgl.Compare(map1, map2, {
});
map1.addControl(new mapboxgl.NavigationControl());

var years = ['1840' /* '2018' */]
var texts = ['Black line: 1840 Mean High Water Mark, plotted by Aranne Donald, Auckland City Heritage Division 1992']

// Menu
for (var i = 0; i < years.length; i++) {
    var year = years[i];
    var link = document.createElement('BUTTON');
    link.href = '#';
    link.className = 'active';
    link.textContent = year;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map1.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map1.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
            map1.setLayoutProperty('area', 'visibility', 'none');
        } else {
            this.className = 'active';
            map1.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            map1.setLayoutProperty('area', 'visibility', 'visible');
        }
    };

    var menuKey = document.getElementById('menu');
    menuKey.appendChild(link);

    var textInfo = texts[i];
    var textElement = document.createElement('P');
    textElement.href = '#';
    textElement.textContent = textInfo;
    menuKey.appendChild(textElement);
}

var sourceElement = document.createElement('a');
sourceElement.textContent = 'Land reclamation: 2.22 sq km';
menuKey.appendChild(sourceElement);

var sourceElement = document.createElement('br');
menuKey.appendChild(sourceElement);

var sourceElement = document.createElement('a');
sourceElement.href = 'https://github.com/Brioan/mapbox_auckland_coastline';
sourceElement.textContent = 'Source';
menuKey.appendChild(sourceElement);


var overlayPolyData = document.getElementById('map-overlay-poly-data');
var popup = new mapboxgl.Popup({
    closeButton: false
});


// Mapbox map
map1.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map1.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    // Vector line
    map1.addLayer({
        'id': '1840',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [{
                    'type': 'Feature',
                    'properties': {
                        'color': '#0A0A0A'
                    },
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [174.7418189048767,-36.838776646609254],
                            [174.74249482154846,-36.83934335773963],
                            [174.7438681125641,-36.84018483015601],
                            [174.74392712116241,-36.84026210777089],
                            [174.74459767341614,-36.840515406072186],
                            [174.74473178386688,-36.84061414925051],
                            [174.74503219127655,-36.84104775908959],
                            [174.7452735900879,-36.841434142023225],
                            [174.74545061588285,-36.841713195150085],
                            [174.74571883678436,-36.842018005863515],
                            [174.74594950675964,-36.84224124674202],
                            [174.74614799022675,-36.84240867697323],
                            [174.746196269989,-36.84265767510065],
                            [174.74701702594757,-36.84276070857138],
                            [174.74778950214386,-36.84294101681112],
                            [174.74836349487305,-36.84308268727266],
                            [174.74892675876617,-36.84325870172289],
                            [174.74946320056915,-36.84349052501475],
                            [174.7499996423721,-36.84385972362123],
                            [174.75062727928162,-36.84422892044515],
                            [174.750697016716,-36.8442697037059],
                            [174.750694334507,-36.84430404748756],
                            [174.75086331367493,-36.844392053357645],
                            [174.75110739469528,-36.84455089296434],
                            [174.75146412849426,-36.84482134883277],
                            [174.75317001342773,-36.84567993255238],
                            [174.75319147109985,-36.84583447659806],
                            [174.7526228427887,-36.845825890825935],
                            [174.75122272968292,-36.84799806043895],
                            [174.75115835666656,-36.848118257746066],
                            [174.75157141685483,-36.84788215571385],
                            [174.7527140378952,-36.84845309210517],
                            [174.75331485271454,-36.84862050873482],
                            [174.75404977798462,-36.848779339557396],
                            [174.7552514076233,-36.848611923275556],
                            [174.75627601146698,-36.848431628408186],
                            [174.7564476728439,-36.84845738484385],
                            [174.75657105445862,-36.84802381702066],
                            [174.75657105445862,-36.84767180965282],
                            [174.75656032562256,-36.8472854582372],
                            [174.75656569004056,-36.8468905192167],
                            [174.75666224956512,-36.846495578156166],
                            [174.75689828395844,-36.84629381400097],
                            [174.75738644599915,-36.84624229966327],
                            [174.7580087184906,-36.84613497801489],
                            [174.75894212722775,-36.84599760608517],
                            [174.76028859615326,-36.84586023390864],
                            [174.7605675458908,-36.84569710412844],
                            [174.76080894470215,-36.845958970185464],
                            [174.76098597049713,-36.84592033426624],
                            [174.7612166404724,-36.84546958043273],
                            [174.7620803117752,-36.84501453101023],
                            [174.7622412443161,-36.844907207638556],
                            [174.76289033889768,-36.844598115486484],
                            [174.76381838321683,-36.844392053357645],
                            [174.76450502872464,-36.84428043613932],
                            [174.76491808891296,-36.84429760802967],
                            [174.76529896259308,-36.8443662955525],
                            [174.76572811603546,-36.844628166167226],
                            [174.76588904857635,-36.84501023807826],
                            [174.76594269275665,-36.845576903015065],
                            [174.76596415042877,-36.84604482771385],
                            [174.76602852344513,-36.84635820687431],
                            [174.76628601551056,-36.84637967115337],
                            [174.7665166854858,-36.84627234969782],
                            [174.7667634487152,-36.84609634218461],
                            [174.76693511009216,-36.84597614169886],
                            [174.76813673973083,-36.84625088538863],
                            [174.76832449436188,-36.84629381400097],
                            [174.7692310810089,-36.84620366388721],
                            [174.76981043815613,-36.84610922079687],
                            [174.77017521858215,-36.84555973141201],
                            [174.77080821990967,-36.844439275977884],
                            [174.7711193561554,-36.844404932256964],
                            [174.77132856845856,-36.84556402431314],
                            [174.77180063724518,-36.84585594102414],
                            [174.77217078208923,-36.84595467730651],
                            [174.77266430854797,-36.84634103544673],
                            [174.7730988264084,-36.84685617659677],
                            [174.77375328540802,-36.847594539525886],
                            [174.77409660816193,-36.848032402545975],
                            [174.77432191371918,-36.848586166891955],
                            [174.77448284626007,-36.849019731526084],
                            [174.77449893951416,-36.84972802489637],
                            [174.77437019348145,-36.85046636009073],
                            [174.7752982378006,-36.85088703625679],
                            [174.77600634098053,-36.85088703625679],
                            [174.7765213251114,-36.85024743586402],
                            [174.7779107093811,-36.84957348872072],
                            [174.7785758972168,-36.849019731526084],
                            [174.7789889574051,-36.8486848996486],
                            [174.77932155132294,-36.84862050873482],
                            [174.7794771194458,-36.84896392631501],
                            [174.78017449378964,-36.84926870812538],
                            [174.78087723255157,-36.84963787883187],
                            [174.78146731853482,-36.84994695061051],
                            [174.78166580200192,-36.8500328036606],
                            [174.78171408176422,-36.850114363968885],
                            [174.7819447517395,-36.850251728501945],
                            [174.7821432352066,-36.850410555935625],
                            [174.78205740451813,-36.849912609363464],
                            [174.78303372859952,-36.849363147313],
                            [174.78404760360718,-36.84913563452662],
                            [174.78469669818878,-36.84876216867355],
                            [174.78538870811462,-36.84821699110696],
                            [174.78580176830292,-36.847895034025306],
                            [174.78627920150757,-36.847731908586454],
                            [174.78658497333527,-36.84743999903773],
                            [174.7870033979416,-36.84730692225595],
                            [174.78710532188413,-36.84732838626869],
                            [174.78724479675293,-36.848264211364935],
                            [174.7871696949005,-36.848431628408186],
                            [174.78768467903137,-36.84904548776361],
                            [174.78786706924438,-36.84946187906624],
                            [174.7879394888878,-36.84957348872072],
                            [174.7885912656784,-36.84996626755518]
                        ]
                    }
                }]
            }
        },
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'line-width': 3,
            'line-color': ['get', 'color']
        }    
    }, labelLayerId);


    // 1840 polygon 
    map1.addSource('area', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/Brioan/mapbox_auckland_coastline/master/assets/geojson/1840areaGJSON.geojson'
    });

    map1.addLayer({
        'id': 'area',
        'type': 'fill',
        'source': 'area',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'fill-color': '#000000',
            'fill-opacity': 0.2
        }
    });

    

    // Buildings
    map1.addLayer({
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