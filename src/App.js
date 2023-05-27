import logo from './logo.svg';
import './App.css';
import { Estado1Component } from './components/Estado1Component';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {

  const date = new Date();
  console.log(date);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          El estado en React -  Hook userState
        </h1>
        <br/>
        <Estado1Component />
        <br />
        <EjercicioComponent yearParam={date.getFullYear()} />
      </header>
    </div>
  );
}

export default App;
