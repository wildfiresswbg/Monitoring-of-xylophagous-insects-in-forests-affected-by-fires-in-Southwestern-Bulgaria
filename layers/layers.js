ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2378052.921765, 5010764.856315, 3374455.070179, 5607694.801934]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WSBul_RDG_1 = new ol.format.GeoJSON();
var features_WSBul_RDG_1 = format_WSBul_RDG_1.readFeatures(json_WSBul_RDG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSBul_RDG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSBul_RDG_1.addFeatures(features_WSBul_RDG_1);
var lyr_WSBul_RDG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSBul_RDG_1, 
                style: style_WSBul_RDG_1,
                popuplayertitle: 'WSBul_RDG',
                interactive: true,
                title: '<img src="styles/legend/WSBul_RDG_1.png" /> WSBul_RDG'
            });
var format_WildFires_RDGSWBg20241_2 = new ol.format.GeoJSON();
var features_WildFires_RDGSWBg20241_2 = format_WildFires_RDGSWBg20241_2.readFeatures(json_WildFires_RDGSWBg20241_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildFires_RDGSWBg20241_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildFires_RDGSWBg20241_2.addFeatures(features_WildFires_RDGSWBg20241_2);
cluster_WildFires_RDGSWBg20241_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_WildFires_RDGSWBg20241_2
});
var lyr_WildFires_RDGSWBg20241_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_WildFires_RDGSWBg20241_2, 
                style: style_WildFires_RDGSWBg20241_2,
                popuplayertitle: 'WildFires_RDG-SWBg-2024-1',
                interactive: true,
                title: '<img src="styles/legend/WildFires_RDGSWBg20241_2.png" /> WildFires_RDG-SWBg-2024-1'
            });
var group_Forestsdamagedbyfires = new ol.layer.Group({
                                layers: [lyr_WSBul_RDG_1,lyr_WildFires_RDGSWBg20241_2,],
                                fold: "open",
                                title: 'Forests damaged by fires'});
var group_NDVI_20241108Sentinel2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'NDVI_20241108-Sentinel2'});
var group_DGSDLS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'DGS/DLS'});

lyr_OSMStandard_0.setVisible(true);lyr_WSBul_RDG_1.setVisible(true);lyr_WildFires_RDGSWBg20241_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Forestsdamagedbyfires];
lyr_WSBul_RDG_1.set('fieldAliases', {'dgs': 'dgs', 'rdg': 'rdg', });
lyr_WildFires_RDGSWBg20241_2.set('fieldAliases', {'Годин': 'Година', 'РДГ': 'РДГ', 'ДГС/Д�': 'ДГС/ДЛС', 'Отдел': 'Отдел', 'Подот': 'Подотдел', 'Latitude (': 'Latitude', 'Longitude': 'Longitude', 'Вид н�': 'Вид на пожара', 'Дата �': 'Дата на локализиране', 'Дата_1': 'Дата на загасяване', 'Причи': 'Причина:', 'Сигна': 'Сигализиран от:', 'Обща �': 'Обща опожарена площ (dka)', 'Горск': 'Горск', 'Дърве': 'Дървесен вид', 'Начин': 'Начин на гасене', });
lyr_WSBul_RDG_1.set('fieldImages', {'dgs': 'TextEdit', 'rdg': 'TextEdit', });
lyr_WildFires_RDGSWBg20241_2.set('fieldImages', {'Годин': 'TextEdit', 'РДГ': 'TextEdit', 'ДГС/Д�': 'TextEdit', 'Отдел': 'TextEdit', 'Подот': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'Вид н�': 'TextEdit', 'Дата �': 'TextEdit', 'Дата_1': 'TextEdit', 'Причи': 'TextEdit', 'Сигна': 'TextEdit', 'Обща �': 'TextEdit', 'Горск': 'TextEdit', 'Дърве': 'TextEdit', 'Начин': 'TextEdit', });
lyr_WSBul_RDG_1.set('fieldLabels', {'dgs': 'inline label - always visible', 'rdg': 'inline label - always visible', });
lyr_WildFires_RDGSWBg20241_2.set('fieldLabels', {'Годин': 'inline label - always visible', 'РДГ': 'inline label - always visible', 'ДГС/Д�': 'inline label - always visible', 'Отдел': 'inline label - always visible', 'Подот': 'inline label - always visible', 'Latitude (': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Вид н�': 'inline label - always visible', 'Дата �': 'inline label - always visible', 'Дата_1': 'inline label - always visible', 'Причи': 'inline label - always visible', 'Сигна': 'inline label - always visible', 'Обща �': 'inline label - always visible', 'Горск': 'inline label - always visible', 'Дърве': 'inline label - always visible', 'Начин': 'inline label - always visible', });
lyr_WildFires_RDGSWBg20241_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});