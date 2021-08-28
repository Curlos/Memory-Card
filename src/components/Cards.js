import Card from './Card'

const Cards = ({ currentCards, handlePickCard }) => {
  
  return (
    <div className="cardsContainer">
       <div className="cards">
        {Array.from({length: 60}, (x, i) => {
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