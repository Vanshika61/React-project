// Default import 
import RestaurantCard from "./RestaurantCard";
// Named import 
import {restaurantList} from "../constants";
import  {useEffect, useState}  from "react";


function filterData(searchTxt, restaurants){
  const filterData = restaurants.filter((restaurant)=>
    restaurant.info.name.includes(searchTxt)
  );

  return filterData;
}

const Body =()=>{

  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);


  useEffect(()=>{
    // console.log("useEffect");
    // Api call 
    getRestaurants();
  }, []);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1986817&lng=78.160006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log("render()");   // react will re-render everything very quickly // it reloads basically

  return(
      <>
      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="search" 
          value={searchTxt} 
          onChange={(e)=>{
            setSearchTxt(e.target.value);
          }}
        />
        <button className="search-btn" onClick={()=>{
          // need to filter the data
          const data = filterData(searchTxt, restaurants);
          // update the state - restaurants
          setRestaurants(data);

        }}>Search</button>
      </div>

        <div className="restaurant-list">
          {
            restaurants.map((restaurant)=>{
              return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            })
          }
        </div>
      </>
    );
};

export default Body;