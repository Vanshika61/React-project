// Default import
import RestaurantCard from "./RestaurantCard";
// Named import
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utility/helper";
import useOnline from "./utility/useOnline";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // console.log("useEffect");
    // Api call       best place to call the api inside the useEffect function or hook
    getRestaurants();
  }, []);

  // Function of api calling
  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1986817&lng=78.160006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    // optional chaining
    setAllRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // console.log("render()"); // react will re-render everything very quickly // it reloads basically

  
  const status = useOnline();
  //Early return
  if(!status) return <h1>🔴 Offline, Check your Internet connection</h1>;
  if(!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchTxt, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.length===0 ? (<h1>Filtered Restaurant not found</h1>) : (filteredRestaurants.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard {...restaurant.info}  /></Link>
          );
        }))}
      </div>
    </>
  );
};

export default Body;
