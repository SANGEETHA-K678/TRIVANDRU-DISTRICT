var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TRIVANDRUMthiruvananthapuram_1 = new ol.format.GeoJSON();
var features_TRIVANDRUMthiruvananthapuram_1 = format_TRIVANDRUMthiruvananthapuram_1.readFeatures(json_TRIVANDRUMthiruvananthapuram_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRIVANDRUMthiruvananthapuram_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRIVANDRUMthiruvananthapuram_1.addFeatures(features_TRIVANDRUMthiruvananthapuram_1);
var lyr_TRIVANDRUMthiruvananthapuram_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRIVANDRUMthiruvananthapuram_1, 
                style: style_TRIVANDRUMthiruvananthapuram_1,
                popuplayertitle: "TRIVANDRUM — thiruvananthapuram",
                interactive: true,
                title: '<img src="styles/legend/TRIVANDRUMthiruvananthapuram_1.png" /> TRIVANDRUM — thiruvananthapuram'
            });
var format_clip_SOIL_2 = new ol.format.GeoJSON();
var features_clip_SOIL_2 = format_clip_SOIL_2.readFeatures(json_clip_SOIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_SOIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_SOIL_2.addFeatures(features_clip_SOIL_2);
var lyr_clip_SOIL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_SOIL_2, 
                style: style_clip_SOIL_2,
                popuplayertitle: "clip_SOIL",
                interactive: true,
    title: 'clip_SOIL<br />\
    <img src="styles/legend/clip_SOIL_2_0.png" /> clay<br />\
    <img src="styles/legend/clip_SOIL_2_1.png" /> gravelly clay<br />\
    <img src="styles/legend/clip_SOIL_2_2.png" /> gravelly loam<br />\
    <img src="styles/legend/clip_SOIL_2_3.png" /> loam<br />\
    <img src="styles/legend/clip_SOIL_2_4.png" /> sandy<br />'
        });
var format_clip_Road_3 = new ol.format.GeoJSON();
var features_clip_Road_3 = format_clip_Road_3.readFeatures(json_clip_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road_3.addFeatures(features_clip_Road_3);
var lyr_clip_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road_3, 
                style: style_clip_Road_3,
                popuplayertitle: "clip_Road",
                interactive: true,
                title: '<img src="styles/legend/clip_Road_3.png" /> clip_Road'
            });
var format_clip_railways_4 = new ol.format.GeoJSON();
var features_clip_railways_4 = format_clip_railways_4.readFeatures(json_clip_railways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_railways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_railways_4.addFeatures(features_clip_railways_4);
var lyr_clip_railways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_railways_4, 
                style: style_clip_railways_4,
                popuplayertitle: "clip_railways",
                interactive: true,
                title: '<img src="styles/legend/clip_railways_4.png" /> clip_railways'
            });
var format_clip_DRAINAGE_5 = new ol.format.GeoJSON();
var features_clip_DRAINAGE_5 = format_clip_DRAINAGE_5.readFeatures(json_clip_DRAINAGE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_DRAINAGE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_DRAINAGE_5.addFeatures(features_clip_DRAINAGE_5);
var lyr_clip_DRAINAGE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_DRAINAGE_5, 
                style: style_clip_DRAINAGE_5,
                popuplayertitle: "clip_DRAINAGE",
                interactive: true,
    title: 'clip_DRAINAGE<br />\
    <img src="styles/legend/clip_DRAINAGE_5_0.png" /> 0<br />\
    <img src="styles/legend/clip_DRAINAGE_5_1.png" /> 1<br />\
    <img src="styles/legend/clip_DRAINAGE_5_2.png" /> 2<br />\
    <img src="styles/legend/clip_DRAINAGE_5_3.png" /> 3<br />\
    <img src="styles/legend/clip_DRAINAGE_5_4.png" /> 4<br />\
    <img src="styles/legend/clip_DRAINAGE_5_5.png" /> 5<br />'
        });
