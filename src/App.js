import React from 'react';
import './App.css';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
      <ParallaxProvider>
      <BrowserRouter>
          <div className="App">
              <Main />
          </div>
      </BrowserRouter>
      </ParallaxProvider>
  );
}

export default App;
