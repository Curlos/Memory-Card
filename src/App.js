import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import Cards from './components/Cards'
import './style.css';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [currentCards, setCurrentCards] = useState({
    cardNums: [],
    cardSrcs: []
  })
  const [guessedCards, setGuessedCards] = useState([])
  const numOfCards = {
    1: 4,
    2: 8,
    3: 16,
    4: 32,
  }

  useEffect(() => {
    setCards()
  }, [])

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
    // while (currentCards.length < numOfCards[level])
    for (let i = 0; i < numOfCards[level]; i++) {
      const cardNum = getRandomInt(1, 300)
      const cardNumStr = (cardNum).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})

      console.log(`CURRENT CARD NUMS: ${currentCards['cardNums']}`)
      
      const cardSrc = `/assets/2K-Cards/${cardNumStr}.png`
      console.log(cardSrc)
      setCurrentCards({ cardNums: [...currentCards.cardNums, cardNum]})
      setCurrentCards({ cardSrcs: [...currentCards.cardSrcs, cardSrc]})
    }
  }


  return (
    <div className="mainContainer">
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <Cards currentCards={currentCards} handlePickCard={handlePickCard}/>
    </div>
  );
}

export default App;
