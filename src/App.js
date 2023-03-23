import './App.css';
import Teste from './component/Teste';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pessoas:</h1>
        <p>
          <Teste name="João" age="18" hobby="Violão"></Teste>
          <Teste name="Amélio" age="35" hobby="Leitura"></Teste>
          <Teste name="Gabriel" age="23" hobby="Surfe"></Teste>
          <Teste></Teste>
        </p>
      </header>
    </div>
  );
}

export default App;
