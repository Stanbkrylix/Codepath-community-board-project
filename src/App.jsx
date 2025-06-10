import { useState } from "react";
import Card from "./Components/Card";
import cardArray from "./JS/cardArray";
// import waterFront from "./assets/GGWaterfrontRestaurant.jpg";
// ./assets/GGWaterfrontRestaurant.jpg
import "./App.css";

function App() {
    return (
        <div className="main-container">
            <h2 className="main-heading">Favorite Restaurant </h2>
            <div className="card-container">
                {cardArray.map((item) => {
                    return (
                        <Card
                            imgSrc={item.img}
                            restaurantName={item.name}
                            restaurantType={item.type}
                            website={item.link}
                            key={item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
