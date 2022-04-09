import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/trending">Trending</Link>
      </li>
      <li>
        <Link to="/stickers">Stickers</Link>
      </li>
    </ul>
  );
}
