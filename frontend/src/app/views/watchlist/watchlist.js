import React, {useState, useEffect} from 'react'
import { Navbar } from "app/components";
import "./watchlist.scss"

function Watchlist() {
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('liked') !== null) {
      const a = JSON.parse(sessionStorage.getItem('liked'));
      setLiked(a);
    }
  }, [])

  return (
    <div>
      <Navbar />
      {liked.length === 0 ? (<p>No matches yet. Try exploring some movies and seeing what you like.</p>) : (<div className="liked-movies">
        {liked.map(movie => {
          return (
            <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, width: "200px", height: "300px", backgroundSize: "cover", backgroundColor: "black" }}>
            </div>
          )
        })}
      </div>)}
    </div>
  )
}

export default Watchlist
