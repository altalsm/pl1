var wms_layers = [];

var format_ESRISHAPE_1canvec_220325_335480contour_1shp_0 = new ol.format.GeoJSON();
var features_ESRISHAPE_1canvec_220325_335480contour_1shp_0 = format_ESRISHAPE_1canvec_220325_335480contour_1shp_0.readFeatures(json_ESRISHAPE_1canvec_220325_335480contour_1shp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESRISHAPE_1canvec_220325_335480contour_1shp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESRISHAPE_1canvec_220325_335480contour_1shp_0.addFeatures(features_ESRISHAPE_1canvec_220325_335480contour_1shp_0);
var lyr_ESRISHAPE_1canvec_220325_335480contour_1shp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESRISHAPE_1canvec_220325_335480contour_1shp_0, 
                style: style_ESRISHAPE_1canvec_220325_335480contour_1shp_0,
                interactive: true,
                title: '<img src="styles/legend/ESRISHAPE_1canvec_220325_335480contour_1shp_0.png" /> ESRISHAPE_1/canvec_220325_335480/contour_1.shp'
            });
var format_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1 = new ol.format.GeoJSON();
var features_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1 = format_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1.readFeatures(json_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1.addFeatures(features_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1);
var lyr_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1, 
                style: style_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1,
                interactive: true,
                title: '<img src="styles/legend/ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1.png" /> ESRISHAPE_1/canvec_220325_335480/water_linear_flow_1.shp'
            });
var format_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2 = new ol.format.GeoJSON();
var features_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2 = format_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2.readFeatures(json_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2.addFeatures(features_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2);
var lyr_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2, 
                style: style_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2,
                interactive: true,
                title: '<img src="styles/legend/ESRISHAPE_1canvec_220325_335480watercourse_1shp_2.png" /> ESRISHAPE_1/canvec_220325_335480/watercourse_1.shp'
            });
var format_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3 = new ol.format.GeoJSON();
var features_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3 = format_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3.readFeatures(json_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3.addFeatures(features_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3);
var lyr_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3, 
                style: style_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3,
                interactive: true,
                title: '<img src="styles/legend/ESRISHAPE_1canvec_220325_335480waterbody_2shp_3.png" /> ESRISHAPE_1/canvec_220325_335480/waterbody_2.shp'
            });
var format_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4 = new ol.format.GeoJSON();
var features_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4 = format_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4.readFeatures(json_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4.addFeatures(features_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4);
var lyr_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4, 
                style: style_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4,
                interactive: true,
                title: '<img src="styles/legend/ESRISHAPE_1canvec_220325_335480road_segment_1shp_4.png" /> ESRISHAPE_1/canvec_220325_335480/road_segment_1.shp'
            });
var format_Layer_5 = new ol.format.GeoJSON();
var features_Layer_5 = format_Layer_5.readFeatures(json_Layer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_5.addFeatures(features_Layer_5);
var lyr_Layer_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Layer_5, 
                style: style_Layer_5,
                interactive: true,
                title: 'Layer'
            });
var format_Layer_6 = new ol.format.GeoJSON();
var features_Layer_6 = format_Layer_6.readFeatures(json_Layer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_6.addFeatures(features_Layer_6);
var lyr_Layer_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Layer_6, 
                style: style_Layer_6,
                interactive: true,
                title: 'Layer'
            });
var format_Layer_7 = new ol.format.GeoJSON();
var features_Layer_7 = format_Layer_7.readFeatures(json_Layer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_7.addFeatures(features_Layer_7);
var lyr_Layer_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Layer_7, 
                style: style_Layer_7,
                interactive: true,
                title: 'Layer'
            });
var format_Layer_8 = new ol.format.GeoJSON();
var features_Layer_8 = format_Layer_8.readFeatures(json_Layer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Layer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Layer_8.addFeatures(features_Layer_8);
var lyr_Layer_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Layer_8, 
                style: style_Layer_8,
                interactive: true,
                title: 'Layer'
            });
