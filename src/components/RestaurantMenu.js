// import { useState, useEffect } from "react";
// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurants from "./utility/useRestaurants";
import { useDispatch } from "react-redux";
import { addItems } from "./utility/cartSlice";

const RestaurantMenu = () => {
    // How to read dynamic URL params 
    const params = useParams();
    const {resId} = params;

    const [restaurantDetails,dishMenu] = useRestaurants(resId);

    const dispatch = useDispatch();
    const handleAddItem =(item)=>{
      dispatch(addItems(item));
      // console.log(item);
    };

    
  return dishMenu.length===0 ? <Shimmer/> : (
    <div className="flex">
      <div>
        <h1>restaurant id : {resId}</h1>
        <h2>{restaurantDetails?.name}</h2>
        <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} alt="" />
        <h3>Area : {restaurantDetails?.areaName}</h3>
        <h3>City : {restaurantDetails?.city}</h3>
        <h3>Ratings : {restaurantDetails?.avgRating} stars</h3>
        <h3>Cost For Two : {restaurantDetails?.costForTwoMessage}</h3>
      </div>
      <div className="p-6 m-6">
        <h1 className="font-bold text-xl">Menu</h1>
        <ul>
          {Object.values(dishMenu).map((item, index) => {
            return (
              <ul key={index}>
                  {item?.card?.card?.itemCards?.map((i) => {
                    return <li key={i.card?.info?.id}>{i.card?.info?.name} <button className="p-2 m-2 bg-green-200" onClick={()=> handleAddItem(i.card?.info)}>Add</button></li>;
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
