# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=Calypso+Theme+Waterpark/@45.3149959,-75.2204962,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce797d507dcb99:0x8fa427f5570865fd!8m2!3d45.3149921!4d-75.2183075&destination=La+forêt+Larose,+Chem.+Clarence+Cambridge,+Bourget,+ON+K0A+1E0/@45.3420212,-75.2113996,12.25z/data=!4m16!1m6!3m5!1s0x4cce7bffbbcc74f5:0x371b4608a673c384!2sLa+forêt+Larose!8m2!3d45.3796237!4d-75.1807084!4m8!1m0!1m5!1m1!1s0x4cce7bffbbcc74f5:0x371b4608a673c384!2m2!1d-75.1807084!2d45.3796237!3e2&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE 
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
         "place_id" : "ChIJ9XTMu_97zkwRhMNzpghGGzc",
         "types" : [ "establishment", "park", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 45.382879,
               "lng" : -75.18259599999999
            },
            "southwest" : {
               "lat" : 45.3157304,
               "lng" : -75.26817249999999
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "14.3 km",
                  "value" : 14315
               },
               "duration" : {
                  "text" : "15 mins",
                  "value" : 894
               },
               "end_address" : "La forêt Larose, Chem. Clarence Cambridge, Bourget, ON K0A 1E0, Canada",
               "end_location" : {
                  "lat" : 45.382879,
                  "lng" : -75.18259599999999
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
                        "text" : "1.4 km",
                        "value" : 1384
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 45.31787,
                        "lng" : -75.24458039999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCalypso St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eConcession Rd 3\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i`ssGx~cjMnBvKdBvJ`AlFxAjILn@bApFLn@r@|DpAzGr@vDtArHfAdGhBpJ"
                     },
                     "start_location" : {
                        "lat" : 45.322453,
                        "lng" : -75.2281272
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.6 km",
                        "value" : 4640
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 311
                     },
                     "end_location" : {
                        "lat" : 45.356186,
                        "lng" : -75.268086
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLimoges Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 5\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ucrsGregjMyFtC{IlE_@RgFhCa@RgEtBuHxDsDfB}K`G_GfDaB|@_@TaFjC[PYLeExBaHpDeCnAkB~@GDcBz@oDjB}CzAULsCzAiCnAyJfFyDzBeJdFoBdAGBMFkJ|EgCtAaB|@eNnHo@\\SJsC|A}Ax@iDjBkQnJuHhD"
                     },
                     "start_location" : {
                        "lat" : 45.31787,
                        "lng" : -75.24458039999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 743
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 45.36010690000001,
                        "lng" : -75.26158579999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSaumure Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOttawa County Rd 8\u003c/b\u003e",
                     "polyline" : {
                        "points" : "esysGpxkjMg@Ha@Di@?YAOAq@Mq@Sm@Ya@]c@_@aAuAa@u@]mAk@yCi@wCwAoHi@uCy@aEEQ"
                     },
                     "start_location" : {
                        "lat" : 45.356186,
                        "lng" : -75.268086
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2072
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 138
                     },
                     "end_location" : {
                        "lat" : 45.3672452,
                        "lng" : -75.23708940000002
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eClarence Cambridge Way\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eIndian Creek Rd\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ukzsG|ojjMcHs^eBkJk@yCo@gDeC{MMo@g@mCCK[uAMg@Ia@S{@Mq@Ia@CMIa@CKIa@]}AMo@CKe@aCCKIa@aBiICMs@mDCMs@oDMm@Q{@]cBkAiGMo@cDwP"
                     },
                     "start_location" : {
                        "lat" : 45.36010690000001,
                        "lng" : -75.26158579999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.6 km",
                        "value" : 4598
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 238
                     },
                     "end_location" : {
                        "lat" : 45.382879,
                        "lng" : -75.18259599999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eChem. Clarence Cambridge\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "polyline" : {
                        "points" : "ix{sGxvejM_CeLcBiIMm@gAkFs@eDeB_JWoA{EkVG[q@kD{CcOcBgIg@oC}AkIu@}DcAkFyBkL}AkIKo@Mo@u@}DMm@yC_P}AkIY_Bu@}DoA}Gg@mC[}A}@oFe@oC_BwJyAwGk@kC[}Ac@qBcAsFeB_KY}AY_BMo@Y_Be@oCuAsHMo@Km@Mo@mAwGaAoF}AkI"
                     },
                     "start_location" : {
                        "lat" : 45.3672452,
                        "lng" : -75.23708940000002
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "ivqsG|~bjMiAjFQd@_@r@q@h@aAh@oNlHwBdAwBd@aAZ[NgGxCI@nBvKfDdRxD|SnGd]pDvRuQbJqNfHiN`H}K`G_GfDaCrA}F|CgShKgKlFsDhBsCzAiCnAyJfFyDzBuMjHiO~Hsr@j_@uHhDg@HkADi@CcBa@m@Ya@]c@_@aAuAa@u@]mAuAqHaEySiK_j@{AaI_EeTgA{E_B_IuEoUqB}JyAyHcDwP_CeLqBwJ{BqKaJwd@yIgc@qIad@mMcr@iEgUcB_K_BwJyAwGgAiFc@qBcAsF_C}Mg@oCcDsQiDeR}AkI"
         },
         "summary" : "Limoges Rd/County Rd 5 and Chem. Clarence Cambridge",
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