var format_toteRoadtoteRoadshp_9 = new ol.format.GeoJSON();
var features_toteRoadtoteRoadshp_9 = format_toteRoadtoteRoadshp_9.readFeatures(json_toteRoadtoteRoadshp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_toteRoadtoteRoadshp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toteRoadtoteRoadshp_9.addFeatures(features_toteRoadtoteRoadshp_9);
var lyr_toteRoadtoteRoadshp_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_toteRoadtoteRoadshp_9, 
                style: style_toteRoadtoteRoadshp_9,
                interactive: true,
                title: '<img src="styles/legend/toteRoadtoteRoadshp_9.png" /> toteRoad — toteRoad.shp'
            });
var group_Toporama031K05LacdupinceauQuebec2 = new ol.layer.Group({
                                layers: [lyr_Layer_7,lyr_Layer_8,],
                                title: "Toporama - 031K05 - Lac du pinceau, Quebec (2)"});
var group_Toporama031K04RolphtonOntarioQuebec1 = new ol.layer.Group({
                                layers: [lyr_Layer_5,lyr_Layer_6,],
                                title: "Toporama - 031K04 - Rolphton, Ontario, Quebec (1)"});
var group_FME_5644441C_1648204173292_920 = new ol.layer.Group({
                                layers: [lyr_ESRISHAPE_1canvec_220325_335480contour_1shp_0,lyr_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1,lyr_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2,lyr_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3,lyr_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4,],
                                title: "FME_5644441C_1648204173292_920"});

