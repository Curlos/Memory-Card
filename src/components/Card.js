const Card = ({ imgSrc, handlePickCard, id }) => {
  return <img src={imgSrc}  alt="Player Card" className="cardImage" onClick={handlePickCard} id={id}/>
}

export default Card;