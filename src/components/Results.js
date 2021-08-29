const Results = ({ result, resetGame }) => {
  if (result === 'won') {
    return (
      <div className="result won">
        <span className="resultText">Congratulations! You are an NBA Champion!</span>
        <button className="tryAgainButton" onClick={resetGame}>Try Again</button>
      </div>
    )
  } else {
    return (
      <span></span>
    )
  }
}

export default Results;