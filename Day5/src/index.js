import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Foods</h1>
    <div className="food-container">
      <img
        className="food-image"
        src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5d5f03b6-68ec-4a64-8702-8ca08bd0eb35/Derivates/6fef46c9-6e18-42b6-b5a3-145d2fb42bb8.jpg"
      ></img>
      <img
        className="food-image"
        src="https://i.pinimg.com/736x/26/c6/06/26c606356ca478752fdd6eede219e397.jpg"
      ></img>
      <img
        className="food-image"
        src="https://cdn.ye-mek.net/App_UI/Img/out/650/2021/08/mantarli-kremali-makarna-resimli-yemek-tarifi(16).jpg"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
