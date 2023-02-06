import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Props!</h1>
        <Greeting name="Gisselle" lastName="Pombar" emoji="🤗" />
        <Greeting name="Gisele" lastName="Abzalov" emoji="😘" />
        <Greeting name="Idan" lastName="Fisher" />
      </header>
    </div>
  );
}

export default App;
