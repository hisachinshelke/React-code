import RestaurantCard from "./RestaurantCard";
import { restDataList } from "../utils/mockdata";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="rest-container">
            {/* <RestaurantCard resData = {restDataList[0]}/> */}
            {
              restDataList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }
  
        </div>
      </div>
    );
  };


  export default Body;