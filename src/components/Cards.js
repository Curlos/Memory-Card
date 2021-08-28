import Card from './Card'

const Cards = () => {
  return (
    <div className="cards">
      {Array.from({length: 60}, (x, i) => {
        const cardNum = (i + 1).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
        const src = `/assets/2K-Cards/${cardNum}.png`
        console.log(src)
        return (
          <Card imgSrc={src} key={cardNum} />
        )
      })}
    </div>
  )
}

export default Cards;