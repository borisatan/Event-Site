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
    width: "450px",
    height: "350px",
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
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          marginTop: "30px",
          marginLeft: "200px",
        }}
      >
        <img
          src="src\assets\a_organizer_event--creator-eventbrite-.jpeg"
          alt="Main Page Image"
          style={{
            width: "500px",
            height: "400px",
            marginRight: "20px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
        <div style={{ fontSize: "19px", color: "white" }}>
          <h1>Event 1</h1>
          <p>This is a brief description next to the image.</p>
        </div>
      </div>
      <div style={styles.container}>
        <img
          src="src\assets\a_organizer_event--creator-eventbrite-.jpeg"
          alt="Main Page Image"
          style={styles.image}
        />
        <div style={styles.text}>
          <h1>Event 2</h1>
          <p>This is a brief description next to the image.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
