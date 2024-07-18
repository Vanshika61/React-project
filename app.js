import React from "react";
import ReactDOM from "react-dom/client";

const Logo=()=>{
    return(
        <a href="/">
            <img className="logo" src="https://static.vecteezy.com/system/resources/previews/010/816/011/non_2x/food-house-logo-logo-template-vector.jpg" alt="logo" />
        </a>
    );
};

const Header =()=>{
    return(
        <div className="header">
            <Logo/>         {/* Component composition or composing component*/}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// config driven ui
const burgerKing =[
      {
        "info": {
          "id": "84683",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "DD City Mall",
          "areaName": "Lashkar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "2456",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-07-18 00:55:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-dd-city-mall-lashkar-gwalior-84683",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "84714",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/0292f858-11f1-4042-8101-eac5be12595e_84714.jpg",
          "locality": "DD City Mall",
          "areaName": "Lashkar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4,
          "parentId": "721",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 49,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE_WITH_BANNER",
            "slaString": "45-50 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextOpenTimeMessage": "Currently not taking orders for this location",
            "nextCloseTime": "2024-07-18 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹189"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-dd-city-mall-lashkar-gwalior-84714",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "646505",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "57a56b68fa69d5fa79443df6d7444521",
          "locality": "Maharani Laxmibai Marg",
          "areaName": "Lashkar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "4961",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE_WITH_BANNER",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextOpenTimeMessage": "Currently not taking orders for this location",
            "nextCloseTime": "2024-07-17 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-maharani-laxmibai-marg-lashkar-gwalior-646505",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "690530",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
          "locality": "Behind Gurudwara",
          "areaName": "MOTI MAHAL ROAD",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Waffle",
            "Desserts",
            "Ice Cream",
            "Beverages"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "2233",
          "avgRatingString": "4.7",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 57,
            "lastMileTravel": 1.6,
            "serviceability": "SERVICEABLE_WITH_BANNER",
            "slaString": "55-60 mins",
            "lastMileTravelString": "1.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextOpenTimeMessage": "Currently not taking orders for this location",
            "nextCloseTime": "2024-07-17 22:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-behind-gurudwara-moti-mahal-road-gwalior-690530",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "814775",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "20aafec1bda643a093d1209b3845797a",
          "locality": "City Centre",
          "areaName": "Gwalior",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "2093",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE_WITH_BANNER",
            "slaString": "35-40 mins",
            "lastMileTravelString": "4.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextOpenTimeMessage": "Currently not taking orders for this location",
            "nextCloseTime": "2024-07-17 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/natural-ice-cream-city-centre-gwalior-gwalior-814775",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "137529",
          "name": "FNP Cakes N More",
          "cloudinaryImageId": "unyj9ivdyjb1ca7ugwcs",
          "locality": "Patel Nagar",
          "areaName": "patel nagar",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Desserts",
            "Bakery"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "15442",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE_WITH_BANNER",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextOpenTimeMessage": "Currently not taking orders for this location",
            "nextCloseTime": "2024-07-17 22:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Desserts.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Desserts.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/fnp-cakes-n-more-patel-nagar-gwalior-137529",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "668205",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
          "locality": "NAHAR WALI MATA ROAD",
          "areaName": "NEAR JIWAJI CLUB",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "6249",
          "avgRatingString": "4.7",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE_WITH_BANNER",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextOpenTimeMessage": "Currently not taking orders for this location",
            "nextCloseTime": "2024-07-17 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-nahar-wali-mata-road-near-jiwaji-club-gwalior-668205",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "84545",
          "name": "Masala Darbar - Lashkar",
          "cloudinaryImageId": "7220690ce86e1e76728fff20e295d462",
          "locality": "Lalitpur Colony",
          "areaName": "achleshwar road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Snacks"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "132992",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 56,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE_WITH_BANNER",
            "slaString": "55-60 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextOpenTimeMessage": "Currently not taking orders for this location",
            "nextCloseTime": "2024-07-17 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-92a6a3b1-a351-43f0-90ce-871577a57a9c"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/masala-darbar-lashkar-lalitpur-colony-achleshwar-road-gwalior-84545",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
]

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating})=>{
  // console.log(props);
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{avgRating} stars</h3>
        </div>
    );
};

const Body =()=>{
    return(
        <div className="restaurant-list">
          {
            burgerKing.map((restaurant)=>{
              return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            })
          }
        </div>
    );
};

const Footer =()=>{
    return(
        <div>
            <h2>footer</h2>
        </div>
    );
};

const styleObj={
    backgroundColor: "red",
}
const AppLayout =()=>{
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);