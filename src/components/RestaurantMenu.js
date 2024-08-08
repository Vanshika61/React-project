// import { useState, useEffect } from "react";
// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurants from "./utility/useRestaurants";

const RestaurantMenu = () => {
    // How to read dynamic URL params 
    const params = useParams();
    const {resId} = params;

    const [restaurantDetails,dishMenu] = useRestaurants(resId);

    
  return dishMenu.length===0 ? <Shimmer/> : (
    <div className="menu-page">
      <div>
        <h1>restaurant id : {resId}</h1>
        <h2>{restaurantDetails?.name}</h2>
        <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} alt="" />
        <h3>Area : {restaurantDetails?.areaName}</h3>
        <h3>City : {restaurantDetails?.city}</h3>
        <h3>Ratings : {restaurantDetails?.avgRating} stars</h3>
        <h3>Cost For Two : {restaurantDetails?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(dishMenu).map((item, index) => {
            return (
              <ul key={index}>
                  {item?.card?.card?.itemCards?.map((i) => {
                    return <li key={i.card?.info?.id}>{i.card?.info?.name}</li>;
                  })}
              </ul>
            );
          })}
        </ul>

      </div>
    </div>
  )
}

export default RestaurantMenu;