lyr_ESRISHAPE_1canvec_220325_335480contour_1shp_0.setVisible(true);lyr_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1.setVisible(true);lyr_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2.setVisible(true);lyr_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3.setVisible(true);lyr_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4.setVisible(true);lyr_Layer_5.setVisible(true);lyr_Layer_6.setVisible(true);lyr_Layer_7.setVisible(true);lyr_Layer_8.setVisible(true);lyr_toteRoadtoteRoadshp_9.setVisible(true);
var layersList = [group_FME_5644441C_1648204173292_920,group_Toporama031K04RolphtonOntarioQuebec1,group_Toporama031K05LacdupinceauQuebec2,lyr_toteRoadtoteRoadshp_9];
lyr_ESRISHAPE_1canvec_220325_335480contour_1shp_0.set('fieldAliases', {'feature_id': 'feature_id', 'datemin': 'datemin', 'datemax': 'datemax', 'haccmin': 'haccmin', 'haccmax': 'haccmax', 'vaccmin': 'vaccmin', 'vaccmax': 'vaccmax', 'c_gen': 'c_gen', 'c_gen_en': 'c_gen_en', 'c_gen_fr': 'c_gen_fr', 'c_dsc': 'c_dsc', 'c_dsc_en': 'c_dsc_en', 'c_dsc_fr': 'c_dsc_fr', 'e': 'e', 'e_u': 'e_u', 'e_u_en': 'e_u_en', 'e_u_fr': 'e_u_fr', 'e_usym': 'e_usym', 'e_usym_en': 'e_usym_en', 'e_usym_fr': 'e_usym_fr', 'map_sel': 'map_sel', 'map_sel_en': 'map_sel_en', 'map_sel_fr': 'map_sel_fr', });
lyr_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1.set('fieldAliases', {'feature_id': 'feature_id', 'datemin': 'datemin', 'datemax': 'datemax', 'haccmin': 'haccmin', 'haccmax': 'haccmax', 'perm': 'perm', 'perm_en': 'perm_en', 'perm_fr': 'perm_fr', 'qualif': 'qualif', 'qualif_en': 'qualif_en', 'qualif_fr': 'qualif_fr', 'priority': 'priority', 'priorityen': 'priorityen', 'priorityfr': 'priorityfr', 'definit': 'definit', 'definit_en': 'definit_en', 'definit_fr': 'definit_fr', 'fldir': 'fldir', 'fldir_en': 'fldir_en', 'fldir_fr': 'fldir_fr', 'name_db': 'name_db', 'name_id': 'name_id', 'name_en': 'name_en', 'name_fr': 'name_fr', 'nameoth': 'nameoth', 'langoth': 'langoth', 'name_1_id': 'name_1_id', 'name_1_en': 'name_1_en', 'name_1_fr': 'name_1_fr', 'name_2_id': 'name_2_id', 'name_2_en': 'name_2_en', 'name_2_fr': 'name_2_fr', 'map_sel': 'map_sel', 'map_sel_en': 'map_sel_en', 'map_sel_fr': 'map_sel_fr', 'ctry': 'ctry', 'ctry_en': 'ctry_en', 'ctry_fr': 'ctry_fr', 'topolqu': 'topolqu', 'topolqu_en': 'topolqu_en', 'topolqu_fr': 'topolqu_fr', 'netqual': 'netqual', 'netqual_en': 'netqual_en', 'netqual_fr': 'netqual_fr', });
lyr_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2.set('fieldAliases', {'feature_id': 'feature_id', 'datemin': 'datemin', 'datemax': 'datemax', 'haccmin': 'haccmin', 'haccmax': 'haccmax', 'perm': 'perm', 'perm_en': 'perm_en', 'perm_fr': 'perm_fr', 'priority': 'priority', 'priorityen': 'priorityen', 'priorityfr': 'priorityfr', 'definit': 'definit', 'definit_en': 'definit_en', 'definit_fr': 'definit_fr', 'fldir': 'fldir', 'fldir_en': 'fldir_en', 'fldir_fr': 'fldir_fr', 'name_db': 'name_db', 'name_id': 'name_id', 'name_en': 'name_en', 'name_fr': 'name_fr', 'nameoth': 'nameoth', 'langoth': 'langoth', 'name_1_id': 'name_1_id', 'name_1_en': 'name_1_en', 'name_1_fr': 'name_1_fr', 'name_2_id': 'name_2_id', 'name_2_en': 'name_2_en', 'name_2_fr': 'name_2_fr', 'map_sel': 'map_sel', 'map_sel_en': 'map_sel_en', 'map_sel_fr': 'map_sel_fr', 'ctry': 'ctry', 'ctry_en': 'ctry_en', 'ctry_fr': 'ctry_fr', 'topolqu': 'topolqu', 'topolqu_en': 'topolqu_en', 'topolqu_fr': 'topolqu_fr', 'netqual': 'netqual', 'netqual_en': 'netqual_en', 'netqual_fr': 'netqual_fr', });
lyr_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3.set('fieldAliases', {'feature_id': 'feature_id', 'datemin': 'datemin', 'datemax': 'datemax', 'haccmin': 'haccmin', 'haccmax': 'haccmax', 'perm': 'perm', 'perm_en': 'perm_en', 'perm_fr': 'perm_fr', 'shorlev': 'shorlev', 'shorlev_en': 'shorlev_en', 'shorlev_fr': 'shorlev_fr', 'definit': 'definit', 'definit_en': 'definit_en', 'definit_fr': 'definit_fr', 'isisol': 'isisol', 'isisol_en': 'isisol_en', 'isisol_fr': 'isisol_fr', 'name_db': 'name_db', 'name_id': 'name_id', 'name_en': 'name_en', 'name_fr': 'name_fr', 'nameoth': 'nameoth', 'langoth': 'langoth', 'namelk1id': 'namelk1id', 'namelk1en': 'namelk1en', 'namelk1fr': 'namelk1fr', 'namelk2id': 'namelk2id', 'namelk2en': 'namelk2en', 'namelk2fr': 'namelk2fr', 'namerv1id': 'namerv1id', 'namerv1en': 'namerv1en', 'namerv1fr': 'namerv1fr', 'namerv2id': 'namerv2id', 'namerv2en': 'namerv2en', 'namerv2fr': 'namerv2fr', 'map_sel': 'map_sel', 'map_sel_en': 'map_sel_en', 'map_sel_fr': 'map_sel_fr', 'ctry': 'ctry', 'ctry_en': 'ctry_en', 'ctry_fr': 'ctry_fr', 'topolqu': 'topolqu', 'topolqu_en': 'topolqu_en', 'topolqu_fr': 'topolqu_fr', });
lyr_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4.set('fieldAliases', {'feature_id': 'feature_id', 'datemin': 'datemin', 'datemax': 'datemax', 'haccmin': 'haccmin', 'haccmax': 'haccmax', 'cloper': 'cloper', 'cloper_en': 'cloper_en', 'cloper_fr': 'cloper_fr', 'exnum': 'exnum', 'pd': 'pd', 'pd_en': 'pd_en', 'pd_fr': 'pd_fr', 'rdjuri_en': 'rdjuri_en', 'rdjuri_fr': 'rdjuri_fr', 'isnathi': 'isnathi', 'isnathi_en': 'isnathi_en', 'isnathi_fr': 'isnathi_fr', 'istrhi': 'istrhi', 'istrhi_en': 'istrhi_en', 'istrhi_fr': 'istrhi_fr', 'numlanes': 'numlanes', 'rdcls': 'rdcls', 'rdcls_en': 'rdcls_en', 'rdcls_fr': 'rdcls_fr', 'geobase_id': 'geobase_id', 'rtenam1_en': 'rtenam1_en', 'rtenam2_en': 'rtenam2_en', 'rtenam3_en': 'rtenam3_en', 'rtenam4_en': 'rtenam4_en', 'rtenam1_fr': 'rtenam1_fr', 'rtenam2_fr': 'rtenam2_fr', 'rtenam3_fr': 'rtenam3_fr', 'rtenam4_fr': 'rtenam4_fr', 'rdsegnamen': 'rdsegnamen', 'rdsegnamfr': 'rdsegnamfr', 'rtenum1': 'rtenum1', 'rtenum2': 'rtenum2', 'rtenum3': 'rtenum3', 'sprest': 'sprest', 'surfdsc': 'surfdsc', 'surfdsc_en': 'surfdsc_en', 'surfdsc_fr': 'surfdsc_fr', 'ispaved': 'ispaved', 'ispaved_en': 'ispaved_en', 'ispaved_fr': 'ispaved_fr', 'tdirect': 'tdirect', 'tdirect_en': 'tdirect_en', 'tdirect_fr': 'tdirect_fr', 'ofmunquadl': 'ofmunquadl', 'ofmunquadr': 'ofmunquadr', 'offpnaml': 'offpnaml', 'offpnamr': 'offpnamr', 'offptypl': 'offptypl', 'offptypr': 'offptypr', 'ofdirprel': 'ofdirprel', 'ofdirprer': 'ofdirprer', 'ofdirsufl': 'ofdirsufl', 'ofdirsufr': 'ofdirsufr', 'ofstrartl': 'ofstrartl', 'ofstrartr': 'ofstrartr', 'ofstrbodyl': 'ofstrbodyl', 'ofstrbodyr': 'ofstrbodyr', 'ofstrtyprl': 'ofstrtyprl', 'ofstrtyprr': 'ofstrtyprr', 'ofstrtysul': 'ofstrtysul', 'ofstrtysur': 'ofstrtysur', 'ofstrnacol': 'ofstrnacol', 'ofstrnacor': 'ofstrnacor', 'ofstrnaml': 'ofstrnaml', 'ofstrnamr': 'ofstrnamr', 'hnumfl': 'hnumfl', 'hnumfsufl': 'hnumfsufl', 'hnumftl': 'hnumftl', 'hnumftl_en': 'hnumftl_en', 'hnumftl_fr': 'hnumftl_fr', 'hnumll': 'hnumll', 'hnumlsufl': 'hnumlsufl', 'hnumltl': 'hnumltl', 'hnumltl_en': 'hnumltl_en', 'hnumltl_fr': 'hnumltl_fr', 'nummetl': 'nummetl', 'nummetl_en': 'nummetl_en', 'nummetl_fr': 'nummetl_fr', 'sysindl': 'sysindl', 'sysindl_en': 'sysindl_en', 'sysindl_fr': 'sysindl_fr', 'adddifgl': 'adddifgl', 'adddifglen': 'adddifglen', 'adddifglfr': 'adddifglfr', 'hnumfr': 'hnumfr', 'hnumfsufr': 'hnumfsufr', 'hnumftr': 'hnumftr', 'hnumftr_en': 'hnumftr_en', 'hnumftr_fr': 'hnumftr_fr', 'hnumlr': 'hnumlr', 'hnumlsufr': 'hnumlsufr', 'hnumltr': 'hnumltr', 'hnumltr_en': 'hnumltr_en', 'hnumltr_fr': 'hnumltr_fr', 'nummetr': 'nummetr', 'nummetr_en': 'nummetr_en', 'nummetr_fr': 'nummetr_fr', 'sysindr': 'sysindr', 'sysindr_en': 'sysindr_en', 'sysindr_fr': 'sysindr_fr', 'adddifgr': 'adddifgr', 'adddifgren': 'adddifgren', 'adddifgrfr': 'adddifgrfr', 'rdstrugeid': 'rdstrugeid', 'rdstunamen': 'rdstunamen', 'rdstunamfr': 'rdstunamfr', 'rdstudsc': 'rdstudsc', 'rdstudscen': 'rdstudscen', 'rdstudscfr': 'rdstudscfr', 'map_sel': 'map_sel', 'map_sel_en': 'map_sel_en', 'map_sel_fr': 'map_sel_fr', });
lyr_Layer_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Layer_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Layer_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Layer_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_toteRoadtoteRoadshp_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_ESRISHAPE_1canvec_220325_335480contour_1shp_0.set('fieldImages', {'feature_id': 'TextEdit', 'datemin': 'TextEdit', 'datemax': 'TextEdit', 'haccmin': 'TextEdit', 'haccmax': 'TextEdit', 'vaccmin': 'TextEdit', 'vaccmax': 'TextEdit', 'c_gen': 'Range', 'c_gen_en': 'TextEdit', 'c_gen_fr': 'TextEdit', 'c_dsc': 'Range', 'c_dsc_en': 'TextEdit', 'c_dsc_fr': 'TextEdit', 'e': 'TextEdit', 'e_u': 'Range', 'e_u_en': 'TextEdit', 'e_u_fr': 'TextEdit', 'e_usym': 'Range', 'e_usym_en': 'TextEdit', 'e_usym_fr': 'TextEdit', 'map_sel': 'Range', 'map_sel_en': 'TextEdit', 'map_sel_fr': 'TextEdit', });
lyr_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1.set('fieldImages', {'feature_id': 'TextEdit', 'datemin': 'TextEdit', 'datemax': 'TextEdit', 'haccmin': 'TextEdit', 'haccmax': 'TextEdit', 'perm': 'Range', 'perm_en': 'TextEdit', 'perm_fr': 'TextEdit', 'qualif': 'Range', 'qualif_en': 'TextEdit', 'qualif_fr': 'TextEdit', 'priority': 'Range', 'priorityen': 'TextEdit', 'priorityfr': 'TextEdit', 'definit': 'Range', 'definit_en': 'TextEdit', 'definit_fr': 'TextEdit', 'fldir': 'Range', 'fldir_en': 'TextEdit', 'fldir_fr': 'TextEdit', 'name_db': 'TextEdit', 'name_id': 'TextEdit', 'name_en': 'TextEdit', 'name_fr': 'TextEdit', 'nameoth': 'TextEdit', 'langoth': 'TextEdit', 'name_1_id': 'TextEdit', 'name_1_en': 'TextEdit', 'name_1_fr': 'TextEdit', 'name_2_id': 'TextEdit', 'name_2_en': 'TextEdit', 'name_2_fr': 'TextEdit', 'map_sel': 'Range', 'map_sel_en': 'TextEdit', 'map_sel_fr': 'TextEdit', 'ctry': 'Range', 'ctry_en': 'TextEdit', 'ctry_fr': 'TextEdit', 'topolqu': 'Range', 'topolqu_en': 'TextEdit', 'topolqu_fr': 'TextEdit', 'netqual': 'Range', 'netqual_en': 'TextEdit', 'netqual_fr': 'TextEdit', });
lyr_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2.set('fieldImages', {'feature_id': 'TextEdit', 'datemin': 'TextEdit', 'datemax': 'TextEdit', 'haccmin': 'TextEdit', 'haccmax': 'TextEdit', 'perm': 'Range', 'perm_en': 'TextEdit', 'perm_fr': 'TextEdit', 'priority': 'Range', 'priorityen': 'TextEdit', 'priorityfr': 'TextEdit', 'definit': 'Range', 'definit_en': 'TextEdit', 'definit_fr': 'TextEdit', 'fldir': 'Range', 'fldir_en': 'TextEdit', 'fldir_fr': 'TextEdit', 'name_db': 'TextEdit', 'name_id': 'TextEdit', 'name_en': 'TextEdit', 'name_fr': 'TextEdit', 'nameoth': 'TextEdit', 'langoth': 'TextEdit', 'name_1_id': 'TextEdit', 'name_1_en': 'TextEdit', 'name_1_fr': 'TextEdit', 'name_2_id': 'TextEdit', 'name_2_en': 'TextEdit', 'name_2_fr': 'TextEdit', 'map_sel': 'Range', 'map_sel_en': 'TextEdit', 'map_sel_fr': 'TextEdit', 'ctry': 'Range', 'ctry_en': 'TextEdit', 'ctry_fr': 'TextEdit', 'topolqu': 'Range', 'topolqu_en': 'TextEdit', 'topolqu_fr': 'TextEdit', 'netqual': 'Range', 'netqual_en': 'TextEdit', 'netqual_fr': 'TextEdit', });
lyr_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3.set('fieldImages', {'feature_id': 'TextEdit', 'datemin': 'TextEdit', 'datemax': 'TextEdit', 'haccmin': 'TextEdit', 'haccmax': 'TextEdit', 'perm': 'Range', 'perm_en': 'TextEdit', 'perm_fr': 'TextEdit', 'shorlev': 'Range', 'shorlev_en': 'TextEdit', 'shorlev_fr': 'TextEdit', 'definit': 'Range', 'definit_en': 'TextEdit', 'definit_fr': 'TextEdit', 'isisol': 'Range', 'isisol_en': 'TextEdit', 'isisol_fr': 'TextEdit', 'name_db': 'TextEdit', 'name_id': 'TextEdit', 'name_en': 'TextEdit', 'name_fr': 'TextEdit', 'nameoth': 'TextEdit', 'langoth': 'TextEdit', 'namelk1id': 'TextEdit', 'namelk1en': 'TextEdit', 'namelk1fr': 'TextEdit', 'namelk2id': 'TextEdit', 'namelk2en': 'TextEdit', 'namelk2fr': 'TextEdit', 'namerv1id': 'TextEdit', 'namerv1en': 'TextEdit', 'namerv1fr': 'TextEdit', 'namerv2id': 'TextEdit', 'namerv2en': 'TextEdit', 'namerv2fr': 'TextEdit', 'map_sel': 'Range', 'map_sel_en': 'TextEdit', 'map_sel_fr': 'TextEdit', 'ctry': 'Range', 'ctry_en': 'TextEdit', 'ctry_fr': 'TextEdit', 'topolqu': 'Range', 'topolqu_en': 'TextEdit', 'topolqu_fr': 'TextEdit', });
lyr_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4.set('fieldImages', {'feature_id': 'TextEdit', 'datemin': 'TextEdit', 'datemax': 'TextEdit', 'haccmin': 'TextEdit', 'haccmax': 'TextEdit', 'cloper': 'Range', 'cloper_en': 'TextEdit', 'cloper_fr': 'TextEdit', 'exnum': 'TextEdit', 'pd': 'Range', 'pd_en': 'TextEdit', 'pd_fr': 'TextEdit', 'rdjuri_en': 'TextEdit', 'rdjuri_fr': 'TextEdit', 'isnathi': 'Range', 'isnathi_en': 'TextEdit', 'isnathi_fr': 'TextEdit', 'istrhi': 'Range', 'istrhi_en': 'TextEdit', 'istrhi_fr': 'TextEdit', 'numlanes': 'Range', 'rdcls': 'Range', 'rdcls_en': 'TextEdit', 'rdcls_fr': 'TextEdit', 'geobase_id': 'TextEdit', 'rtenam1_en': 'TextEdit', 'rtenam2_en': 'TextEdit', 'rtenam3_en': 'TextEdit', 'rtenam4_en': 'TextEdit', 'rtenam1_fr': 'TextEdit', 'rtenam2_fr': 'TextEdit', 'rtenam3_fr': 'TextEdit', 'rtenam4_fr': 'TextEdit', 'rdsegnamen': 'TextEdit', 'rdsegnamfr': 'TextEdit', 'rtenum1': 'TextEdit', 'rtenum2': 'TextEdit', 'rtenum3': 'TextEdit', 'sprest': 'Range', 'surfdsc': 'Range', 'surfdsc_en': 'TextEdit', 'surfdsc_fr': 'TextEdit', 'ispaved': 'Range', 'ispaved_en': 'TextEdit', 'ispaved_fr': 'TextEdit', 'tdirect': 'Range', 'tdirect_en': 'TextEdit', 'tdirect_fr': 'TextEdit', 'ofmunquadl': 'TextEdit', 'ofmunquadr': 'TextEdit', 'offpnaml': 'TextEdit', 'offpnamr': 'TextEdit', 'offptypl': 'TextEdit', 'offptypr': 'TextEdit', 'ofdirprel': 'TextEdit', 'ofdirprer': 'TextEdit', 'ofdirsufl': 'TextEdit', 'ofdirsufr': 'TextEdit', 'ofstrartl': 'TextEdit', 'ofstrartr': 'TextEdit', 'ofstrbodyl': 'TextEdit', 'ofstrbodyr': 'TextEdit', 'ofstrtyprl': 'TextEdit', 'ofstrtyprr': 'TextEdit', 'ofstrtysul': 'TextEdit', 'ofstrtysur': 'TextEdit', 'ofstrnacol': 'TextEdit', 'ofstrnacor': 'TextEdit', 'ofstrnaml': 'TextEdit', 'ofstrnamr': 'TextEdit', 'hnumfl': 'TextEdit', 'hnumfsufl': 'TextEdit', 'hnumftl': 'Range', 'hnumftl_en': 'TextEdit', 'hnumftl_fr': 'TextEdit', 'hnumll': 'TextEdit', 'hnumlsufl': 'TextEdit', 'hnumltl': 'Range', 'hnumltl_en': 'TextEdit', 'hnumltl_fr': 'TextEdit', 'nummetl': 'Range', 'nummetl_en': 'TextEdit', 'nummetl_fr': 'TextEdit', 'sysindl': 'Range', 'sysindl_en': 'TextEdit', 'sysindl_fr': 'TextEdit', 'adddifgl': 'Range', 'adddifglen': 'TextEdit', 'adddifglfr': 'TextEdit', 'hnumfr': 'TextEdit', 'hnumfsufr': 'TextEdit', 'hnumftr': 'Range', 'hnumftr_en': 'TextEdit', 'hnumftr_fr': 'TextEdit', 'hnumlr': 'TextEdit', 'hnumlsufr': 'TextEdit', 'hnumltr': 'Range', 'hnumltr_en': 'TextEdit', 'hnumltr_fr': 'TextEdit', 'nummetr': 'Range', 'nummetr_en': 'TextEdit', 'nummetr_fr': 'TextEdit', 'sysindr': 'Range', 'sysindr_en': 'TextEdit', 'sysindr_fr': 'TextEdit', 'adddifgr': 'Range', 'adddifgren': 'TextEdit', 'adddifgrfr': 'TextEdit', 'rdstrugeid': 'TextEdit', 'rdstunamen': 'TextEdit', 'rdstunamfr': 'TextEdit', 'rdstudsc': 'Range', 'rdstudscen': 'TextEdit', 'rdstudscfr': 'TextEdit', 'map_sel': 'Range', 'map_sel_en': 'TextEdit', 'map_sel_fr': 'TextEdit', });
lyr_Layer_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Layer_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Layer_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Layer_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_toteRoadtoteRoadshp_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_ESRISHAPE_1canvec_220325_335480contour_1shp_0.set('fieldLabels', {});
lyr_ESRISHAPE_1canvec_220325_335480water_linear_flow_1shp_1.set('fieldLabels', {});
lyr_ESRISHAPE_1canvec_220325_335480watercourse_1shp_2.set('fieldLabels', {});
lyr_ESRISHAPE_1canvec_220325_335480waterbody_2shp_3.set('fieldLabels', {});
lyr_ESRISHAPE_1canvec_220325_335480road_segment_1shp_4.set('fieldLabels', {});
lyr_Layer_5.set('fieldLabels', {});
lyr_Layer_6.set('fieldLabels', {});
lyr_Layer_7.set('fieldLabels', {});
lyr_Layer_8.set('fieldLabels', {});
lyr_toteRoadtoteRoadshp_9.set('fieldLabels', {'fid': 'header label', 'id': 'inline label', });
lyr_toteRoadtoteRoadshp_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});