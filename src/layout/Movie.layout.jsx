import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";
import MovieList from "./MovieList"; // import MovieList here

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <MovieList /> {/* Add MovieList here */}
      </div>
    );
  };

export default MovieLayoutHoc;
