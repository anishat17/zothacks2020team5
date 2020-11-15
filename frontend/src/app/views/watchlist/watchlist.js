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
      <div class="liked-movies">
        {liked.map(movie => {
          console.log(movie.poster_path)
          return (
            <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`, width: "200px", height: "300px", backgroundSize: "cover" }}>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Watchlist
