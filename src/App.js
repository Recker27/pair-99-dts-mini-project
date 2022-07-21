import React from "react";
import darkTheme from "./themes/darkTheme";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListMovies from "./containers/ListMovies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Header />
      </ThemeProvider>
      <ListMovies />
      <Footer />
    </div>
  );
}

export default App;
