import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import Results from './components/Results'
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
  const [guessedCardNums, setGuessedCardNums] = useState([])
  const [newCardsTimes, setNewCardsTimes] = useState(0)
  const [shuffleCardTimes, setShuffleCardTimes] = useState(0)
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(true)
  const numOfCards = {
    1: 4,
    2: 8,
    3: 12,
  }

  useEffect(() => {
    setLoading(true)
    generateCards()
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCardsTimes])
  

  const handlePickCard = (e) => {
    const cardNum = Number(e.target.id)

    if (guessedCardNums.includes(cardNum)) {
      resetGame()
    } else {
      setGuessedCardNums([...guessedCardNums, cardNum])

      setCurrentScore(currentScore + 1)

      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1)
      }

      if (guessedCardNums.length + 1 === numOfCards[level]) {
        advanceToNextLevel()
      } else {
        shuffleCards()
      }
    }
  }

  const resetGame = () => {
    setCurrentScore(0)
    setLevel(1)
    setGuessedCardNums([])
    setCurrentCards({
      cardNums: [],
      cardSrcs: []
    })
    setNewCardsTimes(newCardsTimes + 1)
  }

  const shuffleArray = (array, array2) => {
    const newArray = [...array]
    const newArray2 = [...array2]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        [newArray2[i], newArray2[j]] = [newArray2[j], newArray2[i]];
    }

    return [newArray, newArray2]
  }

  // eslint-disable-next-line no-unused-vars
  const shuffleCards = () => {
    const newCurrentCards = shuffleArray(currentCards.cardNums, currentCards.cardSrcs)
    const newCardNums = newCurrentCards[0]
    const newCardSrcs = newCurrentCards[1]

    setCurrentCards({
      cardNums: newCardNums,
      cardSrcs: newCardSrcs
    })
    setShuffleCardTimes(shuffleCardTimes + 1)
  }

  const advanceToNextLevel = () => {
    if (level === 3) {
      setResult('won')
    } else {
      setLevel(level + 1)
      setGuessedCardNums([])
      setCurrentCards({
        cardNums: [],
        cardSrcs: []
      })
      setNewCardsTimes(newCardsTimes + 1)
    }
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const generateCards = () => {
    let pickedCards = 0
    const newCardNums = [...currentCards.cardNums]
    const newCardSrcs = [...currentCards.cardSrcs]
    
    while (pickedCards < numOfCards[level]) {
      const cardNum = getRandomInt(1, 60)
      if (!newCardNums.includes(cardNum)) {
        const cardNumStr = (cardNum).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
        
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


  return (
    <div className="mainContainer">
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <Results result={result} resetGame={resetGame}/>
      <Cards currentCards={currentCards} numOfCards={numOfCards} level={level} handlePickCard={handlePickCard} loading={loading}/>
    </div>
  );
}

export default App;
