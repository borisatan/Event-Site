import React from "react";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    marginTop: "40px",
    marginLeft: "200px",
  },
  image: {
    width: "400px",
    height: "300px",
    marginRight: "20px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  text: {
    fontSize: "16px",
    color: "white",
  },
};

const Home: React.FC = () => {
  const items = [
    {
      title: "Event 1",
      description: "Description for Event 1",
      imageSrc: "src/assets/a_organizer_event--creator-eventbrite-.jpeg",
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      imageSrc: "src/assets/a_organizer_event--creator-eventbrite-.jpeg",
    },
  ];

  return (
    <>
      <ul className="event-list">
        {items.map((item, index) => (
          <li key={index} className="event-item">
            <div style={styles.container}>
              <img style={styles.image} src={item.imageSrc} alt={item.title} />
              <div style={styles.text}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
