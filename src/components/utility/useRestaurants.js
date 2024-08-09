import { useState, useEffect } from "react";

const useRestaurants = (resId) => {

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


    return [restaurantDetails, dishMenu];
}

export default useRestaurants;