import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  brandName: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
  const navLinks = [
    { name: "Home", url: "/home" },
    { name: "See&Do", url: "/see" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.rem",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.9rem",
          }}
        >
          {brandName}
        </Link>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2.3rem",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                style={{ color: "white", textDecoration: "none" }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
