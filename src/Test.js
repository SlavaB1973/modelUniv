import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function Test() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [flag, setFlag] = useState(true);
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('Set interval');
    const interval = setInterval(() => {
      fetch('/app/time').then(res => res.json()).then(data => {
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

  const getData = () => {
    fetch(`/app/great?name=${name}`).then(res => res.json()).then(d => {
      setData(d);
    });
  }

  return (
     <>
        
        <p style={{color:flag?'red':'white'}}>The current time is {currentTime}.</p>
        <div style={{width:400, height:80, backgroundColor:'red'}}>
          <button onClick={()=>getData()}>Press me to great you</button><input onChange={event => setName(event.target.value)} />

          {data && <div>{data.great}</div>}
        </div>
     </>
  );
}

export default Test;