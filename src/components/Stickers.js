import React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const stickersGifsAPI =
    "https://api.giphy.com/v1/stickers/trending?api_key=GshAqmPKuFbOhanaYpAWcucZez2bZxlg&limit=100&rating=g";
  const [stickers, setStickers] = useState([]);

  const stickersGifs = () => {
    fetch(stickersGifsAPI)
      .then((res) => res.json())
      .then((data) => setStickers(data.data));
  };

  useEffect(() => {
    stickersGifs();
  }, []);

  function handleClick(e, link) {
    window.open(link);
  }

  return (
    <div className="stickers">
      <h1> Trending Stickers </h1>
      <div className="stickers-container">
        {stickers.map((sticker, i) => (
          <img
            key={i}
            src={sticker.images.downsized.url}
            alt={`${sticker.username}-img`}
            onClick={(e) => handleClick(e, sticker.url)}
          />
        ))}
      </div>
    </div>
  );
}
