function mostrar() {



    mapboxgl.accessToken = 'pk.eyJ1IjoicmF1dSIsImEiOiJja2gwbm9jNDcxZmV6MzBycnRtZGRzY2c1In0.fB4oL4fL-s2l0--i9EeICg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-0.13059031898562612, 38.543993169980965],
        zoom: 12
    });
    map.on('load', function() {
        map.addSource('maine', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [
                        [
                            [-0.1377582550048828, 38.53645083248653],
                            [-0.1384878158569336, 38.53729004998249],
                            [-0.14077278955474615, 38.540400894347194],
                            [-0.13923829761537165, 38.54176617176576],
                            [-0.13923829761537165, 38.54176617176576],
                            [-0.13709776063004941, 38.54298585629612],
                            [-0.13435640882541122, 38.54397056282187],
                            [-0.13059031898562612, 38.543993169980965],
                            [-0.12090741025042595, 38.54454990875993],
                            [-0.11414274492342891, 38.54369690545654],
                            [-0.10785014838307294, 38.54223970307921],
                            [-0.10211545131779465, 38.540446801651605],
                            [-0.09899597513776559, 38.53902164490967],
                            [-0.09823017091614927, 38.538241919861335],
                            [-0.09926681115254077, 38.53719363847006],
                            [-0.09895017629736547, 38.53427602804947],
                            [-0.10728621353277568, 38.53230120148154],
                            [-0.10991223034979347, 38.533618030054946],
                            [-0.11258116251104955, 38.534229869407724],
                            [-0.119335233193405, 38.534983559913556],
                            [-0.12251914948552045, 38.53531004808111],
                            [-0.12570306577761592, 38.53523370233146],
                            [-0.12757397366123246, 38.5350780361453],
                            [-0.12987403498721184, 38.53488880000562],
                            [-0.13147008354251088, 38.53336894393952],
                            [-0.13285973619510116, 38.53482760963381],
                            [-0.13442105022462458, 38.53591698610828],
                            [-0.13592138080379845, 38.53627992012845],
                            [-0.13682260303280236, 38.536313489096024],
                            [-0.13733758716366173, 38.53634705804795]
                        ]
                    ]
                }
            }
        });
        map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine',
            'layout': {},
            'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.8
            }
        });
    });
    map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        function(error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
            // Add a GeoJSON source with 2 points
            map.addSource('points', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [{
                            // feature for Mapbox DC
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-0.1123401371093724, 38.538487753677835]
                            },

                        },
                        {
                            // feature for Mapbox SF
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-0.12019364510497788, 38.53788352812815]
                            },

                        },
                        {
                            // feature for Mapbox SF
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-0.13081519280395248, 38.53751427668256]
                            },

                        }
                    ]
                }
            });

            // Add a symbol layer
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'points',
                'layout': {
                    'icon-image': 'custom-marker',
                    // get the title name from the source's "title" property
                    'text-field': ['get', 'title'],
                    'text-font': [
                        'Open Sans Semibold',
                        'Arial Unicode MS Bold'
                    ],
                    'text-offset': [0, 1.25],
                    'text-anchor': 'top'
                }
            });
        }


    );

    // Code para cursor cambie
    map.on('mouseover', 'points', (e) => {


        map.getCanvas().style.cursor = 'pointer';
    });
    // Code para cursor vualva como estaba
    map.on('mouseleave', 'points', (e) => {


        map.getCanvas().style.cursor = 'grab';
    });
    // Code para al clicar el puntos pues se centre
    map.on('click', 'points', function(e) {
        map.flyTo({
            center: e.features[0].geometry.coordinates
        });
    });



    //code para capas. al clicar las capas pues se desaparece el borde o el punto
    var toggleableLayerIds = ['maine', 'points'];

    // set up the corresponding toggle button for each layer
    for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = id;

        link.onclick = function(e) {
            var clickedLayer = this.textContent;
            e.preventDefault();
            e.stopPropagation();

            var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

            // toggle layer visibility by changing the layout object's visibility property
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
        };

        var layers = document.getElementById('menu');
        layers.appendChild(link);
    }

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    map.addControl(new mapboxgl.FullscreenControl());



}

window.onload = mostrar();