# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=Calypso+Theme+Waterpark/@45.3149959,-75.2204962,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce797d507dcb99:0x8fa427f5570865fd!8m2!3d45.3149921!4d-75.2183075&destination=La+forêt+Larose/@45.3376217,-75.2114569,12.75z/data=!4m12!1m6!3m5!1s0x4cce797d507dcb99:0x8fa427f5570865fd!2sCalypso+Theme+Waterpark!8m2!3d45.3149921!4d-75.2183075!3m4!1s0x4cce7bffbbcc74f5:0x371b4608a673c384!8m2!3d45.3796237!4d-75.1807084&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "partial_match" : true,
         "place_id" : "ChIJmct9UH15zkwR_WUIV_UnpI8",
         "types" : [
            "amusement_park",
            "establishment",
            "point_of_interest",
            "tourist_attraction"
         ]
      },
      {
         "geocoder_status" : "OK",
         "partial_match" : true,
         "place_id" : "ChIJO5wtDKFkzkwR_re4ttOsp3M",
         "types" : [ "establishment", "park", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 45.4050154,
               "lng" : -75.1265863
            },
            "southwest" : {
               "lat" : 45.3157304,
               "lng" : -75.2281272
            }
         },
         "copyrights" : "Map data ©2022",
         "legs" : [
            {
               "distance" : {
                  "text" : "17.1 km",
                  "value" : 17096
               },
               "duration" : {
                  "text" : "16 mins",
                  "value" : 971
               },
               "end_address" : "Larose Forest Cross-Country Ski Trail, Clarence-Rockland, ON K0A 1E0, Canada",
               "end_location" : {
                  "lat" : 45.4050078,
                  "lng" : -75.1413242
               },
               "start_address" : "2015 Calypso St, Limoges, ON K0A 2M0, Canada",
               "start_location" : {
                  "lat" : 45.3157304,
                  "lng" : -75.2230349
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 878
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 72
                     },
                     "end_location" : {
                        "lat" : 45.322453,
                        "lng" : -75.2281272
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e on \u003cb\u003eCalypso Water Park Rd\u003c/b\u003e toward \u003cb\u003eCalypso St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eConcession Rd 3\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ivqsG|~bjMMj@o@zCI\\ADOb@A@MTQ\\ST]RIFw@`@_Af@{BjAIDiHrDa@Ry@b@GBSH]Hc@Je@HODa@J_@NA@YLiAj@aAd@a@PyAt@I@"
                     },
                     "start_location" : {
                        "lat" : 45.3157304,
                        "lng" : -75.2230349
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8.4 km",
                        "value" : 8444
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 400
                     },
                     "end_location" : {
                        "lat" : 45.3482435,
                        "lng" : -75.1265961
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCalypso St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eConcession Rd 3\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Calypso St\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "i`ssGx~cjMuFs[GU_DuPeAeGsBmLaAmF_EmUc@aCqHic@iAyHIECOi@gDIi@kDgTO{@y@cFi@gDuAmJcAwDU}Ac@oCwBaNcCsO{@oFWeBeA{G{@qFs@}Dg@oCoBwKEScGm^}@wFKo@mCoP[sBiAsHsA}HAKUsAW_BKo@QeAE[Ko@o@aEU_BW_Bc@uCQyAY_Cg@gDeAcHi@qDsBaNeDeUuBwNeIck@e@}C{AgJESW{AKo@Ko@_@_CgBoKKo@YcBa@mCKo@Kq@SuAe@{Cc@oCKo@qAqIAEU{AW_BAMIa@c@qCKo@Ko@c@oCKo@YeBEWCICGACCCAEEEEC"
                     },
                     "start_location" : {
                        "lat" : 45.322453,
                        "lng" : -75.2281272
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.2 km",
                        "value" : 5215
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 291
                     },
                     "end_location" : {
                        "lat" : 45.3910469,
                        "lng" : -75.152795
                     },
                     "html_instructions" : "\u003cb\u003eCalypso St\u003c/b\u003e turns \u003cb\u003eleft\u003c/b\u003e and becomes \u003cb\u003eBertrand Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "oaxsGfdpiM]AE?I@KBMFcCnAgG|Ca@RiG~C_@Rc]fQqAr@qDlBcDbB?@C@]PC@}Az@CB]PA@GBUNC@{@f@]PC@C@MFUJm@^]j@MTKRA@OVGLMXO`@Wn@]|@]dAUf@EJCDOZORGDGFQPQJOLQJyFjCmAj@_F|BIDWJIDaBv@{At@IDULIDa@RgAh@eHfDC@oTbKa@P_@PcItDuHtDkGjCgOzGwKzEuCpAa@PqCnAoR|I_V|KkCnA"
                     },
                     "start_location" : {
                        "lat" : 45.3482435,
                        "lng" : -75.1265961
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1404
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 45.3955668,
                        "lng" : -75.1360018
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eChem. Clarence Cambridge\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "am`tG~guiMY_BKo@mA}GuC_Q}B_N_C_Ns@iEIe@G]qAoHACg@iCMo@a@sB{@wEqAiH"
                     },
                     "start_location" : {
                        "lat" : 45.3910469,
                        "lng" : -75.152795
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 134
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 45.396633,
                        "lng" : -75.1362039
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eChamplain Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iiatG~~qiMiBnAQHC?QDOCECECSUQU"
                     },
                     "start_location" : {
                        "lat" : 45.3955668,
                        "lng" : -75.1360018
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1019
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 45.4050154,
                        "lng" : -75.1412948
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eChamplain Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 8\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}oatGf`riMWd@_@j@[d@i@d@oAt@k@XIDWLIBa@RuPrH[Na@Pa@PC@[NE@cChAqLjFsAl@"
                     },
                     "start_location" : {
                        "lat" : 45.396633,
                        "lng" : -75.1362039
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2 m",
                        "value" : 2
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 45.4050078,
                        "lng" : -75.1413242
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kdctG``siM@D"
                     },
                     "start_location" : {
                        "lat" : 45.4050154,
                        "lng" : -75.1412948
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "ivqsG|~bjMiAjFQd@_@r@q@h@aAh@oNlHwBdAwBd@aAZ[NgGxCI@uFs[gDkQ{Lor@uIkg@iAyHIEm@wDuDqUiA_H_CuOcAwDU}A{CqR}Gec@{@qF{AmIuBkLaIef@_Gg_@sD_UaCwOk@yEmBkMcIyi@{L{z@aCeOu@oEmDcTuFs^wBcNoA}HMYGKEC]AO@YJwT`Lgf@|ViIlEc@VaB|@c@Rm@^]j@Yh@QX}@xB{@bC[r@S`@WX{@r@yP`ImCnAyOvHqVfLyRjJsWfLaVnKoi@zVkCnAY_ByAmIsG_`@eEmViCmN}AkIqAiHiBnAUHQDOCKGe@k@w@pA[d@i@d@{BnAa@R}RzIcBt@oSdJ@D"
         },
         "summary" : "Calypso St and Bertrand Rd",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}

```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
