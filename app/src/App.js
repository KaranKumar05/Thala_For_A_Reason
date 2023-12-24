import React, { useRef, useState } from 'react';

// Background Music 
import backgroundMusic from './components/Resources/sound.mp3'
import backgroundMusic2 from './components/Resources/sound.mp3'

// CSS
import './App.css';

// Components 
import Instruction from './components/Instruction/instruction'
import Header from './components/Header/header';
import Card from './components/Card/card';



function App() {
  // States 
  const [inputValue, setInputValue] = useState('');
  const [card, setCard] = useState('');
  const [numCard, setNumCard] = useState(0);
  const [sum, setSum] = useState(0);

  // Ref 
  const audioRefNumber = useRef();
  const audioRefText = useRef();


  // Function to Get Value of Input 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to check the input Value
  const handleButtonClick = () => {
    //If input value is number split the array and adding all the number to check
    const numbers = inputValue.split('').map(Number);
    const totalSum = numbers.reduce((acc, num) => acc + num, 0);
    setSum(totalSum);

    // if length of input is 7
    if (inputValue.length === 7) {
      audioRefText.current.play();
      setCard(inputValue.split('').join('+') + ' = ' + inputValue.length + ' is Thala For A Reason');
    } else {
      setCard("")
      audioRefText.current.pause();
    }

    //If total totalSum if 7
    if (totalSum === 7) {
      audioRefNumber.current.play();

      //Adding all the number of array nd Display
      function sumAndDisplay(arr) {
        const result = arr.reduce((acc, current) => acc + current, 0);
        const expression = arr.join(' + ');
        const inputAddedValue = `${expression} = ${result}`;
        setNumCard(`${inputAddedValue} Thala For A Reason`)
      }
      sumAndDisplay(numbers);
    } else {
      setNumCard("")
      audioRefNumber.current.pause();
    }
  };

  return (
    <div>

      <audio ref={audioRefNumber} src={backgroundMusic} type="audio/mp3" loop />
      <audio ref={audioRefText} src={backgroundMusic2} type="audio/mp3" loop />
      <Instruction />
      <Header
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onButtonClick={handleButtonClick}
      />
      <Card cardData={card} numCard={numCard} cardSum={sum} />
    </div>
  );
}

export default App;
