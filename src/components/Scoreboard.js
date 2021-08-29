const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboardContainer">
      <div className="scoreboard">
        <span className="score currentScore">Current Score: {currentScore}</span>
        <span className="score bestScore">Best Score: {bestScore}</span>
      </div>
    </div>
  )
}

export default Scoreboard;