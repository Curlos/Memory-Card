const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboardContainer">
      <div className="scoreboard">
        <span class="score currentScore">Current Score: {currentScore}</span>
        <span class="score bestScore">Best Score: {bestScore}</span>
      </div>
    </div>
  )
}

export default Scoreboard;