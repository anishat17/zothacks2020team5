import React from 'react'
import { Navbar } from "app/components";

const genres = [
  "action", "adventure", "animation", "comedy", "crime", "documentary", "drama", "family", "fantasy", "history"
];

function Settings() {
  return (
    <div>
      <Navbar />
      <div className="genre-list">
        {genres.map(genre => (
          <>
            <input type="checkbox" id={genre} />
            <label for={genre}>{genre}</label>
          </>
        ))}
      </div>
      
    </div>
  )
}

export default Settings
