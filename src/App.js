import React from "react";
import AddMovie from "./features/addMovie";
import WatchListMovies from "./features/watchListMovies";
import WatchedMovies from "./features/watchedMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<WatchListMovies/>} />
        <Route path="/watched" element={<WatchedMovies/>} />
        <Route path="/add" element={<AddMovie/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
