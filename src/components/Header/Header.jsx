import React from "react";
import "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <h1>Blogget</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <hr />
    </div>
  );
}
