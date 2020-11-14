import React from "react";
import "./movieCard.scss"

function MovieCard({movie}) {
  const showMore = () => {
    console.log("we can click to show more or scroll ?")
  }

  return (
    <div className="movie-card" onClick={showMore}>
      <img src={movie.image}/>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.desc.substr(0,140) + "..."}</p>
        <section>
          {movie.genre.map((genre) => {
            return (
              <p className="movie-genre">{genre}</p>
            )
          })}
        </section>
      </div>
    </div>
  );
}

export default MovieCard;
