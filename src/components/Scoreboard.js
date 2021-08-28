const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <span>Current Score: {currentScore}</span>
      <span>Best Score: {bestScore}</span>
    </div>
  )
}

export default Scoreboard;