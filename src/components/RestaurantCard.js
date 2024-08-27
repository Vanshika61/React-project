import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating, user})=>{
    // console.log(props);
      return(
          <div className="w-64 h-[28rem] m-2 p-2 shadow-lg bg-gray-100">
              <img src={IMG_CDN_URL + cloudinaryImageId} />
              <h1 className="font-bold text-xl">{name}</h1>
              <h2>{cuisines.join(", ")}</h2>
              <h3>{avgRating} stars</h3>
              {/* <h4>{user.name}</h4>        from prop drilling*/}
          </div>
      );
    };

export default RestaurantCard;