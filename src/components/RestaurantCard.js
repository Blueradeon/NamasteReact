import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, avgRating, cuisines, locality, cloudinaryImageId, costForTwo } = props.resData
    return (
        <>
            <div className="res-card">
                <img className="res-card-image" src={CDN_URL+ cloudinaryImageId}></img>
                <h2>{name}</h2>
                <div>{avgRating}</div>
                <div>{cuisines.join(", ")}</div>
                <div>{locality}</div>
                <div>{costForTwo}</div>
            </div>
        </>
    )
}
export default RestaurantCard;