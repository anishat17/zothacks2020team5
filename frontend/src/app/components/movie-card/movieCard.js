import React, {useState, useEffect, useMemo} from "react";
import TinderCard from "react-tinder-card";
import axios from "axios";
import "./movieCard.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

function MovieCard({genre}) {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0)
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (genre === "") {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4437f2ad74b0b2eb3a77c256d4851496&language=en-US&page=1`).then(res => {
        const temp = res.data.results;
        setMovies(temp);
        setIndex(temp.length - 1)
      })
    } else {
      axios.get(`https://zothacks2020team5.herokuapp.com/api/${genre}`).then(res => {
        const temp = res.data.results;
        setMovies(temp);
        setIndex(temp.length - 1)
      })
    }
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=4437f2ad74b0b2eb3a77c256d4851496&language=en-US").then(res => {
      const g = res.data.genres;
      setGenres(g);
    })
  }, [])

  const childRefs = useMemo(() => Array(100).fill(0).map(i => React.createRef()), [])

  const swipe = (dir) => {
    if (dir === "right") {
      const movie = movies[index];
      let a;
      if (sessionStorage.getItem('liked') === null) {
        a = [];
      } else {
        a = JSON.parse(sessionStorage.getItem('liked'));
      }
      a.push(movie);
      sessionStorage.setItem('liked', JSON.stringify(a));
    }
    childRefs[index].current.swipe(dir);
    const temp = index - 1;
    setIndex(temp)
  }

  return (
    <div className="movie-cards">
      {movies.map((movie, index) => (
        <TinderCard ref={childRefs[index]} className="swipe" key={index} preventSwipe={["up", "down"]}>
          <div className="movie-info" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, width: "30vw",
            height: "75vh", minWidth: "300px", backgroundColor: "black"
          }}>
            <div className="overlay">
              <h1>{movie.title}</h1>
              <p>{movie.overview.substr(0, 140) + "..."}</p>
              <section>
                {movie.genre_ids.slice(0, 3).map((id) => {
                  const genreObj = genres.find(genre => genre.id === id);
                  if (genreObj !== undefined) {
                    return (
                      <p key={id} className="movie-genre">{genreObj.name}</p>
                    )
                  }
                })}
              </section>
            </div>
            
          </div>
        </TinderCard>
        
      ))}
      <div className="swipe-btns">
        <button onClick={() => swipe('left')}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button onClick={() => swipe('right')}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
    
    
  );
}

export default MovieCard;