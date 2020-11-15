import React, {useEffect} from 'react'
import { Navbar } from "app/components";
import { NavLink } from "react-router-dom";
import "./settings.scss"

const genres = [
  "action", "adventure", "animation", "comedy", "crime", "documentary", "drama", "family", "fantasy", "history", "horror", "music", "mystery", "romance", "science fiction", "thriller", "war", "western"
];

function Settings() {

  useEffect(() => {
    if (sessionStorage.genre === null) {
      sessionStorage.setItem("genre", "")
    }
  }, [])

  const onChange = (event) => {
    sessionStorage.genre = event.target.value;
  }
  return (
    <div>
      <Navbar />
      <h1>CineMatch</h1>
      <label htmlFor="genre">Choose a genre:</label>
      <select id="genre" onChange={onChange}>
        <option value="">--</option>
        {genres.map(genre => (
          <option value={genre}>{genre}</option>
        ))}
      </select> 
      <button>
        <NavLink activeClassName="active" to="/explore" exact={true}>
          Continue
        </NavLink>
      </button> 
    </div>
  )
}

export default Settings
