import Card from './Card'

const Cards = ({ handlePickCard }) => {

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  return (
    <div className="cardsContainer">
       <div className="cards">
        {Array.from({length: 60}, (x, i) => {
          const cardNum = (i + 1).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
          const src = `/assets/2K-Cards/${cardNum}.png`
          return (
            <Card imgSrc={src} key={cardNum} handlePickCard={handlePickCard} />
          )
        })}
      </div>
    </div>
  )
}

export default Cards;