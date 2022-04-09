import "./styles/style.css";
import { Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Stickers from "./components/Stickers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/trending" exact element={<Trending />} />
        <Route path="/stickers" exact element={<Stickers />} />
      </Routes>
    </div>
  );
}

export default App;
