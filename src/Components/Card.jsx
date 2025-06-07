import React from "react";

const Card = ({ imgSrc, restaurantName, restaurantType, website, id }) => {
    return (
        <div className="card" key={id}>
            <img src={imgSrc} alt="" />
            <div className="card-description">
                <h2>{restaurantName}</h2>
                <p>{restaurantType}</p>
                <a href={website}>View Menu</a>
            </div>
        </div>
    );
};

export default Card;