var format_TVMBEACHESORG_6 = new ol.format.GeoJSON();
var features_TVMBEACHESORG_6 = format_TVMBEACHESORG_6.readFeatures(json_TVMBEACHESORG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TVMBEACHESORG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TVMBEACHESORG_6.addFeatures(features_TVMBEACHESORG_6);
var lyr_TVMBEACHESORG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TVMBEACHESORG_6, 
                style: style_TVMBEACHESORG_6,
                popuplayertitle: "TVMBEACHESORG",
                interactive: true,
                title: '<img src="styles/legend/TVMBEACHESORG_6.png" /> TVMBEACHESORG'
            });
var format_clip_Junctions_7 = new ol.format.GeoJSON();
var features_clip_Junctions_7 = format_clip_Junctions_7.readFeatures(json_clip_Junctions_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Junctions_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Junctions_7.addFeatures(features_clip_Junctions_7);
var lyr_clip_Junctions_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Junctions_7, 
                style: style_clip_Junctions_7,
                popuplayertitle: "clip_Junctions",
                interactive: true,
                title: '<img src="styles/legend/clip_Junctions_7.png" /> clip_Junctions'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TRIVANDRUMthiruvananthapuram_1.setVisible(true);lyr_clip_SOIL_2.setVisible(true);lyr_clip_Road_3.setVisible(true);lyr_clip_railways_4.setVisible(true);lyr_clip_DRAINAGE_5.setVisible(true);lyr_TVMBEACHESORG_6.setVisible(true);lyr_clip_Junctions_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TRIVANDRUMthiruvananthapuram_1,lyr_clip_SOIL_2,lyr_clip_Road_3,lyr_clip_railways_4,lyr_clip_DRAINAGE_5,lyr_TVMBEACHESORG_6,lyr_clip_Junctions_7];
lyr_TRIVANDRUMthiruvananthapuram_1.set('fieldAliases', {'fid': 'fid', 'admin_level': 'admin_level', 'alt_name': 'alt_name', 'boundary': 'boundary', 'name': 'name', 'name:ar': 'name:ar', 'name:kn': 'name:kn', 'name:ml': 'name:ml', 'name:ta': 'name:ta', 'name:ur': 'name:ur', 'official_name': 'official_name', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_clip_SOIL_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_clip_Road_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_clip_railways_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_clip_DRAINAGE_5.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_TVMBEACHESORG_6.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'photo': 'photo', });
lyr_clip_Junctions_7.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_TRIVANDRUMthiruvananthapuram_1.set('fieldImages', {'fid': 'TextEdit', 'admin_level': 'TextEdit', 'alt_name': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name:ar': 'TextEdit', 'name:kn': 'TextEdit', 'name:ml': 'TextEdit', 'name:ta': 'TextEdit', 'name:ur': 'TextEdit', 'official_name': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_clip_SOIL_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERSOIL_': 'Range', 'KERSOIL_ID': 'Range', 'CODE': 'Range', 'MAP_SYMBOL': 'TextEdit', 'DEPTH': 'TextEdit', 'TEXTURE': 'TextEdit', 'SLOPE': 'TextEdit', 'DRAINAGE': 'TextEdit', });
lyr_clip_Road_3.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_clip_railways_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_clip_DRAINAGE_5.set('fieldImages', {'ORDER1': 'Range', });
lyr_TVMBEACHESORG_6.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'photo': 'ExternalResource', });
lyr_clip_Junctions_7.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_TRIVANDRUMthiruvananthapuram_1.set('fieldLabels', {'fid': 'no label', 'admin_level': 'no label', 'alt_name': 'no label', 'boundary': 'no label', 'name': 'no label', 'name:ar': 'no label', 'name:kn': 'no label', 'name:ml': 'no label', 'name:ta': 'no label', 'name:ur': 'no label', 'official_name': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_clip_SOIL_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'no label', 'TEXTURE': 'no label', 'SLOPE': 'no label', 'DRAINAGE': 'no label', });
lyr_clip_Road_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_clip_railways_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_clip_DRAINAGE_5.set('fieldLabels', {'ORDER1': 'no label', });
lyr_TVMBEACHESORG_6.set('fieldLabels', {'id': 'no label', 'NAME': 'no label', 'photo': 'no label', });
lyr_clip_Junctions_7.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'no label', 'District': 'no label', 'Name': 'no label', });
lyr_clip_Junctions_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});