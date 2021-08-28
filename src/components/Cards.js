import Card from './Card'

const Cards = ({ currentCards, numOfCards, level, handlePickCard }) => {

  if (!currentCards.cardNums) {
    return "Loading..."
  }
  
  return (
    <div className="cardsContainer">
       <div className="cards">
        {Array.from({length: numOfCards[level]}, (x, i) => {
          const cardNum = currentCards['cardNums'][i]
          const src = currentCards['cardSrcs'][i]
          return (
            <Card imgSrc={src} key={cardNum} handlePickCard={handlePickCard} />
          )
        })}
      </div>
    </div>
  )
}

export default Cards;