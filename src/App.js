import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import MovieDetails from "./components/movie-details/MovieDetails";
import Page404 from "./components/page-404/Page404";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content-container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Home />
              </>
            }
          />

          <Route path='/movie/:imdbID' element={<MovieDetails />} />
          {/* <Route path='/movie/:imdbID' element={<MovieDetails />} /> */}
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
