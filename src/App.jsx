import { useState } from 'react';
import './App.css';

import Navigator from './components/Navigator';
import LoginPage from './pages/LoginPage';





function App() {

  return (
    <section className="App">
      <header>
        <Navigator ></Navigator>
      </header>
    </section>
  );
}

export default App;
