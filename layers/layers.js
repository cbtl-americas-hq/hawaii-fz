var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_5MinuteDriveTime_1 = new ol.format.GeoJSON();
var features_5MinuteDriveTime_1 = format_5MinuteDriveTime_1.readFeatures(json_5MinuteDriveTime_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5MinuteDriveTime_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5MinuteDriveTime_1.addFeatures(features_5MinuteDriveTime_1);
var lyr_5MinuteDriveTime_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5MinuteDriveTime_1, 
                style: style_5MinuteDriveTime_1,
                interactive: true,
                title: '<img src="styles/legend/5MinuteDriveTime_1.png" /> 5-Minute Drive Time'
            });
var format_CBTLCafe19_2 = new ol.format.GeoJSON();
var features_CBTLCafe19_2 = format_CBTLCafe19_2.readFeatures(json_CBTLCafe19_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTLCafe19_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTLCafe19_2.addFeatures(features_CBTLCafe19_2);
var lyr_CBTLCafe19_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTLCafe19_2, 
                style: style_CBTLCafe19_2,
                interactive: true,
                title: '<img src="styles/legend/CBTLCafe19_2.png" /> CBTL Cafe [19]'
            });
var format_TargetTradeAreas17_3 = new ol.format.GeoJSON();
var features_TargetTradeAreas17_3 = format_TargetTradeAreas17_3.readFeatures(json_TargetTradeAreas17_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TargetTradeAreas17_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TargetTradeAreas17_3.addFeatures(features_TargetTradeAreas17_3);
var lyr_TargetTradeAreas17_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TargetTradeAreas17_3, 
                style: style_TargetTradeAreas17_3,
                interactive: true,
                title: '<img src="styles/legend/TargetTradeAreas17_3.png" /> Target Trade Areas [17]'
            });
var format_IdentifiedSites14_4 = new ol.format.GeoJSON();
var features_IdentifiedSites14_4 = format_IdentifiedSites14_4.readFeatures(json_IdentifiedSites14_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdentifiedSites14_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdentifiedSites14_4.addFeatures(features_IdentifiedSites14_4);
var lyr_IdentifiedSites14_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IdentifiedSites14_4, 
                style: style_IdentifiedSites14_4,
                interactive: true,
                title: '<img src="styles/legend/IdentifiedSites14_4.png" /> Identified Sites [14]'
            });
var format_DistancetoNearestTTA_5 = new ol.format.GeoJSON();
var features_DistancetoNearestTTA_5 = format_DistancetoNearestTTA_5.readFeatures(json_DistancetoNearestTTA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistancetoNearestTTA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoNearestTTA_5.addFeatures(features_DistancetoNearestTTA_5);
var lyr_DistancetoNearestTTA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistancetoNearestTTA_5, 
                style: style_DistancetoNearestTTA_5,
                interactive: true,
                title: '<img src="styles/legend/DistancetoNearestTTA_5.png" /> Distance to Nearest TTA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_5MinuteDriveTime_1.setVisible(true);lyr_CBTLCafe19_2.setVisible(true);lyr_TargetTradeAreas17_3.setVisible(true);lyr_IdentifiedSites14_4.setVisible(false);lyr_DistancetoNearestTTA_5.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_5MinuteDriveTime_1,lyr_CBTLCafe19_2,lyr_TargetTradeAreas17_3,lyr_IdentifiedSites14_4,lyr_DistancetoNearestTTA_5];
lyr_5MinuteDriveTime_1.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_CBTLCafe19_2.set('fieldAliases', {'id': 'id', 'storeid': 'storeid', 'store_name': 'store_name', 'descriptio': 'descriptio', 'sqft': 'sqft', 'store_type': 'store_type', 'trad_nontr': 'trad_nontr', 'lat': 'lat', 'lon': 'lon', 'operations': 'operations', });
lyr_TargetTradeAreas17_3.set('fieldAliases', {'id': 'id', 'temp_id': 'temp_id', 'new_area': 'new_area', 'geo_id': 'geo_id', 'lat': 'lat', 'lon': 'lon', 'layer': 'layer', 'path': 'path', 'type': 'type', 'selected': 'selected', 'seed_id': 'seed_id', 'optimizati': 'optimizati', 'addres': 'addres', 'city': 'city', 'state': 'state', 'cbsa_class': 'cbsa_class', 'density_cl': 'density_cl', });
lyr_IdentifiedSites14_4.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_DistancetoNearestTTA_5.set('fieldAliases', {'id': 'id', 'starting': 'starting', 'ending': 'ending', 'distance': 'distance', 'dist_miles': 'dist_miles', 'label': 'label', });
lyr_5MinuteDriveTime_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_CBTLCafe19_2.set('fieldImages', {'id': 'TextEdit', 'storeid': 'TextEdit', 'store_name': 'TextEdit', 'descriptio': 'TextEdit', 'sqft': 'TextEdit', 'store_type': 'TextEdit', 'trad_nontr': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'operations': 'TextEdit', });
lyr_TargetTradeAreas17_3.set('fieldImages', {'id': 'TextEdit', 'temp_id': 'TextEdit', 'new_area': 'TextEdit', 'geo_id': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'type': 'TextEdit', 'selected': 'TextEdit', 'seed_id': 'TextEdit', 'optimizati': 'TextEdit', 'addres': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'cbsa_class': 'TextEdit', 'density_cl': 'TextEdit', });
lyr_IdentifiedSites14_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_DistancetoNearestTTA_5.set('fieldImages', {'id': 'TextEdit', 'starting': 'TextEdit', 'ending': 'TextEdit', 'distance': 'TextEdit', 'dist_miles': 'TextEdit', 'label': 'TextEdit', });
lyr_5MinuteDriveTime_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_CBTLCafe19_2.set('fieldLabels', {'id': 'no label', 'storeid': 'no label', 'store_name': 'no label', 'descriptio': 'no label', 'sqft': 'no label', 'store_type': 'no label', 'trad_nontr': 'no label', 'lat': 'no label', 'lon': 'no label', 'operations': 'no label', });
lyr_TargetTradeAreas17_3.set('fieldLabels', {'id': 'no label', 'temp_id': 'no label', 'new_area': 'no label', 'geo_id': 'no label', 'lat': 'no label', 'lon': 'no label', 'layer': 'no label', 'path': 'no label', 'type': 'no label', 'selected': 'no label', 'seed_id': 'no label', 'optimizati': 'no label', 'addres': 'no label', 'city': 'no label', 'state': 'no label', 'cbsa_class': 'no label', 'density_cl': 'no label', });
lyr_IdentifiedSites14_4.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_DistancetoNearestTTA_5.set('fieldLabels', {'id': 'no label', 'starting': 'no label', 'ending': 'no label', 'distance': 'no label', 'dist_miles': 'no label', 'label': 'no label', });
lyr_DistancetoNearestTTA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});