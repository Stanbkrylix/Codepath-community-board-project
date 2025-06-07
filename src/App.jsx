import { useState } from "react";
import Card from "./Components/Card";
import cardArray from "./JS/cardArray";
// import waterFront from "./assets/GGWaterfrontRestaurant.jpg";
// ./assets/GGWaterfrontRestaurant.jpg
import "./App.css";

function App() {
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

                <Card
                    imgSrc={cardArray[0].img}
                    restaurantName={cardArray[0].name}
                    restaurantType={cardArray[0].type}
                    website={cardArray[0].link}
                />

                <Card
                    imgSrc={cardArray[0].img}
                    restaurantName={cardArray[0].name}
                    restaurantType={cardArray[0].type}
                    website={cardArray[0].link}
                />

                <Card
                    imgSrc={cardArray[0].img}
                    restaurantName={cardArray[0].name}
                    restaurantType={cardArray[0].type}
                    website={cardArray[0].link}
                />

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
