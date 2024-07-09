import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
      //destructuring
      return (
        <div className="rest-card">
          <img className="res-logo" 
          src=
          {CDN_URL+ resData.info.cloudinaryImageId}
          />
          <h1>{resData.info.name}</h1>
          <h3>{resData.info.cuisines.join(", ")}</h3>
          <h3>{resData.info.avgRating}</h3>
          <h3>{resData.info.costForTwo}</h3>
        </div>
      );
    };

export default RestaurantCard;