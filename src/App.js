import logo from './logo.svg';
import './App.css';
import Hamburguer from './components/Hamburger';
import ActionMenu from './components/ActionMenu';
import { Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hamburguer></Hamburguer>
        <ActionMenu></ActionMenu>
        <Router>
          
        </Router>
      </header>
    </div>
  );
}

export default App;
