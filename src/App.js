import React from 'react';
import './Pari.css';
import Gifts from './components/Gifts-2';
import Carousel from './components/Carousel-3';
import Suggestions from './components/Suggestions-4';
import Nurturing from './components/Nurturing-formulations-7';

function App() {
  return (
    <div className="">
      <header className="">
        <Gifts />
        <Carousel />
        <Suggestions />
        <Nurturing />
      </header>
    </div>
  );
}

export default App;
