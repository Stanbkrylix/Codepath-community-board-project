import React from "react";

const Card = ({ imgSrc, restaurantName, restaurantType, website }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt="" />
            <h2>{restaurantName}</h2>
            <p>{restaurantType}</p>
            <a href={website}>View Menu</a>
        </div>
    );
};

export default Card;
