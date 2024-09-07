import './App.css';
import ExCount from './components/ExCount';
import Extxtbox from './components/Extxtbox';
import Exagetest from './components/Exagetest';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <ExCount/>
      <Extxtbox/>
      <Exagetest />
    </div>
  );
}

export default App;
