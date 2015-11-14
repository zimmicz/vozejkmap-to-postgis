var M = (function(my) {"use strict";

    my.Style = {
        set: function(id) {
            return my.Style.styles[id] || my.Style.styles["default"];
        },

        styles: {
            "default": {
                "icon": "",
                "markerColor": "blue",
                "prefix": "",
                "type": "Neznámý"
            },
            "1": { // culture
                "icon": "video-camera",
                "markerColor": "blue",
                "prefix": "fa",
                "type": "<i class='fa fa-video-camera'></i>Kultura"
            },
            "2": { // sports
                "icon": "ios7-football",
                "markerColor": "darkgreen",
                "prefix": "ion",
                "type": "<i class='ion ion-ios7-football'></i>Sport"
            },
            "3": { // institutions
                "icon": "institution",
                "markerColor": "gray",
                "prefix": "fa",
                "type": "<i class='fa fa-institution'></i>Instituce"
            },
            "4": { // food and drink
                "icon": "glass",
                "markerColor": "orange",
                "prefix": "fa",
                "type": "<i class='fa fa-glass'></i>Jídlo a pití"
            },
            "5": { // acommodation
                "icon": "bed",
                "prefix": "fa",
                "type": "<i class='fa fa-bed'></i>Ubytování"
            },
            "6": { // health care
                "icon": "heartbeat",
                "markerColor": "red",
                "prefix": "fa",
                "type": "<i class='fa fa-heartbeat'></i>Lékaři, lékárny"
            },
            "7": { // other
                "icon": "more",
                "prefix": "ion",
                "type": "<i class='ion ion-more'></i>Jiné"
            },
            "8": { // transportation
                "icon": "road",
                "markerColor": "gray",
                "prefix": "glyphicon",
                "type": "<i class='glyphicon glyphicon-road'></i>Doprava"
            },
            "9": { // public toilets
                "icon": "venus-mars",
                "iconColor": "black",
                "markerColor": "white",
                "prefix": "fa",
                "type": "<i class='fa fa-venus-mars'></i>Veřejné WC"
            },
            "10": { // gas station
                "icon": "tint",
                "markerColor": "darkpurple",
                "prefix": "fa",
                "type": "<i class='fa fa-tint'></i>Benzínka"
            },
            "11": { // shopping
                "icon": "ios7-cart",
                "markerColor": "green",
                "prefix": "ion",
                "type": "<i class='ion ion-ios7-cart'></i>Obchod"
            },
            "12": { // banks, ATMs
                "icon": "social-usd",
                "markerColor": "green",
                "prefix": "ion",
                "type": "<i class='ion ion-social-usd'></i>Banka, bankomat"
            },
            "13": { // parking lots
                "icon": "heart",
                "markerColor": "gray",
                "prefix": "ion",
                "type": "<i class='ion ion-heart'></i>Parkoviště"
            },
            "14": { // Škoda auto (wtf?!)
                "icon": "car",
                "markerColor": "gray",
                "prefix": "fa",
                "type": "<i class='fa fa-car'></i>Škoda Auto"
            }
        }
    }

    return {
        Style: {
            set: my.Style.set
        }
    };
})(M || {});