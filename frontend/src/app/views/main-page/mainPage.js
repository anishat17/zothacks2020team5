import React from 'react'
import { MovieCard, Navbar } from "app/components";
import "./mainPage.scss"

function MainPage() {
  const genre = sessionStorage.genre;
  return (
    <div>
      <Navbar />
      <MovieCard genre={genre}/>
    </div>
  )
}

export default MainPage
