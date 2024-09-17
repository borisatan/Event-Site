// Navbar.tsx
import React from "react";

interface NavbarProps {
  brandName: string;
  links: { name: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ brandName, links }) => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          {brandName}
        </div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                style={{ color: "white", textDecoration: "none" }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
