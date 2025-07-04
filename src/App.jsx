import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/trending" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
            {/* Add 404 route: <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
