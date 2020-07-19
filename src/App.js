import React from 'react';
import './Jeff.css';
import Homepage from "./components/Homepage-1";
import Homepage2 from "./components/Homepage-2";
import Footer from "./components/Footer-8";
import './Pari.css';
import Gifts from './components/Gifts-2';
import Carousel from './components/Carousel-3';
import Suggestions from './components/Suggestions-4';
import Nurturing from './components/Nurturing-formulations-7';

function App() {
  return (
    <div>
      <Homepage />
      <Homepage2 />
      <Gifts />
      <Carousel />
      <Suggestions />
      <Nurturing />
      <Footer />
    </div>
  );
}

export default App;
