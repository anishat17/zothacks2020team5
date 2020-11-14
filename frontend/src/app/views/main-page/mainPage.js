import React, {useState} from 'react'
import { MovieCard } from "app/components";
import { motion, AnimatePresence } from "framer-motion"
import "./mainPage.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

function MainPage() {
  const [index, setIndex] = useState(0);
  const [swipe, setSwipe] = useState(0);

  // TEST DATA
  // EVENTUALLY WE WILL FETCH THIS
  const test_movies = [
    {
      title: "Fight Club",
      desc: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      genre: ["Action", "Thriller", "Dark Comedy"],
      image: "https://images-na.ssl-images-amazon.com/images/I/71L9%2Bz5XTPL._AC_SY741_.jpg"
    },
    {
      title: "Now You See Me 2",
      desc: "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
      genre: ["Action", "Thriller", "Heist"],
      image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Now_You_See_Me_2_poster.jpg"
    }
  ];

  const swipeLeft = () => {
    console.log("swiped left");
    setIndex((index + 1) % test_movies.length);
    setSwipe("l")
  }
  const swipeRight = () => {
    console.log("swiped right");
    setIndex((index + 1)%test_movies.length);
    setSwipe("r")
  }

  const variants = {
    left: { rotate: -45, x: -150, opacity: 0},
    right: { rotate: 45, x: 150, opacity: 0},
    initial: {rotate: 0, x: 0, opacity: 1}
  }

  return (
    <div>
      <h1>Tinder for Movies</h1>
      <motion.div 
        initial="initial"
        animate={swipe == "l" ? "left" : swipe == "r" ? "right" : "initial"}
        variants={variants}>
        <MovieCard movie={test_movies[index]} />
      </motion.div>
      
      <div className="swipe-btns">
        <button onClick={swipeLeft}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button onClick={swipeRight}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  )
}

export default MainPage
