import { useState } from "react";
import Card from "./Components/Card";
import waterFront from "./assets/GGWaterfrontRestaurant.jpg";

import "./App.css";

function App() {
    const cardArray = [
        {
            img: waterFront,
            name: "GG's Waterfront",
            type: "American",
            link: "https://places.singleplatform.com/giorgios-grill/menu?ref=Yahoo#menu_887845",
        },
    ];

    return (
        <div className="main-container">
            <h2>Restaurant Favorites </h2>
            <div className="card-container">
                <Card
                    imgSrc={cardArray[0].img}
                    restaurantName={cardArray[0].name}
                    restaurantType={cardArray[0].type}
                    website={cardArray[0].link}
                />
            </div>
        </div>
    );
}

export default App;
