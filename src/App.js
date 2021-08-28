import './style.css';
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <div className="cardsContainer">
        <Cards />
      </div>
    </div>
  );
}

export default App;
