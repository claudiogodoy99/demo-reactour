import React, { useState } from 'react';
import Tour, { ReactourStep } from 'reactour';
import styled from 'styled-components';
import './App.css';
import logo from './logo.svg';
import { Fireworks } from 'fireworks/lib/react'

const Button = styled.button`
    background-color: #282c34;
    color: #61dafb;
    font-size: 18px;
    width: 162px;
    height: 82px;
    border-radius: 2px;
    border: 0px solid;
    transition: width 0.9s;
    outline: 0;
    cursor:pointer;
    &:hover {  
      border: 1px solid #61dafb;
      width: 130px;
    }
`;







function App() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [fire, setFire] = useState(false);

  const steps: ReactourStep[] = [
    {
      selector: 'button',
      content: 'Delicinha de framework',
      position: 'right',
    },
    {
      selector: 'img',
      position: 'top',
      content: 'vai jogando',
    },
  ];

  let fxProps = {
    count: 3,
    interval: 1000,
    colors: ['#61dafb', '#4CAF50', '#81C784'],
    calc: (props:any, i:any) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setIsTourOpen(true)}>
          Tour Me
        </Button>
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => {setIsTourOpen(false); setFire(true) }}
        />
         <img src={logo} className="App-logo" alt="logo" />

        {fire && <Fireworks  {...fxProps} />}
      </header>
    </div>
  );
}

export default App;
