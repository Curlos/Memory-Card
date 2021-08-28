const Card = ({ imgSrc, handlePickCard }) => {
  return <img src={imgSrc}  alt="Player Card" className="cardImage" onClick={handlePickCard}/>
}

export default Card;