import React from "react";
import Moviecard from "./Moviecard";
import './Movielist.css' ;

function Movielist({ movies , inputSearch }) {
  return (
    <div className="film">
      {movies
      .filter (movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()))
      .map( movie => 
        <Moviecard movie={movie} key={movie.id} />
      )}
    </div>
  );
}

export default Movielist
