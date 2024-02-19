import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const RestaurantContainer = () => {
    const [restaurantsData, SetRestaurantsData] = useState(resList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5538241&lng=73.9476689&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resData = await data.json();
        const finalData = resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        SetRestaurantsData(finalData);

    };

    return (
        <div>
            <div className="search"><button
                className="filterButton" onClick={() => {
                    const filteredList = restaurantsData.filter((res) => res.info.avgRating > 4); SetRestaurantsData(filteredList)
                }
                }>Restaurants above 4 Star</button></div>
            <div className="res-container">
                {
                    restaurantsData.map((res) => {
                        return (
                            <RestaurantCard key={res.info.id} resData={res.info} />
                        )
                    })}
            </div>
        </div>
    )
}
export default RestaurantContainer;