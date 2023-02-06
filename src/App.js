import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Props!</h1>
        <Greeting firstName="Gisselle" lastName="Pombar" emoji="🤗"/>
        <Greeting firstName="Gisele" lastName="Abzalov" emoji="😘"/>
        <Greeting firstName="Idan" lastName="Fischer"/>
      </header>
    </div>
  );
}

export default App;
