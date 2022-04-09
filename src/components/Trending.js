import React from "react";
import { useEffect, useState } from "react";

export default function Trending() {
  const trendingGifsAPI =
    "https://api.giphy.com/v1/gifs/trending?api_key=GshAqmPKuFbOhanaYpAWcucZez2bZxlg&limit=100&rating=g";
  const [trending, setTrending] = useState([]);

  const trendingGifs = () => {
    fetch(trendingGifsAPI)
      .then((res) => res.json())
      .then((data) => setTrending(data.data));
  };

  useEffect(() => {
    trendingGifs();
  }, []);

  function handleClick(e, link) {
    window.open(link);
  }

  return (
    <div className="trending">
      <h1>Trending GIFS</h1>
      <div className="trending-container">
        {trending.map((trend, i) => (
          <img
            key={i}
            src={trend.images.downsized.url}
            alt={`${trend.username}-img`}
            onClick={(e) => handleClick(e, trend.url)}
          />
        ))}
      </div>
    </div>
  );
}
