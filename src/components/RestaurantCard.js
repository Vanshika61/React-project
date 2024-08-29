import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "./utility/UserContext";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating})=>{

    const {user} = useContext(UserContext);
    // console.log(props);
      return(
          <div className="w-64 h-[28rem] m-2 p-2 shadow-lg bg-gray-100">
              <img className="h-[15rem] w-64" src={IMG_CDN_URL + cloudinaryImageId} />
              <h1 className="font-bold text-xl">{name}</h1>
              <h2>{cuisines.join(", ")}</h2>
              <h3>{avgRating} stars</h3>
              {/* <h4>{user.name}</h4>        from prop drilling*/}
              <h4>{user.name}-{user.email}</h4>      {/*from context */}
          </div>
      );
    };

export default RestaurantCard;