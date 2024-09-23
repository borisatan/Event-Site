import React, { useState, useEffect } from "react";
import eventsData from "./data/Events.json";
import "./assets/CSS/EventList.css";

interface Events {
  title: string;
  description: string;
  imageSrc: string;
}

const Events: React.FC = () => {
  const [items, setItems] = useState<Events[]>([]);

  useEffect(() => {
    setItems(eventsData);
  }, []);

  return (
    <div className="event-container">
      {items.map((item, index) => (
        <div key={index} className="event-item">
          <img className="event-image" src={item.imageSrc} alt={item.title} />
          <div className="event-text">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
