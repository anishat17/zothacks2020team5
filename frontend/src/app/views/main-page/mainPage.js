import React from 'react'
import { MovieCard, Navbar } from "app/components";
import "./mainPage.scss"

function MainPage() {

  return (
    <div>
      <Navbar />
      <MovieCard genre={"comedy"}/>
    </div>
  )
}

export default MainPage
