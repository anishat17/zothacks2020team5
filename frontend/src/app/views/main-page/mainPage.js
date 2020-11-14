import React from 'react'
import { MovieCard } from "app/components";

const TinderButtons = () => {
  return (
    <div>
      <button>left</button>
      <button>right</button>
    </div>
  )
}

const mainPage = () => {

  // TEST DATA
  // EVENTUALLY WE WILL FETCH THIS
  const test_movie = {
    title: "Fight Club",
    desc: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    genre: ["Action", "Thriller", "Dark Comedy"],
    image: "https://images-na.ssl-images-amazon.com/images/I/71L9%2Bz5XTPL._AC_SY741_.jpg"
  }

  return (
    <div>
      <h1>Tinder for Movies</h1>
      <MovieCard movie={test_movie}/>
      <TinderButtons />
    </div>
  )
}

export default mainPage
