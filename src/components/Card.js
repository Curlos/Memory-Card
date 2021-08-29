const Card = ({ imgSrc, handlePickCard, id }) => {
  return <img src={imgSrc}  key={id} alt="Player Card" className="cardImage" onClick={handlePickCard} id={id}/>
}

export default Card;