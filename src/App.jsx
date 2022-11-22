import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    document.title = "Audu Goodness || A Web Developer";
  });
  return <Homepage />;
};

export default App;
