// Default import 
import RestaurantCard from "./RestaurantCard";
// Named import 
import {restaurantList} from "../constants";
import  {useState}  from "react";



const Body =()=>{

  const [searchTxt, setSearchTxt] = useState();

  return(
      <>
      <div className="search-contai">
        <input 
          type="text" 
          className="search-input" 
          placeholder="search" 
          value={searchTxt} 
          onChange={(e)=>{
            setSearchTxt(e.target.value);
          }}
        />
        <button className="search-btn">Search</button>
      </div>

        <div className="restaurant-list">
          {
            restaurantList.map((restaurant)=>{
              return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
            })
          }
        </div>
      </>
    );
};

export default Body;