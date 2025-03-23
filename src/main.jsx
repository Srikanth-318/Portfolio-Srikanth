import React from "react"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ytClone from "./assets/yt-clone.mp4";
import loginform from "./assets/loginform.mp4"
import qrcode from "./assets/qrcode.mp4";
import imagesearch from "./assets/imagesearch.mp4";
import moviesearch from "./assets/moviesearch.mp4";
import emojigenerator from "./assets/emojigenerator.mp4";
import epicnews from "./assets/epicnews.mp4";
import weatherapp from "./assets/weather.mp4";


export const MyContext = React.createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext.Provider value={{ 
      ytClone,   
      loginform,
      qrcode,
      imagesearch,
      moviesearch,
      emojigenerator,
      epicnews,
      weatherapp,
      

    }}>
      <App />
    </MyContext.Provider>
  </StrictMode>
);