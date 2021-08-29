import Card from './Card'

const Cards = ({ currentCards, numOfCards, level, handlePickCard, loading }) => {
  
  return (
    <div className="cardsContainer">
       <div className="cards">
        {Array.from({length: numOfCards[level]}, (x, i) => {
          const cardNum = currentCards['cardNums'][i]
          const src = currentCards['cardSrcs'][i]
          return (
            <Card imgSrc={src} key={cardNum} handlePickCard={handlePickCard} id={cardNum}/>
          )
        })}
      </div>
    </div>
  )
}

export default Cards;