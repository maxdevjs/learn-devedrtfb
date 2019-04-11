import React, {useState} from 'react';
import Tweet from './tweet';

import './App.css';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Hello React</h1>
      <Tweet className={isRed ? "red" : ""} name="What" body="This is a random tweet" nol="32487623764623"/>
      <Tweet className={isRed ? "red" : ""}  name="Why" body="This is NOT a random tweet" nol="0"/>
      <button onClick={increment}>Increment</button>
      <h1 className={isRed ? "red" : ""} >{count}</h1>
    </div>
  );
}

export default App;