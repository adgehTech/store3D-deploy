import React, { useState } from "react";
import "./index.css";
import Pants from "./models/pants/Pant";
import Shoe from './models/shoe/Shoe'
import Shorts from "./models/shorts/Shorts";

const models = [
  { 
    component: Pants, 
    type: 'SPLY',
    worth: 'VULTURES PANTS $111,95',
    color: 'WHITE',
    size: '1 2 3 SIZE GUIDE',
    delivery: 'DELIVERY WITHIN 4 WEEKS',
    order: 'ORDER =>' 
  },
  { 
    component: Shoe, 
    type: 'SPLY',
    worth: 'BOX SHOE $91,25',
    color: 'WHITE',
    size: '1 2 3 SIZE GUIDE',
    delivery: 'DELIVERY WITHIN 2 WEEKS',
    order: 'ORDER =>' 
  },
  { 
    component: Shorts, 
    type: 'SPLY',
    worth: 'VULTURES SHORTS $92,95',
    color: 'BLACK',
    size: '1 2 3 SIZE GUIDE',
    delivery: 'DELIVERY WITHIN 1 WEEKS',
    order: 'ORDER =>' 
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + models.length) % models.length
    );
  };

  const CurrentModel = models[currentIndex].component;

  return (
    <div className="app-container">
      <div className="text-container">
        <p>{models[currentIndex].type}</p>
        <p>{models[currentIndex].worth}</p>
        <p>{models[currentIndex].color}</p>
        <p>{models[currentIndex].size}</p>
        <p>{models[currentIndex].delivery}</p>
        <p>{models[currentIndex].order}</p>
        <div style={{ display: "flex" }}>
          <button onClick={handlePrev}>&lt; Prev</button>
          <button onClick={handleNext}>Next &gt;</button>
        </div>
      </div>

      <div className="canva">
        <CurrentModel />
      </div>
    </div>
  );
}

export default App;
