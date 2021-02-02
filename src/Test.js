import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function Test() {
  const [currentTime, setCurrentTime] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log('Set interval');
    const interval = setInterval(() => {
      fetch('/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
        document.title = `${data.time} times`;
      });
      setFlag(prev=>!prev);
    }, 10000);
    return () => {
      console.log('Clear interval');
      clearInterval(interval);
    };
  }, []);



  return (
     <>
        
        <p style={{color:flag?'red':'white'}}>The current time is {currentTime}.</p>
     </>
  );
}

export default Test;