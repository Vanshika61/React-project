import { useState, useEffect } from "react";
// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
    // How to read dynamic URL params 
    const params = useParams();
    const {resId} = params;

    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [dishMenu, setDishMenu] = useState([]);

    // By using these three console.logs debugg the api link 
    // console.log(params);
    // console.log({resId});
    // console.log(resId);

    useEffect(()=>{
        getApiData();
    }, []);

    async function getApiData(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.1986817&lng=78.160006&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
        setDishMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    };


  return (
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
