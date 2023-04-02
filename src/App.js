import './App.css';
import Teste from './component/Teste';
import Btn from './component/Btn';
import Formulario from './component/Formulario';
import Email from './component/Email';
import Lista from './component/Lista';

function App() {
  const meusItens = ['Comida', 'Bebida', 'Sobremesa']

  return (
    <div className="App">
      <header className="App-header">
        <Btn/>
        <Lista itens={meusItens}></Lista>
        <Lista itens={[]}/>
        <h1>Pessoas:</h1>
        <p>
          <Teste name="João" age="18" hobby="Violão"/>
          <Teste name="Amélio" age="35" hobby="Leitura"/>
          <Teste name="Gabriel" age="23" hobby="Surfe"/>
          <Teste/>
        </p>

        <Formulario/>
        <Email/>
      </header>
    </div>
  );
}

export default App;
