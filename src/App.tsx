// App.tsx
import React from "react";
import Navbar from "./Navbar";

const App: React.FC = () => {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <Navbar brandName="My Company" links={navLinks} />
      <main
        style={{
          padding: "2rem",
          marginTop: "60px", // Add top margin to prevent content from being hidden behind the navbar
        }}
      ></main>
    </div>
  );
};

export default App;
