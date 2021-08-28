import React, { useState } from 'react'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import Cards from './components/Cards'
import './style.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [currentCards, setCurrentCards] = useState([])
  const [currentCardNums, setCurrentCardNums] = useState([])
  const [guessedCards, setGuessedCards] = useState([])
  const numOfCards = {
    1: 4,
    2: 8,
    3: 16,
    4: 32,
  }

  const handlePickCard = () => {
    console.log('card click')
    setCurrentScore(currentScore + 1)
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const setCards = () => {
    console.log(getRandomInt(1, 300))
  }

  
  setCards()

  return (
    <div className="mainContainer">
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <Cards handlePickCard={handlePickCard}/>
    </div>
  );
}

export default App;
