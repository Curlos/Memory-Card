import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import Cards from './components/Cards'
import './style.css';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [level, setLevel] = useState(4)
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
    let pickedCards = 0
    const newCardNums = [...currentCards.cardNums]
    const newCardSrcs = [...currentCards.cardSrcs]
    
    while (pickedCards < numOfCards[level]) {
      const cardNum = getRandomInt(1, 300)
      if (!newCardNums.includes(cardNum)) {
        const cardNumStr = (cardNum).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})

        console.log(`CURRENT CARD NUMS: ${currentCards['cardNums']}`)
        console.log(currentCards)
        
        const cardSrc = `/assets/2K-Cards/${cardNumStr}.png`

        newCardNums.push(cardNum)
        newCardSrcs.push(cardSrc)
        pickedCards += 1
      }
    }

    setCurrentCards({
      cardNums: newCardNums,
      cardSrcs: newCardSrcs
    })
  }

  console.log(currentCards)


  return (
    <div className="mainContainer">
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <Cards currentCards={currentCards} numOfCards={numOfCards} level={level} handlePickCard={handlePickCard}/>
    </div>
  );
}

export default App;
