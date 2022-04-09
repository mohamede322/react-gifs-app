import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const gifAPI = `https://api.giphy.com/v1/gifs/search?api_key=GshAqmPKuFbOhanaYpAWcucZez2bZxlg&q=${inputValue}&limit=100&offset=0&rating=g&lang=en`;
  const [searchedGifs, setSearchedGifs] = useState([]);

  const searchGifs = () => {
    fetch(gifAPI)
      .then((res) => res.json())
      .then((data) => setSearchedGifs(data.data));
  };

  function handleChange(e) {
    const { value } = e.target;
    setInputValue(value);
    searchGifs();
  }

  function handleClick(e, link) {
    window.open(link);
  }

  return (
    <div className="gifs">
      <h1>Welcome to the Gif App</h1>
      <input
        type="search"
        placeholder="Search for Gif..."
        onChange={handleChange}
      />
      <div className="gifs-container">
        {searchedGifs.map((gif, i) => (
          <img
            key={i}
            src={gif.images.downsized.url}
            alt={`${gif.username}-img`}
            onClick={(e) => handleClick(e, gif.url)}
          />
        ))}
      </div>
    </div>
  );
}
