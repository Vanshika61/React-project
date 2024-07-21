import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating})=>{
    // console.log(props);
      return(
          <div className="card">
              <img src={IMG_CDN_URL + cloudinaryImageId} />
              <h1>{name}</h1>
              <h2>{cuisines.join(", ")}</h2>
              <h3>{avgRating} stars</h3>
          </div>
      );
    };

export default RestaurantCard;