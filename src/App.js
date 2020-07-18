import React from 'react';
import './Pari.css';
import Gifts from './components/Gifts-2';
import Carousel from './components/Carousel-3'
import Suggestions from './components/Suggestions-4'

function App() {
  return (
    <div className="">
      <header className="">
        <Gifts />
        <Carousel />
        <Suggestions />
      </header>
    </div>
  );
}

export default App;
