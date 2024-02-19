import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import RestaurantContainer from "./components/RestaurantContainer";

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <RestaurantContainer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);